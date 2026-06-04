"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { Search, ShieldCheck, KeySquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useProgressStore } from "@/store/useProgressStore";

export default function StudentEnrollPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [courseFound, setCourseFound] = useState<any>(null);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const { setEnrolled } = useProgressStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    
    setIsSearching(true);
    // Simulate API search
    setTimeout(() => {
      setCourseFound({
        title: "Vibe Coding - Full Stack Web",
        teacher: "Andy Santoso",
        officialPrice: "50.000",
        studentsCount: 24,
      });
      setIsSearching(false);
    }, 800);
  };

  const handleEnroll = () => {
    setIsEnrolling(true);
    setTimeout(() => {
      setEnrolled(true);
      router.push("/student");
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <FadeIn className="text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12">
            <KeySquare size={32} className="-rotate-12" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Bergabung ke Kelas</h2>
          <p className="mt-3 text-slate-500 text-sm">
            Masukkan Enrollment Code yang diberikan oleh guru Anda untuk membuka kunci materi.
          </p>
        </FadeIn>

        {!courseFound ? (
          <FadeIn delay={0.1}>
            <form onSubmit={handleSearch} className="mt-8 space-y-6 glass-card p-6 rounded-3xl shadow-xl shadow-slate-200/50">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Enrollment Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="Contoh: VIBE-ANDY-99"
                    className="w-full pl-4 pr-12 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg font-mono font-bold text-slate-800 placeholder:text-slate-300 placeholder:font-sans placeholder:font-medium outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all uppercase"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                    <Search size={20} />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4 text-base shadow-lg shadow-primary/20"
                disabled={isSearching}
              >
                {isSearching ? "Mencari Kelas..." : "Cari Kelas"}
              </Button>
            </form>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1} className="mt-8 space-y-6">
            <div className="glass-card p-6 rounded-3xl shadow-xl shadow-slate-200/50 space-y-6">
              <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} /> Kelas Ditemukan
                </span>
                <h3 className="text-2xl font-bold text-slate-800">{courseFound.title}</h3>
                <p className="text-slate-500 font-medium">Pengajar: <span className="text-slate-800">{courseFound.teacher}</span></p>
              </div>

              {/* Transparansi Harga Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <div className="flex gap-3">
                  <div className="shrink-0 mt-0.5">
                    <ShieldCheck size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-800 mb-1">Informasi Harga Resmi</h4>
                    <p className="text-xs text-blue-700/90 leading-relaxed font-medium">
                      Sebagai informasi, harga resmi kelas ini sesuai dengan pengaturan sistem adalah <strong className="text-blue-900 bg-blue-200/50 px-1 rounded">Rp {courseFound.officialPrice}</strong>. Pastikan nominal yang Anda bayarkan kepada pengajar sesuai dengan harga yang tertera.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleEnroll}
                variant="primary"
                className="w-full py-4 text-base shadow-lg shadow-primary/20"
                disabled={isEnrolling}
              >
                {isEnrolling ? "Membuka Kunci..." : "Konfirmasi & Masuk Kelas"}
              </Button>
              <Button
                onClick={() => setCourseFound(null)}
                variant="ghost"
                className="w-full"
                disabled={isEnrolling}
              >
                Batal
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
