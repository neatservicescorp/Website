import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar, Footer } from "./components";
import Providers from "./providers";
import Messages from "./components/Messages";
import GoogleAnalytics from "./components/GoogleAnalytics";
import {
  LocalBusinessStructuredData,
  OrganizationStructuredData,
} from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neatservicescorp.com"),
  title: {
    default: "Neat Services Corp - Expert Roofing & Siding Contractors in NYC",
    template: "%s | Neat Services Corp",
  },
  description:
    "Expert roofing, siding, windows & home improvement services in Queens, Brooklyn & NYC. Licensed contractors with 5+ years experience. Free estimates, quality materials, and guaranteed workmanship. Serving Long Island City, Jackson Heights & surrounding areas.",
  keywords: [
    "roofing contractors Queens",
    "siding repair Brooklyn",
    "home improvement NYC",
    "window installation Long Island City",
    "roof replacement Jackson Heights",
    "GAF certified contractors",
    "CertainTeed certified",
    "home renovation Queens",
  ],
  authors: [{ name: "Neat Services Corp" }],
  creator: "Neat Services Corp",
  publisher: "Neat Services Corp",
  openGraph: {
    title: "Neat Services Corp - Professional Home Improvement",
    description:
      "Expert roofing, siding & home improvement in Queens, Brooklyn & NYC. Licensed, certified contractors with 5+ years experience.",
    url: "https://neatservicescorp.com",
    siteName: "Neat Services Corp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/neat_logo.svg",
        width: 1200,
        height: 630,
        alt: "Neat Services Corp - Expert Roofing & Siding Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neat Services Corp - Professional Home Improvement",
    description:
      "Expert roofing, siding & home improvement in Queens, Brooklyn & NYC.",
    creator: "@neatservicescorp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://neatservicescorp.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    other: {
      "ahrefs-site-verification":
        "2acc26d9aa7b352de1586b358a776f2971d0327a63361c4be4cb52b45ccf6c08",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="ahrefs-site-verification"
        content="2acc26d9aa7b352de1586b358a776f2971d0327a63361c4be4cb52b45ccf6c08"
      ></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <LocalBusinessStructuredData />
        <OrganizationStructuredData />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="QmffzcFrxk7kZ16YR7Vpsw"
          async
        ></script>
        <Providers>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-red-neat focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:no-underline"
            tabIndex={0}
          >
            Skip to main content
          </a>
          <Messages />
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
