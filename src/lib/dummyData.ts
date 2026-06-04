export type ItemType = "folder" | "video" | "infography" | "slide" | "quiz" | "pdf";

export interface CourseItem {
  id: string;
  parent_id: string | null;
  item_type: ItemType;
  title: string;
  slug: string;
  content_url: any; // URL (string) atau Array (untuk kuis/slide)
  duration?: string;
  is_required: boolean;
  order_index: number;
  scheduledAt?: string;
  meetingUrl?: string;
}

export const createSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

const RAW_COURSE_ITEMS: Omit<CourseItem, 'slug'>[] = [
  // ================= ROOT MATERI =================
  {
    id: "root_m1",
    parent_id: null,
    item_type: "folder",
    title: "MATERI 1",
    content_url: null,
    is_required: false,
    order_index: 0,
  },

  // ================= FILES DI ROOT MATERI 1 =================
  {
    id: "c_root_1",
    parent_id: "root_m1",
    item_type: "video",
    title: "Dari Ide ke Aplikasi",
    duration: "10 Menit",
    is_required: true,
    content_url: "/assets/MATERI 1/BlankOn_Academy__Dari_Ide_ke_Aplikasi.mp4",
    order_index: 0,
    scheduledAt: "2026-06-12T19:00:00Z",
    meetingUrl: "https://zoom.us/j/1234567890",
  },

  // ================= FOLDERS =================
  {
    id: "b0",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 0 -- Pengantar",
    content_url: null,
    is_required: false,
    order_index: 1,
  },
  {
    id: "b1_1",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 1.1 -- Literasi & Kemandirian Digital",
    content_url: null,
    is_required: false,
    order_index: 2,
  },
  {
    id: "b1_2",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 1.2 -- Tiga Style Coding",
    content_url: null,
    is_required: false,
    order_index: 3,
  },
  {
    id: "b2_1",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 2.1 -- Analogi Pabrik & Gudang",
    content_url: null,
    is_required: false,
    order_index: 4,
  },
  {
    id: "b2_2",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 2.2 -- Registrasi Github",
    content_url: null,
    is_required: false,
    order_index: 5,
  },
  {
    id: "b2_3",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 2.3 -- Instalasi Antigravity IDE",
    content_url: null,
    is_required: false,
    order_index: 6,
  },
  {
    id: "b3",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 3 -- Spesifikasi Laptop",
    content_url: null,
    is_required: false,
    order_index: 7,
  },
  {
    id: "b4",
    parent_id: "root_m1",
    item_type: "folder",
    title: "Bab 4 -- Ringkasan Materi",
    content_url: null,
    is_required: false,
    order_index: 8,
  },

  // ================= FILES =================

  // Bab 0
  {
    id: "c_b0_1",
    parent_id: "b0",
    item_type: "video",
    title: "Video Pengantar",
    duration: "5 Menit",
    is_required: true,
    content_url: "/assets/MATERI 1/Bab 0 -- Pengantar/Bab 0 - Pengantar -- Video.mp4",
    order_index: 0,
  },
  {
    id: "c_b0_4",
    parent_id: "b0",
    item_type: "slide",
    title: "Vibe Coder Blueprint (Slides)",
    duration: "10 Menit",
    is_required: true,
    content_url: Array.from({ length: 12 }).map((_, i) => `/assets/MATERI 1/Bab 0 -- Pengantar/Bab 0 - Pengantar -- Slides/Vibe_Coder_Blueprint_page-${String(i + 1).padStart(4, '0')}.jpg`),
    order_index: 1,
  },
  {
    id: "c_b0_2",
    parent_id: "b0",
    item_type: "infography",
    title: "Infografis Landscape",
    duration: "2 Menit",
    is_required: false,
    content_url: "/assets/MATERI 1/Bab 0 -- Pengantar/Bab 0 - Pengantar -- Infografi Landscape.png",
    order_index: 2,
  },
  {
    id: "c_b0_3",
    parent_id: "b0",
    item_type: "infography",
    title: "Infografis Portrait",
    duration: "2 Menit",
    is_required: false,
    content_url: "/assets/MATERI 1/Bab 0 -- Pengantar/Bab 0 - Pengantar -- Infografi Portrait.png",
    order_index: 3,
  },

  // Bab 1.1
  {
    id: "c_b1_1_1",
    parent_id: "b1_1",
    item_type: "video",
    title: "Literasi & Kemandirian Digital (Video)",
    duration: "10 Menit",
    is_required: true,
    content_url:
      "/assets/MATERI 1/Bab 1.1 -- Literasi & Kemandirian Digital/Bab 1 - 1 - Literasi & Kemandirian Digital -- Video.mp4",
    order_index: 0,
  },
  {
    id: "c_b1_1_2",
    parent_id: "b1_1",
    item_type: "infography",
    title: "Infografis Literasi",
    duration: "3 Menit",
    is_required: false,
    content_url:
      "/assets/MATERI 1/Bab 1.1 -- Literasi & Kemandirian Digital/Bab 1 - 1 - Literasi & Kemandirian Digital -- Infografi.png",
    order_index: 1,
  },

  // Bab 1.2
  {
    id: "c_b1_2_1",
    parent_id: "b1_2",
    item_type: "video",
    title: "Tiga Style Coding (Placeholder)",
    duration: "8 Menit",
    is_required: true,
    content_url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    order_index: 0,
  },

  // Bab 3 (Langsung PDF)
  {
    id: "c_b3_1",
    parent_id: "b3",
    item_type: "pdf",
    title: "Spesifikasi Hardware (Placeholder)",
    duration: "5 Menit",
    is_required: true,
    content_url: "https://example.com/spec.pdf",
    order_index: 0,
  },
];

export const DUMMY_COURSE_ITEMS: CourseItem[] = RAW_COURSE_ITEMS.map((item) => ({
  ...item,
  slug: createSlug(item.title),
}));

// Node definition for the UI Tree
export interface CourseNode extends CourseItem {
  children: CourseNode[];
}

export const buildCourseTree = (items: CourseItem[], parentId: string | null = null): CourseNode[] => {
  return items
    .filter((item) => item.parent_id === parentId)
    .sort((a, b) => a.order_index - b.order_index)
    .map((item) => ({
      ...item,
      children: buildCourseTree(items, item.id),
    }));
};

export const getOrderedFiles = (nodes: CourseNode[]): CourseItem[] => {
  let files: CourseItem[] = [];
  for (const node of nodes) {
    if (node.item_type !== "folder") {
      files.push(node);
    }
    if (node.children.length > 0) {
      files = files.concat(getOrderedFiles(node.children));
    }
  }
  return files;
};

export const getAllContents = (): CourseItem[] => {
  const tree = buildCourseTree(DUMMY_COURSE_ITEMS);
  return getOrderedFiles(tree);
};

export const getInitialUnlockedContents = (): string[] => {
  const allFiles = getAllContents();
  const unlocked: string[] = [];
  for (let i = 0; i < allFiles.length; i++) {
    unlocked.push(allFiles[i].id);
    if (allFiles[i].is_required) {
      break;
    }
  }
  return unlocked;
};

// HELPER: Breadcrumbs
export const getItemPath = (id: string): CourseItem[] => {
  const path: CourseItem[] = [];
  let current = DUMMY_COURSE_ITEMS.find((item) => item.id === id);
  while (current) {
    path.unshift(current);
    const parentId = current.parent_id;
    if (parentId) {
      current = DUMMY_COURSE_ITEMS.find((item) => item.id === parentId);
    } else {
      current = undefined;
    }
  }
  return path;
};
