"use client";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export type CertificationsProps = {
  background?: string;
  shadow?: boolean;
};

export default function Certifications({
  background = "#f0f0f0",
  shadow = true,
}: CertificationsProps) {
  return (
    <Card
      className="self=center p-5 pb-0"
      shadow={shadow ? "md" : "none"}
      style={{ backgroundColor: background }}
      classNames={{ base: `rounded-[35px]` }}
    >
      <CardBody>
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-exotc350 text-black text-center text-5xl">
            Certified to serve you better
          </h2>
          <p className="font-cocogoose text-black text-center text-sm max-w-[70%]">
            At Neat Services, our industry certifications prove our commitment
            to quality, trust, and top-tier service.
          </p>
          <div className="flex flex-row gap-8 items-center">
            <Image
              src="/images/cert_certainteed.png"
              alt="cert_1"
              width={200}
              height={500}
              className="w-52"
            />
            <Image
              src="/images/cert_contdirect.png"
              alt="cert_1"
              width={200}
              height={500}
              className="w-52 h-28"
            />
            <Image
              src="/images/cert_gaf.png"
              alt="cert_1"
              width={200}
              height={500}
              className="w-44 ml-3"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
