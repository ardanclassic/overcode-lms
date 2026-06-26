import { notFound } from 'next/navigation';
import { getDocContent, getAllDocSlugs } from '@/lib/docs';
import { MarkdownRenderer } from '@/components/docs/MarkdownRenderer';
import { PageTransition } from '@/components/docs/PageTransition';
import { Metadata } from 'next';

interface DocPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: DocPageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const title = decodeURIComponent(resolvedParams.slug[resolvedParams.slug.length - 1]);
  return {
    title: `${title} - Partner Overview`,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const resolvedParams = await params;
  // Decode the slug to handle URI encoded parts (like %20 for spaces)
  const decodedSlug = resolvedParams.slug.map((segment) => decodeURIComponent(segment));
  const content = getDocContent(decodedSlug);

  if (!content) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="max-w-4xl mx-auto w-full px-6 py-12 lg:px-12">
        <div className="mb-8">
          <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
            {decodedSlug.slice(0, -1).join(' / ')}
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
            {decodedSlug[decodedSlug.length - 1]}
          </h1>
        </div>
        <MarkdownRenderer content={content} />
      </article>
    </PageTransition>
  );
}
