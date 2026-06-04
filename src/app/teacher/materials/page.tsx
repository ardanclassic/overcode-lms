"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  Plus,
  Folder,
  FileText,
  PlayCircle,
  ImageIcon,
  Presentation,
  Settings,
  GripVertical,
  Trash2,
  Edit2,
  ShieldAlert,
  X,
  UploadCloud,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui/Modal";
import { DUMMY_COURSE_ITEMS, buildCourseTree, CourseNode, ItemType, CourseItem, createSlug } from "@/lib/dummyData";

const getTypeIcon = (type: ItemType) => {
  switch (type) {
    case "video":
      return <PlayCircle size={16} />;
    case "infography":
      return <ImageIcon size={16} />;
    case "slide":
      return <Presentation size={16} />;
    case "pdf":
      return <FileText size={16} />;
    default:
      return <FileText size={16} />;
  }
};

function CurriculumBuilderSkeleton() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-pulse">
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-64 bg-slate-200 rounded-lg" />
        <div className="flex gap-2">
          <div className="h-10 w-32 bg-slate-200 rounded-xl" />
          <div className="h-10 w-32 bg-slate-200 rounded-xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="h-20 w-full bg-slate-100 rounded-2xl" />
          <div className="h-20 w-full bg-slate-100 rounded-2xl" />
          <div className="h-20 w-full bg-slate-100 rounded-2xl" />
        </div>
        <div className="h-[400px] w-full bg-slate-100 rounded-2xl" />
      </div>
    </div>
  );
}

