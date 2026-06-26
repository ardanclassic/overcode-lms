"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { useProgressStore } from "@/store/useProgressStore";
import { CheckCircle2, Lock, PlayCircle, BookOpen, ImageIcon, Presentation, FileQuestion, ChevronRight, Folder, FolderOpen, FileText, CalendarCheck, Video } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { courseService, CourseItem, ItemType } from "@/services/course.service";
import { scheduleService, LiveSession } from "@/services/schedule.service";
import { useAuthStore } from "@/store/useAuthStore";

const getTypeIcon = (type: ItemType) => {
  switch (type) {
    case "video": return <PlayCircle size={20} />;
    case "infography": return <ImageIcon size={20} />;
    case "slide": return <Presentation size={20} />;
    case "quiz": return <FileQuestion size={20} />;
    case "pdf": return <FileText size={20} />;
    default: return <BookOpen size={20} />;
  }
};

const getTypeLabel = (type: ItemType) => {
  switch (type) {
    case "video": return "Video";
    case "infography": return "Infografis";
    case "slide": return "Slide";
    case "quiz": return "Kuis";
    case "pdf": return "PDF";
    default: return "Materi";
  }
};

const RecursiveNode = ({ node, level = 0, unlockedSessions, allContents, expandedNodes, toggleNode, liveSessions }: {
  node: CourseItem, 
  level?: number, 
  unlockedSessions: string[], 
  allContents: CourseItem[], 
  expandedNodes: Record<string, boolean>, 
  toggleNode: (id: string, currentState: boolean) => void,
  liveSessions: Record<string, LiveSession>
}) => {
  const isFolder = node.item_type === "folder";
  const isExpanded = expandedNodes[node.id] ?? (level === 0);
  const session = liveSessions[node.id];

  if (isFolder) {
    return (
      <div id={`node-${node.id}`} className={cn("w-full", level === 0 ? "mb-6" : "")}>
        <div 
          className={cn(
            "w-full flex items-center justify-between transition-colors group",
            level === 0 ? "p-3 sm:p-4 bg-slate-100/80 hover:bg-slate-200/80 rounded-2xl" : "py-2.5 px-3 hover:bg-slate-100 rounded-xl mt-1"
          )}
        >
          <button
            onClick={() => toggleNode(node.id, isExpanded)} 
            className="flex items-center flex-1 min-w-0 gap-2.5 text-left outline-none"
          >
            <div className={cn(
              "flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-400 group-hover:text-slate-600",
              isExpanded ? "rotate-90" : ""
            )}>
              <ChevronRight size={level === 0 ? 18 : 16} />
            </div>
            
            <div className="shrink-0 text-slate-400 group-hover:text-primary transition-colors">
               {isExpanded ? <FolderOpen size={level === 0 ? 20 : 18} className={level === 0 ? "text-primary" : ""} /> : <Folder size={level === 0 ? 20 : 18} />}
            </div>

            <div className="flex flex-col truncate">
              {level === 0 && <span className="text-primary text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-0.5">Materi</span>}
              <span className={cn(
                "truncate transition-colors",
                level === 0 ? "text-base sm:text-lg font-bold text-slate-800" : "text-sm sm:text-base font-semibold text-slate-700 group-hover:text-slate-900"
              )}>{node.title}</span>
              {session?.started_at && (
                <span className="text-amber-600 font-medium flex items-center gap-1 text-[10px] sm:text-xs mt-0.5">
                  <CalendarCheck size={12} /> {new Date(session.started_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </div>
          </button>
          
          {session?.meeting_url && (
            <div className="shrink-0 pl-3">
              <a 
                href={session.meeting_url} 
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <Button 
                  size="sm"
                  className="hidden sm:flex text-xs h-8 px-4 font-semibold shadow-sm bg-blue-600 hover:bg-blue-700 text-white border-blue-700"
                >
                  <Video size={14} className="mr-1.5" /> Join Zoom
                </Button>
                <div className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 border border-blue-200">
                  <Video size={14} />
                </div>
              </a>
            </div>
          )}
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div 
              key={`node-content-${node.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className={cn(
                "flex flex-col",
                level === 0 ? "pl-1 sm:pl-3 mt-2" : "pl-6 mt-1 border-l-2 border-slate-200 ml-[17px] space-y-0.5"
              )}>
                {(node.children || []).map((child) => (
                  <RecursiveNode 
                    key={child.id} 
                    node={child} 
                    level={level + 1} 
                    unlockedSessions={unlockedSessions} 
                    allContents={allContents}
                    expandedNodes={expandedNodes}
                    toggleNode={toggleNode}
                    liveSessions={liveSessions}
                  />
                ))}
                {(!node.children || node.children.length === 0) && (
                  <p className="text-xs text-muted-foreground italic py-3 pl-6">Folder ini kosong.</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Render File
  const isUnlocked = unlockedSessions.includes(node.id);
  
  const isCompleted = (() => {
    if (!isUnlocked) return false;
    if (!node.is_required) return true;
    
    const currentIndex = allContents.findIndex((c) => c.id === node.id);
    if (currentIndex === -1) return false;
    if (currentIndex === allContents.length - 1) return unlockedSessions.length === allContents.length;
    
    for (let i = currentIndex + 1; i < allContents.length; i++) {
      if (allContents[i].is_required) {
        return unlockedSessions.includes(allContents[i].id);
      }
    }
    return true; 
  })();

  const params = useParams();
  const courseId = params.courseId as string;

  return (
    <Link href={`/student/course/${courseId}/${node.id}`} className="block w-full outline-none group scroll-mt-24" id={`node-${node.id}`}>
      <div className={cn(
        "py-2.5 px-3 rounded-xl flex items-center justify-between gap-3 transition-all duration-200 relative",
        isCompleted 
          ? "hover:bg-green-50/50" 
          : isUnlocked 
            ? "hover:bg-slate-100" 
            : "opacity-60 hover:bg-slate-50"
      )}>
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors shadow-sm",
            isCompleted 
              ? "bg-green-100 text-green-600" 
              : isUnlocked 
                ? "bg-white text-primary border border-slate-200" 
                : "bg-slate-100 text-slate-400 border border-slate-200"
          )}>
            {isCompleted ? <CheckCircle2 size={16} /> : isUnlocked ? getTypeIcon(node.item_type) : <Lock size={14} />}
          </div>
          
          <div className="flex flex-col min-w-0">
            <span className={cn(
              "font-medium text-sm sm:text-base truncate transition-colors", 
              isUnlocked ? "text-slate-700 group-hover:text-primary" : "text-slate-500"
            )}>
              {node.title}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] sm:text-xs text-muted-foreground">
              <span className={cn("uppercase font-bold tracking-wider", isUnlocked ? "text-primary/70" : "text-slate-400")}>
                {getTypeLabel(node.item_type)}
              </span> 
              {node.duration && (
                <>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-slate-500">{node.duration}</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="shrink-0 flex items-center pl-2 gap-2">
          {isUnlocked ? (
            <>
              {isCompleted ? (
                 <>
                   <div className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600 border border-green-200">
                     <CheckCircle2 size={16} />
                   </div>
                   <Button 
                     size="sm" 
                     variant="secondary" 
                     className="hidden sm:flex text-xs h-8 px-4 font-semibold pointer-events-none bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 shadow-sm"
                   >
                     Lihat Ulang
                   </Button>
                 </>
              ) : (
                 <>
                   <div className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary/20">
                     <PlayCircle size={16} />
                   </div>
                   <Button 
                     size="sm" 
                     variant="primary" 
                     className="hidden sm:flex text-xs h-8 px-5 font-semibold pointer-events-none shadow-sm"
                   >
                     Mulai
                   </Button>
                 </>
              )}
            </>
          ) : (
            <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-400 rounded-lg text-[10px] sm:text-xs font-semibold border border-slate-200">
              <Lock size={12} /> <span className="hidden sm:inline">Terkunci</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

function StudentDashboardSkeleton() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12 w-full animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-slate-900 rounded-b-3xl sm:rounded-[2rem] px-6 py-8 sm:p-10 -mx-4 -mt-4 sm:mx-0 sm:mt-2 mb-0 flex flex-col md:flex-row justify-between gap-8 sm:shadow-xl">
        <div className="space-y-4 w-full max-w-md">
          <div className="h-8 w-40 bg-slate-800 rounded-full" />
          <div className="h-12 w-3/4 bg-slate-800 rounded-xl" />
          <div className="h-16 w-full bg-slate-800 rounded-xl" />
        </div>
        <div className="w-full md:w-64 h-32 bg-slate-800 border border-slate-700 rounded-3xl shrink-0" />
      </div>

      {/* Directory Skeleton */}
      <div className="space-y-4">
        <div className="h-7 w-64 bg-slate-200 rounded-lg mb-2 mx-1" />
        {[1, 2, 3].map(i => (
          <div key={i} className="w-full h-16 sm:h-[72px] bg-slate-100 rounded-2xl flex items-center px-4 gap-4">
            <div className="w-8 h-8 rounded bg-slate-200 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-1/3 bg-slate-200 rounded" />
              <div className="h-4 w-1/4 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StudentDashboard() {
  const { unlockedSessions, isEnrolled } = useProgressStore();
  const user = useAuthStore(state => state.user);
  
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  const [allContents, setAllContents] = useState<CourseItem[]>([]);
  const [courseTree, setCourseTree] = useState<CourseItem[]>([]);
  const [liveSessions, setLiveSessions] = useState<Record<string, LiveSession>>({});
  
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!isEnrolled) {
      router.push("/student");
      return;
    }
    
    async function loadData() {
      try {
        const params = new URLSearchParams(window.location.search);
        // hardcode first course for now since we don't have course fetching by ID from student yet
        // ideally we get courseId from router params
        const courseIdToFetch = "e4a2c918-be48-4389-9d51-143924f7e52a"; // this is just a placeholder, we use the first available course instead
        
        let tree: CourseItem[] = [];
        
        // Since we are mocking the courseId for now due to database structure, let's fetch any available course
        const courses = await courseService.getTeacherCourses("d4b29b4e-86fa-4966-9b5a-73db6355fcad"); // mock teacher id, normally we get from enrollment
        
        // Let's just fetch all course items and filter if needed.
        const supabase = (await import("@/lib/supabase/client")).createClient();
        const { data: courseItems } = await supabase.from('course_items').select('*').order('order_index', { ascending: true });
        
        if (courseItems && courseItems.length > 0) {
           tree = courseService.buildTree(courseItems);
           setCourseTree(tree);
           setAllContents(courseItems.filter((item: any) => item.item_type !== 'folder'));
           
           // Fetch live sessions
           const itemIds = courseItems.map((i: any) => i.id);
           const sessions = await scheduleService.getLiveSessions(itemIds);
           const sessionMap: Record<string, LiveSession> = {};
           sessions.forEach(s => {
             if (s.course_item_id) sessionMap[s.course_item_id] = s;
           });
           setLiveSessions(sessionMap);
        }

        // Auto-scroll logic
        const openId = params.get('open');
        if (openId) {
           const newExpanded: Record<string, boolean> = {};
           newExpanded[openId] = true; // simplifying for now
           setExpandedNodes(prev => ({ ...prev, ...newExpanded }));
           
           setTimeout(() => {
             const el = document.getElementById(`node-${openId}`);
             if (el) {
               el.scrollIntoView({ behavior: 'smooth', block: 'center' });
             }
           }, 300);
        }

      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadData();
  }, [isEnrolled, router]);

  const toggleNode = (id: string, currentState: boolean) => {
    setExpandedNodes(prev => ({ ...prev, [id]: !currentState }));
  };

  if (isLoading) {
    return <StudentDashboardSkeleton />;
  }

  const overallProgress = allContents.length > 0 ? Math.round((unlockedSessions.length / allContents.length) * 100) : 0;

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <FadeIn>
        <div className={cn(
          "px-6 pt-8 pb-12 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden text-white -mx-4 -mt-4 sm:mx-0 sm:mt-2 mb-0 sm:mb-0",
          "bg-gradient-to-b from-slate-900 via-slate-900 via-[70%] to-transparent",
          "sm:bg-none sm:bg-slate-900 sm:rounded-[2rem] sm:shadow-xl sm:shadow-slate-900/10"
        )}>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Sesi Pembelajaran Aktif
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight">
              Kurikulum Belajar <span className="inline-block hover:animate-bounce cursor-default transition-transform">🚀</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              Jelajahi struktur materi komprehensif. Selesaikan setiap tahapan untuk membuka kunci ke tingkat berikutnya.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-6 w-full md:w-auto md:min-w-[280px] flex flex-col shadow-2xl">
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm font-semibold text-slate-200">Progress Anda</span>
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">{overallProgress}%</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2.5 sm:h-3 bg-slate-950/50 rounded-full overflow-hidden shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="h-full bg-gradient-to-r from-emerald-400 to-primary rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Flexible Directory Tree */}
      <div className="space-y-4">
        <FadeIn delay={0.1}>
          <h3 className="font-bold text-lg flex items-center gap-2 mb-2 px-1">
            <BookOpen className="text-primary" size={20} /> Daftar Modul / Direktori
          </h3>
        </FadeIn>
        
        {courseTree.map((node, index) => (
          <FadeIn key={node.id} delay={(index + 2) * 0.1}>
            <RecursiveNode 
              node={node} 
              unlockedSessions={unlockedSessions} 
              allContents={allContents} 
              expandedNodes={expandedNodes}
              toggleNode={toggleNode}
              liveSessions={liveSessions}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
