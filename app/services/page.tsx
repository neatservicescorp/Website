"use client";
import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Divider,
} from "@heroui/react";
import RoofingMethod from "../components/RoofingMethod";
import InteractiveMap from "../components/InteractiveMap";
import MainForm from "../components/MainForm";
import GoogleMap from "../components/GoogleMap";

export default function Services() {
  const initialTheme = getThemeFromPath("/services");
  const mapToken = process.env.NEXT_PUBLIC_MAP_TOKEN;

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main id="main-content" className="min-h-screen pt-24 lg:pt-32">
        <div className="w-full h-[960px] md:h-[850px] 2xl:h-[900px] justify-center relative flex items-center p-5">
          <div className="absolute w-full h-full bg-black/20 z-10"></div>
          <Image
            src="/api/image?key=services_bg.jpg"
            alt="services_background"
            width={1500}
            height={1500}
            className="w-full h-full object-cover absolute contrast-[60%]"
          />
          <div className="flex w-full h-full flex-col lg:flex-row max-w-[1400px] mt-5 lg:mt-0 gap-10 lg:gap-0">
            <div className="flex flex-col lg:w-[50%] text-white justify-center z-10 md:ml-5 gap-5 lg:gap-2 lg:ml-20">
              <h1 className="font-exotc350 text-6xl text-shadow-lg">
                Services
              </h1>
              <p className="font-cocogoose lg:max-w-[80%] text-shadow-md">
                Built for New York homeowners who expect quality, transparency,
                and craftsmanship. Neat Services Inc. specializes in exterior
                home improvement solutions that stand the test of time. From
                precision roofing to custom siding installations. Serving
                Queens, Brooklyn, and Yonkers since 2019.
              </p>
            </div>
            <div className="w-full flex lg:w-[50%] lg:p-16 items-center justify-center z-20">
              <MainForm />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#333333] from-30% via-[#424242] via-40% to-[#DBDBDB] to-70% flex justify-center">
          <div className="w-full max-w-[1500px] p-5 md:p-10">
            <div className="flex flex-col text-white text-center gap-2">
              <h2 className="text-6xl font-exotc350">Our services</h2>
              <p className="font-cocogoose">
                Services That Help Your Home Shine
              </p>
            </div>
            <div className="flex flex-row gap-10 text-white items-center py-5 my-2 md:my-5 overflow-hidden">
              <h3 className="font-exotc350 text-4xl">Exterior</h3>
              <Divider className="dark h-[1px] bg-white" />
            </div>
            <div className="flex flex-col gap-5 md:gap-0">
              <div className="flex flex-col md:flex-row md:p-5">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-video md:aspect-auto md:max-h-[210px] lg:max-h-[380px] w-full md:w-[50%]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/api/image?key=siding-services.jpg"
                      alt="exterior_1"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col text-white w-full md:max-w-[50%] py-5 md:p-10 gap-2 justify-center">
                  <h4 className="font-exotc350 text-4xl">Siding</h4>
                  <p className="font-cocogoose text-sm">
                    Custom siding replacement to improve aesthetics and energy
                    efficiency.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse md:p-5">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-video md:aspect-auto md:max-h-[210px] lg:max-h-[380px] w-full md:w-[50%]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/api/image?key=services_roofing.PNG"
                      alt="exterior_1"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col text-white w-full md:max-w-[50%] py-5 md:p-10 gap-2 justify-center">
                  <h4 className="font-exotc350 text-4xl">Roof</h4>
                  <p className="font-cocogoose text-sm">
                    Roof installation and replacement with warranty, durable
                    materials, and maximum protection.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:p-5">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-video md:aspect-auto md:max-h-[210px] lg:max-h-[380px] w-full md:w-[50%]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/api/image?key=window.jpg"
                      alt="exterior_1"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col text-white w-full md:max-w-[50%] p-5 md:p-10 gap-2 justify-center">
                  <h4 className="font-exotc350 text-4xl">Window</h4>
                  <p className="font-cocogoose text-sm">
                    Installation of modern, secure, and energy-efficient
                    windows.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-10 text-whit items-center p-5 my-5 overflow-hidden">
              <h3 className="font-exotc350 text-4xl">Interior</h3>
              <Divider className="dark h-[1px] bg-white" />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-y-16 gap-12 md:gap-8 px-5">
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-square w-full min-w-[280px] md:max-w-[50%]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/api/image?key=services_kitchen.jpg"
                      alt="interior_item"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col gap-3 text-white justify-center">
                  <h4 className="text-5xl font-exotc350">Kitchen</h4>
                  <p className="font-cocogoose text-sm">
                    Custom kitchen design and installation with high-end
                    finishes.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-square w-full min-w-[280px] md:max-w-[50%]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/api/image?key=general_bathroom.jpg"
                      alt="interior_item"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col gap-3 text-white justify-center">
                  <h4 className="text-5xl font-exotc350">Bathrooms</h4>
                  <p className="font-cocogoose text-sm">
                    Functional and elegant bathroom renovations tailored to each
                    client.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-white w-full flex flex-col justify-center py-16 gap-12">
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="font-exotc350 text-6xl">Before and After</h2>
                <p className="font-cocogoose text-sm">
                  Real transformations = real results
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full justify-center">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-auto h-[300px] md:h-auto"
                >
                  <CardBody className="p-0 w-full lg:max-w-[500px] flex flex-row">
                    <div className="w-[50%] h-full relative">
                      <div className="absolute w-full items-center top-5 z-10">
                        <span className="font-exotc350 text-4xl text-center text-black block">
                          Before
                        </span>
                      </div>
                      <Image
                        src="/api/image?key=before_2.jpg"
                        alt="before_img"
                        className="w-full h-full object-cover grayscale"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="w-[50%] h-full relative">
                      <div className="absolute w-full items-center top-5">
                        <span className="font-exotc350 text-4xl text-center text-black block">
                          After
                        </span>
                      </div>
                      <Image
                        src="/api/image?key=after_2.png"
                        alt="before_img"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                      />
                    </div>
                  </CardBody>
                </Card>
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-auto h-[300px] md:h-auto"
                >
                  <CardBody className="p-0 w-full lg:max-w-[500px] flex flex-row">
                    <div className="w-[50%] h-auto relative">
                      <div className="absolute w-full items-center top-5 z-10">
                        <span className="font-exotc350 text-4xl text-center text-black block">
                          Before
                        </span>
                      </div>
                      <Image
                        src="/api/image?key=before_3.PNG"
                        alt="before_img"
                        className="w-full h-full object-cover grayscale"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="w-[50%] max-h-[450px] h-full relative overflow-hidden">
                      <div className="absolute w-full items-center top-5 z-10">
                        <span className="font-exotc350 text-4xl text-center text-black block">
                          After
                        </span>
                      </div>
                      <Image
                        src="/api/image?key=before_3.1.PNG"
                        alt="before_img"
                        className="w-full object-cover h-[550px] -translate-y-[15%]"
                        width={500}
                        height={500}
                      />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="flex flex-col mt-10 text-black text-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-exotc350 text-6xl">
                  Our trusted roofing method
                </h2>
                <p className="font-cocogoose text-sm">
                  A process that works for every home improvement project.
                </p>
              </div>
              <RoofingMethod iconBgColor="#909090" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col text-black text-center">
                <h3 className="font-exotc350 text-6xl">Where we are</h3>
                <p className="font-cocogoose font-thin">
                  8211 37th Ave. Ste 404. Queens, NY 11372.
                </p>
              </div>
              <div className="h-[600px] w-full my-10">
                <GoogleMap width="100%" height="100%" />
              </div>
            </div>
            <section
              id="FAQS"
              className="flex flex-col justify-center gap-8 mb-12"
            >
              <div className="flex flex-col text-black text-center">
                <h3 className="font-exotc350 text-6xl">FAQS</h3>
                <p className="font-cocogoose text-medium">
                  Your questions, answered
                </p>
              </div>
              <div className="flex flex-col text-black py-5 px-5 md:px-12">
                <Accordion>
                  <AccordionItem
                    classNames={{
                      title:
                        "text-black font-cocogoose font-black text-base md:text-lg",
                      content: "text-black font-cocogoose",
                      indicator: "text-black",
                      trigger: "hover:cursor-pointer",
                    }}
                    key="faq_1"
                    aria-label="FAQs Accordion 1"
                    title="Can I finance my roofing or siding project?"
                  >
                    Yes, we offer financing options for qualified customers. Ask
                    us during your estimate and we’ll walk you through it
                  </AccordionItem>
                  <AccordionItem
                    classNames={{
                      title:
                        "text-black font-cocogoose font-black text-base md:text-lg",
                      content: "text-black font-cocogoose",
                      indicator: "text-black",
                      trigger: "hover:cursor-pointer",
                    }}
                    key="faq_2"
                    aria-label="FAQs Accordion 2"
                    title="What areas do you serve?"
                  >
                    We proudly serve Queens, Brooklyn, Long Island, and the
                    surrounding NYC areas. If you’re located nearby and need
                    roofing or siding work, don’t hesitate to reach out!
                  </AccordionItem>
                  <AccordionItem
                    classNames={{
                      title:
                        "text-black font-cocogoose font-black text-base md:text-lg",
                      content: "text-black font-cocogoose",
                      indicator: "text-black",
                      trigger: "hover:cursor-pointer",
                    }}
                    key="faq_3"
                    aria-label="FAQs Accordion 3"
                    title="Do you offer free estimates for roofing or siding work?"
                  >
                    Yes, Neat Services Inc. offers free, no-obligation estimates
                    for all roofing and siding projects. We’ll visit your
                    property, assess your needs, and give you a detailed quote
                    with no hidden costs.
                  </AccordionItem>
                  <AccordionItem
                    classNames={{
                      title:
                        "text-black font-cocogoose font-black text-base md:text-lg",
                      content: "text-black font-cocogoose",
                      indicator: "text-black",
                      trigger: "hover:cursor-pointer",
                    }}
                    key="faq_4"
                    aria-label="FAQs Accordion 4"
                    title="I'm in Jackson Heights and want to revamp my home's exterior with new siding but feel overwhelmed by the choices. How can you help me choose the right siding for my home?"
                  >
                    At Neat Services Inc., we understand that selecting new
                    siding can be daunting. For our Jackson Heights customers,
                    we offer personalized consultations where we discuss your
                    aesthetic preferences, budget, and the specific needs of
                    your home. We will guide you through our wide selection of
                    materials, including stone veneer, shake, board and batten,
                    and explain the benefits of each to help you make an
                    informed decision that enhances your home`s curb appeal and
                    provides lasting value. We can also use our virtual design
                    tools to help you visualize the final results.
                  </AccordionItem>
                  <AccordionItem
                    classNames={{
                      title:
                        "text-black font-cocogoose font-black text-base md:text-lg",
                      content: "text-black font-cocogoose",
                      indicator: "text-black",
                      trigger: "hover:cursor-pointer",
                    }}
                    key="faq_5"
                    aria-label="FAQs Accordion 5"
                    title="I'm interested in a new roof for my home, but I'm concerned about the disruption. How do you minimize inconvenience to homeowners during a roof replacement project?"
                  >
                    At Neat Services Inc., we understand that a roof replacement
                    can be disruptive. For our Jackson Heights clients, we
                    strive to minimize inconvenience by carefully scheduling the
                    project, efficiently managing debris removal, and
                    maintaining clear communication throughout the process. We
                    protect your landscaping and property, and work diligently
                    to complete the project as quickly and smoothly as possible
                    while adhering to our high-quality standards.
                  </AccordionItem>
                  <AccordionItem
                    classNames={{
                      title:
                        "text-black font-cocogoose font-black text-base md:text-lg",
                      content: "text-black font-cocogoose",
                      indicator: "text-black",
                      trigger: "hover:cursor-pointer",
                    }}
                    key="faq_6"
                    aria-label="FAQs Accordion 6"
                    title="I'm in Jackson Heights and need a new roof. What is the typical process like for a roof replacement with you?"
                  >
                    For Jackson Heights roof replacements, our process starts
                    with a consultation where we assess your needs and discuss
                    material options. During the replacement, we prioritize
                    protecting your property and ensuring efficient
                    installation. Finally, we conduct a thorough cleanup and
                    final inspection to ensure your complete satisfaction with
                    your new roof.
                  </AccordionItem>
                  <AccordionItem
                    classNames={{
                      title:
                        "text-black font-cocogoose font-black text-base md:text-lg",
                      content: "text-black font-cocogoose",
                      indicator: "text-black",
                      trigger: "hover:cursor-pointer",
                    }}
                    key="faq_7"
                    aria-label="FAQs Accordion 7"
                    title="I live near Jackson Heights, and I'm worried about the upcoming winter. Do you offer roof inspections to identify potential problems before the bad weather hits?"
                  >
                    Yes, we offer comprehensive roof inspections in the Jackson
                    Heights area and nearby communities. We can check for
                    vulnerabilities like damaged shingles, leaks, and poor
                    insulation, and provide recommendations to prepare your roof
                    for the winter months ahead.
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
