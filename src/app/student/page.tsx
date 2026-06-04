"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { BookOpen, Search, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useProgressStore } from "@/store/useProgressStore";

export default function StudentDashboard() {
  const isEnrolled = useProgressStore((state) => state.isEnrolled);

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <FadeIn>
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black mb-3">Selamat Datang, Murid! 👋</h1>
            <p className="text-slate-300 max-w-md">
              Lanjutkan pembelajaran Anda atau temukan kelas baru dengan memasukkan kode pendaftaran dari guru Anda.
            </p>
          </div>
          <Link href="/student/enroll">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2 font-bold whitespace-nowrap shadow-lg shadow-primary/20"
            >
              <Search size={20} />
              {isEnrolled ? "Gabung Kelas Baru" : "Mulai Cari Kelas"}
            </Button>
          </Link>
        </div>
      </FadeIn>

      {isEnrolled ? (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 px-1">
            <BookOpen className="text-primary" size={20} /> Kelas Aktif Anda
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="glass-card p-6 rounded-2xl flex flex-col h-full border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded">
                      Web Dev
                    </span>
                    <span className="text-sm font-semibold text-slate-500">Progress: 45%</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Vibe Coding - Full Stack Web</h3>
                  <p className="text-slate-500 text-sm mb-6">Pengajar: Andy Santoso</p>
                </div>

                <Link href="/student/course">
                  <Button className="w-full gap-2 justify-center" variant="primary">
                    <PlayCircle size={18} /> Lanjutkan Belajar
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Tambah Kelas Placeholder */}
            <FadeIn delay={0.2}>
              <Link href="/student/enroll" className="block h-full">
                <div className="border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl flex flex-col items-center justify-center p-8 h-full text-center group cursor-pointer min-h-[220px]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:scale-110 transition-all shadow-sm mb-4">
                    <Search size={24} />
                  </div>
                  <h3 className="font-bold text-slate-700 mb-1">Cari Kelas Lain</h3>
                  <p className="text-sm text-slate-500">Gunakan Enrollment Code dari guru Anda.</p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      ) : (
        <FadeIn delay={0.1} className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-4">
            <BookOpen size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Belum Ada Kelas</h2>
          <p className="text-slate-500 max-w-sm mb-6">
            Anda belum bergabung ke kelas mana pun. Silakan klik tombol di atas untuk memasukkan{" "}
            <strong>Enrollment Code</strong>.
          </p>
        </FadeIn>
      )}
    </div>
  );
}
