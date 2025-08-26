import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";
import MainForm from "../components/MainForm";
import InteractiveMap from "../components/InteractiveMap";
import ImageSlideshow from "../components/ImageSlideshow";

export default function Contact() {
  const initialTheme = getThemeFromPath("/contact");

  const mapToken = process.env.NEXT_PUBLIC_MAP_TOKEN;
  const slideImages = [
    "/api/image?key=team.jpeg",
    "/api/image?key=team_1.png",
    "/api/image?key=team_3.png",
    "/api/image?key=team_4.png",
    "/api/image?key=team_5.png",
    "/api/image?key=team_2.png",
    "/api/image?key=team_6.png",
    "/api/image?key=team_7.png",
  ];
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen pt-24 lg:pt-32 bg-white overflow-hidden">
        <div className="bg-[#70685B] h-[600px] lg:h-[700px] 2xl:h-[900px] w-full flex justify-center">
          <div className="w-full max-w-[1600px] relative h-full">
            <ImageSlideshow
              interval={5000}
              images={slideImages}
              className="object-cover w-[65%] h-full"
            />
            <div className="absolute h-full top-0 right-0 w-[40%] bg-gradient-to-l from-90% from-[#70685B] to-transparent"></div>
            <div className="absolute top-0 right-5 xl:right-10 max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] flex h-full items-center">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-[700px] overflow-hidden">
          <div className="flex flex-row w-full max-w-[1500px] h-full p-10 items-center justify-between">
            <div className="flex flex-col text-black w-[40%] gap-3">
              <h3 className="font-exotc350 text-7xl leading-tight">
                Where we are
              </h3>
              <p className="font-cocogoose text-lg">
                You can reach us anytime at 718-880-4080 or by email at
                neatservicescorp@gmail.com . Our office is located at 8211 37th
                St., Ste 404, Jackson Heights, NY 11372, and we are available
                24/7 to assist you with your needs.
              </p>
            </div>
            <div className="w-[50%] h-[450px] flex-shrink-0">
              <InteractiveMap mapToken={mapToken} />
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
