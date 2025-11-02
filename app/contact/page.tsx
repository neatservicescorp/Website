import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";
import MainForm from "../components/MainForm";
import ImageSlideshow from "../components/ImageSlideshow";
import GoogleMap from "../components/GoogleMap";

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
      <main
        id="main-content"
        className="min-h-screen pt-24 lg:pt-32 bg-white overflow-hidden"
      >
        <div className="bg-[#70685B] h-[650px] lg:h-[750px] 2xl:h-[900px] w-full flex justify-center">
          <div className="w-full max-w-[1600px] relative h-full">
            <ImageSlideshow
              interval={5000}
              images={slideImages}
              className="object-cover lg:w-[65%] h-full"
            />
            <div className="absolute h-full top-0 right-0 w-0 lg:w-[40%] bg-gradient-to-l from-90% from-[#70685B] to-transparent"></div>
            <div className="absolute top-0 p-10 px-7 lg:p-0 lg:right-5 xl:right-10 w-full max-w-full lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] flex h-full items-center justify-center">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5 overflow-hidden">
          <div className="flex flex-col md:flex-row w-full max-w-[1500px] h-full p-10 items-center justify-between gap-8 md:gap-0">
            <div className="flex flex-col text-black w-full md:w-[40%] lg:gap-3 gap-5">
              <h3 className="font-exotc350 text-6xl leading-12 lg:leading-tight">
                Where we are
              </h3>
              <p className="font-cocogoose text-l text-justify">
                You can reach us anytime at 718-880-4080 or by email at
                neatservicescorp@gmail.com . Our office is located at 8211 37th
                Ave. Ste 404. Queens, NY 11372. Jackson Heights, and we are
                available 24/7 to assist you with your needs.
              </p>
            </div>
            <div className="w-full md:w-[50%] h-[450px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg">
              <GoogleMap width="100%" height="100%" />
            </div>
            {/* <Location /> */}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
