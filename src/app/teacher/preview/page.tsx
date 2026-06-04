"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  Folder,
  FileText,
  PlayCircle,
  ImageIcon,
  Presentation,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Calendar,
  CalendarCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DUMMY_COURSE_ITEMS, buildCourseTree, CourseNode, ItemType, getItemPath, CourseItem } from "@/lib/dummyData";

const getTypeIcon = (type: ItemType) => {
  switch (type) {
    case "video":
      return <PlayCircle size={16} />;
    case "infography":
      return <ImageIcon size={16} />;
    case "slide":
      return <Presentation size={16} />;
    case "pdf":
      return <FileText size={16} />;
    default:
      return <FileText size={16} />;
  }
};

const PrepModeRecursiveNode = ({
  node,
  level = 0,
  expandedNodes,
  toggleNode,
}: {
  node: CourseNode;
  level?: number;
  expandedNodes: Record<string, boolean>;
  toggleNode: (id: string, currentState: boolean) => void;
}) => {
  const router = useRouter();
  const isFolder = node.item_type === "folder";
  // Default is open for root level folders if undefined
  const isExpanded = expandedNodes[node.id] !== undefined ? expandedNodes[node.id] : level === 0;

  if (isFolder) {
    return (
      <div id={`node-${node.id}`} className={cn("w-full transition-all duration-300", level === 0 ? "mb-6" : "mt-2")}>
        <div
          onClick={() => toggleNode(node.id, isExpanded)}
          className={cn(
            "flex items-center justify-between cursor-pointer group transition-all duration-200",
            level === 0
              ? "p-3 sm:p-4 bg-slate-100/80 hover:bg-slate-200/80 rounded-2xl"
              : "p-2 hover:bg-slate-50 rounded-xl",
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex items-center justify-center shrink-0 transition-colors",
                level === 0
                  ? "w-10 h-10 rounded-xl bg-white shadow-sm text-primary"
                  : "w-8 h-8 rounded-lg bg-slate-100 text-slate-500 group-hover:text-primary",
              )}
            >
              <Folder size={level === 0 ? 20 : 16} className={isExpanded ? "fill-current/20" : ""} />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold transition-colors group-hover:text-primary",
                  level === 0 ? "text-slate-800 text-base sm:text-lg" : "text-slate-700 text-sm sm:text-base",
                )}
              >
                {node.title}
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-2">
                {node.children.length} item(s)
                {node.scheduledAt && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-amber-600 font-medium flex items-center gap-1">
                      <CalendarCheck size={12} /> {new Date(node.scheduledAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="text-slate-400 group-hover:text-primary transition-colors p-2">
              {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div
            className={cn(
              "border-l-2 border-slate-100 flex flex-col gap-2 relative",
              level === 0 ? "ml-4 sm:ml-9 pl-4 sm:pl-8 pt-4 pb-2" : "ml-4 sm:ml-6 pl-4 sm:pl-8 pt-2",
            )}
          >
            {node.children.map((child) => (
              <PrepModeRecursiveNode
                key={child.id}
                node={child}
                level={level + 1}
                expandedNodes={expandedNodes}
                toggleNode={toggleNode}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Not a folder (Content item)
  // PREP MODE: ALL items are unlocked and clickable!
  return (
    <Link id={`node-${node.id}`} href={`/teacher/course/${node.id}`} className="block w-full outline-none group relative scroll-mt-24">
      {/* Decorative timeline dot - hidden on mobile for cleaner look */}
      <div className="absolute -left-[23px] sm:-left-[39px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white bg-slate-200 group-hover:bg-primary group-hover:scale-125 transition-all z-10 hidden sm:block" />

      <div className="py-2.5 px-3 rounded-xl flex items-center justify-between gap-3 transition-all duration-200 hover:bg-slate-50">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors shadow-sm bg-white text-primary border border-slate-200 group-hover:border-primary/30">
            {getTypeIcon(node.item_type)}
          </div>

          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-sm sm:text-base truncate transition-colors text-slate-700 group-hover:text-primary">
              {node.title}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] sm:text-xs text-muted-foreground">
              <span className="uppercase font-bold tracking-wider text-primary/70">
                {node.item_type}
              </span>
              {node.duration && (
                <>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-slate-500 font-medium">{node.duration}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center pl-2 gap-2">
           {/* Playbook Button */}
           <Button 
             variant="secondary"
             size="sm"
             onClick={(e) => {
               e.preventDefault();
               e.stopPropagation();
               router.push(`/teacher/playbook/${node.id}`);
             }}
             className="flex text-xs h-8 px-2 md:px-3 font-semibold shadow-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity md:translate-x-2 md:group-hover:translate-x-0 text-amber-700 bg-amber-50 hover:bg-amber-100 border-amber-200"
           >
             <Lightbulb size={14} className="md:mr-1.5" /> <span className="hidden md:inline">Playbook</span>
           </Button>
           <Button 
             size="sm" 
             variant="primary" 
             className="hidden sm:flex text-xs h-8 px-5 font-semibold pointer-events-none shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0"
           >
             Preview
           </Button>
        </div>
      </div>
    </Link>
  );
};

function PrepModeSkeleton() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 w-full animate-pulse">
      <div className="flex flex-col gap-2 mb-8">
        <div className="h-8 w-48 bg-slate-200 rounded-lg" />
        <div className="h-5 w-3/4 max-w-lg bg-slate-200 rounded-md" />
      </div>

      <div className="space-y-4">
        <div className="h-7 w-64 bg-slate-200 rounded-lg mb-2" />
        {[1, 2, 3].map((i) => (
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

export default function PrepModePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});
  
  const [courseTreeData] = useState(buildCourseTree(DUMMY_COURSE_ITEMS));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const openId = params.get('open');
        if (openId) {
          const path = getItemPath(openId);
          if (path && path.length > 0) {
            const newExpanded: Record<string, boolean> = {};
            path.forEach(p => {
              newExpanded[p.id] = true;
            });
            setExpandedNodes(prev => ({ ...prev, ...newExpanded }));
            
            setTimeout(() => {
              const el = document.getElementById(`node-${openId}`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 300);
          }
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleNode = (id: string, currentState: boolean) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !currentState }));
  };

  if (isLoading) {
    return <PrepModeSkeleton />;
  }

  return (
    <div className="space-y-8 mx-auto pb-12">
      <FadeIn>
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Prep Mode (Preview Kurikulum)</h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
            Mode pratinjau khusus instruktur. Anda dapat menelusuri seluruh materi kursus dan kuis
            <strong className="font-semibold text-slate-800"> tanpa batasan penguncian (gating bypass)</strong>. Gunakan
            mode ini untuk meninjau *slide* atau menonton video *playback* sebelum sesi kelas dimulai.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-4">
        <FadeIn delay={0.1}>
          <h3 className="font-bold text-lg flex items-center gap-2 mb-2 px-1">
            <BookOpen className="text-primary" size={20} /> Daftar Lengkap Modul
          </h3>
        </FadeIn>

        {courseTreeData.map((node, index) => (
          <FadeIn key={node.id} delay={(index + 2) * 0.1}>
            <PrepModeRecursiveNode 
              node={node} 
              expandedNodes={expandedNodes} 
              toggleNode={toggleNode} 
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
