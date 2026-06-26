import { createClient } from "@/lib/supabase/client";

export interface LiveSession {
  id: string;
  course_item_id: string | null;
  batch: string;
  status: 'scheduled' | 'ongoing' | 'ended';
  started_at: string | null;
  duration_minutes: number;
  meeting_url: string | null;
  objectives_state: Record<string, boolean>;
}

export const scheduleService = {
  /**
   * Mengambil semua jadwal sesi live berdasarkan list course_item_id
   */
  async getLiveSessions(courseItemIds?: string[]): Promise<LiveSession[]> {
    const supabase = createClient();
    let query = supabase
      .from('live_sessions')
      .select('*')
      .order('started_at', { ascending: true });
      
    if (courseItemIds && courseItemIds.length > 0) {
      query = query.in('course_item_id', courseItemIds);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data;
  },

  /**
   * Mengupdate status sesi (mulai, akhiri)
   */
  async updateSessionStatus(sessionId: string, status: 'scheduled' | 'ongoing' | 'ended', objectivesState?: Record<string, boolean>) {
    const supabase = createClient();
    const updateData: Partial<LiveSession> = { status };
    if (objectivesState) {
      updateData.objectives_state = objectivesState;
    }

    const { data, error } = await supabase
      .from('live_sessions')
      .update(updateData)
      .eq('id', sessionId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};
