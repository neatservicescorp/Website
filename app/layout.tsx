import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
          <Messages />
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
