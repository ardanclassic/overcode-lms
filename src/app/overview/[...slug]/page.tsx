"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { PageTransition } from "@/components/docs/PageTransition";
import { Loader2, FileWarning } from "lucide-react";

export default function DocPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug: string[] = Array.isArray(rawSlug)
    ? rawSlug.map(decodeURIComponent)
    : typeof rawSlug === "string"
    ? [decodeURIComponent(rawSlug)]
    : [];

  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (slug.length === 0) return;

    const mdPath = `/docs/${slug.join("/")}.md`;
    setLoading(true);
    setError(false);

    fetch(mdPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Not found: ${mdPath}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.slug]);

  const title = slug[slug.length - 1] ?? "";
  const breadcrumb = slug.slice(0, -1).join(" / ");

  return (
    <PageTransition>
      <article className="max-w-4xl mx-auto w-full px-6 py-12 lg:px-12">
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-gray-400">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="text-sm">Loading document...</p>
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-gray-400">
            <FileWarning className="w-10 h-10 text-red-400" />
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
              Document not found.
            </p>
            <p className="text-sm text-gray-400">
              The file <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{title}.md</code> could not be loaded.
            </p>
          </div>
        )}

        {content && !loading && (
          <>
            <div className="mb-8">
              {breadcrumb && (
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  {breadcrumb}
                </div>
              )}
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                {title}
              </h1>
            </div>
            <MarkdownRenderer content={content} />
          </>
        )}
      </article>
    </PageTransition>
  );
}
