"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { sections } from "./sections";

export default function NavigationMenu() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="flex-row gap-10 font-cocogoose text-black hidden lg:flex relative">
      {sections.map((section) => {
        if (section.title === "Home") return null;
        if (!section.children) {
          return (
            <p
              className="text-sm hover:cursor-pointer hover:opacity-70"
              key={section.redirect}
              onClick={() => router.push(section.redirect)}
            >
              {section.title}
            </p>
          );
        }
        return (
          <div
            key={section.redirect}
            className="relative"
            onMouseEnter={() => setOpenDropdown(section.title)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <p
              className="text-sm hover:cursor-pointer hover:opacity-70 flex items-center gap-1"
              onClick={() => router.push(section.redirect)}
            >
              {section.title}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </p>
            {openDropdown === section.title && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-100">
                {section.children.map((child) => (
                  <button
                    key={child.redirect}
                    onClick={() => {
                      router.push(child.redirect);
                      setOpenDropdown(null);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <p className="text-sm font-semibold text-black">{child.title}</p>
                    {child.subtitle && (
                      <p className="text-xs text-gray-500 mt-0.5">{child.subtitle}</p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
