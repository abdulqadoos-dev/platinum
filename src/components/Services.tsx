import Image from "next/image";

const serviceFeatures = [
  {
    title: "Safe & Efficient",
    description:
      "Platinum Track prioritizes safety, reliability & efficiency, ensuring work meets deadlines.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 13.1701V13.0001C20.0009 11.9301 19.7873 10.8708 19.3716 9.88484C18.9559 8.8989 18.3467 8.00637 17.58 7.26006C16.6848 6.38904 15.5946 5.74448 14.4 5.38006H14.35C13.5124 5.11619 12.638 4.9879 11.76 5.00006C9.66835 5.11486 7.69974 6.02482 6.25712 7.54366C4.81451 9.06249 4.00702 11.0753 3.99996 13.1701C3.33163 13.4052 2.76807 13.8692 2.40909 14.48C2.05012 15.0908 1.9189 15.809 2.03867 16.5072C2.15844 17.2055 2.52148 17.8389 3.06349 18.2951C3.60549 18.7514 4.29148 19.0011 4.99996 19.0001H19C19.7084 19.0011 20.3944 18.7514 20.9364 18.2951C21.4784 17.8389 21.8415 17.2055 21.9612 16.5072C22.081 15.809 21.9498 15.0908 21.5908 14.48C21.2319 13.8692 20.6683 13.4052 20 13.1701V13.1701ZM19 17.0001H4.99996C4.73474 17.0001 4.48039 16.8947 4.29285 16.7072C4.10532 16.5196 3.99996 16.2653 3.99996 16.0001C3.99996 15.7348 4.10532 15.4805 4.29285 15.2929C4.48039 15.1054 4.73474 15.0001 4.99996 15.0001H6.99996C7.26518 15.0001 7.51953 14.8947 7.70707 14.7072C7.8946 14.5196 7.99996 14.2653 7.99996 14.0001C7.99996 13.7348 7.8946 13.4805 7.70707 13.2929C7.51953 13.1054 7.26518 13.0001 6.99996 13.0001H5.99996C6.04557 11.9629 6.34242 10.9523 6.865 10.0552C7.38757 9.15809 8.12023 8.40136 8.99996 7.85006V11.0001C8.99996 11.2653 9.10532 11.5196 9.29285 11.7072C9.48039 11.8947 9.73474 12.0001 9.99996 12.0001C10.2652 12.0001 10.5195 11.8947 10.7071 11.7072C10.8946 11.5196 11 11.2653 11 11.0001V7.09006C11.2714 7.04471 11.5452 7.01466 11.82 7.00006H12C12.3356 7.00313 12.6703 7.0366 13 7.10006V11.0001C13 11.2653 13.1053 11.5196 13.2929 11.7072C13.4804 11.8947 13.7347 12.0001 14 12.0001C14.2652 12.0001 14.5195 11.8947 14.7071 11.7072C14.8946 11.5196 15 11.2653 15 11.0001V7.82006C15.4242 8.06568 15.8199 8.35745 16.18 8.69006C16.7565 9.24995 17.2147 9.91998 17.5274 10.6604C17.84 11.4007 18.0007 12.1964 18 13.0001H17C16.7347 13.0001 16.4804 13.1054 16.2929 13.2929C16.1053 13.4805 16 13.7348 16 14.0001C16 14.2653 16.1053 14.5196 16.2929 14.7072C16.4804 14.8947 16.7347 15.0001 17 15.0001H19C19.2652 15.0001 19.5195 15.1054 19.7071 15.2929C19.8946 15.4805 20 15.7348 20 16.0001C20 16.2653 19.8946 16.5196 19.7071 16.7072C19.5195 16.8947 19.2652 17.0001 19 17.0001Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "Trust is the foundation of every relationship and we cultivate it daily through action.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9642 13.8226C22.9603 13.7638 22.9508 13.7055 22.936 13.6484L20.6313 7.51135C21.0508 7.24006 21.3957 6.86818 21.6347 6.42956C21.8738 5.99095 21.9993 5.49952 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4C20.7348 4 20.4804 4.10536 20.2929 4.29289C20.1054 4.48043 20 4.73478 20 5C19.9999 5.22285 19.9254 5.43929 19.7884 5.61499C19.6513 5.79069 19.4595 5.91559 19.2433 5.96987C19.0272 6.02416 18.7991 6.00472 18.5953 5.91465C18.3915 5.82457 18.2235 5.66902 18.1182 5.47266C17.8616 5.01717 17.4863 4.63972 17.0324 4.38042C16.5784 4.12111 16.0627 3.98965 15.54 4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4H8.46C7.93731 3.98965 7.42158 4.12111 6.96762 4.38042C6.51366 4.63972 6.13844 5.01717 5.88184 5.47266C5.77647 5.66902 5.60855 5.82457 5.40471 5.91465C5.20088 6.00472 4.97281 6.02416 4.75668 5.96987C4.54054 5.91559 4.34872 5.79069 4.21165 5.61499C4.07457 5.43929 4.00008 5.22285 4 5C4 4.73478 3.89464 4.48043 3.70711 4.29289C3.51957 4.10536 3.26522 4 3 4C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2.00065 5.49952 2.12621 5.99095 2.36525 6.42956C2.60429 6.86818 2.94922 7.24006 3.36865 7.51135L1.064 13.6484C1.04921 13.7055 1.03977 13.7638 1.03581 13.8226C1.01825 13.8805 1.00626 13.9399 1 14C1 14.0093 1.00269 14.0178 1.00275 14.0271C1.00305 14.0403 1.00575 14.0524 1.00665 14.0655C1.02222 15.1144 1.4498 16.115 2.197 16.8512C2.94421 17.5874 3.95105 18.0001 5 18.0001C6.04895 18.0001 7.05579 17.5874 7.803 16.8512C8.5502 16.115 8.97778 15.1144 8.99335 14.0655C8.9942 14.0524 8.99695 14.0403 8.99725 14.0271C8.99731 14.0178 9 14.0093 9 14C8.99376 13.9399 8.98178 13.8805 8.96423 13.8226C8.96027 13.7638 8.95083 13.7055 8.93604 13.6484L6.62866 7.50421C7.05242 7.23377 7.40114 6.86085 7.64258 6.41992C7.72984 6.2842 7.85137 6.1739 7.99489 6.10017C8.13841 6.02644 8.29885 5.99189 8.46 6H11V20H8C7.73478 20 7.48043 20.1054 7.29289 20.2929C7.10536 20.4804 7 20.7348 7 21C7 21.2652 7.10536 21.5196 7.29289 21.7071C7.48043 21.8946 7.73478 22 8 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21C17 20.7348 16.8946 20.4804 16.7071 20.2929C16.5196 20.1054 16.2652 20 16 20H13V6H15.54C15.7011 5.9919 15.8616 6.02646 16.0051 6.10018C16.1486 6.17391 16.2701 6.2842 16.3574 6.41992C16.5988 6.86085 16.9475 7.23377 17.3713 7.50421L15.064 13.6484C15.0492 13.7055 15.0398 13.7638 15.0358 13.8226C15.0182 13.8805 15.0063 13.9399 15 14C15 14.0093 15.0027 14.0178 15.0028 14.0271C15.0031 14.0403 15.0057 14.0524 15.0066 14.0655C15.0222 15.1144 15.4498 16.115 16.197 16.8512C16.9442 17.5874 17.951 18.0001 19 18.0001C20.049 18.0001 21.0558 17.5874 21.803 16.8512C22.5502 16.115 22.9778 15.1144 22.9933 14.0655C22.9942 14.0524 22.997 14.0403 22.9972 14.0271C22.9973 14.0178 23 14.0093 23 14C22.9938 13.9399 22.9818 13.8805 22.9642 13.8226ZM5 8.85553L6.5564 13H3.4436L5 8.85553ZM6.72266 15C6.54618 15.3011 6.29479 15.5515 5.99293 15.7267C5.69107 15.9019 5.34901 15.9961 5 16C4.64903 15.9999 4.30428 15.9074 4.00036 15.7319C3.69644 15.5563 3.44405 15.3039 3.26855 15H6.72266ZM19 8.85553L20.5564 13H17.4436L19 8.85553ZM19 16C18.649 15.9999 18.3043 15.9074 18.0004 15.7319C17.6964 15.5563 17.4441 15.3039 17.2686 15H20.7227C20.5462 15.3011 20.2948 15.5515 19.9929 15.7267C19.6911 15.9019 19.349 15.9961 19 16Z" fill="#F0F0F0" />
      </svg>

    ),
  },
  {
    title: "Experience",
    description:
      "More than 40 years of rail expertise spanning three generations of leadership.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 6C20.7348 6 20.4804 6.10536 20.2929 6.29289C20.1054 6.48043 20 6.73478 20 7V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H17C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17V7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6ZM18 15V5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15ZM10 4H12V8.86L11.64 8.56C11.4603 8.41033 11.2339 8.32837 11 8.32837C10.7661 8.32837 10.5397 8.41033 10.36 8.56L10 8.86V4ZM4 15V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H8V11C7.99999 11.1912 8.05477 11.3783 8.15785 11.5393C8.26094 11.7003 8.40801 11.8284 8.58164 11.9083C8.75527 11.9883 8.94819 12.0169 9.13754 11.9906C9.32688 11.9643 9.50473 11.8843 9.65 11.76L11 10.63L12.35 11.76C12.5311 11.9149 12.7617 12 13 12C13.1447 11.999 13.2876 11.9683 13.42 11.91C13.5936 11.8297 13.7405 11.7012 13.8433 11.5399C13.9461 11.3787 14.0005 11.1913 14 11V4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15Z" fill="#F0F0F0" />
      </svg>

    ),
  },
];

const serviceCards = [
  {
    title: "Crossing Rehabilitation",
    image:
      "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Track Removal",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Maintenance Planning",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Rail Inspection",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Track Installation",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Services() {

  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 text-secondary">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-5 items-start md:items-end grid-cols-1 md:grid-cols-12">

          <div className="col-span-12 lg:col-span-4 md:pr-16 ">



            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl  text-primary font-extrabold uppercase">Our</h1>
                <p className="bg-secondary text-white px-2 uppercase   font-bold text-xs lg:text-xl leading-none py-1 lg:mt-1">Full Rail <br className="hidden sm:block" /> Management</p>  
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
          <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none">

            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="group relative flex-shrink-0 min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-0 lg:w-auto snap-start"
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
                  <button className="absolute right-3 top-3 md:right-4 md:top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary shadow-lg">
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
                  </button>
                  <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 text-white">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
