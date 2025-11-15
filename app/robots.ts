import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/test/"],
      },
    ],
    sitemap: "https://neatservicescorp.com/sitemap.xml",
  };
}

