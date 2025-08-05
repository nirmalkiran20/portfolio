'use client';

import React from "react";
import { GridWrapper } from "@/app/components/GridWrapper";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ComponentPropsWithoutRef } from "react";
import Image from 'next/image';

function ProjectImage(props: { src: string; alt: string }) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={1000}
      height={500}
      className="drama-shadow rounded-xl"
    />
  );
}

export default function ProjectPage() {
  const ebookCover = "/projects/commit_your_code_project.jpeg";
  const ebookTitle = "My First Ebook: From Idea to Amazon Best-Seller";
  const amazonLink = "https://www.amazon.com/your-ebook-link";

  const ebookJourneyText = `
**Phase 1: Idea Generation & Outline**

The core idea emerged from a common pain point I identified in my industry. I outlined the chapters and key learning goals.

**Phase 2: Content Creation & AI Assistance**

With the outline in place, I began writing. AI played a pivotal role in:
* **Expand on key concepts:** Providing a brief idea and letting AI build on it.
* **Draft examples and case studies:** Saving immense time in content generation.
* **Summarize research:** Quickly distilling information from online sources.

Every piece of AI-generated content was meticulously reviewed and rewritten where necessary to ensure accuracy and tone.

**Phase 3: Editing, Formatting & Design**

After multiple rounds of self-editing, I sought professional feedback. Tools like Grammarly and Hemingway helped with clarity and flow.

**Phase 4: Publishing & Launch**

Publishing on Amazon KDP was straightforward. The final steps involved formatting, uploading, and setting up promotions.

This project was a testament to how modern tools, including AI, can accelerate creativity and productivity.
`;

  return (
    <div className="relative space-y-16">
      {/* Page Title */}
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          My First Ebook: A Journey from Idea to Publication
        </h1>
      </GridWrapper>

      {/* Ebook Cover and Introduction */}
<GridWrapper className="space-y-12">
  <GridWrapper className="px-10">
    <ProjectImage src={ebookCover} alt={ebookTitle} />
  </GridWrapper>

  <GridWrapper className="px-10">
    <div
  className="rounded-3xl border border-white/50 bg-white/10 p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl transform"
>
  <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-text-primary md:leading-none drop-shadow-md">
    My First Ebook: A Journey
  </h1>

  <p className="mb-4 text-left text-base leading-6 text-text-secondary">
    Discover the comprehensive guide that walks you through the process of writing and publishing your first ebook.
    This project details how I harnessed modern tools, including AI, to bring my vision to life and share it with
    the world on Amazon.
  </p>

  <div className="text-left">
    <a
      className="inline-flex items-center text-sm font-medium text-indigo-600"
      href={amazonLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Get it on Amazon
      <svg
        className="relative ml-2.5 mt-px overflow-visible"
        width="3"
        height="6"
        viewBox="0 0 3 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0L3 3L0 6"></path>
      </svg>
    </a>
  </div>
</div>
</GridWrapper>
</GridWrapper>

      <GridWrapper className="py-12">
  <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
    {/* Glassmorphism Card Container (with title inside) */}
    <div className="group relative backdrop-blur-md bg-white/50 border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl
                    transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:ring-1 hover:ring-white/30">

      {/* Title Inside Glass Box */}
      <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-text-primary md:leading-none drop-shadow-md">
        The Journey: How I Wrote My Ebook (with AI's Help)
      </h2>

      {/* Markdown Text */}
      <div className="prose max-w-none text-text-secondary">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code: ({
              node,
              inline,
              className,
              children,
              ...props
            }: {
              node?: any;
              inline?: boolean;
              className?: string;
              children?: React.ReactNode | React.ReactNode[];
              [key: string]: any;
            }) => {
              if (inline) {
                return (
                  <code className="bg-white/10 px-1 py-0.5 rounded text-sm">
                    {children}
                  </code>
                );
              }
              return (
                <pre className="bg-white/10 p-4 rounded-md overflow-x-auto text-sm">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              );
            },
          }}
        >
          {ebookJourneyText}
        </ReactMarkdown>
      </div>
    </div>
  </div>
</GridWrapper>
    </div>
  );
}
