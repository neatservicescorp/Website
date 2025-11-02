"use client";
import { Card, CardBody, CardHeader, ScrollShadow } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BlogEntry } from "../blog/[id]/blogEntries";
import { useRouter } from "next/navigation";

type BlogCardsProps = {
  entries: BlogEntry[];
};

export default function BlogCards({ entries }: BlogCardsProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-row justify-center mb-12 gap-8 p-5 lg:p-10 w-full">
      {entries.map((entry, index) => (
        <Card key={index} className="h-[600px] w-full md:w-[40%] lg:w-1/3">
          <CardHeader className="p-0 h-1/3">
            <Image
              className="w-full h-full object-cover"
              width={600}
              height={600}
              src={entry.imageUrl}
              alt={`entry_preview_${index}`}
            />
          </CardHeader>
          <CardBody className="px-6 bg-[#D9D9D9]">
            <div className="w-full h-full gap-5 text-black flex flex-col relative">
              <div className="flex flex-col gap-1">
                <h3 className="font-exotc350 text-4xl leading-8">
                  {entry.title}
                </h3>
                <p className="text-gray-600 font-cocogoose text-sm">
                  {entry.date}
                </p>
              </div>
              <ScrollShadow className="h-[80%] mb-10 flex flex-col gap-2 text-sm font-cocogoose overflow-hidden text-justify">
                {entry.previewTexts.map((text, idx) => (
                  <p key={idx}>{text}</p>
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
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
