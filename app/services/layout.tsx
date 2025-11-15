import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Neat Services Corp - Roofing, Siding, Windows & More",
  description:
    "Expert roofing, siding, window installation, kitchen & bathroom renovation services in Queens, Brooklyn & NYC. Licensed contractors with GAF & CertainTeed certifications. Free estimates available.",
  keywords:
    "roofing services Queens, siding installation Brooklyn, window replacement NYC, kitchen renovation, bathroom remodeling, home improvement services, exterior contractors",
  openGraph: {
    title: "Our Services - Neat Services Corp",
    description:
      "Expert roofing, siding, windows, kitchen & bathroom services in Queens, Brooklyn & NYC. Licensed, certified, and trusted by homeowners.",
    url: "https://neatservicescorp.com/services",
    type: "website",
    siteName: "Neat Services Corp",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Neat Services Corp",
    description:
      "Expert roofing, siding, windows, kitchen & bathroom services in Queens, Brooklyn & NYC.",
  },
  alternates: {
    canonical: "https://neatservicescorp.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

