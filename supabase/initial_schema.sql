-- OverCode: Initial Supabase SQL Schema
-- Auto-generated during development

-- 1. DROP IF EXISTS (To allow clean resets)
-- Drop function (CASCADE handles its usages in triggers)
DROP FUNCTION IF EXISTS update_modified_column() CASCADE;

-- Drop tables (CASCADE automatically drops associated triggers and indexes)

-- Drop tables
DROP TABLE IF EXISTS vouchers CASCADE;
DROP TABLE IF EXISTS top_up_requests CASCADE;
DROP TABLE IF EXISTS teacher_invitations CASCADE;
DROP TABLE IF EXISTS user_study_fields CASCADE;
DROP TABLE IF EXISTS live_attendance CASCADE;
DROP TABLE IF EXISTS live_sessions CASCADE;
DROP TABLE IF EXISTS student_progress CASCADE;
DROP TABLE IF EXISTS course_enrollments CASCADE;
DROP TABLE IF EXISTS course_items CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS study_fields CASCADE;
DROP TABLE IF EXISTS student_details CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;
DROP TABLE IF EXISTS teacher_notes CASCADE;

-- Drop types
DROP TYPE IF EXISTS user_role CASCADE;
DROP TYPE IF EXISTS user_gender CASCADE;
DROP TYPE IF EXISTS top_up_status CASCADE;
DROP TYPE IF EXISTS item_type CASCADE;
DROP TYPE IF EXISTS progress_status CASCADE;
DROP TYPE IF EXISTS final_project_status_enum CASCADE;
DROP TYPE IF EXISTS session_status CASCADE;
DROP TYPE IF EXISTS attendance_status CASCADE;

-- 2. CREATE ENUM TYPES
CREATE TYPE user_role AS ENUM ('admin', 'teacher', 'student');
CREATE TYPE user_gender AS ENUM ('male', 'female');
CREATE TYPE top_up_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE item_type AS ENUM ('folder', 'video', 'pdf', 'slide', 'infography', 'quiz');
CREATE TYPE progress_status AS ENUM ('in_progress', 'completed');
CREATE TYPE final_project_status_enum AS ENUM ('belum_mulai', 'pengerjaan', 'perlu_review', 'lulus');
CREATE TYPE session_status AS ENUM ('scheduled', 'ongoing', 'ended');
CREATE TYPE attendance_status AS ENUM ('pending', 'present', 'absent');

-- 3. CREATE TABLES

-- Table: profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'student',
  gender user_gender,
  avatar_url TEXT,
  bio TEXT,
  portfolio_url TEXT,
  phone VARCHAR,
  token_balance INTEGER DEFAULT 0, -- Saldo Prabayar Guru (Sistem Kuota Kursi)
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: student_details (1:1 with profiles)
CREATE TABLE student_details (
  id UUID REFERENCES profiles(id) ON DELETE CASCADE PRIMARY KEY,
  batch TEXT,
  education_level VARCHAR, -- TK, SD, SMP, SMA, Mahasiswa, Umum
  school_name VARCHAR,
  school_grade VARCHAR,
  parent_name VARCHAR,
  parent_phone VARCHAR,
  student_phone VARCHAR,
  student_status TEXT DEFAULT 'active',
  final_project_status final_project_status_enum DEFAULT 'belum_mulai',
  final_project_url TEXT,
  final_project_score INTEGER CHECK (final_project_score >= 0 AND final_project_score <= 100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: study_fields (Bidang Studi)
CREATE TABLE study_fields (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: user_study_fields (Enrollment / Penugasan Guru)
CREATE TABLE user_study_fields (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  study_field_id UUID REFERENCES study_fields(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, study_field_id)
);

-- Table: teacher_invitations (Sistem Token Mandiri)
CREATE TABLE teacher_invitations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token UUID NOT NULL DEFAULT gen_random_uuid(),
  study_field_id UUID REFERENCES study_fields(id) ON DELETE CASCADE,
  is_used BOOLEAN DEFAULT false,
  used_by UUID REFERENCES profiles(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '7 days'),
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: courses (Kelas/Materi Utama)
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  study_field_id UUID REFERENCES study_fields(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE,
  description TEXT,
  enrollment_code VARCHAR UNIQUE, -- Kode rahasia untuk murid join basecamp
  official_price INTEGER DEFAULT 0, -- Harga resmi kelas untuk perhitungan komisi 10%
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: course_enrollments (Pendaftaran Siswa ke Basecamp Guru)
CREATE TABLE course_enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(student_id, course_id)
);

-- Table: course_items (Material Tree / Modul Materi)
CREATE TABLE course_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL,
  slug VARCHAR,
  item_type item_type NOT NULL,
  parent_id UUID REFERENCES course_items(id) ON DELETE CASCADE,
  content_url JSONB, -- Can hold string or array of URLs (e.g. for slides)
  duration VARCHAR,
  is_required BOOLEAN NOT NULL DEFAULT FALSE,
  is_published BOOLEAN DEFAULT true,
  order_index INTEGER NOT NULL DEFAULT 0,
  teaching_notes TEXT, -- Untuk Antisipasi Eror guru
  learning_objectives JSONB, -- Array string untuk target pembelajaran
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexing for materials fetching performance
CREATE INDEX idx_course_items_course_id ON course_items(course_id);
CREATE INDEX idx_course_items_parent_id ON course_items(parent_id);

-- Table: student_progress
CREATE TABLE student_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  item_id UUID REFERENCES course_items(id) ON DELETE CASCADE NOT NULL,
  status progress_status NOT NULL DEFAULT 'in_progress',
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(student_id, item_id)
);

-- Table: live_sessions
CREATE TABLE live_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_item_id UUID REFERENCES course_items(id) ON DELETE CASCADE,
  batch TEXT NOT NULL,
  status session_status NOT NULL DEFAULT 'scheduled',
  started_at TIMESTAMPTZ,
  duration_minutes INTEGER DEFAULT 90,
  meeting_url TEXT, -- Link eksternal untuk Live Class (Zoom/Gmeet)
  objectives_state JSONB, -- Status checklist Target Pembelajaran per sesi
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: live_attendance
CREATE TABLE live_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES live_sessions(id) ON DELETE CASCADE NOT NULL,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  status attendance_status NOT NULL DEFAULT 'pending',
  verified_at TIMESTAMPTZ, -- Waktu "Verify Attendance" ditekan
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(session_id, student_id)
);


-- Table: top_up_requests
CREATE TABLE top_up_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL CHECK (amount > 0),
  status top_up_status NOT NULL DEFAULT 'pending',
  voucher_code VARCHAR,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: vouchers
CREATE TABLE vouchers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR NOT NULL UNIQUE,
  bonus_percentage INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  expires_at TIMESTAMPTZ,
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table: teacher_notes (Teaching Playbook)
CREATE TABLE teacher_notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  course_item_id UUID REFERENCES course_items(id) ON DELETE CASCADE,
  preparation_checklist JSONB,
  talking_points TEXT,
  private_scratchpad TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(teacher_id, course_item_id)
);

