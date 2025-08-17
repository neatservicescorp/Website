import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";
import ProjectsComponent from "../components/Projects";

export default async function Projects() {
  const initialTheme = getThemeFromPath("/projects");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="pt-32">
        <div className="w-full h-[600px] 2xl:h-[800px] relative z-10 flex justify-center">
          <Image
            src="/images/home_bg.png"
            alt="page_main"
            width={2000}
            height={2000}
            className="absolute w-full h-full object-[center_30%] object-cover"
          />
          <div className="absolute w-full h-full bg-gradient-to-tr from-black to-transparent"></div>
          <div className="w-full h-full p-18 flex items-center max-w-[1400px]">
            <div className="flex flex-col text-white z-10 max-w-[40%] gap-3">
              <h1 className="font-exotc350 text-6xl 2xl:text-7xl max-w-[360px] 2xl:max-w-[400px] leading-12 2xl:leading-15">
                Neat Projects 5 Star results
              </h1>
              <p className="font-cocogoose 2xl:text-lg max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] min-h-screen flex justify-center w-full">
          <div className="w-full max-w-[1400px] p-10">
            <ProjectsComponent
              projects={[
                {
                  image: "/images/home_bg.png",
                  location: "New York",
                  type: "Bathroom",
                },
                {
                  image: "/images/home_bg.png",
                  location: "New York",
                  type: "Bathroom",
                },
                {
                  image: "/images/home_bg.png",
                  location: "New York",
                  type: "Bathroom",
                },
                {
                  image: "/images/home_bg.png",
                  location: "New York",
                  type: "Bathroom",
                },
                {
                  image: "/images/home_bg.png",
                  location: "New York",
                  type: "Bathroom",
                },
              ]}
            />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
