import { DashboardLayout } from "@/components/shared/DashboardLayout";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout role="student" pageTitle="Learning Path">
      {children}
    </DashboardLayout>
  );
}
