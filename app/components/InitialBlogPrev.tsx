"use client";
import { Card, CardBody, ScrollShadow } from "@heroui/react";
import Image from "next/image";
import React from "react";

type BlogPreviewProps = {
  blogData?: unknown; //! Change to type
};

export default function InitialBlogPrev({}: BlogPreviewProps) {
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-5 lg:p-10 gap-5 md:gap-10">
      <div className="w-full md:w-1/2">
        <Card>
          <CardBody className="p-0">
            <Image
              className="w-full object-cover aspect-video md:aspect-auto md:h-[500px]"
              src="/images/blog_1.jpg"
              alt="blog_preview"
              width={800}
              height={800}
            />
          </CardBody>
        </Card>
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-4 pb-7 items-start justify-center gap-5 relative h-[524px]">
        <div className="flex flex-col gap-1">
          <h2 className="font-exotc350 text-5xl">
            Why September Is the Best Time to Prep Your Roof for Fall
          </h2>
          <p className="text-black/40 font-cocogoose text-sm">31 Ago. 2025</p>
        </div>
        <ScrollShadow className="flex flex-col gap-2 text-justify text-sm 2xl:text-medium overflow-hidden max-h-[75%]">
          <p className="font-cocogoose">
            As summer winds down and the days grow shorter, September offers a
            golden opportunity to give your roof some much-needed attention
            before the harsher weather arrives. This window of mild, dry
            conditions is ideal for a thorough roof inspection, without the
            extreme heat or ice that can complicate repair work.
          </p>
          <p className="font-cocogoose">
            Begin with a careful ground-level assessment using binoculars to
            check for curled or missing shingles, granule loss, or signs of wear
            around vulnerable areas like chimneys, vents, and gutters. These are
            often the first places where damage occurs, and catching issues now
            can help you avoid emergency leaks when storms hit
          </p>
          <p className="font-cocogoose">
            Next, clear gutters and downspouts of leaves and debris that have
            collected all summer. Clogged gutters can cause water to back up
            under your roof’s edge, leading to structural damage and even
            foundation issues
          </p>
        </ScrollShadow>
        <div className="absolute bottom-2 right-10 z-10 font-cocogoose hover:cursor-pointer hover:underline">
          <p>Leer completo</p>
        </div>
      </div>
    </div>
  );
}
