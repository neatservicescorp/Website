import MainForm from "@/app/components/MainForm";
import { Divider } from "@heroui/react";
import React from "react";
import { BlogEntry } from "./blogEntries";

export default function BlogEntryComponent({ entry }: { entry: BlogEntry }) {
  return (
    <div className="flex flex-col font-cocogoose gap-8 text-sm md:text-base lg:text-lg text-justify">
      <p>{entry.startContent}</p>
      {entry.sections.map((section, index) => (
        <div key={index} className="flex flex-col lg:gap-3">
          <h3 className="font-cocogoose text-xl lg:text-3xl font-bold text-left">
            {section.title}
          </h3>
          <Divider className="my-2" />

          {section.contents.map((content, contentIndex) => (
            <div key={`${index}-${contentIndex}`}>
              {content.type === "text" && <p>{content.content}</p>}
              {content.type === "list" && (
                <ul className="ml-2 list-disc list-inside flex flex-col gap-1">
                  {content.items.map((item, itemIndex) => (
                    <li key={`${index}-${contentIndex}-${itemIndex}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}

      <div className="w-full flex justify-center pt-5 py-10">
        <div className="max-w-[650px] w-full">
          <MainForm />
        </div>
      </div>
    </div>
  );
}
