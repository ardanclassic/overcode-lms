'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown, FileText, Folder, FolderOpen, Menu, X } from 'lucide-react';
import type { DocNode } from '@/lib/docs';
import { cn } from './MarkdownRenderer';

interface SidebarProps {
  tree: DocNode[];
}

export function Sidebar({ tree }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header & Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-20">
        <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          Partner Overview
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 lg:bg-gray-50 lg:dark:bg-gray-900/50 h-[100dvh] overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 hidden lg:block border-b border-gray-200 dark:border-gray-800">
          <Link href="/overview" className="font-bold text-xl text-indigo-600 dark:text-indigo-400 tracking-tight">
            Vibe Coding
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider font-semibold">
            Partner Overview Hub
          </p>
        </div>

        <nav className="p-4 space-y-1">
          {tree.map((node) => (
            <TreeNode key={node.path} node={node} level={0} closeMobile={() => setIsOpen(false)} />
          ))}
        </nav>
      </aside>
    </>
  );
}

function TreeNode({ node, level, closeMobile }: { node: DocNode; level: number; closeMobile: () => void }) {
  const pathname = usePathname();
  // Decode the node path just in case we need to match it, but actually the node.path is URI encoded
  // pathname is decoded usually.
  // Actually node.slug is unencoded, we can construct the pathname from slug
  const itemPath = `/overview/${node.slug.map(encodeURIComponent).join('/')}`;
  
  // Use decoded pathname for comparison if needed, or simply string match
  const isActive = pathname === itemPath;
  const isParentOfActive = pathname.startsWith(`/overview/${node.slug.map(encodeURIComponent).join('/')}`);
  
  const [isExpanded, setIsExpanded] = useState(isParentOfActive || level === 0);

  if (node.type === 'file') {
    return (
      <Link
        href={itemPath}
        onClick={closeMobile}
        className={cn(
          "flex items-center gap-2 py-2 px-3 text-sm rounded-md transition-colors",
          isActive 
            ? "bg-indigo-50 text-indigo-700 font-medium dark:bg-indigo-500/10 dark:text-indigo-300" 
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",
        )}
        style={{ paddingLeft: `${(level + 1) * 0.75}rem` }}
      >
        <FileText size={16} className={isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"} />
        <span className="truncate">{node.name}</span>
      </Link>
    );
  }

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors dark:text-gray-300 dark:hover:bg-gray-800"
        style={{ paddingLeft: `${level === 0 ? 0.75 : (level + 1) * 0.75}rem` }}
      >
        <div className="flex items-center gap-2 truncate">
          {isExpanded ? (
            <FolderOpen size={16} className="text-indigo-500 dark:text-indigo-400" />
          ) : (
            <Folder size={16} className="text-gray-400" />
          )}
          <span className="truncate">{node.name}</span>
        </div>
        {isExpanded ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
      </button>
      
      {isExpanded && node.children && (
        <div className="mt-1 space-y-1">
          {node.children.map((child) => (
            <TreeNode key={child.path} node={child} level={level + 1} closeMobile={closeMobile} />
          ))}
        </div>
      )}
    </div>
  );
}
