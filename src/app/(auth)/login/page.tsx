"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { authService } from "@/services/auth.service";
import Link from "next/link";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

const loginSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(6, "Password minimal 6 karakter")
    .max(32, "Password maksimal 32 karakter"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const STEPS = [
  { id: "email", label: "Masukkan email Anda", type: "email", placeholder: "budi@example.com" },
  { id: "password", label: "Masukkan password Anda", type: "password", placeholder: "Rahasia123!" },
] as const;

export default function LoginPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const nextStep = async () => {
    const fieldName = STEPS[currentStep].id;
    const isStepValid = await trigger(fieldName);

    if (isStepValid) {
      if (currentStep < STEPS.length - 1) {
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

  // Fokus otomatis setelah animasi selesai
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[currentStep]?.focus();
    }, 400); // Sesuaikan dengan durasi animasi framer-motion
    return () => clearTimeout(timer);
  }, [currentStep]);

  const onSubmit = async (data: LoginFormValues) => {
    setIsAuthenticating(true);
    setErrorMsg("");
    try {
      const authData = await authService.signIn(data.email, data.password);
      
      // Based on our middleware and profiles, we should fetch their role to redirect properly.
      // But actually middleware.ts handles redirect to dashboard from /login if authenticated!
      // So we can just router.refresh() or router.push('/') and middleware will route them.
      window.location.href = "/";
    } catch (error: any) {
      console.error(error);
      setErrorMsg("Kredensial tidak valid. Silakan coba lagi.");
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="w-full">
      <LoadingOverlay isVisible={isAuthenticating} message="Memverifikasi kredensial Anda..." />
      <div className="py-8 flex flex-col relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-200/60">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        {/* Sliding Window - Glitch Free! */}
        <div className="overflow-hidden w-full mt-4">
          <motion.div
            className="flex w-full"
            animate={{ x: `-${currentStep * 100}%` }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
          >
            {STEPS.map((step, index) => {
              const { ref, ...rest } = register(step.id);
              return (
                <div key={step.id} className="w-full flex-shrink-0 px-1">
                  <div className="mb-6">
                    {errorMsg && (
                      <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                        {errorMsg}
                      </div>
                    )}
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Selamat Datang Kembali</h2>
                  </div>

                  <Input
                    type={step.type}
                    placeholder={step.placeholder}
                    error={errors[step.id]?.message}
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
            {currentStep === STEPS.length - 1 ? "Login ke Dashboard" : "Lanjut"}
            {currentStep !== STEPS.length - 1 && <ArrowRight size={18} className="ml-2" />}
          </Button>
        </div>
      </div>

      <p className="text-center text-slate-500 mt-8 text-sm font-medium">
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="text-primary hover:text-primary/80 transition-colors font-bold hover:underline"
        >
          Daftar sekarang
        </Link>
      </p>
    </div>
  );
}
