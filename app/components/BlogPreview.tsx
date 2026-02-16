"use client";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BlogPostPreview } from "../lib/blog";
import { useRouter } from "next/navigation";

// Define the interface for props
interface BlogPreviewProps {
  entries: BlogPostPreview[];
}

export default function BlogPreview({ entries }: BlogPreviewProps) {
  const router = useRouter();

  if (!entries || entries.length === 0) {
    return null;
  }

  const recentEntry = entries[0];
  const subEntries = entries.slice(1, 3);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-5">
      <Card className="hidden lg:block h-full w-1/2">
        <CardBody className="h-2/3 p-0">
          <Image
            src={recentEntry.imageUrl}
            alt="blog_preview_1"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
        </CardBody>
        <div className="h-1/3 p-4 flex flex-col justify-between">
          <div className="w-full text-black flex flex-col gap-2 relative">
            <h3 className="font-exotc350 text-3xl 2xl:text-4xl leading-8">
              {recentEntry.title}
            </h3>
            <p className="font-cocogoose text-sm">
              {recentEntry.description.slice(0, 150)}...
            </p>
          </div>
          <button
            onClick={() => router.push(`/blog/${recentEntry.key}`)}
            className="self-end bg-transparent border-none p-0 hover:cursor-pointer"
            aria-label={`Read full article: ${recentEntry.title}`}
          >
            <p className="font-cocogoose text-sm hover:underline">
              Read more ➤
            </p>
          </button>
        </div>
      </Card>
      <div className="flex flex-col w-full lg:w-1/2 gap-6">
        <Card className="w-full lg:hidden">
          <CardBody>
            <div className="flex flex-row h-full gap-7">
              <div className="w-[45%] h-full">
                <Image
                  src={recentEntry.imageUrl}
                  alt={`blog_preview_${recentEntry.key}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex w-[55%] flex-col justify-between relative text-black lg:mt-5 gap-3">
                <h3 className="font-exotc350 text-2xl md:text-xl leading-6 xl:text-4xl md:leading-8">
                  {recentEntry.title}
                </h3>
                <p className="font-cocogoose text-xs md:text-sm">
                  {recentEntry.description.slice(0, 80)}...
                </p>
                <button
                  onClick={() => router.push(`/blog/${recentEntry.key}`)}
                  className="self-end bg-transparent border-none p-0 hover:cursor-pointer"
                  aria-label={`Read full article: ${recentEntry.title}`}
                >
                  <p className="font-cocogoose text-sm hover:underline">
                    Read more ➤
                  </p>
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
        {subEntries.map((entry, index) => (
          <Card key={index} className="w-full">
            <CardBody>
              <div className="flex flex-row h-full gap-7">
                <div className="w-[45%] h-full">
                  <Image
                    src={entry.imageUrl}
                    alt={`blog_preview_${index}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex w-[55%] flex-col relative text-black lg:mt-5 gap-3">
                  <h3 className="font-exotc350 text-2xl md:text-3xl leading-6 xl:text-4xl md:leading-8">
                    {entry.title}
                  </h3>
                  <p className="font-cocogoose text-xs md:text-sm">
                    {entry.description.slice(0, 80)}...
                  </p>
                  <button
                    onClick={() => router.push(`/blog/${entry.key}`)}
                    className="self-end bg-transparent border-none p-0 hover:cursor-pointer"
                    aria-label={`Read full article: ${entry.title}`}
                  >
                    <p className="font-cocogoose text-sm hover:underline">
                      Read more ➤
                    </p>
                  </button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
