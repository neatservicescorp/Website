"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import Image from "next/image";

export default function Messages() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Popover placement="top-end">
        <PopoverTrigger>
          <div className="w-24 h-24 rounded-full bg-white p-4 flex items-center justify-center hover:cursor-pointer">
            <Image
              src="/icons/message.svg"
              alt="message_icon"
              width={150}
              height={150}
              className="translate-x-0.5 translate-y-1"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="w-full max-w-[300px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut
              doloremque accusantium earum delectus beatae illo accusamus id
              repudiandae modi perferendis eum, dignissimos incidunt dolorum
              libero fuga laudantium praesentium facilis!
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
