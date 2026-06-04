import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full p-6 z-20">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-xl p-6 sm:p-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4 font-bold text-2xl">
            O
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">OverCode</h1>
          <p className="text-muted-foreground mt-2">Level Up Your Mind, Code Your Own Reality</p>
        </div>
        
        {children}
      </div>
    </main>
  );
}
