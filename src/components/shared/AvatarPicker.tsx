"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Dices, UploadCloud, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type DicebearStyle = "adventurer" | "bottts" | "lorelei" | "avataaars" | "notionists" | "micah";

const DICEBEAR_STYLES: { id: DicebearStyle; label: string }[] = [
  { id: "adventurer", label: "Petualang" },
  { id: "bottts", label: "Robot" },
  { id: "lorelei", label: "Lorelei" },
  { id: "avataaars", label: "Orang" },
  { id: "notionists", label: "Notion" },
  { id: "micah", label: "Micah" },
];

interface AvatarPickerProps {
  currentAvatarUrl: string;
  role: "teacher" | "student";
  userId: string;
  gender?: string;
  onAvatarChange: (url: string) => void;
}

export function AvatarPicker({ currentAvatarUrl, role, userId, gender, onAvatarChange }: AvatarPickerProps) {
  let initialStyle: DicebearStyle = "adventurer";
  let initialSeed = gender ? `${userId}-${gender}` : (userId || "default");
  let initialTab: "dicebear" | "upload" = "dicebear";

  if (currentAvatarUrl) {
    if (currentAvatarUrl.includes("api.dicebear.com")) {
      initialTab = "dicebear";
      try {
        const urlObj = new URL(currentAvatarUrl);
        const pathParts = urlObj.pathname.split("/");
        if (pathParts.length >= 3) {
          initialStyle = pathParts[2] as DicebearStyle;
        }
        const seedParam = urlObj.searchParams.get("seed");
        if (seedParam) initialSeed = seedParam;
      } catch (e) {
        // ignore parsing errors
      }
    } else {
      initialTab = "upload";
    }
  }

  const [activeTab, setActiveTab] = useState<"dicebear" | "upload">(initialTab);
  
  // Dicebear State
  const [style, setStyle] = useState<DicebearStyle>(initialStyle);
  const [seed, setSeed] = useState(initialSeed);
  
  // Upload State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const currentPreviewUrl = activeTab === "dicebear" 
    ? `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}` 
    : currentAvatarUrl;

  // Sync back to parent when Dicebear seed/style changes
  useEffect(() => {
    if (activeTab === "dicebear" && currentPreviewUrl !== currentAvatarUrl) {
      onAvatarChange(currentPreviewUrl);
    }
  }, [seed, style, activeTab, currentPreviewUrl, currentAvatarUrl, onAvatarChange]);

  const handleRandomize = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent form submit if inside form
    const randomSeed = Math.random().toString(36).substring(7);
    setSeed(randomSeed);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setUploadError("Ukuran file maksimal 2MB.");
      return;
    }

    setUploadError("");
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("role", role);
    formData.append("userId", userId);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengunggah foto");

      onAvatarChange(data.url);
      
    } catch (err: any) {
      setUploadError(err.message);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-slate-100 bg-white rounded-3xl shadow-sm">
      {/* Preview Area */}
      <div className="flex flex-col items-center gap-4 shrink-0">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 bg-slate-50 relative group">
          <img 
            src={currentPreviewUrl} 
            alt="Avatar Preview" 
            className="w-full h-full object-cover"
          />
          {isUploading && (
            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Preview</p>
      </div>

      {/* Controls Area */}
      <div className="flex-1 space-y-5">
        <div className="flex p-1 bg-slate-100 rounded-xl w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("dicebear")}
            className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all", activeTab === "dicebear" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700")}
          >
            <Dices size={16} /> Karakter DiceBear
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("upload")}
            className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all", activeTab === "upload" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700")}
          >
            <UploadCloud size={16} /> Upload Foto
          </button>
        </div>

        {activeTab === "dicebear" ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex flex-wrap gap-2">
              {DICEBEAR_STYLES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStyle(s.id)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-bold rounded-lg border transition-all",
                    style === s.id 
                      ? "bg-primary/10 border-primary/30 text-primary" 
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button type="button" onClick={handleRandomize} variant="secondary" className="gap-2 shrink-0 justify-center">
                <RefreshCw size={16} /> Acak Avatar
              </Button>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={seed} 
                  onChange={(e) => setSeed(e.target.value)}
                  className="w-full px-4 py-2 text-sm font-medium border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-slate-700 bg-slate-50 focus:bg-white"
                  placeholder="Ketik gaya karakter..."
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Wajah karakter dihasilkan dari teks atau ketikan Anda. Ketik apa saja untuk melihat hasilnya!
            </p>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud size={20} />
              </div>
              <p className="text-sm font-bold text-slate-700">Klik untuk upload foto</p>
              <p className="text-xs text-slate-500 mt-1">Maks. 2MB (JPG, PNG)</p>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept="image/jpeg, image/png, image/webp" 
              className="hidden" 
            />
            {uploadError && (
              <p className="text-xs text-red-500 flex items-center gap-1 font-medium">
                <AlertCircle size={14} /> {uploadError}
              </p>
            )}
            {activeTab === "upload" && currentAvatarUrl && !currentAvatarUrl.includes("dicebear") && !uploadError && (
               <p className="text-xs text-green-600 flex items-center gap-1 font-medium">
                 <CheckCircle2 size={14} /> Foto berhasil diunggah ke Cloudinary!
               </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
