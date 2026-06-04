"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Modal } from "@/components/ui/Modal";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role?: "admin" | "teacher" | "student";
  pageTitle?: string;
}

export function DashboardLayout({ children, role = "student", pageTitle = "Dashboard" }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen w-full flex justify-center">
      <div className="flex h-screen w-full max-w-[1366px] overflow-hidden bg-background">
        {/* Desktop Sidebar */}
        <div className="hidden sm:block w-64 shrink-0">
          <Sidebar role={role} className="bg-white/60 backdrop-blur-xl border-r border-slate-200/50" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/30">
          <Navbar
            onMenuClick={() => setIsMobileMenuOpen(true)}
            title={pageTitle}
            roleBadge={role.charAt(0).toUpperCase() + role.slice(1)}
          />

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 sm:px-8 [scrollbar-width:none] sm:[scrollbar-width:auto] [&::-webkit-scrollbar]:hidden sm:[&::-webkit-scrollbar]:block">
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>
        </div>

        {/* Mobile Menu Drawer (Slide from Left, 80% width) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 sm:hidden flex justify-start">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-[80%] max-w-sm h-full bg-white/50 border-r border-white/20 shadow-2xl flex flex-col"
              >
                <Sidebar role={role} onLinkClick={() => setIsMobileMenuOpen(false)} className="border-none" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
