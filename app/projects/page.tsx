import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";
import ProjectsComponent from "../components/Projects";
import { projectData } from "./data";
import BlogPreview from "../components/BlogPreview";
import MainForm from "../components/MainForm";

export default async function Projects() {
  const initialTheme = getThemeFromPath("/projects");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="pt-32">
        <div className="w-full h-[800px] 2xl:h-[900px] relative z-10 flex justify-center">
          <Image
            src="/api/image?key=home_bg.png"
            alt="page_main"
            width={2000}
            height={2000}
            className="absolute w-full h-full object-[center_30%] object-cover"
          />
          <div className="absolute w-full h-full bg-gradient-to-tr from-black to-transparent"></div>
          <div className="w-full h-full flex items-center max-w-[1400px] justify-between">
            <div className="flex flex-col lg:w-[50%] text-white justify-center z-10 ml-20">
              <h1 className="font-exotc350 text-6xl 2xl:text-7xl max-w-[360px] 2xl:max-w-[400px] leading-12 2xl:leading-15">
                Neat Projects 5 Star results
              </h1>
              <p className="font-cocogoose 2xl:text-lg max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </p>
            </div>
            <div className="w-[50%] p-16 h-full content-center">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] min-h-screen flex flex-col items-center w-full">
          <div className="w-full max-w-[1400px] p-10">
            <ProjectsComponent projects={projectData} />
          </div>
          <div className="w-full max-w-[1400px] p-10 mb-16 gap-10 flex flex-col">
            <div className="flex flex-col text-black w-full">
              <h2 className="font-exotc350 text-6xl">Our blog</h2>
              <p className="font-cocogoose text-lg">Recent articles</p>
            </div>
            <BlogPreview />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
