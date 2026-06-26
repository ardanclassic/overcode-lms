import docsDataRaw from './docs-data.json';

export interface DocNode {
  name: string;
  type: 'file' | 'directory';
  path: string; // url friendly path string separated by /
  slug: string[]; // array of path segments
  children?: DocNode[];
}

const docsData = docsDataRaw as {
  tree: DocNode[];
  slugs: string[][];
  contents: Record<string, string>;
};

/**
 * Get the tree structure of the DOCS/v2 folder for the sidebar.
 */
export function getDocsTree(): DocNode[] {
  return docsData.tree || [];
}

/**
 * Get a flat list of all markdown file slugs for static generation.
 */
export function getAllDocSlugs(): string[][] {
  return docsData.slugs || [];
}

/**
 * Get the content of a specific markdown file given its slug.
 */
export function getDocContent(slug: string[]): string | null {
  const key = slug.join('/');
  return docsData.contents[key] || null;
}

