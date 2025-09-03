"use client";
import { Button, Card, CardBody } from "@heroui/react";
import FAQItem from "../components/FAQItem";
import { useRouter } from "next/navigation";
import ImageSlideshow from "../components/ImageSlideshow";

export default function MainFinalSection() {
  const router = useRouter();

  const slideImages = [
    "/api/image?key=team.jpeg",
    "/api/image?key=team_1.png",
    "/api/image?key=team_3.png",
    "/api/image?key=team_4.png",
    "/api/image?key=team_5.png",
    "/api/image?key=team_2.png",
    "/api/image?key=team_6.png",
    "/api/image?key=team_7.png",
  ];
  return (
    <section className="w-full max-w-[1400px] p-6 lg:px-10 z-10 flex flex-col gap-20 overflow-x-hidden">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col text-black text-center">
          <h3 className="font-exotc350 text-6xl">FAQS</h3>
          <p className="font-cocogoose text-medium">Your questions, answered</p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-5">
          <FAQItem
            title="Can I finance my roofing or siding project?"
            content="Yes, we offer financing options for qualified customers. Ask us during your estimate, we’ll walk you through it"
          />
          <FAQItem
            title="What areas do you serve?"
            content="We proudly serve Queens, Brooklyn, Long Island, and the surrounding NYC areas. If you’re located nearby and need roofing or siding work, don’t hesitate to reach out!"
          />
          <FAQItem
            title="Do you offer free estimates for roofing or siding work?"
            content="Yes, Neat Services Inc. offers free, no-obligation estimates for all roofing and siding projects. We’ll visit your property, assess your needs, and give you a detailed quote with no hidden costs."
          />
          <FAQItem
            title="Do you offer siding installation or replacement services?"
            content="Yes, we absolutely offer siding installation and replacement services in Jackson Heights and the surrounding communities. We work with various siding materials, including vinyl, fiber cement, and wood, and can help you choose the best option to enhance your home's curb appeal and energy efficiency."
          />
        </div>
        <Button
          className="self-center bg-black font-cocogoose text-sm text-white p-9 w-full max-w-[349px]"
          onPress={() => router.push("/services#FAQS")}
        >
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
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <Card
            classNames={{ base: "rounded-[35px]" }}
            className="w-full md:w-[60%] h-[450px]"
          >
            <CardBody className="p-0">
              <ImageSlideshow
                images={slideImages}
                className="w-full h-full"
                interval={5000}
              />
            </CardBody>
          </Card>
          <div className="flex flex-col text-black gap-4 px-5 md:px-10 justify-center md:w-[50%]">
            <h3 className="font-exotc350 text-5xl leading-10 md:text-6xl md:leading-12">
              More than a slogan, it’s our commitment
            </h3>
            <p className="font-cocogoose text-sm text-justify">
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
