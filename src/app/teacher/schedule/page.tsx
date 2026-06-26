"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { Calendar, CalendarCheck, Clock, Video, BookOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { DUMMY_COURSE_ITEMS, buildCourseTree, CourseNode } from "@/lib/dummyData";
import { ScheduleModal } from "@/components/teacher/ScheduleModal";
import { useAuthStore } from "@/store/useAuthStore";
import { courseService, CourseItem } from "@/services/course.service";
import { scheduleService, LiveSession } from "@/services/schedule.service";

export default function TeacherSchedulePage() {
  const user = useAuthStore(state => state.user);
  const [courseTreeData, setCourseTreeData] = useState<CourseItem[]>([]);
  const [liveSessions, setLiveSessions] = useState<Record<string, LiveSession>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [scheduleItem, setScheduleItem] = useState<CourseItem | null>(null);

  useEffect(() => {
    async function loadData() {
      if (!user) return;
      try {
        const courses = await courseService.getTeacherCourses(user.id);
        if (courses && courses.length > 0) {
          const tree = await courseService.getCourseTree(courses[0].id);
          setCourseTreeData(tree);
          
          // Get all flat item IDs from the tree
          const itemIds: string[] = [];
          const traverse = (nodes: CourseItem[]) => {
            nodes.forEach(n => {
              itemIds.push(n.id);
              if (n.children && n.children.length > 0) traverse(n.children);
            });
          };
          traverse(tree);
          
          const sessions = await scheduleService.getLiveSessions(itemIds);
          const sessionMap: Record<string, LiveSession> = {};
          sessions.forEach(s => {
            if (s.course_item_id) sessionMap[s.course_item_id] = s;
          });
          setLiveSessions(sessionMap);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [user]);

  const getStatusColor = (scheduledAt?: string) => {
    if (!scheduledAt) return "bg-slate-100 text-slate-500 border-slate-200";

    const isPast = new Date(scheduledAt) < new Date();
    if (isPast) return "bg-slate-100 text-slate-600 border-slate-200"; // Selesai

    return "bg-amber-50 text-amber-600 border-amber-200"; // Akan Datang
  };

  const getStatusText = (scheduledAt?: string) => {
    if (!scheduledAt) return "Belum Dijadwalkan";
    const isPast = new Date(scheduledAt) < new Date();
    return isPast ? "Selesai" : "Akan Datang";
  };

  return (
    <div className="space-y-8 pb-12">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Jadwal Sesi</h1>
            <p className="text-slate-500 mt-2">Atur tanggal, waktu, dan sesi *live* untuk setiap modul materi.</p>
          </div>
        </div>
      </FadeIn>

      {isLoading ? (
        <div className="flex justify-center p-12">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseTreeData.map((node: CourseItem, index: number) => {
            const session = liveSessions[node.id];
            
            return (
              <FadeIn key={node.id} delay={index * 0.1}>
                <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* Card Header */}
                  <div className="p-6 pb-4 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Layers size={24} />
                      </div>
                      <div
                        className={cn(
                          "px-3 py-1 text-xs font-bold rounded-full border flex items-center gap-1.5",
                          getStatusColor(session?.started_at || undefined),
                        )}
                      >
                        {session?.started_at ? <CalendarCheck size={14} /> : <Calendar size={14} />}
                        {getStatusText(session?.started_at || undefined)}
                      </div>
                    </div>

                <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">{node.title}</h2>
                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={16} /> {node.children?.length || 0} item(s)
                    </span>
                </div>
              </div>

              {/* Schedule Info Area */}
              <div className="bg-slate-50/50 p-6 border-t border-slate-100 space-y-4 shrink-0">
                {session?.started_at ? (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Waktu</p>
                        <p className="text-sm font-semibold text-slate-700">
                          {new Date(session.started_at).toLocaleDateString("id-ID", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-slate-600 mt-0.5">
                          Pukul{" "}
                          {new Date(session.started_at).toLocaleTimeString("id-ID", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          WIB
                        </p>
                      </div>
                    </div>

                    {session.meeting_url && (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                          <Video size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Tautan GMeet</p>
                          <a
                            href={session.meeting_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline line-clamp-1"
                          >
                            {session.meeting_url.replace("https://", "")}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-4 text-center">
                    <p className="text-sm text-slate-400">Jadwal belum ditentukan.</p>
                  </div>
                )}

                <Button className="w-full" variant="secondary" onClick={() => setScheduleItem(node as any)}>
                  Atur Jadwal
                </Button>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  )}

      {scheduleItem && (
        <ScheduleModal
          item={scheduleItem}
          onClose={() => setScheduleItem(null)}
          onSave={async (data) => {
            if (!scheduleItem) return;
            setLiveSessions(prev => ({
              ...prev,
              [scheduleItem.id]: {
                id: "temp-id-" + scheduleItem.id,
                course_item_id: scheduleItem.id,
                teacher_id: user?.id || "",
                scheduled_at: `${data.date}T${data.time}:00Z`,
                meeting_url: data.meetingUrl,
                status: 'scheduled',
                batch: "",
                started_at: "",
                duration_minutes: 0,
                objectives_state: {}
              } as unknown as LiveSession
            }));
            setScheduleItem(null);
          }}
        />
      )}
    </div>
  );
}
