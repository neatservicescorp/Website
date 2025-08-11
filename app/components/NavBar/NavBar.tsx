"use client";

import Image from "next/image";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import NavigationSocial from "./NavigationSocial";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useGlobalStore } from "@/app/context/global";

export default function NavBar() {
  const router = useRouter();
  const { pageTheme } = useGlobalStore();

  return (
    <nav
      className={`h-24 shadow-lg lg:h-32 absolute z-50 ${
        pageTheme === "light" ? "bg-[#E9E9E9]" : "bg-red-neat"
      } flex justify-center w-full`}
    >
      <div className="w-full max-w-[1400px] flex flex-row pr-6 lg:px-0 justify-between items-center">
        <Image
          src="/neat_logo.svg"
          alt="neat_logo"
          width={300}
          height={300}
          className="hover:cursor-pointer h-full lg:h-auto lg:w-auto w-52"
          onClick={() => router.push("/")}
        />

        <NavigationMenu />
        <NavigationSocial />
        <MobileMenu />
      </div>
    </nav>
  );
}
