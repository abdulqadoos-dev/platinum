"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projectItems } from "@/data/projects";


const parseDate = (value: string) => new Date(value).getTime();

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 21 21"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.4785 10.4999L10.2094 14.769M14.4785 10.4999L10.2094 6.23082M14.4785 10.4999L6.99907 10.5" />
  </svg>
);

export default function Projects() {
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  const timelineDates = useMemo(() => {
    const dates = Array.from(new Set(projectItems.map((project) => project.date)));
    return dates.sort((a, b) => parseDate(b) - parseDate(a));
  }, []);

  const filteredProjects = useMemo(() => {
    if (!activeDate) return projectItems;
    return projectItems.filter((project) => project.date === activeDate);
  }, [activeDate]);

  const visibleProjects = useMemo(() => {
    if (isMobile && !showAllMobile) return filteredProjects.slice(0, 3);
    return filteredProjects;
  }, [filteredProjects, isMobile, showAllMobile]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) setShowAllMobile(false);
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-gray-100 text-secondary py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:gap-3 lg:flex-row items-start lg:items-center mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-none text-nowrap">
            Projects
          </h1>
          <div className="bg-secondary text-white px-2 md:px-3 lg:px-6 py-2 md:py-1 w-full font-bold text-xs md:text-xs lg:text-lg leading-tight">
            40 Years Of Experience And
            <br className="hidden sm:block" />
            Spanning Three Generations
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <aside className="hidden lg:block space-y-6 col-span-1 lg:sticky lg:top-28 lg:self-start">
            <button
              type="button"
              onClick={() => {
                setActiveDate(null);
                scrollToSection();
              }}
              className={`w-full text-left text-sm font-semibold uppercase tracking-[0.2em] ${
                activeDate === null ? "text-primary" : "text-secondary/70"
              }`}
            >
              All Projects
            </button>
            <div className="relative space-y-5 pl-5">
              {timelineDates.map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => {
                    setActiveDate(date);
                    scrollToSection();
                  }}
                  className={`group relative flex items-center gap-3 text-sm font-medium transition cursor-pointer ${
                    activeDate === date ? "text-primary" : "text-secondary/70"
                  }`}
                >
                  <span
                    className={`absolute -left-[1.05rem] h-3 w-3 rounded-full border ${
                      activeDate === date ? "border-primary bg-primary" : "border-secondary/40 bg-white"
                    }`}
                  />
                  <span>{date}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="col-span-3">
            <div className="lg:min-h-[720px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleProjects.map((project) => (
                  <div
                    key={project.title + project.image}
                    className="bg-white p-4 rounded-2xl cursor-pointer"
                    role="link"
                    tabIndex={0}
                    onClick={() => router.push(`/projects/${project.slug}`)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        router.push(`/projects/${project.slug}`);
                      }
                    }}
                  >
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={project.image}
                        alt={`${project.title} image`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60 mb-2">
                      {project.date}
                    </p>
                    <h3 className="text-primary text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center space-x-2 bg-secondary text-white px-4 py-1 text-sm rounded-full ml-auto w-fit"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span>Read More</span>
                      <ArrowIcon />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {isMobile && !showAllMobile && filteredProjects.length > visibleProjects.length ? (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllMobile(true)}
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2 text-sm font-semibold text-white"
                >
                  View All Projects
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
