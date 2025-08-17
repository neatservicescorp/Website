import Image from "next/image";
import MainForm from "./components/MainForm";
import Certifications from "./components/Certifications";
import RoofingMethod from "./components/RoofingMethod";
import { ThemeProvider } from "./components/ThemeProvider";
import { getThemeFromPath } from "./context/global";
import MainServices from "./sections/MainServices";
import MainFinalSection from "./sections/MainFinalSection";
import Reviews from "./components/Reviews";

export default function Home() {
  const initialTheme = getThemeFromPath("/");
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen">
        <div className="relative flex justify-center top-0 w-full z-0 h-[900px]">
          <Image
            src="/images/home_bg.png"
            alt="home_background"
            width={2000}
            height={2000}
            className="object-cover w-full h-full object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black from-[5%] to-transparent"></div>
          <div className="absolute top-0 z-10 h-full w-full flex flex-row p-5 pt-36 max-w-[1400px]">
            <div className="w-1/2 flex flex-col justify-center gap-3 ml-10">
              <div className="flex flex-col font-exotc350 text-5xl 2xl:text-7xl">
                <h1 className="h-10 2xl:h-14">New York</h1>
                <h1 className="">city contractors</h1>
              </div>
              <div className="max-w-[70%] font-cocogoose text-medium 2xl:text-lg flex flex-col gap-0">
                <p>
                  Over four years serving Queens Yonkers Brooklyn and the Bronx
                  with expert care.h
                </p>
                <p>
                  GAF and CertainTeed certified focused on excellence and trust
                  in every project.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center p-16 pr-8 pl-20">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-85% to-[#4C4B4B]"></div>
          <div className="w-full max-w-[1400px] px-12 flex flex-col items-center gap-20">
            <Certifications />
            <Reviews />
          </div>
        </div>
        <div className="relative flex justify-center py-12 items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4C4B4B] to-[#313131]"></div>
          <div className="w-full max-w-[1400px] flex flex-col items-center z-10 gap-3">
            <div className="flex flex-col gap-1 text-white text-center">
              <h2 className="font-exotc350 text-6xl">
                Our trusted roofing method
              </h2>
              <p className="font-cocogoose text-medium">
                A process that works for every home improvement project.
              </p>
            </div>
            <RoofingMethod />
          </div>
        </div>
        <div className="relative flex justify-center min-h-[700px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#313131] to-[#828282] from-50%"></div>
          <MainServices />
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#828282] to-white"></div>
          <MainFinalSection />
        </div>
      </main>
    </ThemeProvider>
  );
}
