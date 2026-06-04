"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useProgressStore } from "@/store/useProgressStore";
import { getAllContents, getItemPath } from "@/lib/dummyData";

// Viewers
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { SlideViewer } from "@/components/shared/SlideViewer";
import { InfographyViewer } from "@/components/shared/InfographyViewer";
import { QuizViewer } from "@/components/shared/QuizViewer";

function CourseTheaterSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-pulse w-full">
      {/* Back button */}
      <div className="w-40 h-5 bg-slate-200 rounded mb-4" />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 w-full max-w-xl">
            {/* Breadcrumb */}
            <div className="flex gap-2">
              <div className="w-24 h-5 bg-slate-200 rounded" />
              <div className="w-4 h-5 bg-slate-200 rounded" />
              <div className="w-32 h-5 bg-slate-200 rounded" />
            </div>
            {/* Title */}
            <div className="w-3/4 h-8 sm:h-10 bg-slate-300 rounded" />
          </div>
          {/* Badge */}
          <div className="w-32 h-10 bg-slate-200 rounded-xl" />
        </div>

        {/* Viewer */}
        <div className="w-full aspect-video bg-slate-200/60 rounded-2xl border border-slate-100" />

        {/* Instruction */}
        <div className="bg-slate-100/50 p-6 rounded-2xl mt-8 border border-slate-100">
          <div className="w-48 h-6 bg-slate-200 rounded mb-4" />
          <div className="space-y-2.5">
            <div className="w-full h-4 bg-slate-200 rounded" />
            <div className="w-5/6 h-4 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseTheaterPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const courseId = params.courseId as string;
  const [isLoading, setIsLoading] = useState(true);
  
  const { unlockedSessions, unlockNextSession, isEnrolled } = useProgressStore();
  const allContents = getAllContents();
  const content = allContents.find(c => c.id === slug);
  const contentId = content?.id || "";
  const breadcrumbPath = contentId ? getItemPath(contentId) : [];

  useEffect(() => {
    if (!isEnrolled) {
      router.push("/student");
      return;
    }

    // Simulate network fetch for assets and data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return <CourseTheaterSkeleton />;
  }

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-4">Materi Tidak Ditemukan</h2>
        <Button onClick={() => router.push(`/student/course/${courseId}`)}>Kembali ke Kurikulum</Button>
      </div>
    );
  }

  // Redirect jika mencoba mengakses sesi yang terkunci
  // TESTING MODE: Bebaskan lock sementara
  /*
  if (!unlockedSessions.includes(contentId)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-4">Akses Ditolak</h2>
        <p className="text-muted-foreground mb-6">Materi ini masih terkunci. Harap selesaikan materi sebelumnya.</p>
        <Button onClick={() => router.push(`/student/course/${courseId}`)}>Kembali ke Kurikulum</Button>
      </div>
    );
  }
  */

  // Sesi dianggap selesai jika user telah membuka kunci konten WAJIB berikutnya (atau ini sesi terakhir)
  const isCompleted = (() => {
    const currentIndex = allContents.findIndex(c => c.id === contentId);
    if (currentIndex === allContents.length - 1) return unlockedSessions.length === allContents.length;
    
    // Temukan konten wajib berikutnya
    for (let i = currentIndex + 1; i < allContents.length; i++) {
      if (allContents[i].is_required) {
        return unlockedSessions.includes(allContents[i].id);
      }
    }
    return true; // Jika tidak ada konten wajib setelahnya
  })();

  const handleSessionComplete = () => {
    // Hanya picu unlock berantai jika file ini WAJIB (Required)
    if (content.is_required) {
      unlockNextSession(contentId); 
    }
  };

  const renderContent = () => {
    switch (content.item_type) {
      case "video":
        return <VideoPlayer src={content.content_url} meetingNo={contentId as any} onVideoEnd={handleSessionComplete} />;
      case "slide":
        return <SlideViewer slides={content.content_url} onCompleted={handleSessionComplete} />;
      case "infography":
        return <InfographyViewer src={content.content_url} onCompleted={handleSessionComplete} />;
      case "quiz":
        return <QuizViewer questions={content.content_url} onCompleted={handleSessionComplete} />;
      default:
        return <div>Format tidak didukung.</div>;
    }
  };

  const getInstructions = () => {
    if (!content.is_required) {
      return "Materi ini bersifat PENDAMPING (Tidak Wajib). Anda bisa membacanya sebagai referensi tambahan. Tidak ada gembok yang tertahan oleh materi ini.";
    }

    switch (content.item_type) {
      case "video": return "Tonton video WAJIB ini sampai akhir tanpa men-skip. Materi berikutnya di dalam subbab/bab ini akan terbuka secara otomatis.";
      case "slide": return "Baca slide presentasi ini. Tekan tombol selanjutnya hingga mencapai halaman terakhir untuk membuktikan penyelesaian Anda.";
      case "infography": return "Buka dan pelajari infografis ini. Anda dapat mengklik gambar untuk melihatnya dalam mode layar penuh (Fullscreen) dengan fitur Zoom & Pan.";
      case "quiz": return "Ujian WAJIB: Jawab seluruh pertanyaan dengan benar 100% untuk membuktikan ketangguhan Anda dan membuka gembok berikutnya.";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      <Link href={`/student/course/${courseId}?open=${breadcrumbPath.length > 1 ? breadcrumbPath[breadcrumbPath.length - 2].id : ''}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
        <ArrowLeft size={18} /> Kembali ke Kurikulum
      </Link>

      <FadeIn className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium text-muted-foreground mb-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full">
              {breadcrumbPath.map((item, index) => (
                <div key={item.id} className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  {index === breadcrumbPath.length - 1 ? (
                    <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md uppercase tracking-wider">
                      {item.title}
                    </span>
                  ) : (
                    <Link href={`/student/course/${courseId}?open=${item.id}`} className="hover:text-primary transition-colors cursor-pointer">
                      {item.title}
                    </Link>
                  )}
                  {index < breadcrumbPath.length - 1 && <span className="opacity-40">›</span>}
                </div>
              ))}
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold">{content.title}</h1>
          </div>
          
          {isCompleted && content.is_required && content.item_type !== "slide" && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-xl border border-green-200">
              <CheckCircle size={20} />
              <span className="font-semibold text-sm">Diselesaikan</span>
            </div>
          )}
        </div>

        {/* The Dynamic Theater Viewer */}
        <div className="w-full">
          {renderContent()}
        </div>

        {content.is_required && (
          <div className="bg-white p-6 rounded-2xl mt-8 shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg mb-2">Instruksi Penyelesaian</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {getInstructions()}
            </p>
          </div>
        )}
      </FadeIn>
    </div>
  );
}
