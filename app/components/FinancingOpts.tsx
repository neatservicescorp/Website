"use client";

import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export default function FinancingOpts() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 w-full md:p-10 py-0 md:py-5 lg:h-[510px]">
      <Card
        className="w-full md:w-1/2 h-full md:p-5 rounded-none bg-transparent"
        isBlurred
        shadow="none"
        classNames={{ base: `rounded-[35px]` }}
      >
        <CardBody className="flex flex-col text-white gap-4 justify-center p-0 md:p-1">
          <div className="flex flex-col font-exotc350 text-5xl gap-3">
            <h3 className="text-5xl lg:text-6xl">Finance your project</h3>
            <h3 className="text-4xl lg:text-5xl">
              Don’t Delay Your Dream Upgrade
            </h3>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <Image
              src="/guaranteed.svg"
              alt="google_guaranteed"
              className="w-18 md:w-24 xl:w-32"
              width={130}
              height={130}
            />
          </div>
        </CardBody>
      </Card>
      <Card className="w-full md:w-1/2" classNames={{ base: `rounded-[35px]` }}>
        <CardBody className="p-0 py-2 md:py-5 lg:py-10">
          <button
            onClick={() =>
              window.open(
                "https://retailservices.wellsfargo.com/ahapp/init-app?m=0024344285&l=en_US",
                "_blank"
              )
            }
            className="w-full h-full p-7 bg-white hover:cursor-pointer border-none"
            aria-label="Apply for Wells Fargo financing - opens in new window"
          >
            <Image
              src="/images/finance.jpeg"
              alt="Wells Fargo financing application"
              width={800}
              height={800}
              className="w-full h-full"
            />
          </button>
        </CardBody>
      </Card>
    </section>
  );
}
