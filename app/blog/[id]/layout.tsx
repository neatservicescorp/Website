import type { Metadata } from "next";
import { BlogEntriesData } from "./blogEntries";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blogEntry = BlogEntriesData.find((entry) => entry.key === id);

  if (!blogEntry) {
    return {
      title: "Blog Post Not Found | Neat Services Corp",
    };
  }

  const baseUrl = "https://neatservicescorp.com";
  const imageUrl = blogEntry.imageUrl.startsWith("/")
    ? `${baseUrl}${blogEntry.imageUrl}`
    : blogEntry.imageUrl;
  const url = `${baseUrl}/blog/${id}`;
  const description =
    blogEntry.startContent.length > 160
      ? blogEntry.startContent.substring(0, 157) + "..."
      : blogEntry.startContent;

  return {
    title: `${blogEntry.title} | Neat Services Corp Blog`,
    description,
    keywords:
      "roofing tips, siding maintenance, home improvement advice, home renovation, contractor tips, NYC home improvement",
    authors: [{ name: blogEntry.author }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: blogEntry.title,
      description,
      url,
      type: "article",
      publishedTime: blogEntry.date,
      authors: [blogEntry.author],
      siteName: "Neat Services Corp",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blogEntry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogEntry.title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

