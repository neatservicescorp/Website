"use client";
import { Divider, Select, SelectItem } from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { div } from "framer-motion/client";

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
  const allProjects = useRef(projects); // This stores all the projects

  const [visibleProjects, setVisibleProjects] = useState<Project[]>(
    allProjects.current.slice(0, 9)
  );
  const [filters, setFilters] = useState<ProjectFilter>({
    type: null,
    location: null,
  });

  const [totalPages, setTotalPages] = useState<number>(
    Math.floor(visibleProjects.length / 9)
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filterProjects = (filters: ProjectFilter): Project[] => {
    if (!filters.type && !filters.location) {
      return projects;
    }

    return projects.filter((proj) => {
      let isValid = false;
      if (filters.type) {
        if (proj.type === filters.type) {
          isValid = true;
        }
      } else if (filters.location) {
        if (proj.location === filters.location) {
          isValid = true;
        }
      }
      return isValid;
    });
  };

  useEffect(() => {
    setTotalPages(Math.ceil(visibleProjects.length / 9));
  }, [visibleProjects]);

  useEffect(() => {
    setVisibleProjects(
      allProjects.current.slice((currentPage - 1) * 9, currentPage * 9)
    );
  }, [currentPage]);

  useEffect(() => {
    setVisibleProjects(filterProjects(filters));
  }, [filters]);

  return (
    <div className="w-full p-5 flex flex-col">
      <div className="flex flex-row text-black w-full gap-12">
        <h3 className="font-exotc350 text-6xl">Filter by:</h3>
        <div className="flex flex-row gap-5">
          <Select
            size="lg"
            classNames={{
              label: "text-black",
              trigger: "border-black rounded-md border-1",
              listbox: "font-cocogoose text-black",
            }}
            onSelectionChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                type: value.currentKey as ProjectType,
              }))
            }
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
            size="lg"
            variant="bordered"
            classNames={{
              label: "text-black",
              trigger: "border-black rounded-md border-1",
              listbox: "font-cocogoose text-black",
            }}
            onSelectionChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                location: value.currentKey as ProjectLocation,
              }))
            }
            label="Location"
            fullWidth
            className="font-cocogoose w-[270px]"
          >
            <SelectItem key="New York">New York</SelectItem>
            <SelectItem key="New Jersey">New Jersey</SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap z-10 py-12 gap-y-12 min-h-[400px]">
        {visibleProjects.map((project, index) => (
          <div className="w-1/3 flex justify-center" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <Divider className="bg-black/40" />
      <div className="flex w-full justify-end">
        <div className="flex flex-row w-full items-center max-w-[400px] py-4 text-black gap-3 font-cocogoose text-sm">
          <p>Explore the full gallery</p>
          <div className="flex flex-row min-w-[120px] font-exotc350 gap-1.5">
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
          </div>
        </div>
      </div>
    </div>
  );
}
