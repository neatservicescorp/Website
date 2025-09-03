import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  content: string;
};

export default function FAQItem({ title, content }: Props) {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        title={title}
        indicator={
          <Image
            src="/icons/cross.svg"
            alt="expand_button"
            width={50}
            height={50}
            className="w-7 h-7"
          />
        }
        className="bg-transparent border-1 border-black text-black font-cocogoose text-sm p-3"
        classNames={{
          base: "content-center",
          title: "text-black font-cocogoose",
          trigger: "lg:gap-7 flex-row-reverse hover:cursor-pointer",
          indicator: "text-black w-7 h-7 data-[open=true]:-rotate-45",
          content: "px-5",
        }}
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
}
