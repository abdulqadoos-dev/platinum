"use client";

import { useMemo, useState } from "react";

const jobOpenings = [
  {
    title: "Track Labourer",
    location: "Ontario & Western Canada",
    type: "Full-time",
    summary:
      "Support rail maintenance and construction crews with hands-on track work, material handling, and site clean-up across active rail corridors.",
    responsibilities: [
      "Assist with tie/rail replacement, ballast work, and general track maintenance.",
      "Load, unload, and stage tools, materials, and equipment.",
      "Follow safety protocols, attend briefings, and maintain PPE standards.",
      "Work in outdoor environments and rotating shifts as required.",
    ],
    requirements: [
      "Physically fit and comfortable with manual labour.",
      "Safety-focused mindset and team-first attitude.",
      "Rail or construction experience is an asset but not required.",
    ],
  },
  {
    title: "Welding / Track Crew Member",
    location: "Canada-wide",
    type: "Full-time",
    summary:
      "Join a specialized crew performing thermite welding and track repairs while supporting rail programs across multiple regions.",
    responsibilities: [
      "Assist with thermite welding operations and joint elimination.",
      "Prepare work sites, handle tools, and support welding leads.",
      "Complete inspections, clean-up, and daily documentation.",
      "Travel as needed for project-based work windows.",
    ],
    requirements: [
      "Rail welding experience preferred (training available).",
      "Comfortable with travel and overnight shifts.",
      "Strong attention to safety and detail.",
    ],
  },
];

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

export default function Careers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = useMemo(() => jobOpenings[activeIndex], [activeIndex]);

  return (
    <section
      id="careers"
      className="bg-gray-100 text-secondary py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.45em] font-semibold text-secondary/70">
            Careers
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-none">
            Build Your Rail Career
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-secondary/70">
            Join a field-first team delivering critical rail programs across Canada.
          </h2>
          <span className="h-[1px] w-40 bg-gradient-to-r from-secondary/80 via-secondary/30 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2.5fr] lg:gap-10">
          <div className="rounded-2xl border border-secondary/10 bg-white/80 p-5 shadow-[0_16px_40px_rgba(22,19,74,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/60">
              Open Roles
            </p>
            <div className="mt-4 space-y-3">
              {jobOpenings.map((job, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={job.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-primary/40 bg-primary/10 text-primary shadow-[0_8px_24px_rgba(168,31,39,0.2)]"
                        : "border-secondary/10 bg-white text-secondary hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    <p className="text-sm font-semibold">{job.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary/60">
                      {job.location}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-secondary/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(22,19,74,0.1)]">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
              <span>{activeJob.type}</span>
              <span className="h-[1px] w-16 bg-secondary/20" />
              <span className="text-primary">{activeJob.location}</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-primary">{activeJob.title}</h3>
            <p className="mt-3 text-base text-secondary/80">{activeJob.summary}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary/60">
                  Responsibilities
                </p>
                <ul className="mt-3 space-y-2 text-sm text-secondary/80">
                  {activeJob.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary/60">
                  Requirements
                </p>
                <ul className="mt-3 space-y-2 text-sm text-secondary/80">
                  {activeJob.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="mailto:info@platinumtrack.ca"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-secondary/90"
              >
                Apply Now
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
