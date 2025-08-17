import Image from "next/image";
import React from "react";

type RoofingMethodProps = {
  iconBgColor?: string;
};

export default function RoofingMethod({
  iconBgColor = "#D9D9D9",
}: RoofingMethodProps) {
  return (
    <div className="relative w-full min-h-[300px] p-5 flex items-center justify-center px-10">
      <div
        className="absolute top-1/2 h-1 w-full max-w-[90%] z-0"
        style={{ backgroundColor: iconBgColor }}
      ></div>
      <div className="flex flex-row justify-between w-full">
        <div
          className="relative rounded-full h-50 w-50 z-10 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/phone.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-18 h-18"
          />

          <div className="absolute bg-red-neat h-15 w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-2xl">1</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-lg h-5">Step 1</p>
            <p className="text-2xl">Contact</p>
          </div>
        </div>
        <div
          className="relative rounded-full h-50 w-50 z-10 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/calendar.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-18 h-18"
          />

          <div className="absolute bg-red-neat h-15 w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-2xl">2</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-lg h-5">Step 2</p>
            <p className="text-2xl">Appointment</p>
          </div>
        </div>
        <div
          className="relative rounded-full h-50 w-50 z-10 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/cash.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-18 h-18"
          />

          <div className="absolute bg-red-neat h-15 w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-2xl">3</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-lg h-5">Step 3</p>
            <p className="text-2xl">Estimate</p>
          </div>
        </div>
        <div
          className="relative rounded-full h-50 w-50 z-10 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/tool.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-18 h-18"
          />

          <div className="absolute bg-red-neat h-15 w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-2xl">4</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-lg h-5">Step 4</p>
            <p className="text-2xl">Installation</p>
          </div>
        </div>
        <div
          className="relative rounded-full h-50 w-50 z-10 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/house.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-18 h-18"
          />

          <div className="absolute bg-red-neat h-15 w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-2xl">5</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-lg h-5">Step 5</p>
            <p className="text-2xl">Final touches</p>
          </div>
        </div>
      </div>
    </div>
  );
}
