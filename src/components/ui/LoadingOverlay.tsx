"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

export function LoadingOverlay({ isVisible, message = "Memproses..." }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md"
        >
          <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-sm w-full mx-4 relative overflow-hidden">
            {/* Animated Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-50" />
            
            <div className="relative">
              {/* Outer Spinners */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-primary/30 scale-[1.5]"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/20 scale-[1.2]"
              />
              
              {/* Center Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 relative z-10">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            </div>

            <div className="text-center space-y-2 relative z-10 mt-2">
              <h3 className="text-lg font-bold text-slate-800 tracking-tight">Harap Tunggu</h3>
              <p className="text-sm font-medium text-slate-500 animate-pulse">{message}</p>
            </div>
            
            {/* Loading Bar */}
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative z-10 mt-2">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
