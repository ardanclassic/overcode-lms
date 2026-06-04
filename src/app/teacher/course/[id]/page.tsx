"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Eye, Lightbulb } from "lucide-react";
import Link from "next/link";
import { getAllContents, getItemPath } from "@/lib/dummyData";
import { cn } from "@/lib/utils";

// Viewers
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { SlideViewer } from "@/components/shared/SlideViewer";
import { InfographyViewer } from "@/components/shared/InfographyViewer";
import { QuizViewer } from "@/components/shared/QuizViewer";

function CourseTheaterSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-pulse w-full">
      <div className="w-40 h-5 bg-slate-200 rounded mb-4" />
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 w-full max-w-xl">
            <div className="flex gap-2">
              <div className="w-24 h-5 bg-slate-200 rounded" />
              <div className="w-4 h-5 bg-slate-200 rounded" />
              <div className="w-32 h-5 bg-slate-200 rounded" />
            </div>
            <div className="w-3/4 h-8 sm:h-10 bg-slate-300 rounded" />
          </div>
        </div>
        <div className="w-full aspect-video bg-slate-200/60 rounded-2xl border border-slate-100" />
      </div>
    </div>
  );
}

export default function TeacherCourseTheaterPage() {
  const params = useParams();
  const router = useRouter();
  const contentId = params.id as string;
  const [isLoading, setIsLoading] = useState(true);

  const allContents = getAllContents();
  const content = allContents.find(c => c.id === contentId);
  const breadcrumbPath = contentId ? getItemPath(contentId) : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [contentId]);

  if (isLoading) {
    return <CourseTheaterSkeleton />;
  }

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-4">Materi Tidak Ditemukan</h2>
        <Button onClick={() => router.push("/teacher/materials")}>Kembali ke Prep Mode</Button>
      </div>
    );
  }



  const renderContent = () => {
    const noop = () => {};
    
    switch (content.item_type) {
      case "video":
        return <VideoPlayer src={content.content_url} meetingNo={contentId as any} onVideoEnd={noop} />;
      case "slide":
        return <SlideViewer slides={content.content_url} onCompleted={noop} />;
      case "infography":
        return <InfographyViewer src={content.content_url} onCompleted={noop} />;
      case "quiz":
        return <QuizViewer questions={content.content_url} onCompleted={noop} />;
      default:
        return <div>Format tidak didukung.</div>;
    }
  };

  return (
    <div className="mx-auto space-y-6 pb-12 max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <Link href={`/teacher/materials?open=${contentId}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={18} /> Kembali ke Prep Mode
        </Link>

        {/* Link to Dedicated Playbook Page */}
        <Link href={`/teacher/playbook/${contentId}`}>
          <Button variant="secondary" className="gap-2 shadow-sm hover:bg-amber-500 hover:text-white hover:border-amber-600 transition-colors">
            <Lightbulb size={16} />
            Edit Playbook
          </Button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 relative items-start">
        {/* Main Content Area */}
        <FadeIn className="flex-1 w-full min-w-0 space-y-6">
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
                      <Link href={`/teacher/materials?open=${item.id}`} className="text-slate-500 font-medium hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    )}
                    {index < breadcrumbPath.length - 1 && <span className="opacity-40">›</span>}
                  </div>
                ))}
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold">{content.title}</h1>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 shrink-0">
              <Eye size={18} />
              <span className="font-semibold text-sm">Mode Pratinjau (Guru)</span>
            </div>
          </div>

          {/* The Dynamic Theater Viewer */}
          <div className="w-full">
            {renderContent()}
          </div>
        </FadeIn>


      </div>
    </div>
  );
}
