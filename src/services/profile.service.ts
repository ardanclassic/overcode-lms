import { createClient } from "@/lib/supabase/client";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'teacher' | 'student';
  gender?: 'male' | 'female';
  avatar_url?: string;
  bio?: string;
  portfolio_url?: string;
  phone?: string;
  token_balance?: number;
}

export interface StudentDetails {
  id: string;
  batch?: string;
  education_level?: string;
  school_name?: string;
  school_grade?: string;
  parent_name?: string;
  parent_phone?: string;
  student_phone?: string;
  student_status?: string;
}

export const profileService = {
  /**
   * Mengambil profile berdasarkan user ID
   */
  async getProfile(userId: string): Promise<UserProfile | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
      
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  /**
   * Memperbarui profile user
   */
  async updateProfile(userId: string, data: Partial<UserProfile>) {
    const supabase = createClient();
    const { data: updatedData, error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', userId)
      .select()
      .single();
      
    if (error) throw error;
    return updatedData;
  },

  /**
   * Mengambil student details (khusus untuk role student)
   */
  async getStudentDetails(userId: string): Promise<StudentDetails | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('student_details')
      .select('*')
      .eq('id', userId)
      .single();
      
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  /**
   * Memperbarui student details
   */
  async updateStudentDetails(userId: string, data: Partial<StudentDetails>) {
    const supabase = createClient();
    const { data: updatedData, error } = await supabase
      .from('student_details')
      .upsert({ id: userId, ...data }) // upsert in case it doesn't exist yet
      .select()
      .single();
      
    if (error) throw error;
    return updatedData;
  }
};
