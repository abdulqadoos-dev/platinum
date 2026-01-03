"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const formatMonthYear = (date: string) => {
    const parts = date.split(",");
    if (parts.length < 2) return date;
    const month = parts[0].trim().split(" ")[0] || parts[0].trim();
    const year = parts[parts.length - 1].trim();
    return `${month} ${year}`.trim();
  };
  const [activeDate, setActiveDate] = useState<string | null>(null);
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
    return filteredProjects;
  }, [filteredProjects]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
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
              className={`w-full text-left text-base font-semibold uppercase tracking-[0.2em] ${
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
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    {formatMonthYear(date)}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="col-span-3">
            <div>
              <div ref={sliderRef} className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
                {visibleProjects.map((project) => (
                  <motion.div
                    key={project.title + project.image}
                    className="min-w-full snap-start flex flex-col lg:flex-row"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="order-2 lg:order-1 flex w-full lg:w-[55%] flex-col pt-4 lg:pt-0 lg:pr-10 min-h-[340px]">
                      <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-secondary tracking-normal">
                        {project.title}
                      </p>
                      <div className="flex flex-col items-start">
                        <h3 className="mt-2 text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-primary leading-none">
                          {formatYear(project.date)}
                        </h3>
                      </div>
                      <div className="mt-10 space-y-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70">
                        {project.location ? (
                          <p className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-secondary/60"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                            </svg>
                            {project.location}
                          </p>
                        ) : null}
                        {project.contact ? (
                          <p className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-secondary/60"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                              <path d="M9 17h6" />
                              <path d="M9 13h6" />
                            </svg>
                            {project.contact}
                          </p>
                        ) : null}
                        {project.value ? (
                          <p className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-secondary/60"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                              <path d="M12 3v3m0 12v3" />
                            </svg>
                            {project.value}
                          </p>
                        ) : null}
                      </div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-auto inline-flex self-start items-center gap-2 rounded-full border border-secondary/30 bg-white/70 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary backdrop-blur transition hover:border-secondary hover:text-primary"
                      >
                        Read More
                        <ArrowIcon />
                      </Link>
                    </div>
                    <div className="order-1 lg:order-2 w-full lg:w-[45%]">
                      <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-2xl">
                        <Image
                          src={project.image}
                          alt={`${project.title} image`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 58vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {visibleProjects.length > 1 ? (
              <div className="mt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => scrollSlider("prev")}
                  className="group h-11 w-11 cursor-pointer rounded-full border border-secondary/30 bg-white text-secondary backdrop-blur transition hover:scale-105"
                >
                  <span className="sr-only">Previous</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto">
                    <path d="M15 5L7 12L15 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider("next")}
                  className="group h-11 w-11 cursor-pointer rounded-full border border-secondary/30 bg-white text-secondary backdrop-blur transition hover:scale-105"
                >
                  <span className="sr-only">Next</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto">
                    <path d="M9 5L17 12L9 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
