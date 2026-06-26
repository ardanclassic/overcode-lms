import fs from 'fs';
import path from 'path';

export interface DocNode {
  name: string;
  type: 'file' | 'directory';
  path: string; // url friendly path string separated by /
  slug: string[]; // array of path segments
  children?: DocNode[];
}

const DOCS_DIR = path.join(process.cwd(), 'DOCS', 'v2');

/**
 * Get the tree structure of the DOCS/v2 folder for the sidebar.
 */
export function getDocsTree(dir: string = DOCS_DIR, currentSlug: string[] = []): DocNode[] {
  if (!fs.existsSync(dir)) return [];
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: DocNode[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue; // skip hidden files

    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const slug = [...currentSlug, entry.name];
      const children = getDocsTree(fullPath, slug);
      
      // Only add directories that have markdown files in them
      if (children.length > 0) {
        nodes.push({
          name: entry.name,
          type: 'directory',
          path: slug.map(encodeURIComponent).join('/'),
          slug,
          children,
        });
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const nameWithoutExt = entry.name.replace(/\.md$/, '');
      const slug = [...currentSlug, nameWithoutExt];
      
      nodes.push({
        name: nameWithoutExt,
        type: 'file',
        path: slug.map(encodeURIComponent).join('/'),
        slug,
      });
    }
  }

  // Sort: directories first, then files, alphabetically
  nodes.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === 'directory' ? -1 : 1;
  });

  return nodes;
}

/**
 * Get a flat list of all markdown file slugs for static generation.
 */
export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = [];
  
  function traverse(nodes: DocNode[]) {
    for (const node of nodes) {
      if (node.type === 'file') {
        slugs.push(node.slug);
      } else if (node.children) {
        traverse(node.children);
      }
    }
  }
  
  traverse(getDocsTree());
  return slugs;
}

/**
 * Get the content of a specific markdown file given its slug.
 */
export function getDocContent(slug: string[]): string | null {
  // Reconstruct the actual file path
  // Since our slug contains the exact folder and file names (without .md), we can just join them.
  const relativePath = path.join(...slug) + '.md';
  const fullPath = path.join(DOCS_DIR, relativePath);

  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath, 'utf8');
  }

  return null;
}
