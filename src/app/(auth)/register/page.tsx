
"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { profileService } from "@/services/profile.service";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

const registerSchema = z.object({
  education_level: z.string().min(1, "Pilih jenjang pendidikan"),
  fullName: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  gender: z.string().min(1, "Pilih jenis kelamin"),
  email: z.string().email("Format email tidak valid").or(z.literal("")).optional(),
  parentName: z.string().min(3, "Nama orang tua minimal 3 karakter").or(z.literal("")).optional(),
  parentPhone: z.string().min(10, "Nomor telepon minimal 10 digit").or(z.literal("")).optional(),
  studentPhone: z.string().min(10, "Nomor telepon minimal 10 digit").or(z.literal("")).optional(),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const ED_LEVELS = ["TK", "SD", "SMP", "SMA", "Mahasiswa", "Umum"];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const {
    register,
    trigger,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: { education_level: "" }
  });

  const eduLevel = watch("education_level");
  const genderValue = watch("gender");
  const isKid = eduLevel === "TK" || eduLevel === "SD";

  const dynamicSteps = [
    { id: "education_level", label: "Apa Jenjang Pendidikanmu Saat Ini?", type: "select" },
    { id: "fullName", label: isKid ? "Siapa nama lengkap Anak?" : "Siapa nama lengkapmu?", type: "text", placeholder: "Budi Santoso" },
    { id: "gender", label: isKid ? "Apa jenis kelamin Anak?" : "Apa jenis kelaminmu?", type: "gender_select" },
    ...(isKid ? [
      { id: "parentName", label: "Siapa nama Orang Tua/Wali?", type: "text", placeholder: "Nama Anda" },
      { id: "parentPhone", label: "Nomor WhatsApp Orang Tua?", type: "tel", placeholder: "081234567890", desc: "Kami akan mengirim info kelas ke nomor ini." },
    ] : [
      { id: "email", label: "Apa alamat email aktifmu?", type: "email", placeholder: "budi@example.com" },
      { id: "studentPhone", label: "Berapa nomor WhatsApp-mu?", type: "tel", placeholder: "081234567890" },
    ]),
    { id: "password", label: "Buat password untuk login", type: "password", placeholder: "Rahasia123!" },
  ] as const;

  const nextStep = async () => {
    const fieldName = dynamicSteps[currentStep].id as any;
    const isStepValid = await trigger(fieldName);

    if (isStepValid) {
      if (currentStep < dynamicSteps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit(onSubmit)();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dynamicSteps[currentStep].type !== "select" && dynamicSteps[currentStep].type !== "gender_select") {
        inputRefs.current[currentStep]?.focus();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [currentStep, dynamicSteps]);

  const onSubmit = async (data: RegisterFormValues) => {
    setIsRegistering(true);
    setErrorMsg("");
    try {
      const emailToUse = data.email || `${data.parentPhone}@noemail.com`;
      const passToUse = data.password || "Rahasia123!";
      
      // 1. Sign Up to Supabase Auth
      const authData = await authService.signUp(emailToUse, passToUse, {
        full_name: data.fullName,
        role: "student",
        gender: data.gender,
        education_level: data.education_level,
        parent_name: data.parentName || null,
        parent_phone: data.parentPhone || null,
        student_phone: data.studentPhone || null,
      });
      
      // Profil dan Detail Murid akan otomatis dibuat oleh Database Trigger di Supabase.
      // (Lihat file supabase/add_trigger.sql)

      // Use window.location.href to bypass Next.js client router cache and prevent infinite redirect loop
      window.location.href = "/student";
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Terjadi kesalahan saat mendaftar");
      setIsRegistering(false);
    }
  };

  return (
    <div className="w-full">
      <LoadingOverlay isVisible={isRegistering} message="Menyiapkan ruang belajarmu..." />
      <div className="py-8 flex flex-col relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-200/60">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / dynamicSteps.length) * 100}%` }}
          />
        </div>

        {/* Sliding Window */}
        <div className="overflow-hidden w-full mt-4">
          <motion.div
            className="flex w-full"
            animate={{ x: `-${currentStep * 100}%` }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
          >
            {dynamicSteps.map((step, index) => {
              const { ref, ...rest } = register(step.id as any);
              return (
                <div key={step.id} className="w-full flex-shrink-0 px-1">
                  <div className="mb-6">
                    {errorMsg && (
                      <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                        {errorMsg}
                      </div>
                    )}
                    <span className="text-primary font-bold text-sm mb-2 block">
                      {index + 1} / {dynamicSteps.length}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">{step.label}</h2>
                    {(step as any).desc && <p className="text-slate-500 text-sm font-medium mb-4">{(step as any).desc}</p>}
                  </div>

                  {step.type === "select" ? (
                    <div className="grid grid-cols-2 gap-3">
                      {ED_LEVELS.map((level) => (
                        <div
                          key={level}
                          onClick={() => {
                            setValue("education_level", level);
                            trigger("education_level");
                            setTimeout(nextStep, 300); // Auto next
                          }}
                          className={cn(
                            "p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between",
                            eduLevel === level 
                              ? "border-primary bg-primary/5 text-primary" 
                              : "border-slate-200 bg-white hover:border-primary/30 text-slate-600 hover:bg-slate-50"
                          )}
                        >
                          <span className="font-bold">{level}</span>
                          {eduLevel === level && <Check size={18} />}
                        </div>
                      ))}
                      {errors.education_level && (
                        <p className="text-red-500 text-sm col-span-2 font-medium ml-1 mt-2">{errors.education_level.message}</p>
                      )}
                    </div>
                  ) : step.type === "gender_select" ? (
                    <div className="grid grid-cols-2 gap-3">
                      {[{ label: "Laki-laki", value: "male" }, { label: "Perempuan", value: "female" }].map((g) => (
                        <div
                          key={g.value}
                          onClick={() => {
                            setValue("gender", g.value);
                            trigger("gender");
                            setTimeout(nextStep, 300); // Auto next
                          }}
                          className={cn(
                            "p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between",
                            genderValue === g.value 
                              ? "border-primary bg-primary/5 text-primary" 
                              : "border-slate-200 bg-white hover:border-primary/30 text-slate-600 hover:bg-slate-50"
                          )}
                        >
                          <span className="font-bold">{g.label}</span>
                          {genderValue === g.value && <Check size={18} />}
                        </div>
                      ))}
                      {errors.gender && (
                        <p className="text-red-500 text-sm col-span-2 font-medium ml-1 mt-2">{errors.gender.message}</p>
                      )}
                    </div>
                  ) : (
                    <Input
                      type={step.type}
                      placeholder={(step as any).placeholder}
                      error={errors[step.id as keyof RegisterFormValues]?.message}
                      {...rest}
                      ref={(e) => {
                        ref(e);
                        inputRefs.current[index] = e;
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          nextStep();
                        }
                      }}
                      className="text-lg py-6 px-6 rounded-full bg-slate-50 border-slate-200 text-slate-900 focus:bg-white shadow-sm transition-all"
                    />
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-between px-1">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={currentStep === 0 ? "invisible" : "text-slate-600 hover:text-slate-900"}
          >
            <ArrowLeft size={18} className="mr-2" /> Kembali
          </Button>
          <Button variant="primary" onClick={nextStep} className="px-8 shadow-sm">
            {currentStep === dynamicSteps.length - 1 ? "Daftar Sekarang" : "Lanjut"}
            {currentStep !== dynamicSteps.length - 1 && <ArrowRight size={18} className="ml-2" />}
          </Button>
        </div>
      </div>

      <p className="text-center text-slate-500 mt-8 text-sm font-medium">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-primary hover:text-primary/80 transition-colors font-bold hover:underline">
          Masuk di sini
        </Link>
      </p>
    </div>
  );
}
