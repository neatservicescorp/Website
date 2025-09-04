"use client";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function BlogPreview() {
  return (
    <div className="w-full flex flex-row gap-5 h-[500px]">
      <Card className="hidden lg:block h-full w-1/2">
        <CardBody className="h-2/3 p-0">
          <Image
            src="/images/blog_2.jpg"
            alt="blog_preview_1"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
        </CardBody>
        <CardFooter className="h-1/3">
          <div className="w-full h-full text-black flex flex-col gap-2 p-2 px-4 relative">
            <h3 className="font-exotc350 text-4xl leading-8">
              The Hidden Dangers of Delaying Roof Repairs
            </h3>
            <p className="font-cocogoose text-sm">
              A small leak or a missing shingle may not seem urgent, but
              postponing roof repairs can quickly lead to costly problems...
            </p>
            <div className="absolute w-full h-[15px] bottom-0 flex items-end justify-end px-5 hover:cursor-pointer">
              <p className="font-cocogoose text-lg hover:underline">
                Read more ➤
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <div className="flex flex-col w-full lg:w-1/2 gap-6">
        <Card className="h-1/2 w-full">
          <CardBody>
            <div className="flex flex-row h-full gap-7">
              <div className="w-[45%] h-full">
                <Image
                  src="/images/blog_3.webp"
                  alt="blog_preview_1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex w-[55%] flex-col relative text-black mt-5 gap-3">
                <h3 className="font-exotc350 text-2xl leading-6 md:text-4xl md:leading-8">
                  How New Siding Can Transform Your Home’s Value
                </h3>
                <p className="font-cocogoose text-xs md:text-sm">
                  Siding isn’t just about curb appeal, it’s a critical layer of
                  protection against weather, moisture, and pests...
                </p>
                <div className="absolute w-full h-[15px] bottom-0 flex items-end justify-end px-5 hover:cursor-pointer">
                  <p className="font-cocogoose text-sm md:text-lg hover:underline">
                    Read more ➤
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full h-1/2">
          <CardBody>
            <div className="flex flex-row h-full gap-7">
              <div className="w-[45%] h-full">
                <Image
                  src="/images/blog_4.webp"
                  alt="blog_preview_1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex w-[55%] flex-col relative text-black mt-5 gap-3">
                <h3 className="font-exotc350 text-2xl leading-6 md:text-4xl md:leading-8">
                  Windows That Work: Why Energy Efficiency Matters
                </h3>
                <p className="font-cocogoose text-xs md:text-sm">
                  Old or poorly sealed windows can quietly drain your home’s
                  energy, causing your HVAC system...
                </p>
                <div className="absolute w-full h-[15px] bottom-0 flex items-end justify-end px-5 hover:cursor-pointer">
                  <p className="font-cocogoose text-sm md:text-lg hover:underline">
                    Read more ➤
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
