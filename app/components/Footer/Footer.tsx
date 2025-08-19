"use client";
import Image from "next/image";
import React from "react";
import NavigationSocial from "../NavBar/NavigationSocial";
import FooterLinks from "./FooterLinks";
import { useGlobalStore } from "@/app/context/global";

export default function Footer() {
  const { pageTheme } = useGlobalStore();

  return (
    <footer
      className={`h-44 lg:h-72 ${
        pageTheme === "light" ? "bg-[#8A8A8A]" : "bg-[#D9D9D9]"
      } flex justify-center`}
    >
      <div className="w-full max-w-[1500px] flex flex-row items-center justify-between relative">
        <Image
          src="neat_logo.svg"
          alt="neat_logo"
          width={230}
          height={250}
          className="w-48 lg:w-60"
        />
        <div className="flex-col font-exotc350 gap-5 text-black hidden lg:flex">
          <div className="flex flex-col text-xl">
            <p className="h-5">Office Hours</p>
            <p>Mon Fri | 7am to 5pm</p>
          </div>
          <div className="flex flex-col text-xl">
            <p>Follow us on social media</p>
            <NavigationSocial gap="gap-1" />
          </div>
        </div>
        <FooterLinks />
        <div className="absolute font-cocogoose text-xs bottom-5 right-0 w-full text-center text-black">
          <p>© 2025 Neat Services Corp. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
