"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, LayoutDashboard, Settings, Users, LogOut, Calendar } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useProgressStore } from "@/store/useProgressStore";

interface SidebarProps {
  className?: string;
  onLinkClick?: () => void;
  role?: "admin" | "teacher" | "student";
}

export function Sidebar({ className, onLinkClick, role = "student" }: SidebarProps) {
  const pathname = usePathname();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const isEnrolled = useProgressStore((state) => state.isEnrolled);

  const links = {
    admin: [{ href: "/admin", label: "Overview", icon: LayoutDashboard }],
    teacher: [
      { href: "/teacher", label: "Dashboard", icon: LayoutDashboard },
      { href: "/teacher/students", label: "Data Murid", icon: Users },
      { href: "/teacher/materials", label: "Kelola Materi", icon: BookOpen },
      { href: "/teacher/preview", label: "Preview Materi", icon: BookOpen },
      { href: "/teacher/schedule", label: "Jadwal Sesi", icon: Calendar },
      { href: "/teacher/settings", label: "Pengaturan", icon: Settings },
    ],
    student: [
      { href: "/student", label: "Dashboard", icon: LayoutDashboard },
      { href: "/student/course", label: "Kelas Saya", icon: BookOpen },
      { href: "/student/enroll", label: "Join Class", icon: BookOpen },
      { href: "/student/settings", label: "Profil Saya", icon: Settings },
    ],
  };

  const currentLinks = links[role].filter((link) => {
    // Sembunyikan menu Learning Path jika murid belum mendaftar di kelas apapun
    if (role === "student" && link.href === "/student/course" && !isEnrolled) {
      return false;
    }
    return true;
  });

  return (
    <>
      <aside className={cn("flex flex-col h-full shadow-sm", className)}>
        <div className="p-4 sm:p-6 shrink-0">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary">O</span>
            </div>
            <span>OverCode</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {currentLinks.map((link) => {
            // Tautan dianggap aktif jika persis sama (misal /teacher)
            // ATAU jika ini adalah sub-rute (misal /teacher/students/123), tapi BUKAN untuk root role (/teacher, /admin, /student)
            const isRootRolePath = link.href === `/${role}`;
            const isActive = pathname === link.href || (!isRootRolePath && pathname.startsWith(`${link.href}/`));
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-semibold",
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-700 hover:bg-white/60 hover:text-slate-900",
                )}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 shrink-0 border-t border-slate-200/50">
          <button
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center w-full gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-semibold text-red-600 hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      <Modal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        title="Konfirmasi Logout"
        footer={
          <div className="flex flex-col sm:flex-row justify-end gap-3 w-full">
            <Button variant="ghost" className="w-full sm:w-auto" onClick={() => setIsLogoutModalOpen(false)}>
              Batal
            </Button>
            <Button
              variant="danger"
              className="w-full sm:w-auto"
              onClick={() => {
                setIsLogoutModalOpen(false);
                // Handle actual logout logic here
              }}
            >
              Ya, Logout
            </Button>
          </div>
        }
      >
        <p className="text-muted-foreground">
          Apakah Anda yakin ingin keluar dari sesi ini? Anda harus login kembali untuk masuk ke dalam Dashboard.
        </p>
      </Modal>
    </>
  );
}
