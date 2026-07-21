"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import MobileMenu from "@/app/components/NavBar/MobileMenu";
import { useGlobalStore } from "@/app/context/global";
import NavigationMenu from "./NavigationMenu";
import NavigationSocial from "./NavigationSocial";

export default function NavBar() {
  const router = useRouter();
  const { pageTheme } = useGlobalStore();

  return (
    <nav
      className={`h-22 shadow-lg lg:h-30 fixed z-40 ${
        pageTheme === "light" ? "bg-[#E9E9E9]" : "bg-red-neat"
      } flex justify-center w-full`}
    >
      <div className="w-full max-w-350 flex flex-row pr-6 lg:px-0 justify-between items-center">
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
