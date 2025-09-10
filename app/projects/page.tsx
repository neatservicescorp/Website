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
      <main className="pt-24 lg:pt-32">
        <div className="w-full h-[950px] md:h-[900px] 2xl:h-[900px] relative z-10 flex justify-center">
          <Image
            src="/api/image?key=home_bg.png"
            alt="page_main"
            width={2000}
            height={2000}
            className="absolute w-full h-full object-[center_30%] object-cover"
          />
          <div className="absolute w-full h-full bg-gradient-to-tr from-black to-transparent"></div>
          <div className="w-full h-full flex flex-col lg:flex-row items-center max-w-[1400px] p-5 gap-8 lg:gap-0">
            <div className="flex flex-col lg:w-[50%] gap-3 text-white justify-center z-10 lg:ml-10 xl:ml-20 pt-8 lg:pt-0">
              <h1 className="font-exotc350 text-5xl 2xl:text-6xl max-w-[360px] 2xl:max-w-[400px] leading-12 2xl:leading-15">
                Neat Projects 5 Star results
              </h1>
              <p className="font-cocogoose 2xl:text-base max-w-[450px]">
                From roofing and siding to windows and kitchens, every Neat
                project is built on quality craftsmanship and lasting results.
                Discover why homeowners across New York trust us to protect and
                transform their homes with excellence.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex p-1 md:p-8 lg:p-16 justify-center">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] min-h-screen flex flex-col items-center w-full">
          <div className="w-full max-w-[1400px] p-5 lg:p-10">
            <ProjectsComponent projects={projectData} />
          </div>
          <div className="w-full max-w-[1400px] p-5 md:p-10 mb-16 gap-10 flex flex-col">
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
