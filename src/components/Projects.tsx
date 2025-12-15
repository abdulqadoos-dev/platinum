import Image from "next/image";

const categories = [
  "01. Home Improvement",
  "02. Petroleum Projects",
  "03. Limestone Projects",
  "04. Proppant Projects",
  "05. Glass Manufacturing Projects",
  "06. Mark IV Projects",
];

const projects = [
  {
    title: "Mainline Rehabilitation",
    description:
      "Ballast renewal and track surfacing across 25 km to restore ride quality, drainage, and uptime for unit trains.",
    image: "/CP Rail.jpg",
  },
  {
    title: "Yard Expansion",
    description:
      "New turnouts, ladder tracks, and signal upgrades to increase yard capacity and reduce dwell time.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bridge Approaches",
    description:
      "Track realignment and approach stabilization on a critical river crossing to improve safety and reliability.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial Spur Construction",
    description:
      "Design-build of a new industrial spur with grading, drainage, and surfacing to connect a client site to the mainline.",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=80",
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 text-secondary py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center  mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-none">
            PROJECTS
          </h1>
          <div className="bg-secondary text-white px-2 md:px-3 lg:px-6 py-2 md:py-1 w-full font-bold text-xs md:text-xs lg:text-lg leading-tight">
            PLATINUM TRACK WORKS IN ALL AREAS
            <br className="hidden md:block" />
            OF THE RAIL INDUSTRY
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-3 ">
          {projects.map((project) => (
            <div
              key={project.title + project.image}
              className="bg-white p-3 rounded-2xl flex flex-col justify-around gap-3"
            >
              <div className="relative w-full h-48 ">
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-primary text-2xl font-bold ">
                {project.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed ">
                {project.description}
              </p>
              <button className="flex items-center space-x-2 bg-secondary text-white px-4 py-1 text-sm rounded-full ml-auto">
                <span>Read More</span>
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
