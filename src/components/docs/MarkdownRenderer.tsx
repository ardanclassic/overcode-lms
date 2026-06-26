import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn('prose prose-slate max-w-none w-full dark:prose-invert', className)}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => (
            <div className="w-full overflow-x-auto my-6 pb-2">
              <table className="w-full min-w-max" {...props} />
            </div>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
