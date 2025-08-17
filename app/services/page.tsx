"use client";
import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";
import { Button, Card, CardBody, Divider } from "@heroui/react";
import RoofingMethod from "../components/RoofingMethod";
import FAQItem from "../components/FAQItem";
import InteractiveMap from "../components/InteractiveMap";

export default function Services() {
  const initialTheme = getThemeFromPath("/services");
  const mapToken = process.env.NEXT_PUBLIC_MAP_TOKEN;

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen pt-32">
        <div className="w-full h-[800px] 2xl:h-[900px] justify-center relative flex items-center">
          <Image
            src="/images/services_main.jpeg"
            alt="services_background"
            width={1500}
            height={1500}
            className="w-full h-full object-cover absolute"
          />
          <div className="flex w-full h-full max-w-[1400px]">
            <div className="flex flex-col lg:w-[50%] text-white justify-center z-10 ml-20">
              <h2 className="font-exotc350 text-7xl">Services</h2>
              <p className="font-cocogoose max-w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#333333] from-30% via-[#424242] via-40% to-[#DBDBDB] to-70% flex justify-center">
          <div className="w-full max-w-[1500px] p-10">
            <div className="flex flex-col font-white text-center gap-2">
              <h1 className="text-6xl font-exotc350">Our services</h1>
              <p className="font-cocogoose">
                Services That Help Your Home Shine
              </p>
            </div>
            <div className="flex flex-row gap-10 text-whit items-center p-5 my-5 overflow-hidden">
              <h5 className="font-exotc350 text-4xl">Exterior</h5>
              <Divider className="dark h-[1px] bg-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row p-5">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="max-h-[350px]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/images/home_bg.png"
                      alt="exterior_1"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col text-white max-w-[50%] p-10 gap-2 justify-center">
                  <h3 className="font-exotc350 text-4xl">Siding</h3>
                  <p className="font-cocogoose text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse p-5">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="max-h-[350px]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/images/home_bg.png"
                      alt="exterior_1"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col text-white max-w-[50%] p-10 gap-2 justify-center">
                  <h3 className="font-exotc350 text-4xl">Roof</h3>
                  <p className="font-cocogoose text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-5">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="max-h-[350px]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/images/home_bg.png"
                      alt="exterior_1"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col text-white max-w-[50%] p-10 gap-2 justify-center">
                  <h3 className="font-exotc350 text-4xl">Window</h3>
                  <p className="font-cocogoose text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-10 text-whit items-center p-5 my-5 overflow-hidden">
              <h5 className="font-exotc350 text-4xl">Interior</h5>
              <Divider className="dark h-[1px] bg-white" />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-8 px-5">
              <div className="flex flex-row gap-10">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-square w-full min-w-[280px]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/images/home_bg.png"
                      alt="interior_item"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col gap-3 text-white justify-center">
                  <h4 className="text-5xl font-exotc350">Roof</h4>
                  <p className="font-cocogoose text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-square w-full min-w-[280px]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/images/home_bg.png"
                      alt="interior_item"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col gap-3 text-white justify-center">
                  <h4 className="text-5xl font-exotc350">Roof</h4>
                  <p className="font-cocogoose text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-10 ">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-square w-full min-w-[280px]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/images/home_bg.png"
                      alt="interior_item"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col gap-3 text-white justify-center">
                  <h4 className="text-5xl font-exotc350">Roof</h4>
                  <p className="font-cocogoose text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-10 ">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-square w-full min-w-[280px]"
                >
                  <CardBody className="p-0">
                    <Image
                      src="/images/home_bg.png"
                      alt="interior_item"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </CardBody>
                </Card>
                <div className="flex flex-col gap-3 text-white justify-center">
                  <h4 className="text-5xl font-exotc350">Roof</h4>
                  <p className="font-cocogoose text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-black w-full flex flex-col justify-center py-12 gap-12">
              <div className="flex flex-col items-center gap-1">
                <h2 className="font-exotc350 text-6xl">Before and After</h2>
                <p className="font-cocogoose text-sm">
                  Real transformations = real results
                </p>
              </div>
              <div className="flex flex-row gap-20 w-full justify-center">
                <Card
                  classNames={{ base: "rounded-[35px]" }}
                  className="aspect-square"
                >
                  <CardBody className="p-0 w-[400px] flex flex-row">
                    <div className="w-[50%] h-full relative">
                      <div className="absolute w-full items-center top-5 z-10">
                        <h5 className="font-exotc350 text-4xl text-center">
                          Before
                        </h5>
                      </div>
                      <Image
                        src="/images/home_bg.png"
                        alt="before_img"
                        className="w-full h-full object-cover grayscale"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="w-[50%] h-full relative">
                      <div className="absolute w-full items-center top-5">
                        <h5 className="font-exotc350 text-4xl text-center">
                          After
                        </h5>
                      </div>
                      <Image
                        src="/images/home_bg.png"
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
                  className="aspect-square"
                >
                  <CardBody className="p-0 w-[400px] flex flex-row">
                    <div className="w-[50%] h-full relative">
                      <div className="absolute w-full items-center top-5 z-10">
                        <h5 className="font-exotc350 text-4xl text-center">
                          Before
                        </h5>
                      </div>
                      <Image
                        src="/images/home_bg.png"
                        alt="before_img"
                        className="w-full h-full object-cover grayscale"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="w-[50%] h-full relative">
                      <div className="absolute w-full items-center top-5">
                        <h5 className="font-exotc350 text-4xl text-center">
                          After
                        </h5>
                      </div>
                      <Image
                        src="/images/home_bg.png"
                        alt="before_img"
                        className="w-full h-full object-cover"
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
                <h3 className="font-exotc350 text-7xl">Where we are</h3>
                <p className="">
                  2807 Jackson Ave Fl 5 Long Island City, NY 11101
                </p>
              </div>
              <div className="h-[600px] w-full my-10">
                <InteractiveMap mapToken={mapToken} />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 mb-12">
              <div className="flex flex-col text-black text-center">
                <h3 className="font-exotc350 text-6xl">FAQS</h3>
                <p className="font-cocogoose text-medium">
                  Your questions, answered
                </p>
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
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
