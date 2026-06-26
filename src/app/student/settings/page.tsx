
"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { UserCircle, GraduationCap, Phone, CheckCircle2 } from "lucide-react";
import { AvatarPicker } from "@/components/shared/AvatarPicker";
import { useAuthStore } from "@/store/useAuthStore";
import { profileService, UserProfile, StudentDetails } from "@/services/profile.service";

export default function StudentSettingsPage() {
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [eduLevel, setEduLevel] = useState("SMP"); // Mock Default
  const isSchoolAge = ["SD", "SMP", "SMA"].includes(eduLevel);
  const isKid = ["TK", "SD"].includes(eduLevel);
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);
  const initializeAuth = useAuthStore((state) => state.initialize);
  const isAuthLoading = useAuthStore((state) => state.isLoading);

  const [avatarUrl, setAvatarUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "male",
    studentPhone: "",
    schoolName: "",
    schoolGrade: "",
    parentName: "",
    parentPhone: "",
  });

  useEffect(() => {
    if (isAuthLoading) return;
    
    if (!user) {
      setIsLoading(false);
      return;
    }

    async function loadProfile() {
      try {
        const profile = await profileService.getProfile(user!.id);
        const details = await profileService.getStudentDetails(user!.id);
        
        if (profile) {
          setAvatarUrl(profile.avatar_url || `https://api.dicebear.com/7.x/adventurer/svg?seed=${user!.id}`);
          setFormData(prev => ({
            ...prev,
            fullName: profile.full_name || "",
            gender: profile.gender || "male",
            studentPhone: profile.phone || "",
          }));
        }
        
        if (details) {
          setEduLevel(details.education_level || "SMP");
          setFormData(prev => ({
            ...prev,
            schoolName: details.school_name || "",
            schoolGrade: details.school_grade || "",
            parentName: details.parent_name || "",
            parentPhone: details.parent_phone || "",
          }));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProfile();
  }, [user, isAuthLoading]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSaving(true);
    
    try {
      await profileService.updateProfile(user.id, {
        full_name: formData.fullName,
        gender: formData.gender as "male" | "female",
        phone: formData.studentPhone,
        avatar_url: avatarUrl
      });

      await profileService.updateStudentDetails(user.id, {
        education_level: eduLevel,
        school_name: formData.schoolName,
        school_grade: formData.schoolGrade,
        parent_name: formData.parentName,
        parent_phone: formData.parentPhone,
      });

      updateUser({ avatar: avatarUrl, name: formData.fullName });
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan profil.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading || isAuthLoading) {
    return (
      <div className="flex justify-center items-center p-12 min-h-[50vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Memuat Profil...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center p-12 min-h-[50vh]">
        <div className="flex flex-col items-center gap-4 text-center">
          <UserCircle size={48} className="text-slate-300" />
          <h2 className="text-xl font-bold text-slate-700">Profil Tidak Ditemukan</h2>
          <p className="text-slate-500">Anda harus login untuk mengakses halaman ini.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Profil Saya</h1>
        <p className="text-slate-500 mt-1">Kelola informasi pribadi dan data pendidikan Anda.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Avatar Picker */}
        <FadeIn className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b border-slate-100 pb-4 text-slate-800">
            Foto Profil
          </h2>
          <AvatarPicker 
            currentAvatarUrl={avatarUrl}
            role="student"
            userId={user.id}
            onAvatarChange={setAvatarUrl}
          />
        </FadeIn>

        {/* Data Diri Umum */}
        <FadeIn className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b border-slate-100 pb-4 text-slate-800">
            <UserCircle className="text-primary" /> Data Pribadi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
              <input 
                type="text" 
                value={formData.fullName} 
                onChange={e => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Utama</label>
              <input type="email" value={user.email} disabled className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Jenis Kelamin</label>
              <select 
                value={formData.gender}
                onChange={e => setFormData({...formData, gender: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Tujuan Belajar</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                <option>Menambah Skill / Hobi</option>
                <option>Persiapan Karir / Bootcamp</option>
                <option>Tugas Sekolah / Kampus</option>
                <option>Career Switch</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nomor WhatsApp Siswa</label>
              <input 
                type="tel" 
                value={formData.studentPhone} 
                onChange={e => setFormData({...formData, studentPhone: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
              />
            </div>
          </div>
        </FadeIn>

        {/* Data Pendidikan Berbasis Jenjang */}
        <FadeIn delay={0.1} className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b border-slate-100 pb-4 text-slate-800">
            <GraduationCap className="text-primary" /> Informasi Pendidikan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Jenjang Saat Ini</label>
              <select 
                value={eduLevel}
                onChange={(e) => setEduLevel(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold"
              >
                {["TK", "SD", "SMP", "SMA", "Mahasiswa", "Umum"].map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {isSchoolAge && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nama Sekolah</label>
                  <input type="text" placeholder="Cth: SMPN 1 Jakarta" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Kelas Berapa?</label>
                  <input type="text" placeholder="Cth: Kelas 8B" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </>
            )}

            {eduLevel === "Mahasiswa" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nama Kampus</label>
                  <input type="text" placeholder="Cth: Universitas Indonesia" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Program Studi / Jurusan</label>
                  <input type="text" placeholder="Cth: Teknik Informatika" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </>
            )}
            
            {eduLevel === "Umum" && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Instansi / Perusahaan Saat Ini</label>
                <input type="text" placeholder="Cth: PT. Teknologi Bangsa (Opsional)" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
            )}
          </div>
        </FadeIn>

        {/* Data Wali (Jika Anak-anak) */}
        {isKid && (
          <FadeIn delay={0.2} className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 bg-blue-50/50 border-blue-100">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b border-blue-200 pb-4 text-blue-800">
              <Phone className="text-blue-500" /> Kontak Wali / Orang Tua
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900">Nama Orang Tua</label>
                <input type="text" defaultValue="Andi Wijaya" className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900">Nomor WhatsApp Orang Tua</label>
                <input type="tel" defaultValue="081299998888" className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all" />
              </div>
            </div>
          </FadeIn>
        )}

        <div className="flex justify-end pt-4">
          <Button type="submit" variant="primary" size="lg" className="px-10 rounded-full shadow-lg">
            {isSaved ? <><CheckCircle2 className="mr-2" /> Disimpan</> : "Simpan Profil"}
          </Button>
        </div>
      </form>
    </div>
  );
}
