import { createClient } from "@/lib/supabase/client";

export interface TeacherNotes {
  id?: string;
  teacher_id: string;
  course_item_id: string;
  preparation_checklist: { id: string; text: string; checked: boolean }[];
  talking_points: string;
  private_scratchpad: string;
}

export const playbookService = {
  /**
   * Mengambil teacher notes untuk suatu materi
   */
  async getTeacherNotes(teacherId: string, courseItemId: string): Promise<TeacherNotes | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('teacher_notes')
      .select('*')
      .eq('teacher_id', teacherId)
      .eq('course_item_id', courseItemId)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // Not found is okay
    return data;
  },

  /**
   * Menyimpan / Update teacher notes
   */
  async upsertTeacherNotes(notes: TeacherNotes) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('teacher_notes')
      .upsert({
        teacher_id: notes.teacher_id,
        course_item_id: notes.course_item_id,
        preparation_checklist: notes.preparation_checklist,
        talking_points: notes.talking_points,
        private_scratchpad: notes.private_scratchpad,
      }, { onConflict: 'teacher_id, course_item_id' })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};
