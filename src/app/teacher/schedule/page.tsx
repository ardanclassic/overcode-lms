"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { Calendar, CalendarCheck, Clock, Video, BookOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { DUMMY_COURSE_ITEMS, buildCourseTree, CourseItem, CourseNode } from "@/lib/dummyData";
import { ScheduleModal } from "@/components/teacher/ScheduleModal";

export default function TeacherSchedulePage() {
  const [courseTreeData, setCourseTreeData] = useState(buildCourseTree(DUMMY_COURSE_ITEMS));
  const [scheduleItem, setScheduleItem] = useState<CourseItem | null>(null);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseTreeData.map((node: CourseNode, index: number) => (
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
                      getStatusColor(node.scheduledAt),
                    )}
                  >
                    {node.scheduledAt ? <CalendarCheck size={14} /> : <Calendar size={14} />}
                    {getStatusText(node.scheduledAt)}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">{node.title}</h2>
                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={16} /> {node.children.length} item(s)
                  </span>
                </div>
              </div>

              {/* Schedule Info Area */}
              <div className="bg-slate-50/50 p-6 border-t border-slate-100 space-y-4 shrink-0">
                {node.scheduledAt ? (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Waktu</p>
                        <p className="text-sm font-semibold text-slate-700">
                          {new Date(node.scheduledAt).toLocaleDateString("id-ID", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-slate-600 mt-0.5">
                          Pukul{" "}
                          {new Date(node.scheduledAt).toLocaleTimeString("id-ID", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          WIB
                        </p>
                      </div>
                    </div>

                    {node.meetingUrl && (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500 shrink-0">
                          <Video size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                            Link Pertemuan
                          </p>
                          <a
                            href={node.meetingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-blue-600 hover:text-blue-700 truncate block underline-offset-2 hover:underline"
                          >
                            {node.meetingUrl}
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

                <Button
                  variant={node.scheduledAt ? "secondary" : "primary"}
                  className="w-full mt-4 justify-center"
                  onClick={() => setScheduleItem(node as any)}
                >
                  <Calendar size={16} className="mr-2" />
                  {node.scheduledAt ? "Ubah Jadwal" : "Atur Jadwal"}
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {scheduleItem && (
        <ScheduleModal
          item={scheduleItem}
          onClose={() => setScheduleItem(null)}
          onSave={(data) => {
            // Optimistic Update
            const updatedItems = DUMMY_COURSE_ITEMS.map((item) => {
              if (item.id === scheduleItem.id) {
                return { ...item, scheduledAt: `${data.date}T${data.time}:00Z`, meetingUrl: data.meetingUrl };
              }
              return item;
            });
            setCourseTreeData(buildCourseTree(updatedItems));
            setScheduleItem(null);
          }}
        />
      )}
    </div>
  );
}
