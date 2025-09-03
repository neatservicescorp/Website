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
      className="self-center p-5 pb-0 w-[85%]"
      shadow={shadow ? "md" : "none"}
      style={{ backgroundColor: background }}
      classNames={{ base: `rounded-[35px]` }}
    >
      <CardBody className="p-0 pb-5 md:py-2 md:p-2">
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-exotc350 text-black text-center text-[40px] leading-10 lg:text-5xl">
            Certified to serve you better
          </h2>
          <p className="font-cocogoose text-black text-center text-sm lg:max-w-[70%]">
            At Neat Services, we are proud to hold certifications that guarantee
            our commitment to quality, reliability, and safety
          </p>
          <div className="flex flex-wrap md:flex-row gap-5 lg:gap-8 items-center justify-center">
            <Image
              src="/images/cert_certainteed.png"
              alt="cert_1"
              width={200}
              height={500}
              className="w-32 xl:w-52"
            />
            <Image
              src="/images/google_guaraanteed.png"
              alt="cert_1"
              width={200}
              height={500}
              className="w-32 xl:w-52"
            />
            <Image
              src="/images/cert_contdirect.png"
              alt="cert_1"
              width={200}
              height={500}
              className="w-32 md:ml-2 xl:w-52 xl:h-28"
            />
            <Image
              src="/images/cert_gaf.png"
              alt="cert_1"
              width={200}
              height={500}
              className="w-28 xl:w-44 ml-3"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
