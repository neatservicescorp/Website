"use client";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import React, { useMemo } from "react";
import { BlogEntriesData } from "../blog/[id]/blogEntries";
import { useRouter } from "next/navigation";

export default function BlogPreview() {
  const router = useRouter();
  const entries = useMemo(
    () =>
      BlogEntriesData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }),
    []
  );

  const recentEntry = entries[0];
  const subEntries = entries.slice(1, 3);

  return (
    <div className="w-full flex flex-row gap-5 h-[650px]">
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
        <CardFooter className="h-1/3">
          <div className="w-full h-full text-black flex flex-col gap-2 p-2 px-4 relative">
            <h3 className="font-exotc350 text-3xl 2xl:text-4xl leading-8">
              {recentEntry.title}
            </h3>
            <p className="font-cocogoose text-sm">
              {recentEntry.startContent.slice(0, 150)}...
            </p>
            <button
              onClick={() => router.push(`/blog/${recentEntry.key}`)}
              className="absolute bottom-0 right-5 bg-transparent border-none p-0 hover:cursor-pointer"
              aria-label={`Read full article: ${recentEntry.title}`}
            >
              <p className="font-cocogoose text-lg hover:underline">
                Read more ➤
              </p>
            </button>
          </div>
        </CardFooter>
      </Card>
      <div className="flex flex-col w-full lg:w-1/2 gap-6">
        <Card className="h-1/2 w-full block lg:hidden">
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
              <div className="flex w-[55%] flex-col relative text-black mt-5 gap-3">
                <h3 className="font-exotc350 text-2xl md:text-xl leading-6 lg:text-[27px] xl:text-4xl md:leading-7">
                  {recentEntry.title}
                </h3>
                <p className="font-cocogoose text-xs md:text-sm">
                  {recentEntry.startContent.slice(0, 80)}...
                </p>
                <button
                  onClick={() => router.push(`/blog/${recentEntry.key}`)}
                  className="absolute bottom-0 right-5 bg-transparent border-none p-0 hover:cursor-pointer"
                  aria-label={`Read full article: ${recentEntry.title}`}
                >
                  <p className="font-cocogoose text-sm md:text-lg hover:underline">
                    Read more ➤
                  </p>
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
        {subEntries.map((entry, index) => (
          <Card key={index} className="h-1/2 w-full">
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
                <div className="flex w-[55%] flex-col relative text-black mt-5 gap-3">
                  <h3 className="font-exotc350 text-2xl md:text-xl leading-6 lg:text-[27px] xl:text-4xl md:leading-8">
                    {entry.title}
                  </h3>
                  <p className="font-cocogoose text-xs md:text-sm">
                    {entry.startContent.slice(0, 80)}...
                  </p>
                  <button
                    onClick={() => router.push(`/blog/${entry.key}`)}
                    className="absolute bottom-0 right-5 bg-transparent border-none p-0 hover:cursor-pointer"
                    aria-label={`Read full article: ${entry.title}`}
                  >
                    <p className="font-cocogoose text-sm md:text-lg hover:underline">
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
