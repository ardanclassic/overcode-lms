"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { BookOpen, ChevronRight, PlayCircle, Star, Clock } from "lucide-react";
import Link from "next/link";
import { useProgressStore } from "@/store/useProgressStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Mock Data for Enrolled Courses
const ENROLLED_COURSES = [
  {
    id: "web-dev-101",
    title: "Vibe Coding (Web Based)",
    instructor: "Andy Prasetyo",
    progress: 45,
    totalModules: 24,
    completedModules: 11,
    image: "bg-blue-500",
    lastAccessed: "2 jam yang lalu",
    instructorPhone: "6281234567890",
  },
  {
    id: "scratch-kids",
    title: "Scratch (for Kids) - Basic",
    instructor: "Budi Santoso",
    progress: 10,
    totalModules: 15,
    completedModules: 2,
    image: "bg-orange-400",
    lastAccessed: "3 hari yang lalu",
    instructorPhone: null,
  }
];

export default function StudentCourseListPage() {
  const { isEnrolled } = useProgressStore();
  const router = useRouter();

  useEffect(() => {
    if (!isEnrolled) {
      router.push("/student");
    }
  }, [isEnrolled, router]);

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ENROLLED_COURSES.map((course, index) => (
          <FadeIn key={course.id} delay={index * 0.1}>
            <div onClick={() => router.push(`/student/course/${course.id}`)} className="block group cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                {/* Course Header/Cover */}
                <div className={`h-32 w-full ${course.image} relative p-6 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                      <Star size={12} className="fill-white" /> Aktif
                    </span>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-start">
                    <h2 className="text-white text-xl font-bold truncate w-full">{course.title}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-white/80 text-sm">Oleh: {course.instructor}</p>
                      {course.instructorPhone && (
                        <a
                          href={`https://wa.me/${course.instructorPhone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-green-500 hover:bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-md font-semibold transition-colors flex items-center gap-1 shadow-sm"
                        >
                          Hubungi WA
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-semibold text-slate-700">Progress Belajar</span>
                    <span className="text-lg font-black text-primary">{course.progress}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-slate-400" />
                      <span>{course.completedModules} / {course.totalModules} Selesai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-slate-400" />
                      <span>{course.lastAccessed}</span>
                    </div>
                  </div>

                  <Button className="w-full justify-between px-6 py-6 rounded-2xl bg-slate-50 text-slate-700 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-none" variant="secondary">
                    Lanjutkan Belajar <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
