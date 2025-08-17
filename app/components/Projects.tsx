"use client";
import { Divider, Select, SelectItem } from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

export type ProjectType = "Roofing" | "Siding" | "Kitchen" | "Bathroom";
export type ProjectLocation = "New York" | "New Jersey";

export type Project = {
  image: string;
  type: ProjectType;
  location: ProjectLocation;
};

export type ProjectFilter = {
  type: ProjectType | null;
  location?: ProjectLocation | null;
};

type ProjectsProps = {
  projects: Project[];
};

export default function ProjectsComponent({ projects }: ProjectsProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const [visibleProjects, setVisibleProjects] = useState<Project[]>(
    filteredProjects.slice(0, 9)
  );

  const [filters, setFilters] = useState<ProjectFilter>({
    type: null,
    location: null,
  });
  const totalPages = Math.ceil(filteredProjects.length / 9);

  console.log(filters);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value.length ? e.target.value : null,
    };
    setFilters(newFilters);
    if (!newFilters.type && !newFilters.location) {
      setFilteredProjects(projects);
      return;
    }
    setFilteredProjects(
      projects.filter((proj) => {
        if (newFilters.type && newFilters.location) {
          return (
            proj.type === newFilters.type &&
            proj.location === newFilters.location
          );
        }

        if (newFilters.type) {
          return proj.type === newFilters.type;
        }

        return proj.location === newFilters.location;
      })
    );
  };

  useEffect(() => {
    setVisibleProjects(
      filteredProjects.slice((currentPage - 1) * 9, currentPage * 9)
    );
  }, [currentPage]);

  useEffect(() => {
    setVisibleProjects(
      filteredProjects.slice((currentPage - 1) * 9, currentPage * 9)
    );
  }, [filters]);

  return (
    <div className="w-full p-5 flex flex-col">
      <div className="flex flex-row text-black w-full gap-12">
        <h3 className="font-exotc350 text-6xl">Filter by:</h3>
        <div className="flex flex-row gap-5">
          <Select
            name="type"
            size="lg"
            classNames={{
              label: "text-black",
              trigger: "border-black rounded-md border-1",
              listbox: "font-cocogoose text-black",
            }}
            onChange={handleFilter}
            fullWidth
            label="Product"
            className="font-cocogoose w-[270px]"
            variant="bordered"
          >
            <SelectItem key="Roofing">Roofing</SelectItem>
            <SelectItem key="Siding">Siding</SelectItem>
            <SelectItem key="Kitchen">Kitchen</SelectItem>
            <SelectItem key="Bathroom">Bathroom</SelectItem>
          </Select>
          <Select
            name="location"
            size="lg"
            variant="bordered"
            classNames={{
              label: "text-black",
              trigger: "border-black rounded-md border-1",
              listbox: "font-cocogoose text-black",
            }}
            onChange={handleFilter}
            label="Location"
            fullWidth
            className="font-cocogoose w-[270px]"
          >
            <SelectItem key="New York">New York</SelectItem>
            <SelectItem key="New Jersey">New Jersey</SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap z-10 py-12 gap-y-16 min-h-[400px]">
        {visibleProjects.map((project, index) => (
          <div className="w-1/3 min-w-[350px] flex justify-center" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <Divider className="bg-black/40" />
      <div className="flex w-full justify-end">
        <div className="flex flex-row w-full items-center max-w-[400px] py-4 text-black gap-3 font-cocogoose text-sm">
          <p>Explore the full gallery</p>
          <div className="flex flex-row min-w-[120px] font-cocogoose-number text-lg gap-1.5 items-center">
            <Image
              src="/icons/pagination_dec.svg"
              alt="page_button"
              width={50}
              height={50}
              className={`w-4 h-4 ${
                currentPage === 1 ? "opacity-50" : "hover:cursor-pointer"
              }`}
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            />
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <p
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${
                  page === currentPage ? "font-black underline" : ""
                } hover:cursor-pointer`}
              >
                {page}
              </p>
            ))}
            <Image
              src="/icons/pagination_dec.svg"
              alt="page_button"
              width={50}
              height={50}
              className={`w-4 h-4 rotate-180 ${
                currentPage === totalPages
                  ? "opacity-50"
                  : "hover:cursor-pointer"
              }`}
              onClick={() => {
                if (currentPage !== totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
