"use client";
import MainForm from "@/app/components/MainForm";
import React from "react";
import { BlogPost } from "@/app/lib/blog";

export default function BlogEntryComponent({ entry }: { entry: BlogPost }) {
  return (
    <div className="flex flex-col font-cocogoose gap-8 text-sm md:text-base lg:text-lg text-justify selection:bg-slate-300">
      <style jsx global>{`
        .blog-content h2 {
          font-family: var(--font-cocogoose);
          font-size: 1.25rem; /* text-xl */
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          font-weight: bold;
          text-align: left;
          border-top: 1px solid #e5e7eb;
          padding-top: 1.5em;
        }
        .blog-content h2:first-of-type {
          border-top: none;
          padding-top: 0;
          margin-top: 0;
        }
        .blog-content h3 {
          font-family: var(--font-cocogoose);
          font-size: 1.125rem; /* text-lg */
          margin-top: 1.25em;
          margin-bottom: 0.5em;
          font-weight: bold;
          text-align: left;
        }
        .blog-content p, .blog-content li {
          font-family: var(--font-cocogoose);
          margin-bottom: 1em;
          line-height: 1.6;
        }
        .blog-content ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin-bottom: 1em;
        }
        .blog-content li {
          margin-bottom: 0.5em;
        }
        @media (min-width: 1024px) {
          .blog-content h2 { font-size: 1.875rem; /* lg:text-3xl */ }
          .blog-content h3 { font-size: 1.5rem; /* lg:text-2xl */ }
        }
      `}</style>
      <div 
        className="blog-content w-full"
        dangerouslySetInnerHTML={{ __html: entry.contentHtml }} 
      />
      
      <div className="w-full flex justify-center pt-5 py-10">
        <div className="max-w-[650px] w-full flex justify-center">
            <MainForm />
        </div>
      </div>
    </div>
  );
}
