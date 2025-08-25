"use client";

import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export default function FinancingOpts() {
  return (
    <section className="flex flex-row items-center justify-center gap-5 w-full p-10 h-[510px]">
      <Card
        className="w-1/2 h-full p-5 bg-transparent"
        isBlurred
        shadow="none"
        classNames={{ base: `rounded-[35px]` }}
      >
        <CardBody className="flex flex-col text-white gap-4 justify-center">
          <div className="flex flex-col font-exotc350 text-5xl">
            <h3 className="text-6xl">Finance your project</h3>
            <h3>Don’t Delay Your Dream Upgrade</h3>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <Image
              src="/guaranteed.svg"
              alt="google_guaranteed"
              width={130}
              height={130}
            />
          </div>
        </CardBody>
      </Card>
      <Card className="w-1/2" classNames={{ base: `rounded-[35px]` }}>
        <CardBody className="p-0 py-10">
          <Image
            onClick={() =>
              window.open(
                "https://retailservices.wellsfargo.com/ahapp/init-app?m=0024344285&l=en_US",
                "_blank"
              )
            }
            src="/images/finance.jpeg"
            alt="financing_disclaimer"
            width={800}
            height={800}
            className="w-full h-full p-7 bg-white hover:cursor-pointer"
          />
        </CardBody>
      </Card>
    </section>
  );
}
