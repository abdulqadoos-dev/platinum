"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const partners = [
  { id: 1, src: "/partners/gfc.png", alt: "GFC Partner" },
  { id: 2, src: "/partners/ls.png", alt: "LS Partner" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-[calc(100vh-96px)] overflow-hidden bg-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/background-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-transparent"></div>

      <div className="relative z-20 container mx-auto h-full flex flex-col justify-around  lg:px-0 px-5">


        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <h1 className="text-3xl md:text-5xl lg:text-8xl text-primary font-extrabold uppercase">Railway</h1>
            <p className="bg-secondary text-white px-2 uppercase font-bold text-sm md:text-3xl lg:text-6xl lg:py-1">construction</p>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-8xl text-primary font-extrabold uppercase">you can trust</h1>
        </div>

        <div className="w-fit bg-white/95 rounded-xl py-3 ">
          <p className="text-center text-primary font-semibold text-xs sm:text-base ">Our Partners</p>
          <div className="flex items-center justify-center">
            {[0, 1].map((offset) => {
              const index = (currentIndex + offset) % partners.length;
              const partner = partners[index];
              return (
                <motion.div
                  key={offset}
                  className="relative w-20 sm:w-28 h-16 sm:h-20 flex items-center justify-center "
                  initial={{ opacity: 0, x: offset === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-12 sm:h-16 object-contain"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 ">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-primary" : "w-2 bg-gray-300"
                  }`}
                aria-label={`Go to partner ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
