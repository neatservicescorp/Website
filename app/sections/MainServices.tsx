import React from "react";
import MainMenuCard from "../components/MainMenuCard";

export default function MainServices() {
  return (
    <section className="flex flex-col items-center p-6 lg:pb-16 gap-6 lg:px-12 h-full w-full max-w-[1400px] z-10">
      <div className="flex flex-col font-white text-center gap-2">
        <h3 className="font-exotc350 text-6xl pb-4">Our services</h3>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-row items-center gap-5">
          <p className="font-exotc350 text-4xl">Exterior</p>
          <div className="h-[1px] bg-white w-full"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-7">
          <MainMenuCard title="Roof" image="/api/image?key=main_roofing.jpg" />
          <MainMenuCard title="Siding" image="/api/image?key=main_siding.jpg" />
          <MainMenuCard title="Window" image="/api/image?key=home_bg.png" />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-row items-center gap-5">
          <p className="font-exotc350 text-4xl my-4">Interior</p>
          <div className="h-[1px] bg-white w-full"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-7">
          <MainMenuCard
            title="Bathrooms"
            image="/api/image?key=general_bathroom.jpg"
          />
          <MainMenuCard
            title="Kitchen"
            image="/api/image?key=main_kitchen.jpg"
          />
          <MainMenuCard
            title="General Painting"
            image="/api/image?key=painting_general.jpg"
          />
        </div>
      </div>
    </section>
  );
}
