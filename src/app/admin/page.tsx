"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { DollarSign, UserCheck, Activity, Search, BookOpen, Link as LinkIcon, Plus, Copy, CheckCircle2, Users, MoreHorizontal } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";

import { adminService } from "@/services/admin.service";

function AdminDashboardSkeleton() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="glass-card p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-slate-200 shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-4 w-24 bg-slate-200 rounded" />
              <div className="h-6 w-32 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="glass-card p-2 rounded-2xl flex gap-2 h-14">
        <div className="flex-1 h-full bg-slate-200 rounded-xl" />
        <div className="flex-1 h-full bg-slate-100 rounded-xl hidden sm:block" />
        <div className="flex-1 h-full bg-slate-100 rounded-xl hidden sm:block" />
        <div className="flex-1 h-full bg-slate-100 rounded-xl hidden sm:block" />
      </div>
      <div className="glass-card p-6 rounded-2xl min-h-[400px]">
        <div className="flex justify-between mb-8">
          <div className="h-6 w-48 bg-slate-200 rounded" />
          <div className="h-10 w-40 bg-slate-200 rounded-lg" />
        </div>
        <div className="space-y-4">
          <div className="h-10 w-full bg-slate-100 rounded" />
          <div className="h-16 w-full bg-slate-100 rounded" />
          <div className="h-16 w-full bg-slate-100 rounded" />
          <div className="h-16 w-full bg-slate-100 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("study_fields"); 

  const [stats, setStats] = useState({ totalRevenue: 0, activeStudents: 0, activeClasses: 0, totalFields: 0 });
  const [studyFields, setStudyFields] = useState<any[]>([]);
  const [copiedTokenId, setCopiedTokenId] = useState<string | null>(null);
  const [topUpRequests, setTopUpRequests] = useState<any[]>([]);
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [rejectConfirmId, setRejectConfirmId] = useState<string | null>(null);
  const [isNewFieldModalOpen, setIsNewFieldModalOpen] = useState(false);
  const [isNewVoucherModalOpen, setIsNewVoucherModalOpen] = useState(false);
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const [globalStats, fields, requests, vouchersData, studentsData] = await Promise.all([
        adminService.getGlobalStats(),
        adminService.getStudyFields(),
        adminService.getTopUpRequests(),
        adminService.getVouchers(),
        adminService.getStudents()
      ]);
      setStats(globalStats);
      setStudyFields(fields);
      setTopUpRequests(requests);
      setVouchers(vouchersData);
      setStudents(studentsData);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApproveTopUp = async (id: string) => {
    try {
      await adminService.updateTopUpStatus(id, 'approved');
      fetchDashboardData(); // Refresh to update revenue and status
    } catch (e) {
      console.error("Failed to approve top up", e);
    }
  };

  const handleRejectTopUp = async () => {
    if (rejectConfirmId) {
      try {
        await adminService.updateTopUpStatus(rejectConfirmId, 'rejected');
        fetchDashboardData();
      } catch (e) {
        console.error("Failed to reject top up", e);
      } finally {
        setRejectConfirmId(null);
      }
    }
  };

  const generateInviteLink = (fieldId: string) => {
    // We will generate a mock token for now until teacher_invitations table is integrated
    const mockToken = "inv-" + Math.random().toString(36).substring(2, 9);
    const link = `${window.location.origin}/register-teacher?token=${mockToken}&field=${fieldId}`;
    navigator.clipboard.writeText(link);
    setCopiedTokenId(fieldId);
    setTimeout(() => setCopiedTokenId(null), 2000);
  };

  if (isLoading) {
    return <AdminDashboardSkeleton />;
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Global Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Revenue", value: `Rp ${stats.totalRevenue.toLocaleString('id-ID')}`, icon: DollarSign, color: "text-green-600 bg-green-100" },
          { title: "Active Students", value: stats.activeStudents, icon: UserCheck, color: "text-blue-600 bg-blue-100" },
          { title: "Active Classes", value: stats.activeClasses, icon: Activity, color: "text-primary bg-primary/20" },
          { title: "Study Fields", value: stats.totalFields, icon: BookOpen, color: "text-purple-600 bg-purple-100" },
        ].map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1} className="glass-card p-5 rounded-2xl flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Main Tabbed Layout */}
      <FadeIn delay={0.4} className="glass-card p-1 rounded-2xl flex flex-wrap gap-2 overflow-x-auto">
        <Button 
          variant={activeTab === "topup" ? "primary" : "ghost"} 
          onClick={() => setActiveTab("topup")}
          className="rounded-xl flex-1 sm:flex-none"
        >
          Top-Up Requests
        </Button>
        <Button 
          variant={activeTab === "vouchers" ? "primary" : "ghost"} 
          onClick={() => setActiveTab("vouchers")}
          className="rounded-xl flex-1 sm:flex-none"
        >
          Voucher Promos
        </Button>
        <Button 
          variant={activeTab === "study_fields" ? "primary" : "ghost"} 
          onClick={() => setActiveTab("study_fields")}
          className="rounded-xl flex-1 sm:flex-none"
        >
          Study Fields & Teachers
        </Button>
        <Button 
          variant={activeTab === "students" ? "primary" : "ghost"} 
          onClick={() => setActiveTab("students")}
          className="rounded-xl flex-1 sm:flex-none"
        >
          Student Management
        </Button>
      </FadeIn>

      {/* TABS CONTENT */}

      {activeTab === "topup" && (
        <FadeIn className="glass-card p-6 rounded-2xl min-h-[400px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h3 className="font-bold text-xl">Token Top-Up Verification Queue</h3>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 w-full sm:w-auto">
              <Search size={16} className="text-slate-400" />
              <input type="text" placeholder="Cari Guru..." className="bg-transparent border-none outline-none text-sm w-full text-slate-800 placeholder:text-slate-400" />
            </div>
          </div>
          
          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm">
                  <th className="pb-3 px-4">Guru</th>
                  <th className="pb-3 px-4">Tanggal</th>
                  <th className="pb-3 px-4">Nominal Top-Up</th>
                  <th className="pb-3 px-4">Status</th>
                  <th className="pb-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {topUpRequests.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">{row.teacher}</td>
                    <td className="py-4 px-4 text-sm text-slate-500">{row.date}</td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">{row.nominal} <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded ml-1">{row.token}</span></td>
                    <td className="py-4 px-4">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs border font-medium",
                        row.status === "Pending" ? "bg-amber-50 text-amber-600 border-amber-200" :
                        row.status === "Approved" ? "bg-green-50 text-green-600 border-green-200" :
                        "bg-red-50 text-red-600 border-red-200"
                      )}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      {row.status === "Pending" ? (
                        <>
                          <Button onClick={() => handleApproveTopUp(row.id)} variant="primary" size="sm" className="mr-2">Approve</Button>
                          <Button onClick={() => setRejectConfirmId(row.id)} variant="danger" size="sm">Reject</Button>
                        </>
                      ) : (
                        <span className="text-xs text-slate-400 italic">Selesai</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      )}

      {activeTab === "study_fields" && (
        <FadeIn className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-bold text-xl text-slate-800">Manage Study Fields</h3>
              <p className="text-sm text-slate-500">Buat bidang studi baru dan rekrut guru melalui Link Undangan Spesifik.</p>
            </div>
            <Button variant="primary" className="gap-2" onClick={() => setIsNewFieldModalOpen(true)}>
              <Plus size={18} />
              Bidang Studi Baru
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyFields.map((field) => (
              <div key={field.id} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                <div className="p-6 flex-1">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">{field.title}</h4>
                  
                  <div className="flex gap-4 text-sm text-slate-500 mt-4">
                    <div className="flex items-center gap-1.5">
                      <Users size={16} />
                      <span>{field.teachersCount} Pengajar</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <UserCheck size={16} />
                      <span>{field.studentsCount} Siswa</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <Button 
                    variant={copiedTokenId === field.id ? "primary" : "ghost"}
                    className="w-full justify-center gap-2"
                    onClick={() => generateInviteLink(field.id)}
                  >
                    {copiedTokenId === field.id ? (
                      <>
                        <CheckCircle2 size={16} />
                        Link Disalin!
                      </>
                    ) : (
                      <>
                        <LinkIcon size={16} />
                        Generate Teacher Invite
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      {activeTab === "vouchers" && (
        <FadeIn className="glass-card p-6 rounded-2xl min-h-[400px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="font-bold text-xl">Voucher Promosi Top-Up</h3>
              <p className="text-sm text-slate-500">Buat kode promo untuk memberikan bonus token bagi guru.</p>
            </div>
            <Button variant="primary" className="gap-2" onClick={() => setIsNewVoucherModalOpen(true)}>
              <Plus size={18} />
              Voucher Baru
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {vouchers.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                Belum ada voucher promosi.
              </div>
            ) : vouchers.map(voucher => (
              <div key={voucher.id} className="border border-slate-200 rounded-xl p-5 bg-white relative overflow-hidden group">
                {voucher.is_active && <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">AKTIF</div>}
                {!voucher.is_active && <div className="absolute top-0 right-0 bg-slate-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">NONAKTIF</div>}
                
                <h4 className="font-mono text-xl font-black text-slate-800 mb-1">{voucher.code}</h4>
                <p className="text-sm font-semibold text-primary mb-4">Bonus Top-Up +{voucher.bonus_percentage}%</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-600">Digunakan: {voucher.usage_count || 0} kali</span>
                  {voucher.is_active && (
                    <Button variant="secondary" size="sm" onClick={async () => {
                      await adminService.deactivateVoucher(voucher.id);
                      fetchDashboardData();
                    }}>Nonaktifkan</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      {activeTab === "students" && (
        <FadeIn className="glass-card p-6 rounded-2xl min-h-[400px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="font-bold text-xl">Global Student Management</h3>
              <p className="text-sm text-slate-500">Daftar semua siswa terdaftar di seluruh bidang studi platform.</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 w-full sm:w-auto">
              <Search size={16} className="text-slate-400" />
              <input type="text" placeholder="Cari Siswa..." className="bg-transparent border-none outline-none text-sm w-full text-slate-800 placeholder:text-slate-400" />
            </div>
          </div>
          
          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm">
                  <th className="pb-3 px-4">Nama Siswa</th>
                  <th className="pb-3 px-4">Email</th>
                  <th className="pb-3 px-4">Bergabung</th>
                  <th className="pb-3 px-4 text-center">Kelas Aktif</th>
                  <th className="pb-3 px-4">Status</th>
                  <th className="pb-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {students.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-800">{row.name}</td>
                    <td className="py-4 px-4 text-sm text-slate-500">{row.email}</td>
                    <td className="py-4 px-4 text-sm text-slate-500">{row.joined}</td>
                    <td className="py-4 px-4 text-center font-semibold text-primary">{row.activeClasses}</td>
                    <td className="py-4 px-4">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs border font-medium",
                        row.status === "Active" ? "bg-green-50 text-green-600 border-green-200" : "bg-red-50 text-red-600 border-red-200"
                      )}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 rounded-md border border-slate-200 shadow-sm">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      )}

      {/* Reject Top-Up Confirm Modal */}
      <Modal isOpen={!!rejectConfirmId} onClose={() => setRejectConfirmId(null)} title="Tolak Permintaan Top-Up?">
        <div className="space-y-4">
          <p className="text-slate-600 text-sm">Apakah Anda yakin ingin menolak permohonan Top-Up ini? Guru yang bersangkutan tidak akan menerima token yang diminta.</p>
          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <Button type="button" onClick={() => setRejectConfirmId(null)} variant="ghost" className="flex-1">Batal</Button>
            <Button onClick={handleRejectTopUp} variant="danger" className="flex-1">Ya, Tolak</Button>
          </div>
        </div>
      </Modal>

      {/* New Study Field Modal */}
      <Modal isOpen={isNewFieldModalOpen} onClose={() => setIsNewFieldModalOpen(false)} title="Bidang Studi Baru">
        <form onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const title = formData.get("title") as string;
          try {
            await adminService.createStudyField(title);
            fetchDashboardData();
            setIsNewFieldModalOpen(false);
          } catch (err) {
            console.error("Failed to create study field", err);
          }
        }} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase">Nama Bidang Studi</label>
            <input name="title" required type="text" placeholder="Contoh: Digital Marketing" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <Button type="button" onClick={() => setIsNewFieldModalOpen(false)} variant="ghost" className="flex-1">Batal</Button>
            <Button type="submit" variant="primary" className="flex-1">Buat Bidang Studi</Button>
          </div>
        </form>
      </Modal>

      {/* New Voucher Modal */}
      <Modal isOpen={isNewVoucherModalOpen} onClose={() => setIsNewVoucherModalOpen(false)} title="Voucher Promo Baru">
        <form onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const code = formData.get("code") as string;
          const bonus = parseInt(formData.get("bonus") as string);
          try {
            await adminService.createVoucher(code, bonus);
            fetchDashboardData();
            setIsNewVoucherModalOpen(false);
          } catch (err) {
            console.error("Failed to create voucher", err);
          }
        }} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase">Kode Voucher</label>
            <input name="code" required type="text" placeholder="Contoh: PROMO2026" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold uppercase outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase">Bonus Token (%)</label>
            <input name="bonus" required type="number" placeholder="Contoh: 50" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <Button type="button" onClick={() => setIsNewVoucherModalOpen(false)} variant="ghost" className="flex-1">Batal</Button>
            <Button type="submit" variant="primary" className="flex-1">Buat Voucher</Button>
          </div>
        </form>
      </Modal>

    </div>
  );
}
