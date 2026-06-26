import { FileText, ArrowLeft } from 'lucide-react';
import { PageTransition } from '@/components/docs/PageTransition';

export default function OverviewPage() {
  return (
    <PageTransition>
      <div className="min-h-[100dvh] flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-950">
        <div className="max-w-md space-y-6">
          <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Partner Knowledge Base
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Welcome to the Vibe Coding documentation hub. Here you can find all curriculums, operations playbooks, proposals, and pricing strategies in one place.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
            <ArrowLeft className="w-4 h-4 hidden lg:block" />
            <p>Please select a document from the sidebar to start reading.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
