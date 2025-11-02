import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar, Footer } from "./components";
import Providers from "./providers";
import Messages from "./components/Messages";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neat Services Corp",
  description:
    "Expert roofing, siding, windows & home improvement services in Queens, Brooklyn & NYC. Licensed contractors with 5+ years experience. Free estimates, quality materials, and guaranteed workmanship. Serving Long Island City, Jackson Heights & surrounding areas.",
  keywords:
    "roofing contractors Queens, siding repair Brooklyn, home improvement NYC, window installation Long Island City, roof replacement Jackson Heights",
  openGraph: {
    title: "Neat Services Corp - Professional Home Improvement",
    description:
      "Expert roofing, siding & home improvement in Queens, Brooklyn & NYC",
    url: "https://neatservicescorp.com",
    type: "website",
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
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-red-neat focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
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
