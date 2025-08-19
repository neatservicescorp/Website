"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import FAQItem from "../components/FAQItem";

export default function MainFinalSection() {
  return (
    <section className="w-full max-w-[1400px] p-6 lg:px-10 z-10 flex flex-col gap-20">
      <div className="w-full h-full min-h-[400px] rounded-[35px] border-black border-1 flex flex-row p-10 items-center justify-between">
        <h3 className="text-black font-exotc350 text-6xl max-w-[420px]">
          Gain peace of mind with our financing options!
        </h3>
        <Card
          className="w-full h-full bg-black max-w-[580px] relative"
          classNames={{ base: "rounded-[35px]" }}
        >
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
            className="absolute w-full h-full p-7 bg-white hover:cursor-pointer"
          />
        </Card>
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col text-black text-center">
          <h3 className="font-exotc350 text-6xl">FAQS</h3>
          <p className="font-cocogoose text-medium">Your questions, answered</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <FAQItem
            title="What services do you offer?"
            content="We offer a wide range of services including roofing, siding, windows, bathrooms, kitchens, and general painting."
          />
          <FAQItem
            title="Do you offer financing?"
            content="Yes, we offer financing options to help you manage the cost of your home improvement projects."
          />
          <FAQItem
            title="What areas do you serve?"
            content="We serve Queens, Yonkers, Brooklyn, and the Bronx."
          />
          <FAQItem
            title="Do you offer insurance claims assistance?"
            content="Yes, we assist with insurance claims to help you navigate the process smoothly."
          />
        </div>
        <Button className="self-center bg-black font-cocogoose text-sm text-white p-9 w-full max-w-[349px]">
          Read all questions
        </Button>
      </div>
      <div className="flex flex-col gap-12 pb-14">
        <div className="flex flex-col text-black text-center">
          <h3 className="font-exotc350 text-6xl">Our team</h3>
          <p className="font-cocogoose text-medium">
            Services that Help your some shine
          </p>
        </div>
        <div className="flex flex-row">
          <Image
            className="rounded-[45px] p-5 max-h-[450px] max-w-[60%] object-cover object-[center_10%]"
            src="/images/team.jpeg"
            alt="team_photo"
            width={800}
            height={800}
          />
          <div className="flex flex-col text-black gap-4 px-10 justify-center w-[50%]">
            <h3 className="font-exotc350 text-6xl leading-12">
              More than a slogan, it’s our commitment
            </h3>
            <p className="font-cocogoose text-sm">
              At Neat Services, we believe that being neat is more than clean
              job sites. {"It's"} about doing things right. We are a
              family-oriented, solution-driven team committed to transparency,
              customer satisfaction, and delivering results that exceed
              expectations. From Queens rooftops to Brooklyn brownstones, we
              build more than homes, we build relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
