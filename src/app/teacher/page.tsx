
"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckSquare, Users, AlertTriangle, Coins, CheckCircle2, BookOpen, Plus } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import { teacherService } from "@/services/teacher.service";
import { useAuthStore } from "@/store/useAuthStore";

function TeacherDashboardSkeleton() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-pulse">
      <div className="glass p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-2 w-full sm:w-auto">
          <div className="h-6 w-48 bg-slate-200 rounded" />
          <div className="h-4 w-64 bg-slate-200 rounded" />
        </div>
        <div className="h-12 w-40 bg-slate-200 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="glass-card p-5 rounded-2xl">
            <div className="h-6 w-48 bg-slate-200 rounded mb-6" />
            <div className="space-y-3">
              <div className="h-12 w-full bg-slate-100 rounded-lg" />
              <div className="h-12 w-full bg-slate-100 rounded-lg" />
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl bg-slate-50 border-slate-100">
            <div className="h-6 w-40 bg-slate-200 rounded mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-5/6 bg-slate-200 rounded" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-5 rounded-2xl flex flex-col h-full min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <div className="h-6 w-48 bg-slate-200 rounded" />
              <div className="h-8 w-32 bg-slate-200 rounded-lg" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200" />
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-slate-200 rounded" />
                      <div className="h-3 w-16 bg-slate-200 rounded" />
                    </div>
                  </div>
                  <div className="h-8 w-24 bg-slate-200 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeacherDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const user = useAuthStore(state => state.user);

  // States
  const [tokens, setTokens] = useState(0);
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [topUpVoucher, setTopUpVoucher] = useState("");
  const [topUpSuccess, setTopUpSuccess] = useState(false);
  const [courseName, setCourseName] = useState("Memuat Kelas...");

  const [targets, setTargets] = useState<any[]>([]);
  const [roster, setRoster] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    
    const fetchDashboard = async () => {
      try {
        const data = await teacherService.getDashboardData(user.id);
        setTokens(data.tokens);
        setTargets(data.targets);
        setRoster(data.roster);
        setCourseName(data.courseName);
      } catch (err) {
        console.error("Failed to fetch dashboard", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDashboard();
  }, [user]);

  const toggleTarget = (id: number) => {
    setTargets(targets.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const handleVerify = (id: string) => {
    setRoster(roster.map(r => r.id === id ? { ...r, status: "unlocked" } : r));
  };

  const handleUnlockAll = () => {
    setRoster(roster.map(r => ({ ...r, status: "unlocked" })));
  };

  const handleTopUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    try {
      await teacherService.createTopUpRequest(user.id, parseInt(topUpAmount), topUpVoucher);
      setTopUpSuccess(true);
      setTimeout(() => {
        setIsTopUpModalOpen(false);
        setTopUpSuccess(false);
        setTopUpAmount("");
        setTopUpVoucher("");
      }, 2000);
    } catch (err) {
      console.error("Failed to top up", err);
      alert("Gagal melakukan top-up. Pastikan nominal valid.");
    }
  };

  if (isLoading) {
    return <TeacherDashboardSkeleton />;
  }

  const allUnlocked = roster.every(r => r.status === "unlocked");

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Top Monitor & Token Balance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Saldo Token Widget */}
        <FadeIn delay={0.1} className="glass p-5 rounded-2xl flex items-center justify-between gap-4 bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/50 shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10 text-amber-500">
            <Coins size={80} />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1.5">Kuota Kursi (Token)</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-slate-800">{tokens}</span>
              <span className="text-sm font-semibold text-amber-700/80">Siswa</span>
            </div>
          </div>
          <Button 
            onClick={() => setIsTopUpModalOpen(true)}
            variant="primary" 
            className="relative z-10 bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20 border-none font-bold"
          >
            Top-Up
          </Button>
        </FadeIn>
      </div>

      {(targets.length > 0 || roster.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Teleprompter */}
          {targets.length > 0 && (
            <div className="space-y-6">
              <FadeIn delay={0.1} className="glass-card p-6 rounded-3xl shadow-sm border border-slate-200/60 bg-white/50">
                <h3 className="font-bold text-xl mb-5 flex items-center gap-2.5 text-slate-800">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <CheckSquare size={20} />
                  </div>
                  Target Pembelajaran
                </h3>
                <ul className="space-y-3">
                  {targets.map(target => (
                    <li 
                      key={target.id}
                      onClick={() => toggleTarget(target.id)}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer group",
                        target.done ? "bg-emerald-50/50 border-emerald-100" : "bg-white border-slate-200 hover:border-primary/30 hover:shadow-sm"
                      )}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded border mt-0.5 flex items-center justify-center transition-colors shrink-0",
                        target.done ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 group-hover:border-primary"
                      )}>
                        {target.done && <CheckSquare size={14} className="stroke-[3]" />}
                      </div>
                      <span className={cn(
                        "text-sm font-medium transition-all leading-relaxed",
                        target.done ? "text-slate-400 line-through" : "text-slate-700"
                      )}>
                        {target.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.2} className="glass-card p-6 rounded-3xl bg-red-50 border border-red-100 shadow-sm">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2.5 text-red-700">
                  <div className="p-2 rounded-lg bg-red-100 text-red-600">
                    <AlertTriangle size={20} />
                  </div>
                  Antisipasi Eror
                </h3>
                <p className="text-sm text-red-800/80 leading-relaxed font-medium">
                  Jika siswa menemui <strong>Eror 404 Supabase</strong>, minta mereka mengecek kembali nama tabel di file <code>schema.sql</code> agar sama persis huruf besar/kecilnya dengan kode di React.
                </p>
              </FadeIn>
            </div>
          )}

          {/* Right: Roster & Live Gating */}
          {roster.length > 0 && (
            <div className="space-y-6">
              <FadeIn delay={0.3} className="glass-card p-6 rounded-3xl flex flex-col h-full shadow-sm border border-slate-200/60 bg-white/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h3 className="font-bold text-xl flex items-center gap-2.5 text-slate-800">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <Users size={20} />
                    </div>
                    Roster Siswa & Gating
                  </h3>
                  <Button 
                    onClick={handleUnlockAll}
                    disabled={allUnlocked}
                    variant="secondary" 
                    size="sm"
                    className={cn("font-bold transition-all", allUnlocked ? "opacity-50 cursor-not-allowed" : "hover:bg-primary hover:text-white hover:border-primary")}
                  >
                    {allUnlocked ? "All Unlocked" : "Unlock All Present"}
                  </Button>
                </div>
                
                <div className="space-y-3 flex-1 overflow-y-auto pr-2">
                  {roster.map((r) => (
                    <div key={r.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 border border-slate-300 flex items-center justify-center font-black shadow-sm shrink-0">
                          {r.id}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{r.name}</p>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Progress: {r.progress}%</p>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleVerify(r.id)}
                        variant={r.status === "unlocked" ? "primary" : "secondary"} 
                        className={cn(
                          "w-full sm:w-auto font-bold transition-all shrink-0",
                          r.status === "unlocked" 
                            ? "bg-emerald-500 hover:bg-emerald-600 border-none shadow-md shadow-emerald-500/20 text-white" 
                            : "text-slate-600 hover:text-primary hover:bg-primary/5 hover:border-primary/30"
                        )}
                      >
                        {r.status === "unlocked" ? (
                          <><CheckCircle2 size={16} className="mr-2" /> Hadir (Unlocked)</>
                        ) : "Verify Attendance"}
                      </Button>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      )}

      {targets.length === 0 && roster.length === 0 && (
        <FadeIn delay={0.2} className="glass-card p-12 mt-6 rounded-3xl border border-slate-200/60 shadow-sm bg-white/50 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <BookOpen className="text-slate-400" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Belum Ada Kelas Aktif</h2>
          <p className="text-slate-500 max-w-md mb-8">
            Anda belum membuat kelas atau materi apapun. Mulai buat materi pembelajaran pertama Anda untuk membagikan ilmu ke murid-murid!
          </p>
          <Link href="/teacher/materials">
            <Button variant="primary" className="shadow-lg shadow-primary/20 px-8 py-3 h-auto font-bold text-base">
              <Plus className="mr-2" size={20} />
              Mulai Kelola Materi
            </Button>
          </Link>
        </FadeIn>
      )}

      {/* Top-Up Modal */}
      <Modal isOpen={isTopUpModalOpen} onClose={() => !topUpSuccess && setIsTopUpModalOpen(false)} title="Permintaan Top-Up Token">
        {topUpSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-2">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Permintaan Terkirim!</h3>
            <p className="text-slate-500 text-sm max-w-[250px] mx-auto">
              Admin akan segera memverifikasi permintaan Top-Up Anda.
            </p>
          </div>
        ) : (
          <form onSubmit={handleTopUpSubmit} className="space-y-5">
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex items-start gap-3">
              <Coins className="text-amber-500 shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-amber-800 leading-relaxed font-medium">
                Token digunakan sebagai kuota kelas. Satu token mewakili satu kursi siswa per bidang studi.
              </p>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jumlah Token (Rp 10.000 / Token)</label>
              <input 
                type="number" 
                required
                value={topUpAmount}
                onChange={e => setTopUpAmount(e.target.value)}
                placeholder="Contoh: 10" 
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Voucher Promo (Opsional)</label>
              <input 
                type="text" 
                value={topUpVoucher}
                onChange={e => setTopUpVoucher(e.target.value)}
                placeholder="Masukkan kode promo jika ada..." 
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold uppercase outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              />
            </div>
            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <Button type="button" onClick={() => setIsTopUpModalOpen(false)} variant="ghost" className="flex-1">Batal</Button>
              <Button type="submit" variant="primary" className="flex-1 bg-amber-500 hover:bg-amber-600 border-none shadow-md">Kirim Permintaan</Button>
            </div>
          </form>
        )}
      </Modal>

    </div>
  );
}
