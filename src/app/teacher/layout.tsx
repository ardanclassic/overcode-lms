import { DashboardLayout } from "@/components/shared/DashboardLayout";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout role="teacher" pageTitle="Teacher Command Center">
      {children}
    </DashboardLayout>
  );
}
