"use client";
import { Card, CardBody, CardHeader, ScrollShadow } from "@heroui/react";
import Image from "next/image";
import React from "react";

type BlogCardsProps = {
  previews?: unknown[]; //! Change to type
};

export default function BlogCards({}: BlogCardsProps) {
  return (
    <div className="flex flex-row mb-12 gap-8 p-10 w-full">
      <Card className="h-[600px] w-1/3">
        <CardHeader className="p-0 h-1/3">
          <Image
            className="w-full h-full object-cover"
            width={600}
            height={600}
            src="/images/services_main.jpeg"
            alt="entry_preview_1"
          />
        </CardHeader>
        <CardBody className="px-6 bg-[#D9D9D9]">
          <div className="w-full h-full gap-5 text-black flex flex-col relative">
            <div className="flex flex-col gap-0">
              <h3 className="font-exotc350 text-4xl">Entry 1</h3>
              <p className="text-black/40 font-cocogoose text-sm">
                16 Ago. 2025
              </p>
            </div>
            <ScrollShadow className="h-[80%] mb-10 flex flex-col gap-2 text-sm font-cocogoose overflow-hidden text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
            </ScrollShadow>
            <div className="absolute bottom-2 right-5 z-10 font-cocogoose hover:cursor-pointer hover:underline">
              <p>Leer completo</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="h-[600px] w-1/3">
        <CardHeader className="p-0 h-1/3">
          <Image
            className="w-full h-full object-cover"
            width={600}
            height={600}
            src="/images/services_main.jpeg"
            alt="entry_preview_1"
          />
        </CardHeader>
        <CardBody className="px-6 bg-[#D9D9D9]">
          <div className="w-full h-full gap-5 text-black flex flex-col relative">
            <div className="flex flex-col gap-0">
              <h3 className="font-exotc350 text-4xl">Entry 1</h3>
              <p className="text-black/40 font-cocogoose text-sm">
                16 Ago. 2025
              </p>
            </div>
            <ScrollShadow className="h-[80%] mb-10 flex flex-col gap-2 text-sm font-cocogoose overflow-hidden text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
            </ScrollShadow>
            <div className="absolute bottom-2 right-5 z-10 font-cocogoose hover:cursor-pointer hover:underline">
              <p>Leer completo</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="h-[600px] w-1/3">
        <CardHeader className="p-0 h-1/3">
          <Image
            className="w-full h-full object-cover"
            width={600}
            height={600}
            src="/images/services_main.jpeg"
            alt="entry_preview_1"
          />
        </CardHeader>
        <CardBody className="px-6 bg-[#D9D9D9]">
          <div className="w-full h-full gap-5 text-black flex flex-col relative">
            <div className="flex flex-col gap-0">
              <h3 className="font-exotc350 text-4xl">Entry 1</h3>
              <p className="text-black/40 font-cocogoose text-sm">
                16 Ago. 2025
              </p>
            </div>
            <ScrollShadow className="h-[80%] mb-10 flex flex-col gap-2 text-sm font-cocogoose overflow-hidden text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit at tenetur labore voluptatibus esse, assumenda porro libero
                officia praesentium dolorum? Quam animi quisquam consectetur ut
                sed veritatis ratione temporibus!
              </p>
            </ScrollShadow>
            <div className="absolute bottom-2 right-5 z-10 font-cocogoose hover:cursor-pointer hover:underline">
              <p>Leer completo</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
