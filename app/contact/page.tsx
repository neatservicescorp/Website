import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";
import MainForm from "../components/MainForm";
import InteractiveMap from "../components/InteractiveMap";

export default async function Contact() {
  const initialTheme = getThemeFromPath("/contact");

  const mapToken = process.env.MAP_PUBLIC_TOKEN;
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen pt-24 lg:pt-32 bg-white">
        <div className="bg-[#70685B] h-[600px] lg:h-[700px] 2xl:h-[900px] w-full flex justify-center">
          <div className="w-full max-w-[1600px] relative h-full">
            <Image
              src="/images/team.jpeg"
              alt="team_background"
              width={1500}
              height={1500}
              className="w-[65%] object-cover absolute h-full"
            />
            <div className="absolute h-full right-0 w-[40%] bg-gradient-to-l from-90% from-[#70685B] to-transparent"></div>
            <div className="absolute right-5 xl:right-10 max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] flex h-full items-center">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-[700px]">
          <div className="flex flex-row w-full max-w-[1500px] h-full p-10 items-center justify-between">
            <div className="flex flex-col text-black w-[40%] gap-3">
              <h3 className="font-exotc350 text-7xl">Where we are</h3>
              <p className="font-cocogoose text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                atque debitis distinctio blanditiis magni, temporibus dolor
                dolorem delectus amet possimus illo, voluptates, recusandae
                maiores! Iste doloremque cupiditate delectus excepturi non?
              </p>
            </div>
            <div className="w-[50%] h-[450px]">
              <InteractiveMap mapToken={mapToken} />
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
