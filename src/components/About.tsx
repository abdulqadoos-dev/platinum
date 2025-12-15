'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const people = [
  { name: "Mike Sousa", role: "Founder, Chief Executive Officer", image: "/peoples/Mike%20Sousa,%20Founder,%20Chief%20Executive%20Officer.jpg" },
  { name: "M Saeed", role: "Chief Financial Officer", image: "/peoples/M%20Saeed,%20Chief%20Financial%20Officer.jpeg" },
  { name: "Rick Haggart", role: "Director of Track Strategy & Advisory", image: "/peoples/Rick%20Haggart%20-%20Director%20of%20Track%20Strategy%20&%20Advisory.png" },
  { name: "Michael Sousa", role: "Operations Manager", image: "/peoples/Michael%20Sousa%20-%20Operations%20Manager.jpg" },
  { name: "Jim Violin", role: "Business Development", image: "/peoples/Jim%20Violin%20-%20Business%20Development.png" },
  { name: "Julie Sousa", role: "Accounts Receivable", image: "/peoples/Julie%20Sousa%20-%20Accounts%20Receivable.jpg" },
  { name: "Krissy Stephenson", role: "Administrative Assistant", image: "/peoples/Krissy%20Stephenson%20-%20Administrative%20Assistant.jpg" },
  { name: "Laurie Toth", role: "Logistics Coordinator", image: "/peoples/Laurie%20Toth%20-%20Logistics%20Coordinator.png" },
  { name: "Lidia Daood", role: "Accounts Payable", image: "/peoples/Lidia%20Daood%20-%20Accounts%20Payable.jpg" },
  { name: "Lily Sousa", role: "Fleet Administrator", image: "/peoples/Lily%20Sousa%20-%20Fleet%20Administrator.jpeg" },
  { name: "Manprit Nijjar", role: "Controller", image: "/peoples/Manprit%20Nijjar%20-%20Controller.jpeg" },
  { name: "Martina Bellemore", role: "Assistant Controller", image: "/peoples/Martina%20Bellemore%20-%20Assistant%20Controller.png" },
  { name: "Mike Cipparone", role: "Fleet Supervisor", image: "/peoples/Mike%20Cipparone%20-%20Fleet%20Supervisor.jpg" },
  { name: "Nick Nielsen", role: "Chief Track Systems Specialist", image: "/peoples/Nick%20Nielsen%20-%20Chief%20Track%20Systems%20Specialist.png" },
  { name: "Sarah Roth", role: "Payroll Supervisor", image: "/peoples/Sarah%20Roth%20-%20Payroll%20Supervisor.jpg" },
  { name: "Theresa Nash", role: "Health and Safety Officer", image: "/peoples/Theresa%20Nash,%20Health%20and%20Safety%20Officer.JPG" },
  { name: "Wendrys DaSilva", role: "Financial Analyst", image: "/peoples/Wendrys%20DaSilva%20-%20Financial%20Analyst.jpg" },
];

const items = [
  { label: "Material Distribution & Pickup" },
  { label: "Railway Construction" },
  { label: "Rentals" },
  { label: "Track Inspection" },
  { label: "Track Removal" },
];

export default function About() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    const target = container.children[activeIndex] as HTMLElement | undefined;
    if (target) {
      container.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const scrollSlider = (direction: "next" | "prev") => {
    setActiveIndex((prev) => {
      if (direction === "next") return (prev + 1) % people.length;
      return (prev - 1 + people.length) % people.length;
    });
  };

  return (
    <section id="about" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING SECTION */}
        <div className="flex flex-col md:gap-3 lg:flex-row items-start lg:items-center ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-none text-nowrap">
            About us
          </h1>
          <div className="bg-secondary text-white px-2 md:px-3 lg:px-6 py-2 md:py-1 w-full font-bold text-xs md:text-xs lg:text-lg leading-tight">
            40 Years Of Experience And<br className="hidden sm:block" />Spanning Three Generations
          </div>
        </div>

        {/* LEFT ITEMS + PARAGRAPH */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 md:gap-10 mb-12 md:mb-16">

          {/* LEFT LIST */}
          <div className="space-y-6 col-span-8 md:col-span-2 mt-10">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="p-1"
                  >
                    <path d="M5 12l5 5l10-10" />
                  </svg>
                </span>
                <span className="text-primary font-semibold text-base md:text-lg">{item.label}</span>
              </div>
            ))}
          </div>

          {/* RIGHT PARAGRAPH */}
          <div className="col-span-6 space-y-10 mt-10">
            <p className="text-secondary text-sm md:text-base font-semibold leading-relaxed md:leading-6 ">
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
            <div className="inline-block bg-primary text-white text-sm md:text-xl font-bold px-4 md:px-2 ">
              Our Journey To Become One Of The Largest Rail Contractors.
            </div>

            {/* TEAM SLIDER */}
            <div className="relative mt-6">

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
                {people.map((person) => (
                  <div
                    key={person.name}
                    className="group relative flex-shrink-0 min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[25%] snap-start"
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

        </div>

      </div>
    </section>
  );
}
