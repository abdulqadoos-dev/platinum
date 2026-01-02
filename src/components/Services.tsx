'use client';

import { serviceCards, serviceFeatures } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Services() {

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoTimer = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

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

            <div className="flex flex-col w-full items-start text-left gap-3">
              <div className="flex w-full items-center gap-3">
                <span className="text-xs sm:text-sm uppercase tracking-[0.45em] font-semibold text-secondary/80">
                  Our
                </span>
                <span className="block h-[1px] min-w-0 flex-1 bg-gradient-to-r from-secondary to-primary/70 to-transparent" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl md:text-5xl lg:text-7xl text-primary font-extrabold uppercase">Services</h1>
              </div>
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-secondary/60 font-semibold">
                We provide a variety of construction services.
              </p>
            </div>

          </div>

          <div className="col-span-12 lg:col-span-8 ">
            <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {serviceFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl bg-white/70 p-5 text-center shadow-[0_14px_28px_rgba(22,19,74,0.08)] backdrop-blur md:text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-transparent opacity-70" />
                  <div className="relative flex h-12 w-12 items-center justify-center self-center rounded-full bg-secondary text-white shadow-[0_10px_22px_rgba(22,19,74,0.35)] md:self-start">
                    {feature.icon}
                  </div>
                  <div className="relative">
                    <h3 className="text-lg md:text-xl leading-5 font-black uppercase text-primary">
                      {feature.title}
                    </h3>
                    <span className="mt-2 block h-[1px] w-14 bg-gradient-to-r from-secondary/50 via-secondary/30 to-transparent mx-auto md:mx-0" />
                  </div>
                  <p className="relative text-sm leading-snug text-black/80 capitalize font-normal">
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

            <div className="absolute -left-6 sm:left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 px-2">
              <button
                type="button"
                onClick={() => scrollSlider("prev")}
                className="group h-12 w-12 cursor-pointer rounded-full border border-secondary/30 bg-white text-secondary shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur transition hover:scale-105 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
              >
                <span className="sr-only">Previous</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path d="M15 5L7 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="absolute -right-6 sm:right-0 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 px-2">
              <button
                type="button"
                onClick={() => scrollSlider("next")}
                className="group h-12 w-12 cursor-pointer rounded-full border border-secondary/30 bg-white text-secondary shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur transition hover:scale-105 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
              >
                <span className="sr-only">Next</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
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
                  className="group relative flex-shrink-0 min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[25%] snap-start cursor-pointer"
                  role="link"
                  tabIndex={0}
                  onClick={() => router.push(`/services/${service.slug}`)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      router.push(`/services/${service.slug}`);
                    }
                  }}
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
                      className="absolute right-3 top-3 md:right-4 md:top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary shadow-lg transition-transform duration-300 group-hover:-rotate-45"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span className="sr-only">View more</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7101 17.7102L17.7101 12.7102C17.8011 12.6151 17.8725 12.5029 17.9201 12.3802C18.0201 12.1367 18.0201 11.8636 17.9201 11.6202C17.8725 11.4974 17.8011 11.3853 17.7101 11.2902L12.7101 6.29019C12.6169 6.19695 12.5062 6.12299 12.3844 6.07253C12.2625 6.02207 12.132 5.99609 12.0001 5.99609C11.7338 5.99609 11.4784 6.10188 11.2901 6.29019C11.1018 6.47849 10.996 6.73388 10.996 7.00019C10.996 7.26649 11.1018 7.52188 11.2901 7.71019L14.5901 11.0002L7.0001 11.0002C6.73489 11.0002 6.48053 11.1055 6.293 11.2931C6.10546 11.4806 6.0001 11.735 6.0001 12.0002C6.0001 12.2654 6.10546 12.5198 6.293 12.7073C6.48053 12.8948 6.73489 13.0002 7.0001 13.0002L14.5901 13.0002L11.2901 16.2902C11.1964 16.3831 11.122 16.4937 11.0712 16.6156C11.0204 16.7375 10.9943 16.8682 10.9943 17.0002C10.9943 17.1322 11.0204 17.2629 11.0712 17.3848C11.122 17.5066 11.1964 17.6172 11.2901 17.7102C11.3831 17.8039 11.4937 17.8783 11.6155 17.9291C11.7374 17.9798 11.8681 18.006 12.0001 18.006C12.1321 18.006 12.2628 17.9798 12.3847 17.9291C12.5065 17.8783 12.6171 17.8039 12.7101 17.7102Z"
                          fill="#16134A"
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
