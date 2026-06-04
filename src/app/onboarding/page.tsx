"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import { BookOpen, CheckCircle2, MonitorPlay, Puzzle, Briefcase } from "lucide-react";

// Mock Data for Study Fields
const MOCK_STUDY_FIELDS = [
  { id: "sf1", title: "Vibe Coding (Web Based)", icon: MonitorPlay, description: "Belajar membuat aplikasi web modern dari nol." },
  { id: "sf2", title: "Scratch (for Kids)", icon: Puzzle, description: "Pengenalan logika pemrograman interaktif untuk anak." },
  { id: "sf3", title: "English for Business", icon: Briefcase, description: "Tingkatkan skill komunikasi bahasa Inggris profesional." },
];

function OnboardingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "student"; // Default to student for testing
  
  const [step, setStep] = useState(1);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [isFinishing, setIsFinishing] = useState(false);

  const selectField = (id: string) => {
    setSelectedField(id);
  };

  const handleFinish = () => {
    setIsFinishing(true);
    // Mock save to DB
    setTimeout(() => {
      // Redirect based on role
      if (role === "teacher") {
        router.push("/teacher/curriculum");
      } else {
        router.push("/student/course");
      }
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
          <div className={`w-16 h-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
        </div>
      </div>

      {step === 1 && (
        <FadeIn className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Selamat Datang di OverCode!
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {role === "teacher" 
              ? "Akun pengajar Anda telah berhasil dibuat. Sebelum Anda mulai membuat materi kelas yang luar biasa, mari atur bidang studi yang akan Anda ampu."
              : "Akun belajar Anda sudah aktif. Mari kita sesuaikan pengalaman belajar Anda dengan memilih bidang studi yang paling Anda minati."}
          </p>
          <Button size="lg" className="px-12 py-6 text-lg rounded-full" onClick={() => setStep(2)}>
            Lanjutkan Setup <BookOpen size={20} className="ml-2" />
          </Button>
        </FadeIn>
      )}

      {step === 2 && (
        <FadeIn className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Pilih Bidang Studi
            </h1>
            <p className="text-slate-600">
              {role === "teacher" 
                ? "Pilih satu bidang studi yang akan Anda buat materinya."
                : "Pilih jalur pembelajaran yang ingin Anda kuasai."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_STUDY_FIELDS.map((field) => {
              const isSelected = selectedField === field.id;
              return (
                <div 
                  key={field.id}
                  onClick={() => selectField(field.id)}
                  className={`relative p-6 rounded-3xl cursor-pointer transition-all duration-300 border-2 ${
                    isSelected 
                      ? "border-primary bg-primary/5 shadow-md scale-[1.02]" 
                      : "border-slate-100 bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  {/* Selection Checkmark */}
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected ? "border-primary bg-primary text-white" : "border-slate-300 bg-transparent"
                  }`}>
                    {isSelected && <CheckCircle2 size={14} />}
                  </div>

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    isSelected ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    <field.icon size={28} />
                  </div>

                  <h3 className="font-bold text-xl text-slate-800 mb-2">{field.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{field.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
            <Button variant="ghost" onClick={() => setStep(1)}>Kembali</Button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 font-medium">
                {selectedField ? "1 bidang dipilih" : "Belum memilih"}
              </span>
              <Button 
                variant="primary" 
                size="lg" 
                disabled={!selectedField || isFinishing}
                onClick={handleFinish}
              >
                {isFinishing 
                  ? "Menyimpan Konfigurasi..." 
                  : (role === "teacher" ? "Mulai Mengajar" : "Mulai Belajar")
                }
              </Button>
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/20">
      {/* Header Minimal */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
          O
        </div>
        <span className="font-bold text-xl text-slate-800">OverCode</span>
      </header>
      
      <Suspense fallback={<div className="flex justify-center p-20"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <OnboardingFlow />
      </Suspense>
    </div>
  );
}
