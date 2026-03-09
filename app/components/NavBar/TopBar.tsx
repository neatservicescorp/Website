"use client";

import { useRouter, usePathname } from "next/navigation";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleEstimateClick = () => {
    if (pathname === "/") {
      document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#estimator");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-neutral-900 h-10 flex items-center justify-between px-4 lg:px-10">
      {/* Left: contact info */}
      <div className="hidden sm:flex items-center gap-5 font-cocogoose text-white/70 text-[11px]">
        <a
          href="tel:7188804080"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>📞</span>
          <span>718-880-4080</span>
        </a>
        <a
          href="mailto:neatservicescorp@gmail.com"
          className="hover:text-white transition-colors hidden md:flex items-center gap-1.5"
        >
          <span>✉️</span>
          <span>neatservicescorp@gmail.com</span>
        </a>
      </div>

      {/* Right: CTA */}
      <button
        onClick={handleEstimateClick}
        className="sm:ml-auto mx-auto sm:mx-0 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white text-neutral-900 font-cocogoose text-[11px] font-semibold hover:bg-gray-200 transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
      >
        ⚡ Get an Instant Estimate
      </button>
    </div>
  );
}
