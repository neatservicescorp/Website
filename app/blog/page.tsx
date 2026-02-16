import { getThemeFromPath } from "../lib/theme";
import { ThemeProvider } from "../components/ThemeProvider";
import { Divider } from "@heroui/react";
import InitialBlogPrev from "../components/InitialBlogPrev";
import BlogCards from "../components/BlogCards";
import { getSortedPostsData } from "../lib/blog";

export default function Blog() {
  const initialTheme = getThemeFromPath("/contact");
  const entries = getSortedPostsData();

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main
        id="main-content"
        className="min-h-screen flex justify-center pt-24 lg:pt-32 bg-white"
      >
        <div className="w-full max-w-[1400px] p-5 z-10 flex flex-col text-black items-center">
          <h1 className="font-exotc350 text-4xl md:text-5xl xl:text-6xl py-10 text-center">
            Neat Services Blog
          </h1>
          {entries.length > 0 && <InitialBlogPrev entry={entries[0]} />}
          <Divider className="my-2" />
          <h2 className="my-4 font-exotc350 text-5xl">Latest posts</h2>

          {entries.length > 1 && <BlogCards entries={entries.slice(1, 4)} />}
        </div>
      </main>
    </ThemeProvider>
  );
}
