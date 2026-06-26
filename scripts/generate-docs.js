const fs = require('fs');
const path = require('path');

const DOCS_SOURCE = path.join(__dirname, '..', 'DOCS', 'v2');
const DOCS_PUBLIC_DEST = path.join(__dirname, '..', 'public', 'docs');
const TREE_OUTPUT = path.join(__dirname, '..', 'src', 'lib', 'docs-tree.json');

function getDocsTree(dir = DOCS_SOURCE, currentSlug = []) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const slug = [...currentSlug, entry.name];
      const children = getDocsTree(fullPath, slug);
      if (children.length > 0) {
        nodes.push({ name: entry.name, type: 'directory', path: slug.map(encodeURIComponent).join('/'), slug, children });
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const nameWithoutExt = entry.name.replace(/\.md$/, '');
      const slug = [...currentSlug, nameWithoutExt];
      nodes.push({ name: nameWithoutExt, type: 'file', path: slug.map(encodeURIComponent).join('/'), slug });
    }
  }
  nodes.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === 'directory' ? -1 : 1;
  });
  return nodes;
}

function getAllDocSlugs(tree) {
  const slugs = [];
  function traverse(nodes) {
    for (const node of nodes) {
      if (node.type === 'file') slugs.push(node.slug);
      else if (node.children) traverse(node.children);
    }
  }
  traverse(tree);
  return slugs;
}

function copyDocsToPublic(dir = DOCS_SOURCE, destDir = DOCS_PUBLIC_DEST) {
  if (!fs.existsSync(dir)) return;
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const srcPath = path.join(dir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDocsToPublic(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Build tree JSON (tiny, for sidebar at runtime)
const tree = getDocsTree();
const slugs = getAllDocSlugs(tree);
fs.writeFileSync(TREE_OUTPUT, JSON.stringify({ tree, slugs }, null, 2), 'utf8');
console.log(`✅ Generated docs-tree.json (${(fs.statSync(TREE_OUTPUT).size / 1024).toFixed(1)} KB) — sidebar runtime data`);

// 2. Copy all .md files to public/docs (served as static assets via CDN, NOT bundled into Worker)
// First, clean old dest to avoid stale files
if (fs.existsSync(DOCS_PUBLIC_DEST)) fs.rmSync(DOCS_PUBLIC_DEST, { recursive: true });
copyDocsToPublic();
console.log(`✅ Copied .md files to public/docs — served as static CDN assets`);
