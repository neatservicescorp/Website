"use client";
import FooterLink from "./FooterLink";

export default function FooterLinks() {
  return (
    <div className="flex-row font-exotc350 text-black gap-8 xl:gap-12 hidden lg:flex">
      <FooterLink
        title="Home"
        redirectionLink={[{ title: "About us", redirect: "/blog" }]}
      />
      <FooterLink
        title="Services"
        redirectionLink={[
          { title: "Exterior", redirect: "/services" },
          { title: "Interior", redirect: "/services" },
          { title: "Areas", redirect: "/services" },
        ]}
      />
      <FooterLink
        title="Projects"
        redirectionLink={[{ title: "Blog", redirect: "/blog" }]}
      />
      <FooterLink title="Reviews" />
      <FooterLink title="Contact" />
      <FooterLink
        title="Where we are"
        texts={[
          "82-11 37th Ave Ste 404",
          "Jackson Heights",
          "NY 11372",
          "United States",
        ]}
      />
    </div>
  );
}
