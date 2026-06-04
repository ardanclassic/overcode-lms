"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
}

interface QuizViewerProps {
  questions: QuizQuestion[];
  onCompleted: () => void;
}

export function QuizViewer({ questions, onCompleted }: QuizViewerProps) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  const currentQ = questions[currentQIndex];
  
  const handleSelect = (optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQIndex]: optionIndex });
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Calculate score
      let correct = 0;
      questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.answerIndex) correct++;
      });
      
      const passed = correct === questions.length; // Harus 100% benar untuk lulus
      setIsPassed(passed);
      setIsFinished(true);
      
      if (passed) {
        onCompleted();
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setIsPassed(false);
  };

  if (isFinished) {
    return (
      <div className="w-full glass-card p-10 rounded-3xl text-center space-y-6">
        <div className="flex justify-center">
          {isPassed ? (
            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
              <CheckCircle size={40} />
            </div>
          ) : (
            <div className="w-20 h-20 bg-destructive/20 text-destructive rounded-full flex items-center justify-center">
              <AlertTriangle size={40} />
            </div>
          )}
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-2 text-slate-800">{isPassed ? "Kuis Lulus Sempurna!" : "Kuis Gagal"}</h2>
          <p className="text-slate-600">
            {isPassed 
              ? "Luar biasa. Sesi berikutnya telah terbuka untuk Anda." 
              : "Anda harus menjawab semua pertanyaan dengan benar untuk melanjutkan."}
          </p>
        </div>

        {!isPassed && (
          <Button onClick={resetQuiz} className="neon-glow-primary">
            Ulangi Kuis
          </Button>
        )}
      </div>
    );
  }

  const hasSelected = selectedAnswers[currentQIndex] !== undefined;

  return (
    <div className="w-full bg-white border border-slate-200 shadow-sm p-6 md:p-8 rounded-3xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-bold text-lg text-primary">Pertanyaan {currentQIndex + 1} dari {questions.length}</h3>
        <div className="flex gap-2">
          {questions.map((_, idx) => (
            <div key={idx} className={cn("w-2 h-2 rounded-full transition-colors", 
              idx === currentQIndex ? "bg-primary" : idx < currentQIndex ? "bg-primary/40" : "bg-slate-200"
            )} />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold leading-relaxed">{currentQ.question}</h2>
          
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all duration-300",
                  selectedAnswers[currentQIndex] === idx 
                    ? "bg-primary/10 border-primary text-slate-900 font-medium" 
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-600"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-colors shrink-0",
                    selectedAnswers[currentQIndex] === idx ? "border-primary bg-primary text-white" : "border-slate-300 bg-white"
                  )}>
                    {String.fromCharCode(65 + idx)} {/* A, B, C, D */}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-end">
        <Button onClick={handleNext} disabled={!hasSelected}>
          {currentQIndex === questions.length - 1 ? "Selesaikan Kuis" : "Pertanyaan Selanjutnya"}
        </Button>
      </div>
    </div>
  );
}
