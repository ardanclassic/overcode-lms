const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'DOCS', 'v2');
const TREE_OUTPUT = path.join(__dirname, '..', 'src', 'lib', 'docs-tree.json');
const CONTENT_OUTPUT = path.join(__dirname, '..', 'src', 'lib', 'docs-contents.json');

function getDocsTree(dir = DOCS_DIR, currentSlug = []) {
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

function getAllDocContents(slugs) {
  const contents = {};
  for (const slug of slugs) {
    const relativePath = path.join(...slug) + '.md';
    const fullPath = path.join(DOCS_DIR, relativePath);
    if (fs.existsSync(fullPath)) {
      contents[slug.join('/')] = fs.readFileSync(fullPath, 'utf8');
    }
  }
  return contents;
}

const tree = getDocsTree();
const slugs = getAllDocSlugs(tree);
const contents = getAllDocContents(slugs);

// Write small tree file (used at runtime by the Worker for sidebar)
fs.writeFileSync(TREE_OUTPUT, JSON.stringify({ tree, slugs }, null, 2), 'utf8');
console.log(`✅ Generated docs-tree.json (${(Buffer.byteLength(JSON.stringify({ tree, slugs })) / 1024).toFixed(1)} KB) — for runtime sidebar`);

// Write full content file (used ONLY at build time for static page generation)
fs.writeFileSync(CONTENT_OUTPUT, JSON.stringify({ contents }, null, 2), 'utf8');
console.log(`✅ Generated docs-contents.json (${(Buffer.byteLength(JSON.stringify({ contents })) / 1024).toFixed(1)} KB) — for build-time static generation only`);
