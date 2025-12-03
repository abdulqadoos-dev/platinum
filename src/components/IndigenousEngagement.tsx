import Image from "next/image";

const strategyParagraphs = [
  "Platinum Track Services partners with Indigenous communities across Canada to build positive relationships, shared prosperity, and protect the environment.",
  "Our Indigenous Engagement Strategy centers on Leadership, Employment, Business Development, and Community Relations, guided by the Seven Generations Vision Plan (SGVP) Steering Committee.",
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
    <main className="bg-white text-secondary">
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden"
        aria-labelledby="indigenous-hero-title"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/Indigenous-cover.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b203d]/90 via-[#0b203d]/80 to-[#0b203d]/70" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32 text-center text-white space-y-8">
          <h1
            id="indigenous-hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Indigenous Engagement
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            “Precision” — Celebrating Indigenous Culture and Landscape
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
        className="bg-gray-100 py-16 sm:py-20 lg:py-24 text-secondary"
      >
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-secondary">
            Indigenous Engagement Strategy
          </h2>
          <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-secondary/90">
            {strategyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/indigenous-main.jpeg"
              alt="Indigenous engagement gathering"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-black text-secondary">
              Strategy
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-secondary/90">
              Platinum Track Services is dedicated to meaningful employment for Indigenous peoples across our operations. We recruit and advance Indigenous talent, invest in training, partner with Indigenous-owned businesses, support community initiatives, and foster inclusive workplaces so Indigenous partners and Platinum Track thrive together today and for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-gray-100 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h4 className="text-center text-xl sm:text-2xl font-semibold text-secondary mb-10">
            Indigenous Partnerships &amp; Recognitions
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center bg-white rounded-xl shadow-sm p-4"
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
