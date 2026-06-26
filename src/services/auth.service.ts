import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

export const authService = {
  /**
   * Mendapatkan sesi aktif (browser only)
   */
  async getSession() {
    const supabase = createClient();
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session;
  },

  /**
   * Mendapatkan data user yang sedang login (browser only)
   */
  async getUser(): Promise<User | null> {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) return null;
    return user;
  },

  /**
   * Login menggunakan email & password
   */
  async signIn(email: string, password?: string) {
    const supabase = createClient();
    // Default dummy password for seamless testing if password is not provided
    const pass = password || "Rahasia123!";
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });
    
    if (error) throw error;
    return data;
  },

  /**
   * Daftar akun baru
   */
  async signUp(email: string, password?: string, metadata?: any) {
    const supabase = createClient();
    const pass = password || "Rahasia123!";
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password: pass,
      options: {
        data: metadata, // will be mapped to auth.users raw_user_meta_data
      }
    });
    
    if (error) throw error;
    return data;
  },

  /**
   * Keluar dari aplikasi
   */
  async signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }
};
