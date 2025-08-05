"use client";

import Image from "next/image";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import NavigationSocial from "./NavigationSocial";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="h-32 bg-red-neat flex justify-center">
      <div className="w-full max-w-[1400px] flex flex-row justify-between items-center">
        <Image
          src="/neat_logo.svg"
          alt="neat_logo"
          width={300}
          height={300}
          className="hover:cursor-pointer h-full"
          onClick={() => router.push("/")}
        />
        <NavigationMenu />
        <NavigationSocial />
      </div>
    </nav>
  );
}
