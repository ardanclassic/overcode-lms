import { create } from "zustand";
import { createClient } from "@/lib/supabase/client";
import { profileService } from "@/services/profile.service";

type Role = "admin" | "teacher" | "student" | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  initialize: () => Promise<void>;
  login: (user: User) => void;
  logout: () => Promise<void>;
  updateUser: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  initialize: async () => {
    console.log("[AuthStore] initializing...");
    try {
      const supabase = createClient();

      // Step 1: Securely get session
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("[AuthStore] Session error:", sessionError);
        set({ user: null, isAuthenticated: false, isLoading: false });
        return;
      }

      if (!session?.user) {
        console.log("[AuthStore] No active session found.");
        set({ user: null, isAuthenticated: false, isLoading: false });
        return;
      }

      // Step 2: Attempt to get profile
      console.log("[AuthStore] Session found, fetching profile...");
      let profile = null;
      try {
        profile = await profileService.getProfile(session.user.id);
      } catch (err) {
        console.warn("[AuthStore] Profile fetch failed, using fallback user data:", err);
      }

      // Step 3: Populate store
      // Even if profile is null, we STILL log the user in using their JWT metadata to avoid blocking the app!
      const userObj: User = {
        id: session.user.id,
        name:
          profile?.full_name || session.user.user_metadata?.full_name || session.user.email?.split("@")[0] || "User",
        email: session.user.email || "",
        role: profile?.role || session.user.user_metadata?.role || "student",
        avatar: profile?.avatar_url || "",
      };

      set({
        user: userObj,
        isAuthenticated: true,
        isLoading: false,
      });

      console.log("[AuthStore] User fully loaded:", userObj);

      // Step 4: Attach a lightweight listener JUST to handle external sign-outs (e.g., from other tabs)
      supabase.auth.onAuthStateChange((event: any) => {
        if (event === "SIGNED_OUT") {
          set({ user: null, isAuthenticated: false });
        }
      });
    } catch (e) {
      console.error("[AuthStore] Critical initialization error:", e);
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  login: (user) => {
    set({ user, isAuthenticated: true, isLoading: false });
  },

  logout: async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } finally {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  updateUser: (data) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    }));
  },
}));
