"use client";


const partners = [
  { id: 1, src: "/partners/gfc.png", alt: "GFC Partner" },
  { id: 2, src: "/partners/ls.png", alt: "LS Partner" },
];

export default function Hero() {
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

      <div className="relative z-20 container mx-auto h-full flex flex-col justify-around lg:px-0 px-5">


        <div className="flex flex-col w-full gap-4">
          <div className="relative">
            <h1 className="origin-left scale-x-90 text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.6rem,5.2vw,4.8rem)] text-primary font-black uppercase tracking-[0.09em] leading-[0.9]">
              Railway
            </h1>
            <div className="mt-4 inline-block rounded-lg bg-secondary px-4 py-2 shadow-[0_18px_40px_rgba(22,19,74,0.25)]">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(2.2rem,4.2vw,4.4rem)] font-black uppercase tracking-[0.28em]">
                Construction
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-secondary/80">
            <span className="text-sm sm:text-base uppercase tracking-[0.5em] font-semibold">
              You can trust
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-primary/100 via-secondary/10 to-transparent" />
          </div>
        </div>

        <div className="w-full max-w-[260px] sm:max-w-[300px]">
          <div className="relative overflow-hidden rounded-xl border border-secondary/10 bg-white px-3 pb-3 pt-2">
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-semibold text-secondary/80">
                Our Partners
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-secondary/40 via-secondary/10 to-transparent" />
            </div>
            <div className="relative z-10 mt-2 flex items-center justify-center gap-4 py-1">
              {partners.map((partner) => (
                <img
                  key={partner.id}
                  src={partner.src}
                  alt={partner.alt}
                  className="h-14 sm: object-contain"
                />
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
