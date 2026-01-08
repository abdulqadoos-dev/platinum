"use client";

import { useEffect, useRef } from "react";
const partners = [
  { id: 1, src: "/partners/gfc.png", alt: "GFC Partner" },
  { id: 2, src: "/partners/ls.png", alt: "LS Partner" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      video.src = "/platinum-track-optimized.mp4";
      video.load();
      video.play().catch(() => undefined);
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(startVideo);
      return () => window.cancelIdleCallback(id);
    }

    const timeout = setTimeout(startVideo, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative w-full h-[calc(100vh-96px)] overflow-hidden bg-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/platinum-track-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-transparent"></div>

      <div className="relative z-20 container mx-auto h-full flex flex-col justify-around lg:px-0 px-5">


        <div className="flex flex-col w-full gap-4">
          <div className="relative">
            <h1 className="origin-left scale-x-90 text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.7rem,5.6vw,5rem)] text-primary font-black uppercase tracking-[0.09em] leading-[0.9]">
              Platinum Track
            </h1>
            <div className="mt-4 inline-block rounded-lg bg-secondary px-3 sm:px-4 py-2 shadow-[0_18px_40px_rgba(22,19,74,0.25)]">
              <span className="text-white text-base sm:text-xl md:text-2xl lg:text-[clamp(1.7rem,3.2vw,3.4rem)] font-black uppercase tracking-[0.22em] sm:tracking-[0.28em]">
                Services INC
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-secondary/80">
            <span className="text-sm sm:text-base uppercase tracking-[0.5em] font-semibold">
              Railway Construciont <br /> You can trust
            </span>
            <span className="h-[1px] w-44 sm:w-56 bg-gradient-to-r from-secondary/100 via-secondary/10 to-transparent" />
          </div>
        </div>

        <div className="w-fit">
          <div className="relative overflow-hidden rounded-xl border border-secondary/10 bg-white py-3 px-10">
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-semibold text-secondary/80">
                Our  Partners
              </span>
              <span className="h-[1px]  bg-gradient-to-r from-secondary/80 via-secondary/30 to-transparent" />
            </div>
            <div className="relative z-10 mt-2 flex items-center gap-5 py-1">
              {partners.map((partner) => (
                <img
                  key={partner.id}
                  src={partner.src}
                  alt={partner.alt}
                  className="h-14 sm:h-18 object-contain"
                />
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
