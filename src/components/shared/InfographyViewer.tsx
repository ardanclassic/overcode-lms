"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfographyViewerProps {
  src: string;
  onCompleted: () => void;
}

export function InfographyViewer({ src, onCompleted }: InfographyViewerProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (hasCompleted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasCompleted(true);
          onCompleted();
        }
      },
      { threshold: 1.0 }
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasCompleted, onCompleted]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setZoomScale(1); // Reset zoom on toggle
  };

  return (
    <>
      <div className="w-full relative group">
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 transition-opacity opacity-0 group-hover:opacity-100">
          <button 
            onClick={toggleFullscreen}
            className="p-3 rounded-full shadow-md backdrop-blur-md transition-colors bg-white/80 text-slate-700 hover:bg-white border border-slate-200"
          >
            <Maximize2 size={20} />
          </button>
        </div>

        <div className="w-full h-[50vh] md:h-[65vh] rounded-3xl border border-slate-200 relative overflow-hidden flex items-center justify-center bg-slate-50 group">
          <img 
            src={src} 
            alt="Infography" 
            className="w-full h-full object-contain cursor-pointer p-4" 
            onClick={toggleFullscreen}
          />
          {/* Invisible ref to trigger completion automatically when rendered */}
          <div ref={bottomRef} className="absolute bottom-0 h-1 w-full opacity-0 pointer-events-none" />
        </div>
      </div>

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
                key={`drag-infography`}
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
                    src={src}
                    alt="Fullscreen View"
                    onLoad={(e) => {
                      setImageSize({ w: e.currentTarget.offsetWidth, h: e.currentTarget.offsetHeight });
                    }}
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      setZoomScale(prev => prev === zoomScale ? (zoomScale < 1.5 ? 2 : 0.5) : zoomScale);
                    }}
                    className="max-w-[none] w-[100vw] h-auto shadow-2xl pointer-events-auto object-contain max-h-[140vh]"
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
                  Infografis Overview
                </span>
              </div>
              <button
                onClick={toggleFullscreen}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all active:scale-95"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* FOOTER: Zoom Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full px-6 z-20 pointer-events-none">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-2 rounded-[2rem] flex items-center gap-1 shadow-2xl pointer-events-auto">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setZoomScale(prev => Math.max(0.5, prev - 0.25))}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-all"
                  >
                    <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
                  </button>

                  <button
                    onClick={() => setZoomScale(1)}
                    className="px-3 min-w-[60px] h-10 md:h-12 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-all group"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] md:text-xs font-black tracking-tighter group-hover:hidden">
                        {Math.round(zoomScale * 100)}%
                      </span>
                      <RotateCcw className="w-4 h-4 hidden group-hover:block" />
                    </div>
                  </button>

                  <button
                    onClick={() => setZoomScale(prev => Math.min(3, prev + 0.25))}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-all"
                  >
                    <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
