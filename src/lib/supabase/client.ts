import { createClient } from "@supabase/supabase-js";

// Mengambil environment variables untuk inisialisasi Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Supabase client stub, siap digunakan saat API keys diisi di .env.local
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
