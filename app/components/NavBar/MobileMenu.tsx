"use client";
import Image from "next/image";
import { sections } from "./sections";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function MobileMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleEstimateClick = () => {
    setOpen(false);
    if (pathname === "/") {
      document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#estimator");
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open menu"
        className="bg-transparent border-none hover:cursor-pointer"
      >
        <Image src="/icons/menu.svg" alt="menu_icon" width={40} height={40} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-neutral-900 rounded-xl shadow-lg z-50 overflow-hidden">
          {sections.map((section) => {
            if (!section.children) {
              return (
                <button
                  key={section.title}
                  onClick={() => {
                    router.push(section.redirect);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-white font-cocogoose text-sm hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                >
                  {section.title}
                </button>
              );
            }
            return (
              <div key={section.title}>
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.title ? null : section.title
                    )
                  }
                  className="w-full text-left px-4 py-3 text-white font-cocogoose text-sm hover:bg-white/10 transition-colors border-b border-white/5 flex justify-between items-center"
                >
                  {section.title}
                  <svg
                    className={`w-3 h-3 transition-transform ${expandedSection === section.title ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSection === section.title && (
                  <div className="bg-white/5">
                    {section.children.map((child) => (
                      <button
                        key={child.redirect}
                        onClick={() => {
                          router.push(child.redirect);
                          setOpen(false);
                        }}
                        className="w-full text-left px-6 py-2.5 text-white/80 font-cocogoose text-xs hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                      >
                        {child.title}
                        {child.subtitle && (
                          <span className="block text-white/40 text-[10px]">{child.subtitle}</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
