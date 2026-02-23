"use client";
import Image from "next/image";
import { sections } from "./sections";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function MobileMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
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
        <div className="absolute right-0 mt-2 w-48 bg-neutral-900 rounded-xl shadow-lg z-50 overflow-hidden">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => {
                router.push(section.redirect);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-white font-cocogoose text-sm hover:bg-white/10 hover:cursor-pointer transition-colors"
            >
              {section.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
