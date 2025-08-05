import { useRouter } from "next/navigation";
import React from "react";
import { sections } from "./sections";

export default function NavigationMenu() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-10 font-cocogoose text-black">
      {sections.map((section) => {
        if (section.title === "Home") {
          return;
        }
        return (
          <p
            className="text-sm hover:cursor-pointer hover:opacity-70"
            key={section.redirect}
            onClick={() => router.push(section.redirect)}
          >
            {section.title}
          </p>
        );
      })}
    </div>
  );
}
