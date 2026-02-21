"use client";

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
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="w-full p-5 flex flex-col">
      <div className="flex flex-col md:flex-row text-black w-full gap-5 lg:gap-12">
        <h3 className="font-exotc350 text-4xl lg:text-5xl">Filter by:</h3>
        <div className="flex flex-row gap-5">
          <select
            name="type"
            aria-label="Filter projects by product type"
            onChange={handleFilter}
            className="font-cocogoose text-black border border-black rounded-md px-3 py-3 w-[270px] bg-white hover:cursor-pointer"
          >
            <option value="">Product</option>
            <option value="Roofing">Roofing</option>
            <option value="Siding">Siding</option>
            <option value="Windows">Windows</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="location"
            aria-label="Filter projects by location"
            onChange={handleFilter}
            className="font-cocogoose text-black border border-black rounded-md px-3 py-3 w-[270px] bg-white hover:cursor-pointer"
          >
            <option value="">Location</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Staten Island">Staten Island</option>
            <option value="Long Island">Long Island</option>
            <option value="Bronx">Bronx</option>
            <option value="Queens">Queens</option>
            <option value="Yonkers">Yonkers</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap z-10 lg:py-12 gap-2 md:gap-6 xl:gap-x-6 xl:gap-y-16 py-5 min-h-[400px] justify-center">
        {visibleProjects.map((project, index) => (
          <div
            className="max-h-[180px] md:max-h-full md:aspect-auto flex justify-center"
            key={index}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <hr className="border-black/40" />
      <div className="flex w-full justify-end">
        <div className="flex flex-row w-full items-center max-w-[800px] py-4 text-black gap-3 font-cocogoose text-sm">
          <p>Explore the full gallery</p>
          <div className="flex flex-row md:min-w-[120px] font-cocogoose text-lg gap-1.5 items-center">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className={`bg-transparent border-none md:p-2 md:min-w-[44px] md:min-h-[44px] flex items-center justify-center ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:cursor-pointer"
              }`}
              aria-label="Previous page"
            >
              <Image
                src="/icons/pagination_dec.svg"
                alt=""
                width={50}
                height={50}
                className="w-6 h-6"
              />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`bg-transparent border-none p-2 md:min-w-[44px] md:min-h-[44px] flex items-center justify-center hover:cursor-pointer ${
                  page === currentPage ? "font-black underline" : ""
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => {
                if (currentPage !== totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              disabled={currentPage === totalPages}
              className={`bg-transparent border-none p-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:cursor-pointer"
              }`}
              aria-label="Next page"
            >
              <Image
                src="/icons/pagination_dec.svg"
                alt=""
                width={50}
                height={50}
                className="w-6 h-6 rotate-180"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
