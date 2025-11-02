"use client";
import { Card, CardBody, ScrollShadow } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BlogEntry } from "../blog/[id]/blogEntries";

type BlogPreviewProps = {
  entry: BlogEntry;
};

export default function InitialBlogPrev({ entry }: BlogPreviewProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-5 lg:p-10 gap-5 md:gap-10">
      <div className="w-full md:w-1/2">
        <Card>
          <CardBody className="p-0">
            <Image
              className="w-full object-cover aspect-video md:aspect-auto md:h-[500px]"
              src={entry.imageUrl}
              alt="main_blog_preview"
              width={800}
              height={800}
            />
          </CardBody>
        </Card>
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-4 pb-7 items-start justify-center gap-5 relative h-[524px]">
        <div className="flex flex-col gap-1">
          <h2 className="font-exotc350 text-5xl">{entry.title}</h2>
          <p className="text-gray-600 font-cocogoose text-sm">{entry.date}</p>
        </div>
        <ScrollShadow className="flex flex-col gap-2 text-justify text-sm 2xl:text-medium overflow-hidden h-[40%]">
          {entry.previewTexts.map((text, index) => (
            <p key={index} className="font-cocogoose">
              {text}
            </p>
          ))}
        </ScrollShadow>
        <button
          onClick={() => router.push(`/blog/${entry.key}`)}
          className="absolute bottom-2 right-5 z-10 font-cocogoose hover:cursor-pointer hover:underline font-semibold bg-transparent border-none p-0"
          aria-label={`Read full article: ${entry.title}`}
        >
          <p>Read article</p>
        </button>
      </div>
    </div>
  );
}