// Confirm Modal Component
const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6">
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
            <Trash2 size={24} />
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-slate-500 text-sm">{message}</p>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
          <Button onClick={onClose} variant="ghost">
            Batal
          </Button>
          <Button onClick={onConfirm} className="bg-red-600 hover:bg-red-700 text-white">
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function ManageMaterialsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<CourseItem[]>(DUMMY_COURSE_ITEMS);
  const [editingNode, setEditingNode] = useState<CourseNode | null>(null);

  // Modal & Drawer States
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Form States for Material
  const [newMaterialType, setNewMaterialType] = useState<ItemType>("video");
  const [newMaterialTitle, setNewMaterialTitle] = useState("");
  const [newMaterialParent, setNewMaterialParent] = useState("none");
  const [newMaterialDuration, setNewMaterialDuration] = useState("");

  // Drag & Drop States
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const courseTree = buildCourseTree(items);
  const folders = items.filter((i) => i.item_type === "folder");

  // Drag & Drop Handlers
  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedItemId(id);
    e.dataTransfer.effectAllowed = "move";
    // For styling the dragged element
    setTimeout(() => {
      const el = document.getElementById(`node-${id}`);
      if (el) el.classList.add("opacity-50");
    }, 0);
  };

  const handleDragEnter = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (draggedItemId !== id) {
      setDragOverItemId(id);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnd = (e: React.DragEvent, id: string) => {
    setDraggedItemId(null);
    setDragOverItemId(null);
    const el = document.getElementById(`node-${id}`);
    if (el) el.classList.remove("opacity-50");
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedItemId || draggedItemId === targetId) return;

    // Simple Swap Logic for Prototype
    const newItems = [...items];
    const draggedIndex = newItems.findIndex((i) => i.id === draggedItemId);
    const targetIndex = newItems.findIndex((i) => i.id === targetId);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      // Swap order and parents to physically swap them in the tree
      const tempOrder = newItems[draggedIndex].order_index;
      const tempParent = newItems[draggedIndex].parent_id;

      newItems[draggedIndex].order_index = newItems[targetIndex].order_index;
      newItems[draggedIndex].parent_id = newItems[targetIndex].parent_id;

      newItems[targetIndex].order_index = tempOrder;
      newItems[targetIndex].parent_id = tempParent;

      setItems(newItems);
    }

    setDraggedItemId(null);
    setDragOverItemId(null);
  };

  const createFolder = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;

    const newFolder: CourseItem = {
      id: `folder-${Date.now()}`,
      title,
      slug: createSlug(title),
      item_type: "folder",
      content_url: null,
      is_required: false,
      parent_id: null,
      order_index: items.length + 1,
    };

    setItems([...items, newFolder]);
    setIsFolderModalOpen(false);
  };

  const createMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    const newMat: CourseItem = {
      id: `mat-${Date.now()}`,
      title: newMaterialTitle,
      slug: createSlug(newMaterialTitle),
      item_type: newMaterialType,
      is_required: true,
      parent_id: newMaterialParent === "none" ? null : newMaterialParent,
      order_index: items.length + 1,
      duration: newMaterialDuration,
      content_url: "dummy-url",
    };

    setItems([...items, newMat]);
    setIsMaterialModalOpen(false);

    // Reset Form
    setNewMaterialTitle("");
    setNewMaterialDuration("");
    setNewMaterialParent("none");
  };

  const handleDeleteClick = (id: string) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = () => {
    if (!deleteConfirmId) return;
    setItems(items.filter((i) => i.id !== deleteConfirmId && i.parent_id !== deleteConfirmId));
    if (editingNode?.id === deleteConfirmId) setEditingNode(null);
    setDeleteConfirmId(null);
  };

  const moveItem = (id: string, direction: "up" | "down") => {
    const item = items.find((i) => i.id === id);
    if (!item) return;

    // Find siblings (items with same parent_id) sorted by order_index
    const siblings = items.filter((i) => i.parent_id === item.parent_id).sort((a, b) => a.order_index - b.order_index);

    const index = siblings.findIndex((i) => i.id === id);
    if (direction === "up" && index > 0) {
      const prev = siblings[index - 1];
      const newItems = [...items];
      const meIdx = newItems.findIndex((i) => i.id === id);
      const prevIdx = newItems.findIndex((i) => i.id === prev.id);

      const tempOrder = newItems[meIdx].order_index;
      newItems[meIdx].order_index = newItems[prevIdx].order_index;
      newItems[prevIdx].order_index = tempOrder;
      setItems(newItems);
    } else if (direction === "down" && index < siblings.length - 1) {
      const next = siblings[index + 1];
      const newItems = [...items];
      const meIdx = newItems.findIndex((i) => i.id === id);
      const nextIdx = newItems.findIndex((i) => i.id === next.id);

      const tempOrder = newItems[meIdx].order_index;
      newItems[meIdx].order_index = newItems[nextIdx].order_index;
      newItems[nextIdx].order_index = tempOrder;
      setItems(newItems);
    }
  };

  // The Recursive Node Renderer inside the Component to access D&D state
  const renderNode = (node: CourseNode, level: number = 0) => {
    const isFolder = node.item_type === "folder";
    const isDragOver = dragOverItemId === node.id;

    if (isFolder) {
      return (
        <div key={node.id} className="w-full">
          <div
            id={`node-${node.id}`}
            draggable
            onDragStart={(e) => handleDragStart(e, node.id)}
            onDragEnter={(e) => handleDragEnter(e, node.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, node.id)}
            onDragEnd={(e) => handleDragEnd(e, node.id)}
            className={cn(
              "flex items-center justify-between group p-3 sm:p-4 bg-white border rounded-xl transition-all shadow-sm relative",
              level === 0 ? "mb-4" : "mt-2",
              isDragOver ? "border-primary border-2 bg-primary/5" : "border-slate-200",
            )}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="cursor-grab active:cursor-grabbing p-1 hover:bg-slate-100 rounded hidden sm:block">
                <GripVertical size={18} className="text-slate-300 hover:text-slate-500" />
              </div>
              <div className="flex flex-col sm:hidden gap-1 mr-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveItem(node.id, "up");
                  }}
                  className="p-0.5 bg-slate-100 rounded hover:bg-slate-200"
                >
                  <ArrowUp size={12} className="text-slate-500" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveItem(node.id, "down");
                  }}
                  className="p-0.5 bg-slate-100 rounded hover:bg-slate-200"
                >
                  <ArrowDown size={12} className="text-slate-500" />
                </button>
              </div>
              <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Folder size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-sm sm:text-base">{node.title}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">{node.children.length} item(s)</span>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              <button
                onClick={() => {
                  setEditingNode(node);
                  setIsFolderModalOpen(false);
                  setIsMaterialModalOpen(false);
                }}
                className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => handleDeleteClick(node.id)}
                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          <div className={cn("pl-3 sm:pl-8 border-l-2 border-slate-100 ml-2 sm:ml-6", level === 0 ? "mb-6" : "")}>
            {node.children.map((child) => renderNode(child, level + 1))}
            <div className="mt-2 relative group">
              <button
                onClick={() => {
                  setIsMaterialModalOpen(true);
                  setIsFolderModalOpen(false);
                  setEditingNode(null);
                  setNewMaterialParent(node.id);
                }}
                className="flex items-center gap-2 py-2 px-3 text-xs font-semibold text-slate-400 hover:text-primary transition-colors bg-slate-50 hover:bg-slate-100 rounded-lg border border-dashed border-slate-300 w-full justify-center"
              >
                <Plus size={14} /> Tambah Materi di {node.title}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        key={node.id}
        id={`node-${node.id}`}
        draggable
        onDragStart={(e) => handleDragStart(e, node.id)}
        onDragEnter={(e) => handleDragEnter(e, node.id)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, node.id)}
        onDragEnd={(e) => handleDragEnd(e, node.id)}
        className={cn(
          "flex items-center justify-between group p-3 bg-white border hover:border-primary/30 rounded-xl transition-all shadow-sm mt-2 relative",
          isDragOver ? "border-primary border-2 bg-primary/5 scale-[1.02]" : "border-slate-200",
        )}
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className="cursor-grab active:cursor-grabbing p-1 hover:bg-slate-100 rounded shrink-0 hidden sm:block">
            <GripVertical size={18} className="text-slate-300 hover:text-slate-500" />
          </div>
          <div className="flex flex-col sm:hidden gap-1 shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                moveItem(node.id, "up");
              }}
              className="p-0.5 bg-slate-100 rounded hover:bg-slate-200"
            >
              <ArrowUp size={12} className="text-slate-500" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                moveItem(node.id, "down");
              }}
              className="p-0.5 bg-slate-100 rounded hover:bg-slate-200"
            >
              <ArrowDown size={12} className="text-slate-500" />
            </button>
          </div>
          <div className="w-8 h-8 rounded bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 border border-slate-200">
            {getTypeIcon(node.item_type)}
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="font-semibold text-slate-700 text-xs sm:text-sm truncate max-w-full">{node.title}</span>
              {node.is_required && (
                <span className="shrink-0 bg-amber-100 text-amber-700 text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-1">
                  <ShieldAlert size={10} /> Wajib
                </span>
              )}
            </div>
            <span className="text-[9px] sm:text-xs text-muted-foreground uppercase font-bold tracking-wider truncate">
              {node.item_type} {node.duration ? `• ${node.duration}` : ""}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1 sm:ml-2">
          <button
            onClick={() => {
              setEditingNode(node);
              setIsFolderModalOpen(false);
              setIsMaterialModalOpen(false);
            }}
            className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => handleDeleteClick(node.id)}
            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <CurriculumBuilderSkeleton />;
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Kelola Materi</h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Kelola struktur materi, upload file, dan atur sistem gating (syarat buka kunci).
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            onClick={() => {
              setIsFolderModalOpen(true);
              setIsMaterialModalOpen(false);
              setEditingNode(null);
            }}
            variant="secondary"
            className="flex-1 sm:flex-none shadow-sm"
          >
            <Folder size={18} className="mr-2" /> Folder Baru
          </Button>
          <Button
            onClick={() => {
              setIsMaterialModalOpen(true);
              setIsFolderModalOpen(false);
              setEditingNode(null);
              setNewMaterialParent("none");
            }}
            variant="primary"
            className="flex-1 sm:flex-none shadow-sm"
          >
            <Plus size={18} className="mr-2" /> Materi Baru
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <FadeIn className="space-y-2">{courseTree.map((node) => renderNode(node))}</FadeIn>
      </div>

      <Modal isOpen={!!editingNode} onClose={() => setEditingNode(null)} title="Properties Panel">
        {editingNode && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipe Item</label>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700">
                {getTypeIcon(editingNode.item_type)} {editingNode.item_type.toUpperCase()}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Judul Materi</label>
              <input
                type="text"
                value={editingNode.title}
                onChange={(e) => {
                  const newItems = items.map((i) => (i.id === editingNode.id ? { ...i, title: e.target.value } : i));
                  setItems(newItems);
                  setEditingNode({ ...editingNode, title: e.target.value });
                }}
                className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {editingNode.item_type !== "folder" && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tautan URL Eksternal (Video / PDF / Slide)
                  </label>
                  <input
                    type="url"
                    defaultValue={editingNode.content_url || ""}
                    placeholder="Contoh: https://youtube.com/... atau link Google Drive"
                    className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Durasi (Opsional)</label>
                  <input
                    type="text"
                    value={editingNode.duration || ""}
                    onChange={(e) => {
                      const newItems = items.map((i) =>
                        i.id === editingNode.id ? { ...i, duration: e.target.value } : i,
                      );
                      setItems(newItems);
                      setEditingNode({ ...editingNode, duration: e.target.value });
                    }}
                    placeholder="Contoh: 10 Menit"
                    className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-800">Wajib Diselesaikan (Gating)</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Kunci materi selanjutnya sebelum ini selesai.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={editingNode.is_required}
                        onChange={(e) => {
                          const newItems = items.map((i) =>
                            i.id === editingNode.id ? { ...i, is_required: e.target.checked } : i,
                          );
                          setItems(newItems);
                          setEditingNode({ ...editingNode, is_required: e.target.checked });
                        }}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </>
            )}

            <div className="pt-4 flex gap-3">
              <Button onClick={() => setEditingNode(null)} variant="primary" className="flex-1 shadow-sm">
                Selesai Edit
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={isFolderModalOpen} onClose={() => setIsFolderModalOpen(false)} title="Topik Baru">
        <form onSubmit={createFolder} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Topik</label>
            <input
              type="text"
              name="title"
              placeholder="Contoh: Bab 1 - Pengenalan Dasar"
              required
              className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <p className="text-[10px] text-slate-500">
              Folder ini akan menjadi penampung untuk materi-materi di dalamnya.
            </p>
          </div>
          <div className="pt-4 flex gap-3">
            <Button type="button" onClick={() => setIsFolderModalOpen(false)} variant="ghost" className="flex-1">
              Batal
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              Simpan
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isMaterialModalOpen}
        onClose={() => setIsMaterialModalOpen(false)}
        title="Materi Baru"
        className="sm:max-w-2xl"
      >
        <form onSubmit={createMaterial} className="space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(["video", "pdf", "slide", "infography"] as ItemType[]).map((type) => (
              <div
                key={type}
                onClick={() => setNewMaterialType(type)}
                className={cn(
                  "border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all",
                  newMaterialType === type
                    ? "border-primary bg-primary/5 text-primary shadow-sm ring-1 ring-primary/20"
                    : "border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300",
                )}
              >
                {getTypeIcon(type)}
                <span className="text-[10px] font-bold uppercase tracking-wider">{type}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pilih Lokasi (Topik)</label>
              <select
                value={newMaterialParent}
                onChange={(e) => setNewMaterialParent(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="none">-- Tanpa Topik (Level Utama) --</option>
                {folders.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Judul Materi</label>
              <input
                type="text"
                value={newMaterialTitle}
                onChange={(e) => setNewMaterialTitle(e.target.value)}
                placeholder="Contoh: Video Penjelasan"
                required
                className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Link URL Eksternal</label>
            <input
              type="url"
              placeholder="Masukkan Link YouTube, Google Drive, ImageKit, dll."
              required
              className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <p className="text-[10px] text-slate-500 leading-relaxed mt-1">
              Demi efisiensi, platform ini tidak menampung unggahan file. Silakan *upload* materi Anda di platform
              gratis (seperti YouTube/Drive) dan tempel tautannya di sini.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Durasi (Opsional)</label>
            <input
              type="text"
              value={newMaterialDuration}
              onChange={(e) => setNewMaterialDuration(e.target.value)}
              placeholder="Contoh: 15 Menit"
              className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="pt-4 flex gap-3">
            <Button type="button" onClick={() => setIsMaterialModalOpen(false)} variant="ghost" className="flex-1">
              Batal
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              Terbitkan
            </Button>
          </div>
        </form>
      </Modal>
      <ConfirmModal
        isOpen={!!deleteConfirmId}
        onClose={() => setDeleteConfirmId(null)}
        onConfirm={confirmDelete}
        title="Hapus Item?"
        message="Apakah Anda yakin ingin menghapus item ini? Semua konten di dalamnya (jika ada) juga akan ikut terhapus secara permanen."
      />
    </div>
  );
}
