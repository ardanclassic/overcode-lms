import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { X, Calendar, Clock, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { CourseItem } from "@/lib/dummyData";

interface ScheduleModalProps {
  item: CourseItem;
  onClose: () => void;
  onSave: (scheduleData: { date: string; time: string; meetingUrl: string; applyToAll: boolean }) => void;
}

export function ScheduleModal({ item, onClose, onSave }: ScheduleModalProps) {
  // Parsing existing schedule if any
  const existingDate = item.scheduledAt ? new Date(item.scheduledAt).toISOString().split("T")[0] : "";
  const existingTime = item.scheduledAt ? new Date(item.scheduledAt).toISOString().split("T")[1].substring(0, 5) : "";

  const [date, setDate] = useState(existingDate);
  const [time, setTime] = useState(existingTime);
  const [meetingUrl, setMeetingUrl] = useState(item.meetingUrl || "");
  const [applyToAll, setApplyToAll] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Date constraints
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const maxDateObj = new Date();
  maxDateObj.setFullYear(today.getFullYear() + 2);
  const maxDate = maxDateObj.toISOString().split("T")[0];

  const handleSave = () => {
    setIsSaving(true);
    // Simulate network request
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => {
        onSave({ date, time, meetingUrl, applyToAll });
      }, 800);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Modal Content */}
      <FadeIn className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Atur Jadwal Sesi</h2>
            <p className="text-sm text-slate-500 mt-1 line-clamp-1">{item.title}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Calendar size={16} className="text-primary" /> Tanggal
              </label>
              <input
                type="date"
                value={date}
                min={minDate}
                max={maxDate}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Clock size={16} className="text-primary" /> Jam
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <LinkIcon size={16} className="text-primary" /> Link Meeting (Zoom/Gmeet)
            </label>
            <input
              type="url"
              placeholder="https://zoom.us/j/..."
              value={meetingUrl}
              onChange={(e) => setMeetingUrl(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-700"
            />
            <p className="text-xs text-slate-500">Opsional. Biarkan kosong jika pertemuan tatap muka (offline).</p>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-start gap-3">
            <input
              type="checkbox"
              id="applyToAll"
              checked={applyToAll}
              onChange={(e) => setApplyToAll(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-primary/30 text-primary focus:ring-primary/50 cursor-pointer"
            />
            <label htmlFor="applyToAll" className="cursor-pointer">
              <div className="text-sm font-semibold text-slate-700">Terapkan ke semua pertemuan selanjutnya</div>
              <div className="text-xs text-slate-500 mt-1">
                Sistem akan otomatis menjadwalkan materi-materi di bawahnya dengan interval mingguan pada hari dan jam
                yang sama. Anda tetap bisa mengubahnya secara manual nanti.
              </div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Batal
          </Button>
          <Button onClick={handleSave} disabled={!date || !time || isSaving} className="min-w-[120px]">
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : saveSuccess ? (
              <CheckCircle2 size={16} />
            ) : (
              "Simpan Jadwal"
            )}
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
