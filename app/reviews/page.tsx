import type { Metadata } from "next";
import Image from "next/image";
import Certifications from "../components/Certifications";
import Reviews from "../components/Reviews";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";

export const metadata: Metadata = {
  title: "Customer Reviews | Neat Services Corp - 5 Star Rated Contractors",
  description:
    "Read verified customer reviews for Neat Services Corp. 5-star rated roofing, siding & home improvement contractors serving Queens, Brooklyn & NYC. See why homeowners trust us.",
  keywords:
    "roofing contractor reviews Queens, siding contractor reviews Brooklyn, home improvement reviews NYC, Neat Services reviews, contractor testimonials",
  openGraph: {
    title: "Customer Reviews - Neat Services Corp",
    description:
      "Read verified 5-star reviews from satisfied customers. Neat Services Corp is trusted by homeowners across Queens, Brooklyn & NYC for expert roofing and siding services.",
    url: "https://neatservicescorp.com/reviews",
    type: "website",
    siteName: "Neat Services Corp",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews - Neat Services Corp",
    description:
      "Read verified 5-star reviews from satisfied customers across NYC.",
  },
  alternates: {
    canonical: "https://neatservicescorp.com/reviews",
  },
};

export default async function ReviewsPage() {
  const initialTheme = getThemeFromPath("/reviews");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main
        id="main-content"
        className="pt-24 lg:pt-32 flex flex-col items-center"
      >
        <div className="overflow-hidden w-full flex justify-center">
          <Image
            src="/api/image?key=reviews_main.png"
            alt="reviews_main"
            width={3000}
            height={1600}
            className="object-cover h-[600px] md:h-auto"
            style={{ width: "2600px", minWidth: "2600px", flexShrink: 0 }}
          />
        </div>
        <div className="bg-[#8B8B8B] flex justify-center w-full">
          <div className="w-full max-w-[1400px] lg:p-12 lg:py-16 md:py-8 md:px-5 py-10 flex flex-col items-center gap-10 lg:gap-20">
            <Reviews textColor="black" />
            <Certifications shadow={false} />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
