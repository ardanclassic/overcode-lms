const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'DOCS', 'v2');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'lib', 'docs-data.json');

function getDocsTree(dir = DOCS_DIR, currentSlug = []) {
  if (!fs.existsSync(dir)) return [];
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes = [];

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

function getAllDocSlugs(tree) {
  const slugs = [];
  function traverse(nodes) {
    for (const node of nodes) {
      if (node.type === 'file') {
        slugs.push(node.slug);
      } else if (node.children) {
        traverse(node.children);
      }
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
      // Use slug joined by / as key
      contents[slug.join('/')] = fs.readFileSync(fullPath, 'utf8');
    }
  }
  return contents;
}

const tree = getDocsTree();
const slugs = getAllDocSlugs(tree);
const contents = getAllDocContents(slugs);

const data = {
  tree,
  slugs,
  contents
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2), 'utf8');
console.log('✅ Generated src/lib/docs-data.json successfully!');
