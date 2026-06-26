import { createClient } from "@/lib/supabase/client";

export type ItemType = "folder" | "video" | "pdf" | "slide" | "infography" | "quiz";

export interface CourseItem {
  id: string;
  course_id: string;
  parent_id: string | null;
  item_type: ItemType;
  title: string;
  slug: string;
  content_url: any;
  duration?: string;
  is_required: boolean;
  is_published: boolean;
  order_index: number;
  teaching_notes?: string;
  learning_objectives?: string[];
  
  // Custom tree attributes added post-fetch
  children?: CourseItem[];
  level?: number;
}

export const courseService = {
  /**
   * Mendapatkan seluruh modul / material tree untuk suatu course
   */
  async getCourseTree(courseId: string): Promise<CourseItem[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('course_items')
      .select('*')
      .eq('course_id', courseId)
      .order('order_index', { ascending: true });

    if (error) throw error;
    return this.buildTree(data || []);
  },

  /**
   * Helper internal untuk menyusun flat data menjadi tree hierarchy
   */
  buildTree(items: CourseItem[]): CourseItem[] {
    const itemMap = new Map<string, CourseItem>();
    const roots: CourseItem[] = [];

    items.forEach((item) => {
      item.children = [];
      item.level = 0;
      itemMap.set(item.id, item);
    });

    items.forEach((item) => {
      if (item.parent_id) {
        const parent = itemMap.get(item.parent_id);
        if (parent) {
          item.level = (parent.level || 0) + 1;
          parent.children!.push(item);
        }
      } else {
        roots.push(item);
      }
    });

    return roots;
  },

  /**
   * Mendapatkan daftar Course milik Teacher
   */
  async getTeacherCourses(teacherId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('owner_id', teacherId);

    if (error) throw error;
    return data;
  },

  /**
   * Mendapatkan daftar Course yang diikuti oleh Student
   */
  async getEnrolledCourses(studentId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('course_enrollments')
      .select(`
        course_id,
        courses (
          id,
          title,
          slug,
          description,
          owner_id,
          profiles:owner_id (
            full_name
          )
        )
      `)
      .eq('student_id', studentId);

    if (error) throw error;
    
    // Map data
    return data.map((d: any) => ({
      ...d.courses,
      instructor: d.courses.profiles?.full_name || "Instruktur"
    }));
  },

  /**
   * Mendapatkan detail satu course item
   */
  async getCourseItem(itemId: string): Promise<CourseItem | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('course_items')
      .select('*')
      .eq('id', itemId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }
};
