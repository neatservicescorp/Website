"use client";

import { useRouter, usePathname } from "next/navigation";

export default function FloatingCTA() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#estimator");
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Get an instant roofing estimate"
      className="
        fixed z-30
        left-1/2 -translate-x-1/2
        top-[96px] lg:top-[128px]
        inline-flex items-center gap-2
        bg-red-neat text-white
        font-cocogoose font-semibold
        text-[13px] lg:text-[14px]
        px-6 py-2.5
        rounded-b-2xl rounded-t-none
        shadow-[0_6px_32px_rgba(0,0,0,0.28)]
        hover:brightness-110 hover:shadow-[0_8px_40px_rgba(0,0,0,0.38)]
        active:scale-95
        transition-all duration-200 ease-in-out
        cursor-pointer
        whitespace-nowrap
        animate-pulse-subtle
      "
      style={{
        boxShadow: "0 6px 28px rgba(200, 30, 30, 0.45), 0 2px 8px rgba(0,0,0,0.22)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
          clipRule="evenodd"
        />
      </svg>
      Get a Free Instant Estimate
    </button>
  );
}
