"use client";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function BlogPreview() {
  return (
    <div className="w-full flex flex-row gap-5 h-[500px]">
      <Card className="h-full w-1/2">
        <CardBody className="h-2/3 p-0">
          <Image
            src="/api/image?key=home_bg.png"
            alt="blog_preview_1"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
        </CardBody>
        <CardFooter className="h-1/3">
          <div className="w-full h-full text-black flex flex-col gap-1 p-2 px-4 relative">
            <h3 className="font-exotc350 text-5xl">Header</h3>
            <p className="font-cocogoose text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              praesentium laudantium, autem, voluptatibus a deleniti nemo
              adipisci illo dignissimos.
            </p>
            <div className="absolute w-full h-[15px] bottom-0 flex items-end justify-end px-5 hover:cursor-pointer">
              <p className="font-cocogoose text-lg hover:underline">
                Read more ➤
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <div className="flex flex-col w-1/2 gap-6">
        <Card className="h-1/2 w-full">
          <CardBody>
            <div className="flex flex-row h-full gap-7">
              <div className="w-[45%] h-full">
                <Image
                  src="/api/image?key=home_bg.png"
                  alt="blog_preview_1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex w-[55%] flex-col relative text-black mt-5 gap-3">
                <h3 className="font-exotc350 text-5xl">Header</h3>
                <p className="font-cocogoose text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae praesentium laudantium, autem, voluptatibus a
                  deleniti nemo adipisci illo dignissimos.
                </p>
                <div className="absolute w-full h-[15px] bottom-0 flex items-end justify-end px-5 hover:cursor-pointer">
                  <p className="font-cocogoose text-lg hover:underline">
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
                  src="/api/image?key=home_bg.png"
                  alt="blog_preview_1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex w-[55%] flex-col relative text-black mt-5 gap-3">
                <h3 className="font-exotc350 text-5xl">Header</h3>
                <p className="font-cocogoose text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae praesentium laudantium, autem, voluptatibus a
                  deleniti nemo adipisci illo dignissimos.
                </p>
                <div className="absolute w-full h-[15px] bottom-0 flex items-end justify-end px-5 hover:cursor-pointer">
                  <p className="font-cocogoose text-lg hover:underline">
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
