"use client";
import { Divider, Select, SelectItem } from "@heroui/react";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

export type ProjectType =
  | "Roofing"
  | "Siding"
  | "Windows"
  | "Kitchen"
  | "Bathroom";
export type ProjectLocation =
  | "Yonkers"
  | "Staten Island"
  | "Queens"
  | "Long Island"
  | "New Jersey"
  | "Brooklyn"
  | "Bronx";

export type Project = {
  image: string;
  type: ProjectType;
  location: ProjectLocation;
};

export type ProjectFilter = {
  type: ProjectFilterType | null;
  location?: ProjectLocation | null;
};

type ProjectFilterType = "Roofing" | "Siding" | "Windows" | "Other";

type ProjectsProps = {
  projects: Project[];
};

function handleTypeFilter(
  type: ProjectFilterType | null,
  project: Project
): boolean {
  switch (type) {
    case "Other":
      return project.type === "Kitchen" || project.type === "Bathroom";
    case "Roofing":
      return project.type === "Roofing";
    case "Siding":
      return project.type === "Siding";
    case "Windows":
      return project.type === "Windows";
    default:
      return true; // If no filter is applied, show all projects
  }
}

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
            handleTypeFilter(newFilters.type, proj) &&
            proj.location === newFilters.location
          );
        }

        if (newFilters.type) {
          return handleTypeFilter(newFilters.type, proj);
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
      <div className="flex flex-col md:flex-row text-black w-full gap-5 lg:gap-12">
        <h3 className="font-exotc350 text-4xl lg:text-5xl">Filter by:</h3>
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
            <SelectItem key="Windows">Windows</SelectItem>
            <SelectItem key="Other">Other</SelectItem>
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
            <SelectItem key="Brooklyn">Brooklyn</SelectItem>
            <SelectItem key="Staten Island">Staten Island</SelectItem>
            <SelectItem key="Long Island">Long Island</SelectItem>
            <SelectItem key="Bronx">Bronx</SelectItem>
            <SelectItem key="Queens">Queens</SelectItem>
            <SelectItem key="Yonkers">Yonkers</SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap z-10 lg:py-12 gap-2 md:gap-6 xl:gap-x-0 xl:gap-y-16 py-5 min-h-[400px] justify-center">
        {visibleProjects.map((project, index) => (
          <div
            className="w-full aspect-video max-h-[180px] md:max-h-full md:aspect-auto md:w-[45%] lg:w-1/3 lg:min-w-[350px] flex justify-center"
            key={index}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <Divider className="bg-black/40" />
      <div className="flex w-full justify-end">
        <div className="flex flex-row w-full items-center max-w-[400px] py-4 text-black gap-3 font-cocogoose text-sm">
          <p>Explore the full gallery</p>
          <div className="flex flex-row min-w-[120px] font-cocogoose text-lg gap-1.5 items-center">
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
