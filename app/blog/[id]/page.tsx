"use client";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { getThemeFromPath } from "@/app/context/global";
import React, { useEffect } from "react";
import { BlogEntriesData } from "./components";
import { useRouter } from "next/navigation";
import { addToast } from "@heroui/react";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function Page({ params }: Props) {
  const initialTheme = getThemeFromPath("/");
  const router = useRouter();

  const { id } = React.use(params);
  const entries = Object.keys(BlogEntriesData);
  const isValidEntry = entries.includes(id);

  useEffect(() => {
    if (!isValidEntry) {
      addToast({
        title: "Error",
        description: "Blog entry not found",
      });
      router.push("/blog");
    }
  }, [isValidEntry, id]);

  if (!isValidEntry) {
    return (
      <div className="pt-24 lg:pt-32 min-h-[80vh] w-full flex justify-center items-center">
        Blog entry not found. Redirecting to blog...
      </div>
    );
  }

  const blogEntry = BlogEntriesData[id];

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="pt-24 lg:pt-32 flex justify-center bg-gray-100 text-black">
        <div className="max-w-[1400px] gap-5 w-full min-h-screen flex flex-col p-5 py-10">
          <div className="flex flex-col gap-3 font-cocogoose">
            <h1 className="font-exotc350 text-4xl lg:text-6xl">
              {blogEntry.title}
            </h1>
            <div className="flex flex-col text-gray-400 gap-1">
              <p className="text-xs">{blogEntry.author}</p>
              <p className="text-gray-500 lg:text-base text-sm font-semibold">
                {blogEntry.date}
              </p>
            </div>
          </div>
          <Image
            src={blogEntry.imageUrl}
            alt={blogEntry.title}
            width={1500}
            height={1000}
            className="w-full h-full aspect-video rounded-[35px] lg:p-5"
          />
          <blogEntry.Component />
        </div>
      </main>
    </ThemeProvider>
  );
}
