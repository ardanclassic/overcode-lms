"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { Search, Filter, CheckCircle2, XCircle, AlertCircle, Clock, X, FileText, Send, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";

// Types
type FpStatus = "passed" | "review" | "working" | "not_started";

interface Student {
  id: string;
  name: string;
  avatar: string;
  batch: string;
  age: number;
  progress: number;
  fpStatus: FpStatus;
  lastActive: string;
  score: number | null;
  phone?: string;
}

// Dummy data for students
const INITIAL_STUDENTS: Student[] = [
  {
    id: "S001",
    name: "Budi Santoso",
    avatar: "BS",
    batch: "Batch 5",
    age: 24,
    progress: 85,
    fpStatus: "review",
    lastActive: "2 jam yang lalu",
    score: null,
    phone: "6281234567890",
  },
  {
    id: "S002",
    name: "Andi Wijaya",
    avatar: "AW",
    batch: "Batch 5",
    age: 28,
    progress: 100,
    fpStatus: "passed",
    lastActive: "1 hari yang lalu",
    score: 88,
    phone: "6289876543210",
  },
  {
    id: "S003",
    name: "Siti Rahma",
    avatar: "SR",
    batch: "Batch 5",
    age: 19,
    progress: 45,
    fpStatus: "not_started",
    lastActive: "5 hari yang lalu",
    score: null,
  },
  {
    id: "S004",
    name: "Kevin Pradana",
    avatar: "KP",
    batch: "Batch 5",
    age: 22,
    progress: 60,
    fpStatus: "working",
    lastActive: "1 jam yang lalu",
    score: null,
    phone: "6285551234567",
  },
  {
    id: "S005",
    name: "Diana Putri",
    avatar: "DP",
    batch: "Batch 4",
    age: 26,
    progress: 100,
    fpStatus: "passed",
    lastActive: "1 minggu yang lalu",
    score: 95,
  },
  {
    id: "S006",
    name: "Reza Mahendra",
    avatar: "RM",
    batch: "Batch 5",
    age: 31,
    progress: 95,
    fpStatus: "review",
    lastActive: "Baru saja",
    score: null,
  },
];

function StudentManagementSkeleton() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-pulse">
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-64 bg-slate-200 rounded-lg" />
        <div className="h-10 w-32 bg-slate-200 rounded-xl" />
      </div>
      <div className="glass-card p-6 rounded-2xl min-h-[400px]">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="h-10 w-full sm:w-64 bg-slate-200 rounded-lg" />
          <div className="h-10 w-full sm:w-32 bg-slate-200 rounded-lg" />
          <div className="h-10 w-full sm:w-32 bg-slate-200 rounded-lg" />
          <div className="h-10 w-full sm:w-32 bg-slate-200 rounded-lg" />
        </div>
        <div className="space-y-4">
          <div className="h-12 w-full bg-slate-100 rounded-lg" />
          <div className="h-16 w-full bg-slate-100 rounded-lg" />
          <div className="h-16 w-full bg-slate-100 rounded-lg" />
          <div className="h-16 w-full bg-slate-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// Slide-over Panel Component
