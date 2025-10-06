import MainForm from "./components/MainForm";
import Certifications from "./components/Certifications";
import RoofingMethod from "./components/RoofingMethod";
import ImageSlideshow from "./components/ImageSlideshow";
import { ThemeProvider } from "./components/ThemeProvider";
import { getThemeFromPath } from "./context/global";
import MainServices from "./sections/MainServices";
import MainFinalSection from "./sections/MainFinalSection";
import Reviews from "./components/Reviews";
import FinancingOpts from "./components/FinancingOpts";

export default function Home() {
  const initialTheme = getThemeFromPath("/");

  // Define your background images
  const backgroundImages = [
    "/api/image?key=slide_2.jpg",
    "/api/image?key=home_bg.png",
    "/api/image?key=slide_5.PNG",
    "/api/image?key=projects/sd_book_faith_1.jpeg",
    "/api/image?key=slide_8.PNG",
  ];

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen">
        <div className="relative flex justify-center top-0 w-full z-0 h-[1100px] md:h-[1000px] lg:h-[900px]">
          <ImageSlideshow
            images={backgroundImages}
            interval={8000} // 8 seconds between transitions
            className="w-full h-full"
            alt="home_background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black from-[5%] to-transparent"></div>
          <div className="absolute top-0 z-10 h-full w-full flex flex-col lg:flex-row p-5 pt-36 max-w-[1400px] gap-10 md:gap-0">
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3 md:ml-5 lg:ml-10 text-white">
              <div className="flex flex-col font-exotc350 text-5xl 2xl:text-6xl">
                <h1>Top-Rated</h1>
                <h1>Roofing & Siding Experts</h1>
              </div>
              <div className="lg:max-w-[70%] w-full font-cocogoose text-medium 2xl:text-base flex flex-col gap-0">
                <p>
                  Neat Services Inc. has brought expert craftsmanship and
                  personalized care to homeowners across NYC. Certified by GAF
                  and CertainTeed, we specialize in shingle roofing and premium
                  siding solutions with a human touch.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center md:p-10 lg:p-16 lg:pr-8 lg:pl-20">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-85% to-[#4C4B4B]"></div>
          <div className="w-full max-w-[1400px] lg:px-12 flex flex-col items-center gap-20">
            <Certifications />
            <Reviews />
          </div>
        </div>
        <div className="relative flex justify-center py-6 md:pt-8 xl:py-12 items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4C4B4B] to-[#313131]"></div>
          <div className="w-full max-w-[1400px] flex flex-col items-center z-10 gap-3 p-5 md:p-0">
            <div className="flex flex-col gap-2 text-white text-center">
              <h2 className="font-exotc350 text-5xl">The Neat Process</h2>
              <p className="font-cocogoose text-medium">
                A Step-by-Step Approach You Can Rely On
              </p>
            </div>
            <RoofingMethod />
            <FinancingOpts />
          </div>
        </div>
        <div className="relative flex justify-center min-h-[700px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#313131] to-[#828282] from-20%"></div>
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
