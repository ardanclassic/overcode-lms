"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  CheckSquare,
  MessageSquare,
  StickyNote,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { getAllContents, getItemPath } from "@/lib/dummyData";
import { cn } from "@/lib/utils";

// Mock Data for Initial State
const INITIAL_CHECKLIST = [
  { id: "1", text: "Buka file source code starter di VS Code", isCompleted: true },
  { id: "2", text: "Pastikan live server berjalan di port 5500", isCompleted: false },
  { id: "3", text: "Siapkan tautan absensi untuk siswa", isCompleted: false },
];

const INITIAL_TALKING_POINTS = `* Tekankan bahwa **HTML bukan bahasa pemrograman**, melainkan markup language.
* Ingatkan siswa untuk menginstal ekstensi **Prettier** di VS Code.
* **Titik Kritis:** Siswa sering bingung bedanya tag penutup dan pembuka. Beri analogi kotak/kardus yang membungkus barang.`;

export default function DedicatedPlaybookPage() {
  const params = useParams();
  const router = useRouter();
  const contentId = params.id as string;
  const [isLoading, setIsLoading] = useState(true);

  // States
  const [checklist, setChecklist] = useState(INITIAL_CHECKLIST);
  const [newTask, setNewTask] = useState("");
  const [talkingPoints, setTalkingPoints] = useState(INITIAL_TALKING_POINTS);
  const [scratchpad, setScratchpad] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const allContents = getAllContents();
  const content = allContents.find((c) => c.id === contentId);
  const breadcrumbPath = contentId ? getItemPath(contentId) : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto space-y-6 animate-pulse">
        <div className="w-48 h-8 bg-slate-200 rounded" />
        <div className="w-full h-[600px] bg-slate-100 rounded-3xl" />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-4">Materi Tidak Ditemukan</h2>
        <Button onClick={() => router.push("/teacher/materials")}>
          Kembali ke Prep Mode
        </Button>
      </div>
    );
  }

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 800);
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setChecklist([
      ...checklist,
      { id: Date.now().toString(), text: newTask, isCompleted: false },
    ]);
    setNewTask("");
  };

  const removeTask = (id: string) => {
    setChecklist(checklist.filter((item) => item.id !== id));
  };

  const toggleTask = (id: string) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-400 mb-1.5">
              <Link href="/teacher/preview" className="hover:text-amber-600 transition-colors">Daftar Materi</Link>
              <span>/</span>
              {breadcrumbPath.map((item, index) => (
                <div key={item.id} className="flex items-center gap-1.5">
                  {index < breadcrumbPath.length - 1 ? (
                    <>
                      <Link 
                        href={`/teacher/preview?open=${item.id}`}
                        className="hover:text-amber-600 transition-colors truncate max-w-[120px] sm:max-w-[180px]"
                        title={item.title}
                      >
                        {item.title}
                      </Link>
                      <span>/</span>
                    </>
                  ) : (
                    <span className="text-amber-600 truncate max-w-[150px] sm:max-w-[200px]" title={item.title}>
                      {item.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
              Playbook: {content.title}
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto items-stretch sm:items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => router.push(`/teacher/course/${contentId}`)}
              className="gap-2 w-full sm:w-auto justify-center text-xs h-9"
            >
              <ArrowLeft size={14} /> Mode Presentasi
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              className={cn(
                "gap-2 transition-all w-full sm:w-auto justify-center text-xs h-9",
                saveSuccess
                  ? "bg-green-500 hover:bg-green-600 border-transparent text-white"
                  : "bg-amber-500 hover:bg-amber-600 text-white border-transparent shadow-sm"
              )}
            >
              {isSaving ? (
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : saveSuccess ? (
                <CheckCircle2 size={14} />
              ) : (
                <Save size={14} />
              )}
              {saveSuccess ? "Tersimpan" : "Simpan"}
            </Button>
          </div>
        </FadeIn>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Workspace */}
          <div className="lg:col-span-8 space-y-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-amber-50/50 p-6 border-b border-amber-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-amber-900">
                      Talking Points
                    </h2>
                    <p className="text-sm text-amber-700/70">
                      Poin-poin penting yang wajib dibahas
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-slate-50">
                  <textarea
                    value={talkingPoints}
                    onChange={(e) => setTalkingPoints(e.target.value)}
                    className="w-full h-64 p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
                    placeholder="Gunakan markdown (*, -, **) untuk poin bahasan..."
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-blue-50/50 p-6 border-b border-blue-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <StickyNote size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-blue-900">
                      Private Scratchpad
                    </h2>
                    <p className="text-sm text-blue-700/70">
                      Catatan bebas selama sesi mengajar
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-slate-50">
                  <textarea
                    value={scratchpad}
                    onChange={(e) => setScratchpad(e.target.value)}
                    className="w-full h-48 p-4 bg-white rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 outline-none transition-all resize-none text-sm leading-relaxed"
                    placeholder="Ketik catatan apa pun di sini..."
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar Area (Checklist) */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.3} className="sticky top-24">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-emerald-50/50 p-6 border-b border-emerald-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckSquare size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-emerald-900">
                      Checklist Persiapan
                    </h2>
                    <p className="text-sm text-emerald-700/70">
                      {checklist.filter((i) => i.isCompleted).length} dari{" "}
                      {checklist.length} selesai
                    </p>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {/* Task List */}
                  <div className="space-y-2">
                    {checklist.map((task) => (
                      <div
                        key={task.id}
                        className="group flex items-start gap-3 p-3 bg-slate-50 hover:bg-emerald-50/30 rounded-xl border border-slate-100 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={task.isCompleted}
                          onChange={() => toggleTask(task.id)}
                          className="mt-0.5 w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                        <span
                          className={cn(
                            "text-sm flex-1 cursor-pointer transition-all",
                            task.isCompleted
                              ? "text-slate-400 line-through"
                              : "text-slate-700 font-medium"
                          )}
                          onClick={() => toggleTask(task.id)}
                        >
                          {task.text}
                        </span>
                        <button
                          onClick={() => removeTask(task.id)}
                          className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all p-1"
                          title="Hapus"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add New Task */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addTask()}
                      placeholder="Tambah item persiapan..."
                      className="flex-1 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                    <Button
                      onClick={addTask}
                      size="sm"
                      className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 shadow-none shrink-0"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
      </div>
    </div>
  );
}
