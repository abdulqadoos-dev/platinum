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
  const formatYear = (date: string) => {
    const parts = date.split(",");
    return (parts[parts.length - 1] || date).trim();
  };
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
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

  const scrollSlider = (direction: "next" | "prev") => {
    const container = sliderRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-gray-100 text-secondary py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 items-start mb-12 lg:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.45em] font-semibold text-secondary/70">
            Projects
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-none">
            Major Rail Contracts Across Canada
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-secondary/70">
            Multi-Year Programs, Proven Delivery
          </h2>
          <span className="h-[1px] w-40 bg-gradient-to-r from-secondary/80 via-secondary/30 to-transparent" />
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
            <div className="relative space-y-5">
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
                  <span className="text-base font-semibold uppercase tracking-[0.2em]">
                    {formatYear(date)}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="col-span-3">
            <div>
              <div ref={sliderRef} className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
                {visibleProjects.map((project) => (
                  <div
                    key={project.title + project.image}
                    className="min-w-full snap-start bg-white rounded-2xl cursor-pointer flex flex-col lg:flex-row overflow-hidden"
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
                    <div className="order-2 lg:order-1 flex w-full lg:w-1/2 flex-col p-6">
                      <p className="text-lg font-bold uppercase tracking-[0.25em] text-secondary/70 mb-2">
                        {formatYear(project.date)}
                      </p>
                      <h3 className="text-primary text-2xl font-bold mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="ml-auto mt-auto inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary shadow-[0_10px_24px_rgba(22,19,74,0.1)] backdrop-blur transition hover:border-secondary hover:text-primary mt-6"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <span>Read More</span>
                        <ArrowIcon />
                      </Link>
                    </div>
                    <div className="order-1 lg:order-2 relative w-full lg:w-1/2 min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                      <Image
                        src={project.image}
                        alt={`${project.title} image`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary/70">
                        {project.statusValue ?? "Completed"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {visibleProjects.length > 1 ? (
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => scrollSlider("prev")}
                  className="group h-12 w-12 cursor-pointer rounded-full border border-secondary/30 bg-white text-secondary shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur transition hover:scale-105 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
                >
                  <span className="sr-only">Previous</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto">
                    <path d="M15 5L7 12L15 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider("next")}
                  className="group h-12 w-12 cursor-pointer rounded-full border border-secondary/30 bg-white text-secondary shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur transition hover:scale-105 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
                >
                  <span className="sr-only">Next</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto">
                    <path d="M9 5L17 12L9 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ) : null}
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
