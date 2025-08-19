"use client";

import {
  Button,
  Divider,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@heroui/react";
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
        <PopoverContent className="w-[350px]">
          <div className="w-full max-w-[500px] p-3">
            <form className="flex flex-col gap-5 font-cocogoose text-black">
              <p className="font-black">Send us a message!</p>
              <Divider />
              <Input label="Email address" />
              <Textarea label="Message" />
              <p className="text-xs">
                {
                  "We’ll be in touch with you shortly! For estimates, please fill out our main form."
                }
              </p>
              <Button>Send</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
