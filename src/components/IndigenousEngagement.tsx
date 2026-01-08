import Image from "next/image";

const strategyParagraphs = [
  "We work alongside Indigenous communities across Canada with respect, listening, and long-term partnership. Our approach is grounded in shared prosperity, cultural integrity, and environmental care.",
  "Our Indigenous Engagement Strategy is shaped by leadership, employment pathways, business development, and community relations, guided by the Seven Generations Vision Plan (SGVP) Steering Committee.",
  "We acknowledge the traditional territories on which we operate and commit to learning, collaboration, and accountability in every project we undertake.",
];

const focusAreas = [
  {
    title: "Leadership & Voice",
    description:
      "Indigenous perspectives inform project planning, decision-making, and community engagement at every stage.",
  },
  {
    title: "Employment Pathways",
    description:
      "Training, mentorship, and advancement opportunities that support long-term careers in rail and construction.",
  },
  {
    title: "Business Development",
    description:
      "Partnerships with Indigenous-owned businesses and suppliers to grow capacity and shared success.",
  },
  {
    title: "Community Relations",
    description:
      "Consistent relationship-building, local investment, and open communication rooted in trust.",
  },
];

const programHighlights = [
  {
    title: "Skills & Apprenticeships",
    description:
      "On-the-job learning, safety certification, and trade pathways for Indigenous talent.",
  },
  {
    title: "Procurement & Joint Ventures",
    description:
      "Meaningful contracting opportunities with Indigenous enterprises and collaborative delivery.",
  },
  {
    title: "Community Investment",
    description:
      "Support for local initiatives, cultural events, and community-led priorities.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "Project practices that protect land and water, guided by Indigenous knowledge.",
  },
];

const logos = [
  {
    src: "https://universalrail.com/wp-content/uploads/2024/07/pair-committed-logo-1.webp",
    alt: "PAIR Committed",
  },
  {
    src: "https://universalrail.com/wp-content/uploads/2024/07/logo-easc-indig.svg",
    alt: "EASC Indigenous",
  },
  {
    src: "https://universalrail.com/wp-content/uploads/2024/07/CCIB-Supply-change-logo.svg",
    alt: "CCIB Supply Change",
  },
  {
    src: "https://universalrail.com/wp-content/uploads/2024/07/logo-ccib.svg",
    alt: "CCIB",
  },
  {
    src: "https://universalrail.com/wp-content/uploads/2024/07/logo-kdm.svg",
    alt: "KDM",
  },
];

export default function IndigenousEngagement() {
  return (
    <main className="bg-[#f8f3ec] text-secondary">
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden"
        aria-labelledby="indigenous-hero-title"
      >
        <Image
          src="/patterns/american indian hand painted.png"
          alt=""
          width={260}
          height={260}
          className="pointer-events-none absolute -left-10 top-10 hidden opacity-40 sm:block"
        />
        <Image
          src="/patterns/american indian hand painted.png"
          alt=""
          width={220}
          height={220}
          className="pointer-events-none absolute -right-12 bottom-10 opacity-30"
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/Indigenous-cover.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1f1a]/80 via-[#2b1f1a]/70 to-[#2b1f1a]/60" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: "url(/patterns/indigenous-weave.svg)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-12"
          style={{
            backgroundImage: "url(/patterns/indigenous-band.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-12 rotate-180"
          style={{
            backgroundImage: "url(/patterns/indigenous-band.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32 text-center text-white space-y-8">
          <h1
            id="indigenous-hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Indigenous Engagement
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90">
            Honouring community, culture, and collaboration across the lands we
            build on.
          </p>
          <a
            href="#overview"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="relative bg-[#f1e7db] py-16 sm:py-20 lg:py-24 text-secondary overflow-hidden"
      >
        <Image
          src="/patterns/american indian hand painted.png"
          alt=""
          width={200}
          height={200}
          className="pointer-events-none absolute -left-8 top-8 hidden opacity-25 lg:block"
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 rotate-180 opacity-60">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url(/patterns/indigenous-band.svg)",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-secondary uppercase tracking-[0.08em]">
                Indigenous Engagement Strategy
              </h2>
              <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-secondary/90">
                {strategyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-secondary/10 bg-white/70 p-6 shadow-[0_18px_40px_rgba(22,19,74,0.08)] backdrop-blur">
              <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-secondary/70 font-semibold">
                The SGVP Pillars
              </p>
              <div className="mt-5 space-y-4">
                {focusAreas.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-secondary/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-lg font-bold text-primary uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="relative bg-[#f8f3ec] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <Image
          src="/patterns/american indian hand painted.png"
          alt=""
          width={180}
          height={180}
          className="pointer-events-none absolute -right-12 top-10 hidden opacity-20 lg:block"
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 rotate-180 opacity-60">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url(/patterns/indigenous-band.svg)",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative w-full h-80 sm:h-96 rounded-[32px] overflow-hidden shadow-[0_24px_50px_rgba(22,19,74,0.18)]">
            <Image
              src="/indigenous-main.jpeg"
              alt="Indigenous engagement gathering"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3b2a22]/70 via-transparent to-transparent" />
          </div>
          <div className="space-y-5">
            <span className="text-xs sm:text-sm uppercase tracking-[0.5em] text-secondary/70 font-semibold">
              Commitment
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-secondary uppercase">
              Building Together, With Respect
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-secondary/90">
              We are dedicated to meaningful employment for Indigenous peoples
              across our operations. We recruit and advance Indigenous talent,
              invest in training, partner with Indigenous-owned businesses,
              support community initiatives, and foster inclusive workplaces so
              Indigenous partners and Platinum Track thrive together today and
              for generations to come.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {programHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-secondary/10 bg-white/80 p-4 shadow-[0_12px_30px_rgba(22,19,74,0.08)]"
                >
                  <h4 className="text-sm font-bold text-primary uppercase tracking-[0.16em]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-secondary/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative bg-[#f1e7db] py-14 sm:py-16 lg:py-20 overflow-hidden">
        <Image
          src="/patterns/american indian hand painted.png"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute -left-10 bottom-10 hidden opacity-25 lg:block"
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 rotate-180 opacity-60">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url(/patterns/indigenous-band.svg)",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center space-y-3">
            <span className="text-xs sm:text-sm uppercase tracking-[0.5em] text-secondary/70 font-semibold">
              Partnerships
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-secondary uppercase">
              Indigenous Partnerships &amp; Recognitions
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center mt-10">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center bg-white/80 rounded-2xl shadow-[0_12px_25px_rgba(22,19,74,0.08)] p-4"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="150px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
