"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const initialize = useAuthStore((state) => state.initialize);
  const isLoading = useAuthStore((state) => state.isLoading);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initialize();
    setMounted(true);
  }, [initialize]);

  // To prevent hydration errors, only render children after mount, 
  // or render them but handle loading state if necessary.
  // Rendering directly is fine since Zustand handles default state.
  return <>{children}</>;
}
