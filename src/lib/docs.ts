import docsTreeRaw from './docs-tree.json';

export interface DocNode {
  name: string;
  type: 'file' | 'directory';
  path: string;
  slug: string[];
  children?: DocNode[];
}

const docsTree = docsTreeRaw as {
  tree: DocNode[];
  slugs: string[][];
};

/**
 * Get the tree structure of the DOCS/v2 folder for the sidebar.
 * Reads from a tiny pre-generated JSON (2.9KB) — safe for Cloudflare Workers runtime.
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
