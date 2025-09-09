"use client";
import { Card, CardBody, CardHeader, ScrollShadow } from "@heroui/react";
import Image from "next/image";
import React from "react";

type BlogCardsProps = {
  previews?: unknown[]; //! Change to type
};

export default function BlogCards({}: BlogCardsProps) {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-row justify-center mb-12 gap-8 p-5 lg:p-10 w-full">
      <Card className="h-[600px] w-full md:w-[40%] lg:w-1/3">
        <CardHeader className="p-0 h-1/3">
          <Image
            className="w-full h-full object-cover"
            width={600}
            height={600}
            src="/images/blog_2.jpg"
            alt="entry_preview_1"
          />
        </CardHeader>
        <CardBody className="px-6 bg-[#D9D9D9]">
          <div className="w-full h-full gap-5 text-black flex flex-col relative">
            <div className="flex flex-col gap-1">
              <h3 className="font-exotc350 text-4xl leading-8">
                The Hidden Dangers of Delaying Roof Repairs
              </h3>
              <p className="text-black/40 font-cocogoose text-sm">
                22 Ago. 2025
              </p>
            </div>
            <ScrollShadow className="h-[80%] mb-10 flex flex-col gap-2 text-sm font-cocogoose overflow-hidden text-justify">
              <p>
                A small leak or a missing shingle may not seem urgent, but
                postponing roof repairs can quickly lead to costly problems.
                Water infiltration can damage insulation, ceilings, and even
                structural beams, creating the perfect environment for mold
                growth.
              </p>
              <p>
                What starts as a minor issue could evolve into thousands of
                dollars in restoration. By addressing problems early, you extend
                the life of your roof and protect your home’s value. A timely
                inspection and quick repair not only prevent emergencies but
                also save you money in the long run. Investing in your roof
                today ensures peace of mind tomorrow.
              </p>
            </ScrollShadow>
            <div className="absolute bottom-2 right-5 z-10 font-cocogoose hover:cursor-pointer hover:underline font-semibold">
              <p>Read article</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="h-[600px] w-full md:w-[40%] lg:w-1/3">
        <CardHeader className="p-0 h-1/3">
          <Image
            className="w-full h-full object-cover"
            width={600}
            height={600}
            src="/images/blog_3.webp"
            alt="entry_preview_1"
          />
        </CardHeader>
        <CardBody className="px-6 bg-[#D9D9D9]">
          <div className="w-full h-full gap-5 text-black flex flex-col relative">
            <div className="flex flex-col gap-1">
              <h3 className="font-exotc350 text-4xl leading-8">
                How New Siding Can Transform Your Home’s Value
              </h3>
              <p className="text-black/40 font-cocogoose text-sm">
                16 Ago. 2025
              </p>
            </div>
            <ScrollShadow className="h-[80%] mb-10 flex flex-col gap-2 text-sm font-cocogoose overflow-hidden text-justify">
              <p>
                Siding isn’t just about curb appeal, it’s a critical layer of
                protection against weather, moisture, and pests. Worn or damaged
                siding can lead to energy loss, higher bills, and hidden
                structural issues. Replacing it with modern, durable materials
                instantly refreshes the look of your home while boosting
                efficiency and resale value.
              </p>
              <p>
                For homeowners considering a sale in the next few years, new
                siding is one of the most cost-effective upgrades available. And
                even if you plan to stay, it’s an investment in comfort,
                security, and long-term savings.
              </p>
            </ScrollShadow>
            <div className="absolute bottom-2 right-5 z-10 font-cocogoose hover:cursor-pointer hover:underline font-semibold">
              <p>Read article</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="h-[600px] w-full md:w-[40%] lg:w-1/3">
        <CardHeader className="p-0 h-1/3">
          <Image
            className="w-full h-full object-cover"
            width={600}
            height={600}
            src="/images/blog_4.webp"
            alt="entry_preview_1"
          />
        </CardHeader>
        <CardBody className="px-6 bg-[#D9D9D9]">
          <div className="w-full h-full gap-5 text-black flex flex-col relative">
            <div className="flex flex-col gap-1">
              <h3 className="font-exotc350 text-4xl leading-8">
                Windows That Work: Why Energy Efficiency Matters
              </h3>
              <p className="text-black/40 font-cocogoose text-sm">
                10 Ago. 2025
              </p>
            </div>
            <ScrollShadow className="h-[80%] mb-10 flex flex-col gap-2 text-sm font-cocogoose overflow-hidden text-justify">
              <p>
                Old or poorly sealed windows can quietly drain your home’s
                energy, causing your HVAC system to work harder and increasing
                utility bills.
              </p>
              <p>
                Upgrading to energy-efficient windows not only improves
                insulation but also reduces outside noise and enhances security.
                Modern options offer UV protection that helps preserve furniture
                and flooring, while low-maintenance frames keep your home
                looking sharp for years
              </p>
            </ScrollShadow>
            <div className="absolute bottom-2 right-5 z-10 font-cocogoose hover:cursor-pointer hover:underline font-semibold">
              <p>Read article</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
