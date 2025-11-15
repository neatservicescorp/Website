import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Neat Services Corp - Home Improvement Tips & Advice",
  description:
    "Expert home improvement tips, roofing advice, siding maintenance guides, and home renovation insights from Neat Services Corp. Serving Queens, Brooklyn & NYC.",
  keywords:
    "roofing tips, siding maintenance, home improvement blog, home renovation advice, contractor blog NYC, roofing guides",
  openGraph: {
    title: "Neat Services Blog - Home Improvement Tips & Advice",
    description:
      "Expert home improvement tips, roofing advice, and renovation insights from trusted NYC contractors.",
    url: "https://neatservicescorp.com/blog",
    type: "website",
    siteName: "Neat Services Corp",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neat Services Blog - Home Improvement Tips",
    description:
      "Expert home improvement tips, roofing advice, and renovation insights.",
  },
  alternates: {
    canonical: "https://neatservicescorp.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

