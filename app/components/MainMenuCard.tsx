"use client";
import { Button, Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type MainMenuCardProps = {
  title: string;
  buttonText?: string;
  image: string;
};

export default function MainMenuCard({
  title,
  buttonText = "More info",
  image,
}: MainMenuCardProps) {
  const router = useRouter();
  return (
    <Card
      classNames={{ base: "rounded-[35px]" }}
      className="relative aspect-square"
    >
      <Image
        src={image}
        alt={`${image}_background`}
        width={800}
        height={800}
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full bottom-0 h-1/2 bg-gradient-to-t from-[#F64631]/40 to-transparent"></div>
      <CardBody className="justify-end p-7">
        <div className="flex flex-row justify-between items-end">
          <h5 className="font-white font-exotc350 text-4xl">{title}</h5>
          <Button
            className="font-cocogoose text-black bg-white text-lg p-7"
            onPress={() => router.push("/contact")}
          >
            {buttonText}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