-- 4. CREATE TRIGGER FUNCTION FOR updated_at
CREATE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach triggers to all tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_student_details_updated_at BEFORE UPDATE ON student_details FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_study_fields_updated_at BEFORE UPDATE ON study_fields FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_course_items_updated_at BEFORE UPDATE ON course_items FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_student_progress_updated_at BEFORE UPDATE ON student_progress FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_live_sessions_updated_at BEFORE UPDATE ON live_sessions FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_live_attendance_updated_at BEFORE UPDATE ON live_attendance FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_top_up_requests_updated_at BEFORE UPDATE ON top_up_requests FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_teacher_notes_updated_at BEFORE UPDATE ON teacher_notes FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- 5. ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_study_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE top_up_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE vouchers ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_notes ENABLE ROW LEVEL SECURITY;

-- 6. RLS POLICIES & HELPER FUNCTIONS

-- Helper functions to prevent infinite recursion in RLS by using JWT claims
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin';
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION public.is_teacher_or_admin()
RETURNS BOOLEAN AS $$
  SELECT (auth.jwt() -> 'user_metadata' ->> 'role') IN ('admin', 'teacher');
$$ LANGUAGE sql STABLE;

-- profiles
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Teachers and admins can view all profiles" ON profiles FOR SELECT USING (public.is_teacher_or_admin());
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can update all profiles" ON profiles FOR UPDATE USING (public.is_admin());

-- student_details
CREATE POLICY "Students can view own details" ON student_details FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Students can insert own details" ON student_details FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Teachers and Admins view all student details" ON student_details FOR SELECT USING (public.is_teacher_or_admin());
CREATE POLICY "Teachers and Admins update all student details" ON student_details FOR UPDATE USING (public.is_teacher_or_admin());

-- study_fields
CREATE POLICY "Everyone can read study fields" ON study_fields FOR SELECT USING (true);
CREATE POLICY "Only admins manage study fields" ON study_fields FOR ALL USING (public.is_admin());

-- user_study_fields
CREATE POLICY "Users view own study fields" ON user_study_fields FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins manage user study fields" ON user_study_fields FOR ALL USING (public.is_admin());

-- teacher_invitations
CREATE POLICY "Anyone can read valid invitations" ON teacher_invitations FOR SELECT USING (is_used = false AND expires_at > NOW());
CREATE POLICY "Admins manage invitations" ON teacher_invitations FOR ALL USING (public.is_admin());

