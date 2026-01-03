'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const people = [
  {
    name: "Mike Sousa",
    role: "Chief Executive Officer, Platinum Track Services Inc.",
    image: "/peoples/Mike%20Sousa,%20Founder,%20Chief%20Executive%20Officer.jpg",
    bio:
      "Mike Sousa is the founder and CEO of Platinum Track Services Inc., with 30+ years in railroad construction, maintenance, and operations. He leads company strategy, safety, and delivery across North America while building high-performance teams and trusted client partnerships.",
    linkedin: "https://ca.linkedin.com/in/mike-sousa-1b1106b0",
    tag: "Leadership",
  },
  {
    name: "Minha Saeed",
    role: "Chief Financial Officer, Platinum Track Services Inc.",
    image: "/peoples/M%20Saeed,%20Chief%20Financial%20Officer.jpeg",
    bio:
      "Minha Saeed, CPA, CA, is CFO at Platinum Track Services Inc., leading financial strategy, controls, and compliance. She oversees budgeting, forecasting, and ERP integrations to support disciplined growth and operational alignment.",
    linkedin: "https://ca.linkedin.com/in/minha-saeed-cpa-ca-32682019",
    tag: "Finance",
  },
  {
    name: "Rick Haggart",
    role: "Director of Track & Business Development",
    image: "/peoples/Rick%20Haggart%20-%20Director%20of%20Track%20Strategy%20&%20Advisory.png",
    bio:
      "Rick S. Haggart is Director of Track & Business Development with 44+ years in rail and transit infrastructure. He previously led CN Rail engineering in Eastern Canada and now drives engineering oversight, safety, and growth for major programs.",
    linkedin: "https://www.linkedin.com/",
    tag: "Track & Business Development",
  },
  {
    name: "Michael Sousa",
    role: "VP Operations, Platinum Track Services Inc.",
    image: "/peoples/Michael%20Sousa%20-%20Operations%20Manager.jpg",
    bio:
      "Mike Sousa Jr. leads daily operations at Platinum Track Services Inc., ensuring safe, efficient execution across projects in Canada and North America. He focuses on workforce coordination, compliance, and delivery standards.",
    linkedin: "https://ca.linkedin.com/in/mike-sousa-jr-4165271a2",
    tag: "Operations",
  },
  {
    name: "Jim Violin",
    role: "Vice President, Business Development",
    image: "/peoples/Jim%20Violin%20-%20Business%20Development.png",
    bio:
      "Jim Violin is Vice President, Business Development with 40+ years of executive experience in operations and commercial strategy. He leads growth initiatives, partnerships, and complex negotiations to expand Platinum Track's market presence.",
    linkedin: "https://ca.linkedin.com/in/jim-violin-42489b73",
    tag: "Business Development",
  },
  {
    name: "Julie Sousa",
    role: "Accounts Receivable",
    image: "/peoples/Julie%20Sousa%20-%20Accounts%20Receivable.jpg",
    bio:
      "Manages receivables and client billing with focus on accuracy, reporting, and timely collections.",
    linkedin: "https://www.linkedin.com/",
    tag: "Finance",
  },
  {
    name: "Krissy Stephenson",
    role: "Administrative Assistant",
    image: "/peoples/Krissy%20Stephenson%20-%20Administrative%20Assistant.jpg",
    bio:
      "Supports executive operations, communications, and daily administrative coordination.",
    linkedin: "https://www.linkedin.com/",
    tag: "Administration",
  },
  {
    name: "Laurie Toth",
    role: "Logistics Coordinator",
    image: "/peoples/Laurie%20Toth%20-%20Logistics%20Coordinator.png",
    bio:
      "Coordinates material distribution, fleet movement, and onsite logistics across projects.",
    linkedin: "https://www.linkedin.com/",
    tag: "Logistics",
  },
  {
    name: "Lidia Daood",
    role: "Accounts Payable",
    image: "/peoples/Lidia%20Daood%20-%20Accounts%20Payable.jpg",
    bio:
      "Handles vendor payments and internal cost tracking to ensure clean financial operations.",
    linkedin: "https://www.linkedin.com/",
    tag: "Finance",
  },
  {
    name: "Lily Sousa",
    role: "Fleet Administrator",
    image: "/peoples/Lily%20Sousa%20-%20Fleet%20Administrator.jpeg",
    bio:
      "Manages fleet documentation, compliance, and readiness for field deployment.",
    linkedin: "https://www.linkedin.com/",
    tag: "Fleet",
  },
  {
    name: "Manprit Nijjar",
    role: "Controller",
    image: "/peoples/Manprit%20Nijjar%20-%20Controller.jpeg",
    bio:
      "Oversees accounting, reporting, and internal controls to support informed decision-making.",
    linkedin: "https://www.linkedin.com/",
    tag: "Finance",
  },
  {
    name: "Martina Bellemore",
    role: "Assistant Controller",
    image: "/peoples/Martina%20Bellemore%20-%20Assistant%20Controller.png",
    bio:
      "Supports financial reporting, reconciliations, and operational analysis.",
    linkedin: "https://www.linkedin.com/",
    tag: "Finance",
  },
  {
    name: "Mike Cipparone",
    role: "Fleet Supervisor",
    image: "/peoples/Mike%20Cipparone%20-%20Fleet%20Supervisor.jpg",
    bio:
      "Supervises fleet operations and maintenance to maximize uptime and reliability.",
    linkedin: "https://www.linkedin.com/",
    tag: "Fleet",
  },
  {
    name: "Nick Nielsen",
    role: "Chief Track Specialist",
    image: "/peoples/Nick%20Nielsen%20-%20Chief%20Track%20Systems%20Specialist.png",
    bio:
      "Nick Nielsen is Chief Track Specialist with 40+ years across freight rail, LRT, and heavy haul corridors. He provides technical direction, standards leadership, and safety-focused engineering oversight for complex track programs.",
    linkedin: "https://www.linkedin.com/",
    tag: "Engineering",
  },
  {
    name: "Sarah Roth",
    role: "Payroll Supervisor",
    image: "/peoples/Sarah%20Roth%20-%20Payroll%20Supervisor.jpg",
    bio:
      "Ensures accurate payroll processing, compliance, and reporting across teams.",
    linkedin: "https://www.linkedin.com/",
    tag: "HR",
  },
  {
    name: "Theresa Nash",
    role: "Health and Safety Officer",
    image: "/peoples/Theresa%20Nash,%20Health%20and%20Safety%20Officer.JPG",
    bio:
      "Leads safety programs, compliance, and field training to uphold operational excellence.",
    linkedin: "https://www.linkedin.com/",
    tag: "Safety",
  },
  {
    name: "Wendrys DaSilva",
    role: "Financial Analyst",
    image: "/peoples/Wendrys%20DaSilva%20-%20Financial%20Analyst.jpg",
    bio:
      "Provides analytical insights to support budgeting, forecasting, and project controls.",
    linkedin: "https://www.linkedin.com/",
    tag: "Finance",
  },
];

