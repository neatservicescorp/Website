import { ThemeProvider } from "@/app/components/ThemeProvider";
import { getThemeFromPath } from "@/app/lib/theme";
import BlogEntryComponent from "./components";
import BlogCards from "@/app/components/BlogCards";
import Image from "next/image";
import { getPostData, getAllPostIds, getRelatedPosts } from "@/app/lib/blog";
import { ArticleStructuredData } from "@/app/components/StructuredData";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// Generate static params for all blog entries at build time
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  
  try {
    const blogEntry = await getPostData(id);
    const relatedPosts = getRelatedPosts(id, blogEntry.tags);

    const initialTheme = getThemeFromPath("/");

    return (
      <ThemeProvider initialTheme={initialTheme}>
        <ArticleStructuredData
          title={blogEntry.title}
          description={blogEntry.description}
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
              className="w-full h-auto rounded-[35px] lg:p-5"
            />
            <BlogEntryComponent entry={blogEntry} />
            
            <div className="w-full flex flex-col gap-5 mt-10">
                <h2 className="font-exotc350 text-3xl lg:text-5xl text-center">
                    Related Posts
                </h2>
                <BlogCards entries={relatedPosts} />
            </div>
          </div>
        </main>
      </ThemeProvider>
    );
  } catch (error) {
    notFound();
  }
}