-- courses
CREATE POLICY "Everyone can read published courses" ON courses FOR SELECT USING (is_published = true OR public.is_admin() OR owner_id = auth.uid());
CREATE POLICY "Teachers can manage own courses" ON courses FOR ALL USING (owner_id = auth.uid() OR public.is_admin());

-- course_enrollments
CREATE POLICY "Students can view own enrollments" ON course_enrollments FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students can insert own enrollments" ON course_enrollments FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "Teachers view enrollments for own courses" ON course_enrollments FOR SELECT USING (EXISTS (SELECT 1 FROM courses c WHERE c.id = course_id AND c.owner_id = auth.uid()) OR public.is_admin());

-- course_items
CREATE POLICY "Everyone can read published course items" ON course_items FOR SELECT USING (is_published = true OR public.is_teacher_or_admin());
CREATE POLICY "Teachers and admins can manage course items" ON course_items FOR ALL USING (public.is_teacher_or_admin());

-- student_progress
CREATE POLICY "Students can view own progress" ON student_progress FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students can insert own progress" ON student_progress FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "Students can update own progress" ON student_progress FOR UPDATE USING (auth.uid() = student_id);
CREATE POLICY "Teachers and admins can view all progress" ON student_progress FOR SELECT USING (public.is_teacher_or_admin());
CREATE POLICY "Teachers and admins can update all progress" ON student_progress FOR UPDATE USING (public.is_teacher_or_admin());

-- live_sessions
CREATE POLICY "Students can view live sessions" ON live_sessions FOR SELECT USING (true);
CREATE POLICY "Teachers and admins manage live sessions" ON live_sessions FOR ALL USING (public.is_teacher_or_admin());

-- live_attendance
CREATE POLICY "Students can view own attendance" ON live_attendance FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Teachers and admins manage live attendance" ON live_attendance FOR ALL USING (public.is_teacher_or_admin());

-- top_up_requests
CREATE POLICY "Teachers can insert own top-ups" ON top_up_requests FOR INSERT WITH CHECK (auth.uid() = teacher_id);
CREATE POLICY "Teachers can view own top-ups" ON top_up_requests FOR SELECT USING (auth.uid() = teacher_id);
CREATE POLICY "Admins manage all top-ups" ON top_up_requests FOR ALL USING (public.is_admin());

-- vouchers
CREATE POLICY "Anyone can view active vouchers" ON vouchers FOR SELECT USING (is_active = true AND (expires_at IS NULL OR expires_at > NOW()));
CREATE POLICY "Admins manage all vouchers" ON vouchers FOR ALL USING (public.is_admin());

-- teacher_notes
CREATE POLICY "Teachers manage own notes" ON teacher_notes FOR ALL USING (auth.uid() = teacher_id);

-- 6. AUTOMATED TRIGGERS FOR PROFILES & STUDENT DETAILS

-- Function to automatically create a profile and student details when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  v_role public.user_role;
  v_gender public.user_gender;
BEGIN
  -- Safe extraction and casting for role
  BEGIN
    v_role := CAST(new.raw_user_meta_data->>'role' AS public.user_role);
  EXCEPTION WHEN OTHERS THEN
    v_role := 'student'::public.user_role;
  END;

  IF v_role IS NULL THEN
    v_role := 'student'::public.user_role;
  END IF;

  -- Safe extraction and casting for gender
  BEGIN
    IF new.raw_user_meta_data->>'gender' IS NOT NULL AND new.raw_user_meta_data->>'gender' != '' THEN
      v_gender := CAST(new.raw_user_meta_data->>'gender' AS public.user_gender);
    ELSE
      v_gender := NULL;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    v_gender := NULL;
  END;

  -- 1. Create public.profiles record
  INSERT INTO public.profiles (
    id, 
    email, 
    full_name, 
    role,
    gender,
    phone,
    portfolio_url,
    avatar_url
  )
  VALUES (
    new.id, 
    COALESCE(new.email, ''),
    COALESCE(new.raw_user_meta_data->>'full_name', 'User'),
    v_role,
    v_gender,
    new.raw_user_meta_data->>'phone',
    new.raw_user_meta_data->>'portfolio_url',
    'https://api.dicebear.com/7.x/adventurer/svg?seed=' || new.id
  );
  
  -- 2. If role is student, also create student_details
  IF v_role = 'student'::public.user_role THEN
    INSERT INTO public.student_details (
      id, 
      education_level, 
      parent_name, 
      parent_phone, 
      student_phone
    )
    VALUES (
      new.id,
      new.raw_user_meta_data->>'education_level',
      new.raw_user_meta_data->>'parent_name',
      new.raw_user_meta_data->>'parent_phone',
      new.raw_user_meta_data->>'student_phone'
    );
  END IF;

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to execute the function on auth.users INSERT
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
