"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";

interface NavbarProps {
  onMenuClick: () => void;
  title?: string;
  roleBadge?: string;
}

export function Navbar({ onMenuClick, title = "Dashboard", roleBadge = "Student" }: NavbarProps) {
  const user = useAuthStore((state) => state.user);
  
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 h-14 sm:h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shrink-0 shadow-sm">
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="sm:hidden -ml-2 text-muted-foreground" 
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </Button>
        <h1 className="font-semibold text-lg sm:text-xl truncate">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/20">
          {roleBadge}
        </div>
        <Link 
          href={`/${user?.role || 'student'}/settings`}
          className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold shrink-0 overflow-hidden text-slate-600 hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer"
        >
          {user?.avatar ? (
            <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            user?.name ? user.name.charAt(0).toUpperCase() : "U"
          )}
        </Link>
      </div>
    </header>
  );
}
