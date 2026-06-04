"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Lock, MonitorPlay, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  // Animasi Stagger untuk memunculkan elemen secara berurutan
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary overflow-hidden">
      {/* Background Decor - Ambient Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed top-[40%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] left-[20%] w-[400px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 px-4 sm:px-6 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#9d4edd]" />
              OverCode v1.0 is Live
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500 drop-shadow-sm leading-tight">
            Level Up Your Mind,
            <br className="hidden sm:block" /> Code Your Own <span className="text-primary italic pr-2">Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Platform pembelajaran ekosistem modern yang memaksa Anda untuk menjadi tangguh. Tanpa distraksi, tanpa jalan pintas. Selesaikan materi, atau terkunci selamanya.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-base h-14 px-8 neon-glow-primary-strong group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Mulai Perjalanan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
            <Link href="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="glass" className="w-full text-base h-14 px-8 hover:bg-white/10 transition-colors">
                Masuk Dashboard
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- FEATURES SECTION (Bento Grid) --- */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fitur Tanpa Kompromi</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Kami merancang arsitektur pembelajaran yang memaksa kedisiplinan dan retensi materi tingkat tinggi.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Large Left */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 glass-card p-8 rounded-3xl group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Anti-Skip Mechanism</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Teknologi pemutar video kami mencegah segala upaya untuk melewati materi. Mencoba menggeser *timeline* secara paksa akan mengembalikan Anda ke titik nol. Pahami keseluruhan, bukan sepotong.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Top Right */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl group overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px]" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Gating System</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Materi terkunci secara hierarkis. Selesaikan sesi sebelumnya untuk membuka sesi berikutnya secara *real-time*.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Bottom Right */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
          >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-4">
                  <MonitorPlay size={24} />
                </div>
              <h3 className="text-xl font-bold mb-3">Live Roster</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pengajar memiliki layar radar *real-time* yang mengawasi kehadiran dan memverifikasi akses Anda ke kelas tatap muka.
              </p>
          </motion.div>

          {/* Card 4: Bottom Left Wide */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
          >
                <div className="w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Zustand Global Engine</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Dibangun di atas fondasi *Next.js App Router* dengan *State Management* yang secepat kilat.
                </p>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-slate-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
              O
            </div>
            <div>
              <p className="font-bold text-lg">OverCode</p>
              <p className="text-xs text-muted-foreground">© 2026 All rights reserved.</p>
            </div>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <Link href="#" className="hover:text-foreground transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
