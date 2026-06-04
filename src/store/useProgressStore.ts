import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAllContents, getInitialUnlockedContents } from "@/lib/dummyData";

interface ProgressState {
  isEnrolled: boolean;
  setEnrolled: (status: boolean) => void;
  unlockedSessions: string[]; // Menyimpan daftar id yang sudah terbuka
  maxWatchedSeconds: number; // Untuk anti-skip video
  unlockNextSession: (currentId: string) => void;
  updateVideoProgress: (contentId: string, seconds: number) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      isEnrolled: false, // Default belum terdaftar
      setEnrolled: (status: boolean) => set({ isEnrolled: status }),
      unlockedSessions: getInitialUnlockedContents(),
      maxWatchedSeconds: 0,
      
      unlockNextSession: (currentId: string) => set((state) => {
        const all = getAllContents();
        const currentIndex = all.findIndex(c => c.id === currentId);
        
        if (currentIndex === -1) return state; // Konten tidak ditemukan

        const newUnlocked = new Set(state.unlockedSessions);
        
        // Cerdas: Buka kunci berantai hingga menemukan konten Wajib (Required) berikutnya
        for (let i = currentIndex + 1; i < all.length; i++) {
          newUnlocked.add(all[i].id);
          if (all[i].is_required) {
            break; // Stop di konten wajib (Video/Kuis) berikutnya
          }
        }

        return { unlockedSessions: Array.from(newUnlocked) };
      }),
      
      updateVideoProgress: (contentId: string, seconds: number) => set((state) => {
        if (seconds > state.maxWatchedSeconds) {
          return { maxWatchedSeconds: seconds };
        }
        return state;
      })
    }),
    {
      name: "overcode-progress-storage",
    }
  )
);
