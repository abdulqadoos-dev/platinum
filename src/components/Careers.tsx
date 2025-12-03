import Image from "next/image";

const careerCategories = [
  "01. Home Improvement",
  "02. Petroleum Projects",
  "03. Limestone Projects",
  "04. Proppant Projects",
  "05. Glass Manufacturing Projects",
  "06. Mark IV Projects",
];

const careerItems = [
  {
    title: "Current Jobs",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Ac Ipsum Vulputate Ultricies A Tellus. Sit Sed Massa Orci Nunc Congue. Mi Faucibus Dui Diam Tortor Dictumst.",
    image:
      "https://images.unsplash.com/photo-1529429617124-aee969ab6f00?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Current Jobs",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Ac Ipsum Vulputate Ultricies A Tellus. Sit Sed Massa Orci Nunc Congue. Mi Faucibus Dui Diam Tortor Dictumst.",
    image:
      "https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Current Jobs",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Ac Ipsum Vulputate Ultricies A Tellus. Sit Sed Massa Orci Nunc Congue. Mi Faucibus Dui Diam Tortor Dictumst.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
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

export default function Careers() {
  return (
    <section
      id="careers"
      className="bg-gray-100 text-secondary py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center  mb-12 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary leading-none">
            CAREERS
          </h1>
          <div className="bg-secondary text-white px-6 py-2 w-full font-bold text-lg md:text-xl leading-tight">
            PLATINUM TRACK WORKS IN ALL AREAS
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            OF THE RAIL INDUSTRY
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="space-y-6 col-span-1 ">
            {careerCategories.map((category) => (
              <p
                key={category}
                className="text-sm font-medium flex items-center space-x-3"
              >
                <span className="w-10 h-0.5 bg-secondary" />
                <span>{category}</span>
              </p>
            ))}
          </div>

          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerItems.map((project) => (
              <div
                key={project.title + project.image}
                className="bg-white p-4 rounded-2xl "
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={project.image}
                    alt={`${project.title} image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>
                <h3 className="text-primary text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
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
      </div>
    </section>
  );
}
