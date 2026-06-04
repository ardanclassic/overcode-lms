
"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { Settings, Copy, CheckCircle2, ShieldAlert, Key, User, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { AvatarPicker } from "@/components/shared/AvatarPicker";
import { useAuthStore } from "@/store/useAuthStore";

export default function TeacherSettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "class">("profile");

  const [officialPrice, setOfficialPrice] = useState("50000");
  const [enrollmentCode, setEnrollmentCode] = useState("VIBE-ANDY-99");
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Mock teacher ID and initial avatar
  const MOCK_TEACHER_ID = "teacher-77889";
  const [avatarUrl, setAvatarUrl] = useState(`https://api.dicebear.com/7.x/notionists/svg?seed=${MOCK_TEACHER_ID}`);

  const handleCopy = () => {
    navigator.clipboard.writeText(enrollmentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updateUser = useAuthStore((state) => state.updateUser);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    updateUser({ avatar: avatarUrl });
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Pengaturan Akun</h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Kelola profil pengajar dan konfigurasi kelas Anda.
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="flex p-1 bg-slate-100 rounded-xl mb-8 w-fit">
        <button
          onClick={() => setActiveTab("profile")}
          className={cn("flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all", activeTab === "profile" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700")}
        >
          <User size={16} /> Profil Pribadi
        </button>
        <button
          onClick={() => setActiveTab("class")}
          className={cn("flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all", activeTab === "class" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700")}
        >
          <BookOpen size={16} /> Pengaturan Kelas
        </button>
      </div>

      {activeTab === "profile" && (
        <FadeIn>
          <form onSubmit={handleSave} className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <User className="text-primary" /> Foto Profil
            </h2>
            <AvatarPicker 
              currentAvatarUrl={avatarUrl}
              role="teacher"
              userId={MOCK_TEACHER_ID}
              onAvatarChange={setAvatarUrl}
            />

            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b border-slate-100 pb-4 pt-6 mt-6">
              <User className="text-primary" /> Informasi Pengajar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
                <input type="text" defaultValue="Andy Prasetyo" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Jenis Kelamin</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nomor WhatsApp</label>
                <input type="tel" defaultValue="081299887766" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Bio Singkat / Tagline</label>
                <input type="text" placeholder="Cth: Senior Frontend Developer at TechCorp" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                <p className="text-xs text-slate-500">Bio ini akan tampil di profil publik Anda yang dilihat oleh murid.</p>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Link LinkedIn / Portofolio</label>
                <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-blue-600" />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <Button type="submit" variant="primary" className="min-w-[150px] rounded-full">
                {isSaved ? <><CheckCircle2 className="mr-2" /> Tersimpan</> : "Simpan Profil"}
              </Button>
            </div>
          </form>
        </FadeIn>
      )}

      {activeTab === "class" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <FadeIn>
              <form onSubmit={handleSave} className="glass-card p-6 rounded-3xl space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                  <Settings className="text-primary" /> Harga & Pendaftaran
                </h2>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Harga Resmi Kelas (Rp)</label>
                  <input
                    type="number"
                    value={officialPrice}
                    onChange={(e) => setOfficialPrice(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-bold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">
                    Harga ini akan ditampilkan ke publik. Potongan biaya platform (10%) akan dihitung dari angka ini.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <Button type="submit" variant="primary" className="min-w-[150px] rounded-full">
                    {isSaved ? "Tersimpan ✓" : "Simpan Pengaturan"}
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn delay={0.1} className="glass-card p-6 rounded-3xl bg-primary/5 border-primary/20 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-primary">
                <Key size={20} /> Enrollment Code
              </h3>
              <p className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">
                Bagikan kode unik ini kepada murid agar mereka bisa mendaftar dan masuk ke Basecamp Anda.
              </p>

              <div className="bg-white border-2 border-primary/30 p-4 rounded-xl flex flex-col items-center justify-center mb-4 relative overflow-hidden group shadow-sm">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="font-mono text-xl font-black text-slate-800 tracking-wider relative z-10">
                  {enrollmentCode}
                </span>
              </div>

              <Button
                onClick={handleCopy}
                variant={copied ? "primary" : "secondary"}
                className="w-full justify-center gap-2 font-bold"
              >
                {copied ? <><CheckCircle2 size={16} /> Disalin!</> : <><Copy size={16} /> Salin Kode</>}
              </Button>
            </FadeIn>

            <FadeIn delay={0.2} className="glass-card p-5 rounded-3xl bg-amber-50 border-amber-200">
              <h3 className="font-bold text-sm mb-2 flex items-center gap-2 text-amber-700">
                <ShieldAlert size={16} /> Perhatian
              </h3>
              <p className="text-xs text-amber-800/80 leading-relaxed font-medium">
                Pastikan Anda memiliki <strong>Saldo Token</strong> yang cukup sebelum membagikan kode.
                Jika token habis, murid baru tidak akan bisa mendaftar.
              </p>
            </FadeIn>
          </div>
        </div>
      )}
    </div>
  );
}
