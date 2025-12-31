'use client';

import { serviceCards, serviceFeatures } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Services() {

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoTimer = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    if (isPaused) return;
    autoTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceCards.length);
    }, 4500);
    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
    };
  }, [isPaused]);

  const scrollSlider = (direction: "next" | "prev") => {
    setActiveIndex((prev) => {
      if (direction === "next") return (prev + 1) % serviceCards.length;
      return (prev - 1 + serviceCards.length) % serviceCards.length;
    });
  };
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoTimer.current) clearInterval(autoTimer.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 text-secondary">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-5 items-start md:items-end grid-cols-1 md:grid-cols-12">

          <div className="col-span-12 lg:col-span-4 md:pr-16 ">

            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl  text-primary font-extrabold uppercase">Our</h1>
                <p className="bg-secondary text-white px-2 uppercase  font-bold text-xs lg:text-xl leading-none py-1 lg:mt-1">Full Rail <br className="hidden sm:block" /> Management</p>  
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary font-extrabold uppercase">Services</h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-none  font-semibold text-secondary capitalize">
                We provide a variety of construction services.
              </p>

            </div>
            
          </div>

          <div className="col-span-12 lg:col-span-8 ">
            <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {serviceFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex h-full flex-col gap-3 rounded-10 border border-secondary p-4 sm:p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl leading-5 font-black uppercase text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-snug text-black capitalize font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent hidden sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent hidden sm:block" />

            <div className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => scrollSlider("prev")}
                className="h-11 w-11 rounded-full bg-white shadow-lg border border-secondary/20 text-secondary flex items-center justify-center hover:scale-105 transition"
              >
                <span className="sr-only">Previous</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L7 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => scrollSlider("next")}
                className="h-11 w-11 rounded-full bg-white shadow-lg border border-secondary/20 text-secondary flex items-center justify-center hover:scale-105 transition"
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              {serviceCards.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex-shrink-0 min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[25%] snap-start"
                >
                  <div className="relative aspect-[3/4] sm:aspect-[5/6] lg:aspect-[3/4] overflow-hidden rounded-3xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-3xl" />
                    <Link
                      href={`/services/${service.slug}`}
                      className="absolute right-3 top-3 md:right-4 md:top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary shadow-lg"
                    >
                      <span className="sr-only">View more</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-secondary"
                      >
                        <path
                          d="M8 5L16 12L8 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 text-white">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              {serviceCards.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition ${idx === activeIndex ? "bg-primary scale-110" : "bg-secondary/30 hover:bg-secondary/60"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
