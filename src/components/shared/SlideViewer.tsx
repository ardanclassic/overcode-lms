"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, CheckCircle, Maximize2, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideViewerProps {
  slides: string[];
  onCompleted: () => void;
}

export function SlideViewer({ slides, onCompleted }: SlideViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [windowSize, setWindowSize] = useState({ w: 1200, h: 800 });

  const [imageSize, setImageSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
      const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (!hasCompleted) {
        setHasCompleted(true);
        onCompleted();
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col transition-all duration-300 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        {/* Viewer Area */}
        <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden bg-slate-100 group">
          <button 
            onClick={() => { setIsFullscreen(true); setZoomScale(1); }}
            className="absolute top-4 right-4 z-10 p-3 rounded-full shadow-md backdrop-blur-md transition-colors opacity-0 group-hover:opacity-100 bg-white/80 text-slate-700 hover:bg-white border border-slate-200"
          >
            <Maximize2 size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={() => { setIsFullscreen(true); setZoomScale(1); }}
            />
          </AnimatePresence>
          
          {/* Progress Indicator */}
          <div className="absolute bottom-4 right-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-sm border bg-white/90 text-slate-700 border-slate-200">
            Slide {currentIndex + 1} / {slides.length}
          </div>
        </div>

        {/* Controls */}
        <div className="p-3 sm:p-4 flex items-center justify-between bg-white border-t border-slate-100">
          <Button 
            variant="ghost" 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="px-2 sm:px-4"
          >
            <ChevronLeft size={20} className="sm:mr-2" /> 
            <span className="hidden sm:inline">Sebelumnya</span>
          </Button>
          
          <Button 
            onClick={handleNext}
            className={cn(
              "px-3 sm:px-4",
              currentIndex === slides.length - 1 && !hasCompleted ? "neon-glow-primary" : ""
            )}
            variant={hasCompleted && currentIndex === slides.length - 1 ? "secondary" : "primary"}
          >
            {currentIndex === slides.length - 1 ? (
              hasCompleted ? (
                <span className="flex items-center gap-1.5 sm:gap-2"><CheckCircle size={18} /> Selesai</span>
              ) : "Selesaikan Sesi"
            ) : (
              <span className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">Selanjutnya</span> 
                <ChevronRight size={20} />
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* FULLSCREEN OVERLAY MODAL */}
      <AnimatePresence mode="wait">
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl touch-none overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <motion.div
                key={`drag-slide-${currentIndex}`}
                drag
                dragConstraints={{
                  left: -(Math.max(0, (imageSize.w || windowSize.w) * zoomScale - windowSize.w) / 2 + 50),
                  right: Math.max(0, (imageSize.w || windowSize.w) * zoomScale - windowSize.w) / 2 + 50,
                  top: -(Math.max(0, (imageSize.h || windowSize.h) * zoomScale - windowSize.h) / 2 + 50),
                  bottom: Math.max(0, (imageSize.h || windowSize.h) * zoomScale - windowSize.h) / 2 + 50,
                }}
                dragElastic={0.1}
                dragMomentum={true}
                className="relative pointer-events-auto flex items-center justify-center"
                style={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  animate={{ scale: zoomScale }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative select-none"
                >
                  <img
                    src={slides[currentIndex]}
                    alt="Fullscreen View"
                    onLoad={(e) => {
                      setImageSize({ w: e.currentTarget.offsetWidth, h: e.currentTarget.offsetHeight });
                    }}
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      setZoomScale(prev => prev === zoomScale ? (zoomScale < 1.5 ? 2 : 0.5) : zoomScale);
                    }}
                    className="w-[90vw] md:w-[80vw] h-auto object-contain shadow-2xl rounded-xl pointer-events-auto max-h-[90vh]"
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* HEADER */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex items-center justify-between pointer-events-none z-20">
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                  Slide {currentIndex + 1} / {slides.length}
                </span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all active:scale-95"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* FOOTER: Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full px-6 z-20 pointer-events-none">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-2 rounded-[2rem] flex items-center gap-1 shadow-2xl pointer-events-auto">
                <div className="flex items-center gap-1">
                  <button onClick={() => setZoomScale(prev => Math.max(0.5, prev - 0.25))} className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-all">
                    <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
                  </button>

                  <button onClick={() => setZoomScale(1)} className="px-3 min-w-[60px] h-10 md:h-12 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-all group">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] md:text-xs font-black tracking-tighter group-hover:hidden">
                        {Math.round(zoomScale * 100)}%
                      </span>
                      <RotateCcw className="w-4 h-4 hidden group-hover:block" />
                    </div>
                  </button>

                  <button onClick={() => setZoomScale(prev => Math.min(3, prev + 0.25))} className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-all">
                    <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>

              {/* Compact Dots */}
              <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/40 backdrop-blur-md rounded-full border border-white/5 shadow-lg pointer-events-auto">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setZoomScale(1); setCurrentIndex(i); }}
                    className={cn(
                      "w-1 h-1 rounded-full transition-all hover:scale-150",
                      i === currentIndex ? "bg-indigo-500 w-3 shadow-[0_0_8px_rgba(99,102,241,0.4)]" : "bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* SIDE NAVIGATION */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-8 pointer-events-none z-30">
              <button
                disabled={currentIndex === 0}
                onClick={() => { setZoomScale(1); setCurrentIndex(prev => prev - 1); }}
                className={cn(
                  "pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all shadow-2xl hover:scale-110 active:scale-95 group",
                  currentIndex === 0 && "opacity-0 pointer-events-none"
                )}
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                disabled={currentIndex === slides.length - 1}
                onClick={() => { setZoomScale(1); setCurrentIndex(prev => prev + 1); }}
                className={cn(
                  "pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all shadow-2xl hover:scale-110 active:scale-95 group",
                  currentIndex === slides.length - 1 && "opacity-0 pointer-events-none"
                )}
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
