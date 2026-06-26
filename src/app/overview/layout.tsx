import { getDocsTree } from '@/lib/docs';
import { Sidebar } from '@/components/docs/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Overview - Vibe Coding',
  description: 'Comprehensive information and documentation hub for Overcode partners.',
};

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tree = getDocsTree();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-gray-950">
      <Sidebar tree={tree} />
      <main className="flex-1 min-h-[100dvh] bg-white dark:bg-gray-950 w-full">
        {children}
      </main>
    </div>
  );
}
