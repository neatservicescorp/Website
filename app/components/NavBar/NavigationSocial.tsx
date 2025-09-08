import Image from "next/image";
import React from "react";

type NavigationSocialProps = {
  gap?: string;
};

export default function NavigationSocial({
  gap = "gap-2",
}: NavigationSocialProps) {
  return (
    <div className={`flex-row ${gap} hidden lg:flex pr-5`}>
      <Image
        src="/icons/facebook.svg"
        alt="facebook_icon"
        width={30}
        onClick={() => window.open("https://www.facebook.com/Neatservicescorp/")}
        height={30}
        className="hover:cursor-pointer hover:opacity-80 transition-opacity"
      />
      <Image
        src="/icons/instagram.svg"
        alt="instagram_icon"
        width={32}
        onClick={() => window.open("https://www.instagram.com/neatservices_inc/")}
        height={32}
        className="hover:cursor-pointer hover:opacity-80 transition-opacity"
      />
      {/* <Image
        src="/icons/tiktok.svg"
        alt="tiktok_icon"
        width={28}
        height={28}
        className="hover:cursor-pointer hover:opacity-80 transition-opacity"
      /> */}
    </div>
  );
}