export default function About() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"key" | "team">("key");
  const [activePerson, setActivePerson] = useState<(typeof people)[number] | null>(null);

  const keyMembers = new Set([
    "Mike Sousa",
    "Minha Saeed",
    "Michael Sousa",
    "Jim Violin",
    "Rick Haggart",
  ]);

  const visiblePeople = activeTab === "key"
    ? people.filter((person) => keyMembers.has(person.name))
    : people.filter((person) => !keyMembers.has(person.name));

  useEffect(() => {
    const container = sliderRef.current;
    if (!container || !visiblePeople.length) return;
    const target = container.children[activeIndex] as HTMLElement | undefined;
    if (target) {
      container.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex, activeTab]);

  const scrollSlider = (direction: "next" | "prev") => {
    setActiveIndex((prev) => {
    const count = visiblePeople.length;
    if (direction === "next") return (prev + 1) % count;
    return (prev - 1 + count) % count;
  });
  };

  return (
    <section id="about" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING SECTION */}
        <motion.div
          className="flex flex-col gap-3 items-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.45em] font-semibold text-secondary/70">
            About us
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-none">
            40 Years Of Experience
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-secondary/70">
            Spanning Three Generations
          </h2>
          <span className="h-[1px] w-40 bg-gradient-to-r from-secondary/80 via-secondary/30 to-transparent" />
        </motion.div>

        {/* LEFT ITEMS + PARAGRAPH */}
        <div className="grid grid-cols-1 lg:grid-cols-8 items-center gap-8 md:gap-10 mt-10 mb-12 md:mb-16">

          {/* LEFT LOGO */}
          <motion.div
            className="col-span-8 md:col-span-2 self-stretch"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex h-full items-start justify-start">
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-secondary/15 bg-white/70 px-8 py-6 shadow-[0_18px_40px_rgba(22,19,74,0.12)] backdrop-blur">
                <Image
                  src="/logo.png"
                  alt="Platinum Track Services"
                  width={240}
                  height={120}
                  sizes="(max-width: 768px) 180px, 220px"
                  className="h-auto w-full max-w-[200px] sm:max-w-[220px]"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT PARAGRAPH */}
          <motion.div
            className="col-span-6 space-y-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-secondary text-sm md:text-base font-semibold leading-relaxed md:leading-6 w-full">
              Platinum Track Services Is A Name That Was Carefully Chosen. Platinum Creates An Image Of
              "The Best" And We Believe That We Are The Very Best. Not Only Are We The Best Today, But We
              Continue To Invest In Experience, Technology, New Information To Make Sure That We Will Be The Very Best
              Tomorrow. We Offer Railway Construction, Railway Maintenance.
            </p>

            {/* BLUE HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-12 font-black text-secondary mb-4">
              We Know That Every Decision<br className="hidden sm:block" />Has An Impact.
            </h2>

            {/* RED STRIP */}
            <div className="inline-block rounded-[5px] bg-primary text-white text-sm md:text-xl font-bold px-4 md:px-2 py-1">
              Our Journey To Become One Of The Largest Rail Contractors.
            </div>

          </motion.div>

        </div>

        {/* TEAM TABS */}
        <div className="flex items-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => {
              setActiveTab("key");
              setActiveIndex(0);
            }}
            className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition ${
              activeTab === "key"
                ? "border-secondary bg-secondary text-white"
                : "border-secondary/30 text-secondary hover:border-secondary"
            }`}
          >
            Key Members
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("team");
              setActiveIndex(0);
            }}
            className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition ${
              activeTab === "team"
                ? "border-secondary bg-secondary text-white"
                : "border-secondary/30 text-secondary hover:border-secondary"
            }`}
          >
            Team Members
          </button>
        </div>

        {/* TEAM SLIDER */}
        <div className="relative">

          <div className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 ">
            <button
              type="button"
              onClick={() => scrollSlider("prev")}
              className="h-11 w-11 rounded-full bg-white/80 flex items-center justify-center hover:scale-105 cursor-pointer transition"
            >
              <span className="sr-only">Previous</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L7 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 ">
            <button
              type="button"
              onClick={() => scrollSlider("next")}
              className="h-11 w-11 rounded-full bg-white/80 flex items-center justify-center hover:scale-105 cursor-pointer transition"
            >
              <span className="sr-only">Next</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L17 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {visiblePeople.map((person) => (
                <div
                  key={person.name}
                  className="group relative flex-shrink-0 min-w-[80%] sm:min-w-[55%] md:min-w-[40%] lg:min-w-[20%] snap-start"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivePerson(person)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActivePerson(person);
                    }
                  }}
                >
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 20vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl" />
                  <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 text-white">
                    <div className="inline-flex flex-col gap-1">
                      <span className="">
                        {person.name}
                      </span>
                      <span className="text-xs">
                        {person.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      {activePerson ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setActivePerson(null)}
          />
          <div className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-primary/20 bg-white/95 p-5 sm:p-6 shadow-[0_30px_80px_rgba(168,31,39,0.2)] backdrop-blur">
            <button
              type="button"
              onClick={() => setActivePerson(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-secondary/10 bg-white text-secondary hover:text-primary transition"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            </button>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_1.4fr] md:items-center">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={activePerson.image}
                  alt={activePerson.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/70">
                  {activePerson.tag}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/60">Team Profile</p>
                  <h3 className="mt-2 text-3xl font-extrabold text-primary">{activePerson.name}</h3>
                  <p className="text-base font-semibold text-secondary">{activePerson.role}</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{activePerson.bio}</p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">
                  <span className="rounded-full border border-secondary/20 bg-white px-4 py-2">
                    {activePerson.tag}
                  </span>
                  <span className="rounded-full border border-secondary/20 bg-white px-4 py-2">
                    Platinum Track Services
                  </span>
                </div>
                <a
                  href={activePerson.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(10,102,194,0.3)] transition hover:opacity-90"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.9 1 4.98 2.12 4.98 3.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.5 8H4.5V23H0.5V8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.5 8H12.3V10.2H12.35C12.88 9.2 14.2 8.1 16.1 8.1C20.2 8.1 21 10.7 21 14.1V23H17V15.1C17 13.2 17 10.7 14.4 10.7C11.7 10.7 11.3 12.9 11.3 15V23H7.3V8H8.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
