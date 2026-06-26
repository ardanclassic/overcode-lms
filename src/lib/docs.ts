import docsTreeRaw from './docs-tree.json';

export interface DocNode {
  name: string;
  type: 'file' | 'directory';
  path: string; // url friendly path string separated by /
  slug: string[]; // array of path segments
  children?: DocNode[];
}

const docsTree = docsTreeRaw as {
  tree: DocNode[];
  slugs: string[][];
};

/**
 * Get the tree structure of the DOCS/v2 folder for the sidebar.
 */
export function getDocsTree(): DocNode[] {
  return docsTree.tree || [];
}

/**
 * Get a flat list of all markdown file slugs for static generation.
 */
export function getAllDocSlugs(): string[][] {
  return docsTree.slugs || [];
}

/**
 * Get the content of a specific markdown file given its slug.
 */
export function getDocContent(slug: string[]): string | null {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const contentsData = require('./docs-contents.json') as { contents: Record<string, string> };
  const key = slug.join('/');
  return contentsData.contents[key] || null;
}

