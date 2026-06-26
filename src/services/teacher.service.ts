import { createClient } from '@/lib/supabase/client';

export const teacherService = {
  async getDashboardData(teacherId: string) {
    const supabase = createClient();
    
    // 1. Get Tokens from Profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('token_balance')
      .eq('id', teacherId)
      .single();
      
    if (profileError) throw profileError;
    const tokens = profile?.token_balance || 0;

    // 2. Get Targets (Learning Objectives of their active course's next session)
    // For now, since course structure might be complex, we'll fetch course_items belonging to their courses
    // and extract learning_objectives from the first item as a mockup of real DB data.
    const { data: courses } = await supabase
      .from('courses')
      .select('id, title')
      .eq('owner_id', teacherId)
      .limit(1);

    let targets: any[] = [];
    let roster: any[] = [];
    let courseName = "Belum Ada Kelas Aktif";

    if (courses && courses.length > 0) {
      courseName = courses[0].title;
      
      const { data: items } = await supabase
        .from('course_items')
        .select('id, learning_objectives')
        .eq('course_id', courses[0].id)
        .limit(1);
        
      if (items && items.length > 0 && items[0].learning_objectives) {
        // learning_objectives is stored as JSONB array of strings
        const objArray = items[0].learning_objectives as string[];
        targets = objArray.map((text, idx) => ({
          id: idx + 1,
          text,
          done: false // In reality this comes from live_sessions.objectives_state
        }));
      }

      // 3. Get Roster (Enrolled students)
      const { data: enrollments } = await supabase
        .from('course_enrollments')
        .select(`
          student_id,
          profiles:student_id (full_name)
        `)
        .eq('course_id', courses[0].id);

      if (enrollments) {
        roster = enrollments.map((e: any, idx: number) => ({
          id: `S${idx + 1}`,
          realId: e.student_id,
          name: e.profiles?.full_name || 'Siswa',
          progress: 0, // Mock progress for now until student_progress is populated
          status: 'locked'
        }));
      }
    }

    return {
      tokens,
      targets,
      roster,
      courseName
    };
  },

  async createTopUpRequest(teacherId: string, amount: number, voucherCode?: string) {
    const supabase = createClient();
    const payload: any = {
      teacher_id: teacherId,
      amount,
      status: 'pending'
    };
    if (voucherCode) {
      payload.voucher_code = voucherCode;
    }
    
    const { data, error } = await supabase
      .from('top_up_requests')
      .insert(payload)
      .select()
      .single();
      
    if (error) throw error;
    return data;
  },

  async getStudents(teacherId: string) {
    const supabase = createClient();
    
    // First get the teacher's active course
    const { data: courses } = await supabase
      .from('courses')
      .select('id')
      .eq('owner_id', teacherId)
      .limit(1);
      
    if (!courses || courses.length === 0) return [];
    
    // Fetch enrolled students
    const { data: enrollments, error } = await supabase
      .from('course_enrollments')
      .select(`
        student_id,
        profiles:student_id (full_name, avatar_url),
        student_details:student_id (batch, final_project_status, final_project_score, student_phone, updated_at)
      `)
      .eq('course_id', courses[0].id);

    if (error) throw error;
    
    // Map to the expected UI format
    return (enrollments || []).map((e: any) => {
      const p = e.profiles || {};
      const d = e.student_details || {};
      
      let fpStatus = "not_started";
      if (d.final_project_status === "lulus") fpStatus = "passed";
      else if (d.final_project_status === "perlu_review") fpStatus = "review";
      else if (d.final_project_status === "pengerjaan") fpStatus = "working";

      return {
        id: e.student_id,
        name: p.full_name || 'Siswa',
        avatar: p.avatar_url || (p.full_name ? p.full_name.substring(0, 2).toUpperCase() : 'SW'),
        batch: d.batch || '-',
        age: 0, // Age not collected currently
        progress: 0, // Mock for now until course completion is tracked
        fpStatus,
        lastActive: "Baru saja", // Mock
        score: d.final_project_score || null,
        phone: d.student_phone || undefined,
      };
    });
  }
};
