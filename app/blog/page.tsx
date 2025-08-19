import { getThemeFromPath } from "../context/global";
import { ThemeProvider } from "../components/ThemeProvider";
import { Divider } from "@heroui/react";
import InitialBlogPrev from "../components/InitialBlogPrev";
import BlogCards from "../components/BlogCards";

export default function Blog() {
  const initialTheme = getThemeFromPath("/contact");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen flex justify-center pt-32 bg-white">
        <div className="w-full max-w-[1400px] z-10 flex flex-col text-black items-center">
          <h1 className="font-exotc350 text-7xl py-10">Neat Services Blog</h1>
          <InitialBlogPrev />
          <Divider className="my-2" />
          <h2 className="my-4 font-exotc350 text-5xl">Latest posts</h2>

          <BlogCards />
        </div>
      </main>
    </ThemeProvider>
  );
}