const StudentDetailPanel = ({
  student,
  isOpen,
  onClose,
  onUpdateStatus,
}: {
  student: Student | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateStatus: (id: string, newStatus: FpStatus, score: number) => void;
}) => {
  const [scoreInput, setScoreInput] = useState("");

  // Reset form when student changes
  useEffect(() => {
    if (student) setScoreInput(student.score ? String(student.score) : "");
  }, [student]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity z-40",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col overflow-hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {student && (
          <>
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-800">Detail Siswa</h2>
              <button
                onClick={onClose}
                className="p-2 bg-white hover:bg-slate-200 rounded-full transition-colors border border-slate-200"
              >
                <X size={18} className="text-slate-600" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-400 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                  {student.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-800">{student.name}</h3>
                  <p className="text-sm font-medium text-slate-500">
                    {student.id} &bull; {student.batch}
                  </p>
                  <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                    Usia: {student.age} Tahun
                  </p>
                </div>
              </div>

              {/* Progress Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-700">Progress Pembelajaran</h4>
                  <span className="font-bold text-primary">{student.progress}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden mb-4">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      student.progress === 100 ? "bg-emerald-500" : "bg-primary",
                    )}
                    style={{ width: `${student.progress}%` }}
                  />
                </div>

                {/* Mock Rapor Rinci */}
                <div className="space-y-2 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-600">Bab 0 - Pengantar</span>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-600">Bab 1 - Literasi Digital</span>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-600">Bab 2 - Analogi Pabrik</span>
                    {student.progress > 50 ? (
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                    )}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-600">Bab 3 - Spesifikasi Laptop</span>
                    {student.progress > 80 ? (
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                    )}
                  </div>
                </div>
              </div>

              {/* Final Project Section */}
              <div>
                <h4 className="font-bold text-slate-700 mb-3">Penilaian Final Project</h4>

                {student.fpStatus === "review" && (
                  <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="font-semibold text-amber-800 text-sm">Menunggu Review Anda</p>
                        <p className="text-xs text-amber-700/80 mt-1">
                          Siswa telah mengunggah tautan repositori Final Project. Berikan nilai untuk meluluskannya.
                        </p>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="flex items-center gap-2 p-3 bg-white rounded-xl border border-amber-200 hover:border-amber-400 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-600">
                        <FileText size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-slate-700 group-hover:text-amber-700 truncate">
                          Submission_Final_Project.zip
                        </p>
                        <p className="text-xs text-slate-400">Diunggah {student.lastActive}</p>
                      </div>
                    </a>

                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Nilai Akhir (0-100)
                      </label>
                      <input
                        type="number"
                        value={scoreInput}
                        onChange={(e) => setScoreInput(e.target.value)}
                        placeholder="Contoh: 95"
                        className="w-full px-3 py-2 bg-white border border-amber-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <Button
                      onClick={() => {
                        onUpdateStatus(student.id, "passed", Number(scoreInput) || 80);
                        onClose();
                      }}
                      variant="primary"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-none"
                    >
                      <CheckCircle2 size={16} className="mr-2" />
                      Beri Nilai & Luluskan
                    </Button>
                  </div>
                )}

                {student.fpStatus === "passed" && (
                  <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="font-bold text-emerald-800 flex items-center gap-2">
                        <CheckCircle2 size={18} /> Lulus Final Project
                      </p>
                      <p className="text-sm text-emerald-700 mt-1">
                        Nilai Akhir: <span className="font-bold text-lg">{student.score}</span>
                      </p>
                    </div>
                    <Star size={32} className="text-emerald-400 opacity-50" />
                  </div>
                )}

                {(student.fpStatus === "working" || student.fpStatus === "not_started") && (
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center gap-3">
                    <Clock size={20} className="text-slate-400" />
                    <p className="text-sm font-medium text-slate-600">Siswa belum mengumpulkan Final Project.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex gap-2">
              <Button variant="secondary" className="flex-1 shadow-sm">
                <Send size={16} className="mr-2" /> Kirim Pesan Sistem
              </Button>
              {student.phone && (
                <a
                  href={`https://wa.me/${student.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-sm transition-colors text-sm font-semibold"
                >
                  Hubungi via WA
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default function StudentManagementPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState<Student[]>([]);
  const user = useAuthStore(state => state.user);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedFpStatus, setSelectedFpStatus] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");

  // Slide-over & Modal State
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const activeFilterCount =
    (selectedBatch !== "All" ? 1 : 0) + (selectedFpStatus !== "All" ? 1 : 0) + (selectedAge !== "All" ? 1 : 0);

  useEffect(() => {
    if (!user) return;
    const fetchStudents = async () => {
      try {
        const { teacherService } = await import("@/services/teacher.service");
        const data = await teacherService.getStudents(user.id);
        setStudents(data);
      } catch (err) {
        console.error("Failed to fetch students", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStudents();
  }, [user]);

  const handleUpdateFpStatus = (id: string, newStatus: FpStatus, score: number | null = null) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, fpStatus: newStatus, score: score ?? s.score } : s)));
  };

  if (isLoading) {
    return <StudentManagementSkeleton />;
  }

  const filteredStudents = students.filter((s) => {
    // Text search
    if (!s.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    // Batch filter
    if (selectedBatch !== "All" && s.batch !== selectedBatch) return false;
    // FP Status filter
    if (selectedFpStatus !== "All" && s.fpStatus !== selectedFpStatus) return false;
    // Age filter
    if (selectedAge === "<20" && s.age >= 20) return false;
    if (selectedAge === "20-25" && (s.age < 20 || s.age > 25)) return false;
    if (selectedAge === ">25" && s.age <= 25) return false;

    return true;
  });

  const getFpStatusStyle = (status: FpStatus) => {
    switch (status) {
      case "passed":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "review":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "working":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const selectedStudentData = students.find((s) => s.id === selectedStudentId) || null;

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Data Murid</h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Pantau progress pembelajaran dan Final Project siswa Anda secara komprehensif.
          </p>
        </div>
        <Button variant="primary" className="shadow-sm">
          Ekspor Laporan (.csv)
        </Button>
      </div>

      {students.length === 0 ? (
        <FadeIn className="glass-card p-12 rounded-3xl border border-slate-200/60 shadow-sm bg-white/50 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <Users className="text-slate-400" size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-700 mb-2">Belum Ada Murid</h2>
          <p className="text-slate-500 max-w-sm">
            Anda belum memiliki murid yang terdaftar di kelas Anda. Bagikan kode pendaftaran kelas kepada murid Anda agar mereka dapat bergabung.
          </p>
        </FadeIn>
      ) : (
        <FadeIn className="glass-card p-6 rounded-3xl border border-slate-200/60 shadow-sm bg-white/50">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap w-full gap-3">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Cari nama siswa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                />
              </div>

              {/* Filter Button */}
              <Button
                onClick={() => setIsFilterModalOpen(true)}
                variant="ghost"
                className="bg-white border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <Filter size={16} className="mr-2" />
                Filter
                {activeFilterCount > 0 && (
                  <span className="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </div>
          </div>

        <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b-2 border-slate-100 text-slate-500 text-sm">
                <th className="pb-3 px-4 font-bold uppercase tracking-wider text-xs">Siswa & Usia</th>
                <th className="pb-3 px-4 font-bold uppercase tracking-wider text-xs">Progress Course</th>
                <th className="pb-3 px-4 font-bold uppercase tracking-wider text-xs">Final Project (Klik = Edit)</th>
                <th className="pb-3 px-4 font-bold uppercase tracking-wider text-xs">Terakhir Aktif</th>
                <th className="pb-3 px-4 font-bold uppercase tracking-wider text-xs text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-400 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                          {student.avatar}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 group-hover:text-primary transition-colors">
                            {student.name}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {student.id} &bull; {student.batch} &bull; Usia {student.age}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-2.5 rounded-full bg-slate-200 overflow-hidden shrink-0">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-1000",
                              student.progress === 100 ? "bg-emerald-500" : "bg-primary",
                            )}
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-700 w-9">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="relative inline-block">
                        <select
                          value={student.fpStatus}
                          onChange={(e) => handleUpdateFpStatus(student.id, e.target.value as FpStatus)}
                          className={cn(
                            "appearance-none pl-3 pr-6 py-1.5 rounded-full text-xs font-bold border outline-none cursor-pointer transition-all focus:ring-2",
                            getFpStatusStyle(student.fpStatus),
                          )}
                        >
                          <option value="passed" className="bg-white text-slate-800">
                            ✓ Lulus
                          </option>
                          <option value="review" className="bg-white text-slate-800">
                            ! Perlu Review
                          </option>
                          <option value="working" className="bg-white text-slate-800">
                            ⧗ Pengerjaan
                          </option>
                          <option value="not_started" className="bg-white text-slate-800">
                            ✗ Belum Mulai
                          </option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                          <div className="border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-current" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-slate-600 font-medium">{student.lastActive}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Button
                        onClick={() => setSelectedStudentId(student.id)}
                        variant="glass"
                        size="sm"
                        className="font-semibold text-slate-600 hover:text-primary border-transparent hover:border-primary/20"
                      >
                        Detail
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    <p className="font-semibold text-lg mb-1">Pencarian Tidak Ditemukan</p>
                    <p className="text-sm">Tidak ada data siswa yang cocok dengan kombinasi filter di atas.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </FadeIn>
      )}

      {/* Render Slide-over Panel */}
      <StudentDetailPanel
        student={selectedStudentData}
        isOpen={!!selectedStudentId}
        onClose={() => setSelectedStudentId(null)}
        onUpdateStatus={handleUpdateFpStatus}
      />

      {/* Render Filter Modal */}
      {isFilterModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsFilterModalOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-2xl shadow-xl z-50 p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-slate-800">Filter Data Siswa</h3>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">Pilih Batch</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium text-slate-700"
                >
                  <option value="All">Semua Batch</option>
                  <option value="Batch 5">Batch 5 (Aktif)</option>
                  <option value="Batch 4">Batch 4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">Status Final Project</label>
                <select
                  value={selectedFpStatus}
                  onChange={(e) => setSelectedFpStatus(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium text-slate-700"
                >
                  <option value="All">Semua Status FP</option>
                  <option value="passed">Lulus</option>
                  <option value="review">Perlu Review</option>
                  <option value="working">Pengerjaan</option>
                  <option value="not_started">Belum Mulai</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">Rentang Usia</label>
                <select
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium text-slate-700"
                >
                  <option value="All">Semua Usia</option>
                  <option value="<20">&lt; 20 Tahun</option>
                  <option value="20-25">20 - 25 Tahun</option>
                  <option value=">25">&gt; 25 Tahun</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-slate-100">
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedBatch("All");
                  setSelectedFpStatus("All");
                  setSelectedAge("All");
                }}
                className="text-slate-500 font-semibold"
              >
                Reset
              </Button>
              <Button variant="primary" onClick={() => setIsFilterModalOpen(false)} className="px-6 shadow-sm">
                Terapkan Filter
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
