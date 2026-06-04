-- Tabel Utama: Courses (Kelas/Materi)
CREATE TABLE public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR NOT NULL,
    description TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabel Fleksibel: Course Items (Bisa berupa Folder atau File)
CREATE TYPE item_type_enum AS ENUM ('folder', 'video', 'slide', 'infography', 'quiz', 'pdf');

CREATE TABLE public.course_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES public.course_items(id) ON DELETE CASCADE, -- NULL berarti di root
    item_type item_type_enum NOT NULL,
    title VARCHAR NOT NULL,
    content_url TEXT, -- NULL jika tipe 'folder'
    duration VARCHAR,
    is_required BOOLEAN DEFAULT true,
    is_published BOOLEAN DEFAULT true,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Indexing untuk mempercepat query saat mengambil semua anak dari suatu folder
CREATE INDEX idx_course_items_course_id ON public.course_items(course_id);
CREATE INDEX idx_course_items_parent_id ON public.course_items(parent_id);

-- Tabel: User Progress
CREATE TABLE public.user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL, -- Asumsi merujuk ke tabel auth Supabase di masa depan (references auth.users)
    item_id UUID NOT NULL REFERENCES public.course_items(id) ON DELETE CASCADE,
    is_completed BOOLEAN DEFAULT true,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    UNIQUE(user_id, item_id) -- Mencegah duplikasi data progres
);

-- RLS (Row Level Security) Policies 
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Kebijakan akses (sementara dibebaskan untuk kemudahan pengembangan / Vibe Coding)
CREATE POLICY "Enable read access for all users" ON public.courses FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.course_items FOR SELECT USING (true);
CREATE POLICY "Enable insert/select for progress" ON public.user_progress FOR ALL USING (true);
