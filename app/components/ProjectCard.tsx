import React from "react";
import type { Project } from "./Projects";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card
      classNames={{ base: "rounded-xl md:rounded-[35px]" }}
      className="z-10 aspect-square w-[350px]"
    >
      <CardBody className="p-0">
        <div className="w-full h-full relative">
          <Image
            src={project.image}
            alt={`project_${project.type}_image`}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute font-cocogoose text-sm bottom-0 w-full h-[20%] bg-gradient-to-t from-[#F64631] to-transparent flex items-center p-5 gap-8">
            <div className="flex flex-row gap-1">
              <Image
                src="/icons/tool_w.svg"
                alt="tool_icon"
                width={20}
                height={20}
                className="w-4 h-4"
              />
              <p>{project.type}</p>
            </div>
            <div className="flex flex-row gap-1">
              <Image
                src="/icons/location.svg"
                alt="location_icon"
                width={20}
                height={20}
                className="w-4 h-4"
              />
              <p>{project.location}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
