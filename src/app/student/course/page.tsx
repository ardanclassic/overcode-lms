"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { BookOpen, ChevronRight, PlayCircle, Star, Clock } from "lucide-react";
import Link from "next/link";
import { useProgressStore } from "@/store/useProgressStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { courseService } from "@/services/course.service";

export default function StudentCourseListPage() {
  const router = useRouter();
  const user = useAuthStore(state => state.user);
  const isAuthLoading = useAuthStore(state => state.isLoading);
  const [courses, setCourses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading) return;
    if (!user) {
      setIsLoading(false);
      return;
    }

    async function fetchCourses() {
      try {
        const data = await courseService.getEnrolledCourses(user!.id);
        setCourses(data || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCourses();
  }, [user, isAuthLoading]);

  if (isLoading || isAuthLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Memuat Kelas...</p>
        </div>
      </div>
    );
  }

  const isEnrolled = courses.length > 0;

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Kelas Saya</h1>
          <p className="text-slate-500 mt-2 max-w-2xl leading-relaxed">
            Pilih kelas yang sedang Anda ikuti untuk melanjutkan proses belajar. Pastikan Anda menyelesaikan seluruh materi secara berurutan.
          </p>
        </div>
      </FadeIn>

      {isEnrolled ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <FadeIn key={course.id} delay={idx * 0.1}>
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-slate-200 group flex flex-col h-full">
                {/* Banner / Cover */}
                <div className={`h-32 bg-blue-500 relative p-6 flex flex-col justify-end`}>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded font-medium flex items-center gap-1">
                      <Star size={12} className="fill-white" /> Aktif
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white z-10">{course.title}</h3>
                  <p className="text-white/80 text-sm z-10 flex items-center gap-2">
                    Oleh: {course.instructor} 
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-semibold text-slate-700">Progress Belajar</span>
                      <span className="text-lg font-bold text-primary">0%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `0%` }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={16} /> 0 Modul Selesai
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={16} /> Belum diakses
                    </span>
                  </div>

                  {/* Action */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link href={`/student/course/${course.id}`}>
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors">
                        Lanjutkan Belajar <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn delay={0.1} className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-300 mb-6 shadow-sm">
            <BookOpen size={48} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Belum Ada Kelas</h2>
          <p className="text-slate-500 max-w-md mb-8">
            Anda belum terdaftar di kelas mana pun. Pastikan Anda telah memasukkan Enrollment Code dari guru Anda untuk mulai belajar.
          </p>
          <Link href="/student/enroll">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              Gabung Kelas Sekarang
            </Button>
          </Link>
        </FadeIn>
      )}
    </div>
  );
}
