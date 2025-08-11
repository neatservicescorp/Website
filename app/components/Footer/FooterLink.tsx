import { useRouter } from "next/navigation";
import React from "react";

interface RedirectionLink {
  title: string;
  redirect: string;
}

type Props = {
  title: string;
  redirectionLink?: RedirectionLink[];
  texts?: string[];
};

export default function FooterLink({
  title,
  redirectionLink = [],
  texts,
}: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1">
      <h6 className="text-xl xl:text-2xl">{title}</h6>
      <div className="flex flex-col text-xl">
        {texts
          ? texts.map((text, idx) => (
              <p key={idx} className="text-medium xl:text-lg">
                {text}
              </p>
            ))
          : redirectionLink.map((link, idx) => (
              <p
                key={idx}
                className="hover:cursor-pointer hover:opacity-70 h-5 text-lg"
                onClick={() => router.push(link.redirect)}
              >
                {link.title}
              </p>
            ))}
      </div>
    </div>
  );
}
