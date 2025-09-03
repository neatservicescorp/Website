"use client";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import React from "react";

type RoofingMethodProps = {
  iconBgColor?: string;
};

export default function RoofingMethod({
  iconBgColor = "#D9D9D9",
}: RoofingMethodProps) {
  return (
    <div className="relative w-full min-h-[300px] overflow-x-hidden p-5 flex items-center justify-center lg:px-10">
      <div
        className="hidden md:block absolute top-1/2 h-1 w-full max-w-[70%] lg:max-w-[90%] z-0"
        style={{ backgroundColor: iconBgColor }}
      ></div>
      <div className="hidden md:flex flex-row justify-between w-full">
        <div
          className="relative rounded-full w-30 h-30 lg:h-40 lg:w-40 xl:h-50 xl:w-50 z-10 flex flex-col items-center justify-center gap-0.5 lg:gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/phone.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-8 h-8 xl:w-18 xl:h-18"
          />

          <div className="absolute bg-red-neat h-10 w-10 xl:h-15 xl:w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-xl xl:text-2xl">1</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-md lg:text-lg h-5">Step 1</p>
            <p className="text-lg leading-5 lg:leading-normal lg:text-2xl">
              Contact
            </p>
          </div>
        </div>
        <div
          className="relative rounded-full w-30 h-30 lg:h-40 lg:w-40 xl:h-50 xl:w-50 z-10 flex flex-col items-center justify-center gap-0.5 lg:gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/calendar.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-8 h-8 xl:w-18 xl:h-18"
          />

          <div className="absolute bg-red-neat h-10 w-10 xl:h-15 xl:w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-xl xl:text-2xl">2</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-md lg:text-lg h-5">Step 2</p>
            <p className="text-lg leading-5 lg:leading-normal lg:text-2xl">
              Appointment
            </p>
          </div>
        </div>
        <div
          className="relative rounded-full w-30 h-30 lg:h-40 lg:w-40 xl:h-50 xl:w-50 z-10 flex flex-col items-center justify-center gap-0.5 lg:gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/cash.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-8 h-8 xl:w-18 xl:h-18"
          />

          <div className="absolute bg-red-neat h-10 w-10 xl:h-15 xl:w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-xl xl:text-2xl">3</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-md lg:text-lg h-5">Step 3</p>
            <p className="text-lg leading-5 lg:leading-normal lg:text-2xl">
              Estimate
            </p>
          </div>
        </div>
        <div
          className="relative rounded-full w-30 h-30 lg:h-40 lg:w-40 xl:h-50 xl:w-50 z-10 flex flex-col items-center justify-center gap-0.5 lg:gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/tool.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-8 h-8 xl:w-18 xl:h-18"
          />

          <div className="absolute bg-red-neat h-10 w-10 xl:h-15 xl:w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-xl xl:text-2xl">4</p>
          </div>

          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-md lg:text-lg h-5">Step 4</p>
            <p className="text-lg leading-5 lg:leading-normal lg:text-2xl">
              Installation
            </p>
          </div>
        </div>
        <div
          className="relative rounded-full w-30 h-30 lg:h-40 lg:w-40 xl:h-50 xl:w-50 z-10 flex flex-col items-center justify-center gap-0.5 lg:gap-3"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image
            src="/icons/house.svg"
            alt="phone_icon"
            width={100}
            height={100}
            className="w-8 h-8 xl:w-18 xl:h-18"
          />

          <div className="absolute bg-red-neat h-10 w-10 xl:h-15 xl:w-15 rounded-full flex items-center justify-center top-0 right-0">
            <p className="text-black font-exotc350 text-xl xl:text-2xl">5</p>
          </div>
          <div className="flex flex-col font-exotc350 text-center text-black font-bold">
            <p className="text-md lg:text-lg h-5">Step 5</p>
            <p className="text-lg leading-5 lg:leading-normal lg:text-2xl">
              Final touches
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4 w-full pb-5">
        <Card style={{ backgroundColor: iconBgColor }} className="w-full">
          <CardBody className="flex flex-row w-full items-center gap-2">
            <div className="bg-red-neat h-8 w-8 rounded-full flex items-center justify-center">
              <p className="text-black font-exotc350 text-lg">1</p>
            </div>
            <div className="flex flex-row gap-7 items-center">
              <Image
                src="/icons/phone.svg"
                alt="phone_icon"
                width={100}
                height={100}
                className="w-7 h-7"
              />
              <p className="text-black font-bold font-cocogoose">Contact</p>
            </div>
          </CardBody>
        </Card>
        <Card style={{ backgroundColor: iconBgColor }} className="w-full">
          <CardBody className="flex flex-row w-full items-center gap-2">
            <div className="bg-red-neat h-8 w-8 rounded-full flex items-center justify-center">
              <p className="text-black font-exotc350 text-lg">2</p>
            </div>
            <div className="flex flex-row gap-7 items-center">
              <Image
                src="/icons/calendar.svg"
                alt="phone_icon"
                width={100}
                height={100}
                className="w-7 h-7"
              />
              <p className="text-black font-bold font-cocogoose">Appointment</p>
            </div>
          </CardBody>
        </Card>
        <Card style={{ backgroundColor: iconBgColor }} className="w-full">
          <CardBody className="flex flex-row w-full items-center gap-2">
            <div className="bg-red-neat h-8 w-8 rounded-full flex items-center justify-center">
              <p className="text-black font-exotc350 text-lg">3</p>
            </div>
            <div className="flex flex-row gap-7 items-center">
              <Image
                src="/icons/cash.svg"
                alt="phone_icon"
                width={100}
                height={100}
                className="w-7 h-7"
              />
              <p className="text-black font-bold font-cocogoose">Estimate</p>
            </div>
          </CardBody>
        </Card>
        <Card style={{ backgroundColor: iconBgColor }} className="w-full">
          <CardBody className="flex flex-row w-full items-center gap-2">
            <div className="bg-red-neat h-8 w-8 rounded-full flex items-center justify-center">
              <p className="text-black font-exotc350 text-lg">4</p>
            </div>
            <div className="flex flex-row gap-7 items-center">
              <Image
                src="/icons/tool.svg"
                alt="phone_icon"
                width={100}
                height={100}
                className="w-7 h-7"
              />
              <p className="text-black font-bold font-cocogoose">
                Installation
              </p>
            </div>
          </CardBody>
        </Card>
        <Card style={{ backgroundColor: iconBgColor }} className="w-full">
          <CardBody className="flex flex-row w-full items-center gap-2">
            <div className="bg-red-neat h-8 w-8 rounded-full flex items-center justify-center">
              <p className="text-black font-exotc350 text-lg">5</p>
            </div>
            <div className="flex flex-row gap-7 items-center">
              <Image
                src="/icons/house.svg"
                alt="phone_icon"
                width={100}
                height={100}
                className="w-7 h-7"
              />
              <p className="text-black font-bold font-cocogoose">
                Final Touches
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
