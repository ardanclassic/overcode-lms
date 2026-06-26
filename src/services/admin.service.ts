import { createClient } from '@/lib/supabase/client';

export const adminService = {
  // 1. GLOBAL STATS
  async getGlobalStats() {
    const supabase = createClient();
    
    // Total Revenue (From approved top-ups assuming 1 token = Rp 10.000)
    // Actually, we'll just sum the 'amount' field of approved top_up_requests
    const { data: topUps } = await supabase
      .from('top_up_requests')
      .select('amount')
      .eq('status', 'approved');
      
    // Assuming amount is in Rupiah or Tokens. Let's say amount is in tokens, and 1 token = Rp 10.000
    // Wait, the schema says: amount INTEGER NOT NULL CHECK (amount > 0)
    // In teacher dashboard, Top-up Amount is "Jumlah Token (Rp 10.000 / Token)".
    // So amount = number of tokens. Revenue = sum(amount) * 10000.
    const totalTokens = topUps?.reduce((acc: number, curr: any) => acc + curr.amount, 0) || 0;
    const totalRevenue = totalTokens * 10000;

    // Active Students (role = student, student_status = active)
    const { count: activeStudents } = await supabase
      .from('student_details')
      .select('*', { count: 'exact', head: true })
      .eq('student_status', 'active');

    // Active Classes (is_published = true)
    const { count: activeClasses } = await supabase
      .from('courses')
      .select('*', { count: 'exact', head: true })
      .eq('is_published', true);

    // Study Fields
    const { count: totalFields } = await supabase
      .from('study_fields')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true);

    return {
      totalRevenue,
      activeStudents: activeStudents || 0,
      activeClasses: activeClasses || 0,
      totalFields: totalFields || 0
    };
  },

  // 2. STUDY FIELDS
  async getStudyFields() {
    const supabase = createClient();
    // In a real complex app we'd use a SQL View or RPC for aggregations.
    // For now, we'll fetch study fields and calculate counts via separate queries if needed,
    // OR we can fetch relations if foreign keys are set up.
    // user_study_fields has study_field_id. We can get teachers.
    // courses has study_field_id. course_enrollments has course_id.
    
    const { data: fields, error } = await supabase
      .from('study_fields')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Fetch counts manually for now
    const enrichedFields = await Promise.all(fields.map(async (field: any) => {
      const { count: teachersCount } = await supabase
        .from('user_study_fields')
        .select('*', { count: 'exact', head: true })
        .eq('study_field_id', field.id);

      const { data: courses } = await supabase
        .from('courses')
        .select('id')
        .eq('study_field_id', field.id);
        
      let studentsCount = 0;
      if (courses && courses.length > 0) {
        const courseIds = courses.map((c: any) => c.id);
        const { count } = await supabase
          .from('course_enrollments')
          .select('*', { count: 'exact', head: true })
          .in('course_id', courseIds);
        studentsCount = count || 0;
      }

      return {
        ...field,
        teachersCount: teachersCount || 0,
        studentsCount
      };
    }));

    return enrichedFields;
  },

  async createStudyField(title: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('study_fields')
      .insert({ title })
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // 3. TOP-UP REQUESTS
  async getTopUpRequests() {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('top_up_requests')
      .select(`
        id,
        amount,
        status,
        created_at,
        teacher_id,
        profiles:teacher_id (full_name)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    return data.map((d: any) => ({
      id: d.id,
      teacher: d.profiles?.full_name || 'Unknown Teacher',
      date: new Date(d.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      nominal: `Rp ${(d.amount * 10000).toLocaleString('id-ID')}`,
      token: `+${d.amount} Token`,
      status: d.status === 'pending' ? 'Pending' : d.status === 'approved' ? 'Approved' : 'Rejected'
    }));
  },

  async updateTopUpStatus(id: string, status: 'approved' | 'rejected') {
    const supabase = createClient();
    
    // Standard approach: We update the status.
    // If approved, we also need to add tokens to the teacher's profile.
    // This is best done via an RPC/Trigger in Supabase to be safe, but we can do it client-side if Admin has RLS bypass.
    
    const { data: request, error: fetchError } = await supabase
      .from('top_up_requests')
      .select('amount, teacher_id, status')
      .eq('id', id)
      .single();
      
    if (fetchError) throw fetchError;
    if (request.status !== 'pending') throw new Error('Request already processed');

    const { error: updateError } = await supabase
      .from('top_up_requests')
      .update({ status })
      .eq('id', id);

    if (updateError) throw updateError;

    if (status === 'approved') {
      // Get current balance
      const { data: profile } = await supabase.from('profiles').select('token_balance').eq('id', request.teacher_id).single();
      const newBalance = (profile?.token_balance || 0) + request.amount;
      
      await supabase
        .from('profiles')
        .update({ token_balance: newBalance })
        .eq('id', request.teacher_id);
    }
  },

  // 4. VOUCHERS
  async getVouchers() {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('vouchers')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  async createVoucher(code: string, bonus_percentage: number) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('vouchers')
      .insert({ code: code.toUpperCase(), bonus_percentage })
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  
  async deactivateVoucher(id: string) {
    const supabase = createClient();
    const { error } = await supabase
      .from('vouchers')
      .update({ is_active: false })
      .eq('id', id);
    if (error) throw error;
  },

  // 5. STUDENTS
  async getStudents() {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select(`
        id,
        full_name,
        email,
        created_at,
        student_details (student_status)
      `)
      .eq('role', 'student')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Fetch active classes count
    const enrichedStudents = await Promise.all(data.map(async (student: any) => {
      const { count } = await supabase
        .from('course_enrollments')
        .select('*', { count: 'exact', head: true })
        .eq('student_id', student.id);

      return {
        id: student.id,
        name: student.full_name,
        email: student.email,
        joined: new Date(student.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
        activeClasses: count || 0,
        status: student.student_details?.[0]?.student_status === 'suspended' ? 'Suspended' : 'Active'
      };
    }));

    return enrichedStudents;
  }
};
