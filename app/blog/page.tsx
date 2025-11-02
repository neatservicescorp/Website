import { getThemeFromPath } from "../context/global";
import { ThemeProvider } from "../components/ThemeProvider";
import { Divider } from "@heroui/react";
import InitialBlogPrev from "../components/InitialBlogPrev";
import BlogCards from "../components/BlogCards";
import { useMemo } from "react";
import { BlogEntriesData } from "./[id]/blogEntries";

export default function Blog() {
  const initialTheme = getThemeFromPath("/contact");
  const entries = useMemo(
    () =>
      BlogEntriesData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB.getTime() - dateA.getTime();
      }),
    []
  );

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
          <InitialBlogPrev entry={entries[0]} />
          <Divider className="my-2" />
          <h2 className="my-4 font-exotc350 text-5xl">Latest posts</h2>

          <BlogCards entries={entries.slice(1, 4)} />
        </div>
      </main>
    </ThemeProvider>
  );
}
