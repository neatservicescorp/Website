"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Image from "next/image";

export default function FinancingOpts() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 md:gap-5 w-full md:p-10 py-0 md:py-5">
      <h2 className="font-exotc350 text-white text-center text-[40px] leading-10 lg:text-5xl pt-5">
        Finance your project
      </h2>
      <div className="flex flex-col gap-2">
        <Image
          onClick={() =>
            window.open(
              `https://app.momnt.com/widgets/?merchantId=${process.env.NEXT_PUBLIC_MERCHANT_ID}&widget=ConsumerLoanApplicationWizard`,
              "_blank"
            )
          }
          src="/images/financing.png"
          alt="financing_disclaimer"
          width={1500}
          height={800}
          className="w-full hover:cursor-pointer py-7"
        />
        <div className="flex justify-center gap-12 w-full px-12 font-cocogoose items-center">
          <p className="text-lg">Don’t Delay Your Dream Upgrade</p>
          <Button
            className="rounded-full p-8 bg-[#0b9aeb] text-white font-semibold text-sm lg:text-lg"
            onClick={() => {
              window.open(
                `https://app.momnt.com/widgets/?merchantId=${process.env.NEXT_PUBLIC_MERCHANT_ID}&widget=ConsumerLoanApplicationWizard`,
                "_blank"
              );
            }}
          >
            Get financing today
          </Button>
        </div>
      </div>
    </section>
  );
}
