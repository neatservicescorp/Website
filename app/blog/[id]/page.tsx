import { ThemeProvider } from "@/app/components/ThemeProvider";
import { getThemeFromPath } from "@/app/context/global";
import BlogEntryComponent from "./components";
import Image from "next/image";
import { BlogEntriesData } from "./blogEntries";
import { ArticleStructuredData } from "@/app/components/StructuredData";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// Generate static params for all blog entries at build time
export async function generateStaticParams() {
  return BlogEntriesData.map((entry) => ({
    id: entry.key,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const blogEntry = BlogEntriesData.find((entry) => entry.key === id);

  // Return 404 for invalid blog entries
  if (!blogEntry) {
    notFound();
  }

  const initialTheme = getThemeFromPath("/");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <ArticleStructuredData
        title={blogEntry.title}
        description={blogEntry.startContent}
        imageUrl={blogEntry.imageUrl}
        datePublished={blogEntry.date}
        author={blogEntry.author}
      />
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
          <BlogEntryComponent entry={blogEntry} />
        </div>
      </main>
    </ThemeProvider>
  );
}
