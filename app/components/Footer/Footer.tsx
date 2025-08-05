import Image from "next/image";
import React from "react";
import NavigationSocial from "../NavBar/NavigationSocial";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="h-72 bg-[#D9D9D9] flex justify-center">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-between">
        <Image src="neat_logo.svg" alt="neat_logo" width={230} height={250} />
        <div className="flex flex-col font-exotc350 gap-5 text-black">
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
      </div>
    </footer>
  );
}
