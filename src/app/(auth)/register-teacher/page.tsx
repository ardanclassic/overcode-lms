"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { BookOpen, AlertCircle } from "lucide-react";
import { authService } from "@/services/auth.service";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

function RegisterTeacherForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    portfolio: "",
    password: ""
  });
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsRegistering(true);
    setErrorMsg("");
    
    try {
      await authService.signUp(formData.email, formData.password, {
        full_name: formData.fullName,
        role: "teacher",
        gender: formData.gender,
        phone: formData.phone,
        portfolio_url: formData.portfolio || null,
      });

      window.location.href = "/onboarding?role=teacher";
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Terjadi kesalahan saat pendaftaran");
      setIsRegistering(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <FadeIn className="text-center p-8 bg-white rounded-3xl shadow-xl max-w-md w-full border border-slate-100">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Akses Ditolak</h1>
        <p className="text-slate-500 mb-6">
          Halaman ini khusus untuk pendaftaran pengajar melalui jalur undangan resmi. Token tidak ditemukan di URL.
        </p>
        <Button variant="ghost" className="w-full" onClick={() => router.push("/")}>
          Kembali ke Beranda
        </Button>
      </FadeIn>
    );
  }

  return (
    <>
      <LoadingOverlay isVisible={isRegistering} message="Menyiapkan ruang kerjamu..." />
      <FadeIn className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-slate-100">
        <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen size={32} />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Registrasi Pengajar</h1>
        <p className="text-slate-500 text-sm mt-2">
          Selamat! Anda telah diundang untuk bergabung sebagai pengajar di platform kami.
        </p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        {errorMsg && (
          <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
            {errorMsg}
          </div>
        )}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
          <input 
            type="text" 
            required
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="Cth: Budi Santoso"
          />
        </div>
        
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Jenis Kelamin</label>
          <select 
            required
            value={formData.gender}
            onChange={(e) => setFormData({...formData, gender: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none bg-white"
          >
            <option value="" disabled>Pilih Jenis Kelamin</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="budi@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Nomor WhatsApp</label>
          <input 
            type="tel" 
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="081234567890"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Link LinkedIn / Portofolio</label>
          <input 
            type="url" 
            required
            value={formData.portfolio}
            onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Password</label>
          <input 
            type="password" 
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="Minimal 8 karakter"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading ? "Memproses..." : "Daftar sebagai Pengajar"}
        </Button>
      </form>
    </FadeIn>
    </>
  );
}

export default function RegisterTeacherPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Suspense fallback={<div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>}>
        <RegisterTeacherForm />
      </Suspense>
    </div>
  );
}
