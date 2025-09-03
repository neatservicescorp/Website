"use client";
import { Card, CardBody, ScrollShadow } from "@heroui/react";
import Image from "next/image";
import React from "react";

type BlogPreviewProps = {
  blogData?: unknown; //! Change to type
};

export default function InitialBlogPrev({}: BlogPreviewProps) {
  return (
    <div className="flex flex-row p-10 gap-10">
      <div className="w-1/2">
        <Card>
          <CardBody className="p-0">
            <Image
              className="w-full object-cover h-[500px]"
              src="/images/services_main.jpeg"
              alt="blog_preview"
              width={800}
              height={800}
            />
          </CardBody>
        </Card>
      </div>
      <div className="w-1/2 flex flex-col p-4 pb-7 items-start justify-center gap-5 relative h-[524px]">
        <div className="flex flex-col gap-1">
          <h2 className="font-exotc350 text-5xl">Blog Title</h2>
          <p className="text-black/40 font-cocogoose text-sm">16 Ago. 2025</p>
        </div>
        <ScrollShadow className="flex flex-col gap-2 text-justify text-sm 2xl:text-medium overflow-hidden max-h-[75%]">
          <p className="font-cocogoose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            officiis assumenda eaque nostrum consequatur distinctio dolorum vel
            deleniti, atque laudantium rem quis cupiditate corrupti praesentium
            officia. Nostrum officiis rerum molestias.
          </p>
          <p className="font-cocogoose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            officiis assumenda eaque nostrum consequatur distinctio dolorum vel
            deleniti, atque laudantium rem quis cupiditate corrupti praesentium
            officia. Nostrum officiis rerum molestias.
          </p>
          <p className="font-cocogoose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            officiis assumenda eaque nostrum consequatur distinctio dolorum vel
            deleniti, atque laudantium rem quis cupiditate corrupti praesentium
            officia. Nostrum officiis rerum molestias.
          </p>
          <p className="font-cocogoose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            officiis assumenda eaque nostrum consequatur distinctio dolorum vel
            deleniti, atque laudantium rem quis cupiditate corrupti praesentium
            officia. Nostrum officiis rerum molestias.
          </p>
        </ScrollShadow>
        <div className="absolute bottom-2 right-10 z-10 font-cocogoose hover:cursor-pointer hover:underline">
          <p>Leer completo</p>
        </div>
      </div>
    </div>
  );
}
