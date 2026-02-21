"use client";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({ title, content, isOpen, onToggle }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-black rounded-xl overflow-hidden self-start">
      <button
        onClick={onToggle}
        className="w-full flex flex-row-reverse items-center gap-4 lg:gap-7 p-4 hover:cursor-pointer text-left bg-transparent"
        aria-expanded={isOpen}
      >
        <span
          className="flex-shrink-0 w-7 h-7 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)" }}
        >
          <Image src="/icons/cross.svg" alt="toggle" width={28} height={28} className="w-7 h-7" />
        </span>
        <span className="flex-1 text-black font-cocogoose text-sm">{title}</span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="px-5 pb-4 text-black font-cocogoose text-sm">{content}</p>
      </div>
    </div>
  );
}
