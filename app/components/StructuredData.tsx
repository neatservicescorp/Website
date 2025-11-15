import Script from "next/script";

type LocalBusinessSchema = {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  "@id": string;
  url: string;
  telephone: string;
  priceRange: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: {
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  }[];
  serviceType: string[];
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
};

type OrganizationSchema = {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    areaServed: string[];
    availableLanguage: string[];
  };
  sameAs: string[];
};

type ArticleSchema = {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
};

export function LocalBusinessStructuredData() {
  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeImprovementContractor",
    name: "Neat Services Corp",
    image: "https://neatservicescorp.com/neat_logo.svg",
    "@id": "https://neatservicescorp.com",
    url: "https://neatservicescorp.com",
    telephone: "+1-718-880-4080",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8211 37th Ave. Ste 404",
      addressLocality: "Jackson Heights",
      addressRegion: "NY",
      postalCode: "11372",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7500213,
      longitude: -73.8839082,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Queens" },
      { "@type": "City", name: "Brooklyn" },
      { "@type": "City", name: "Bronx" },
      { "@type": "City", name: "Yonkers" },
      { "@type": "City", name: "Long Island City" },
      { "@type": "City", name: "Jackson Heights" },
      { "@type": "City", name: "New York City" },
    ],
    serviceType: [
      "Roofing",
      "Siding Installation",
      "Window Replacement",
      "Kitchen Renovation",
      "Bathroom Remodeling",
      "Home Improvement",
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationStructuredData() {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neat Services Corp",
    url: "https://neatservicescorp.com",
    logo: "https://neatservicescorp.com/neat_logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-718-880-4080",
      contactType: "customer service",
      areaServed: ["US", "NY", "Queens", "Brooklyn"],
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.facebook.com/neatservicescorp",
      "https://www.instagram.com/neatservicescorp",
      "https://www.tiktok.com/@neatservicescorp",
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type ArticleStructuredDataProps = {
  title: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  dateModified?: string;
  author: string;
};

export function ArticleStructuredData({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  author,
}: ArticleStructuredDataProps) {
  const baseUrl = "https://neatservicescorp.com";
  const fullImageUrl = imageUrl.startsWith("/")
    ? `${baseUrl}${imageUrl}`
    : imageUrl;

  const schema: ArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: fullImageUrl,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Neat Services Corp",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/neat_logo.svg`,
      },
    },
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type FAQItem = {
  question: string;
  answer: string;
};

type FAQStructuredDataProps = {
  faqs: FAQItem[];
};

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

