import Image from "next/image";

const columns = [
  {
    title: "Our Equipments",
    items: [
      "Tony Marshall",
      "Annie Pacheco",
      "Vernon Francis",
      "Terry Martinez",
      "Penny Norman",
      "Mabel Shaw",
      "Brad Schwartz",
    ],
  },
  {
    title: "Our Services",
    items: [
      "Tony Marshall",
      "Annie Pacheco",
      "Vernon Francis",
      "Terry Martinez",
      "Penny Norman",
      "Mabel Shaw",
      "Brad Schwartz",
    ],
  }
];

const PhoneIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7.5 2H6A2.5 2.5 0 0 0 3.5 4.5C3.5 13.06 10.94 20.5 19.5 20.5A2.5 2.5 0 0 0 22 18v-1.5a1.5 1.5 0 0 0-1.5-1.5h-3.03a1.5 1.5 0 0 0-1.42.99l-.44 1.32c-.13.4-.53.65-.95.6a12.42 12.42 0 0 1-7.66-4.73 12.42 12.42 0 0 1-2.1-4.8c-.05-.42.2-.82.6-.95l1.32-.44A1.5 1.5 0 0 0 8.5 6.53V3.5A1.5 1.5 0 0 0 7.5 2Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
    <path d="m6 7 6 5 6-5" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 9.5C19 13.09 15.3 17.22 13.25 19.22a1.75 1.75 0 0 1-2.5 0C8.7 17.22 5 13.09 5 9.5a7 7 0 0 1 14 0Z" />
    <circle cx="12" cy="9.5" r="2.25" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-white px-6 sm:px-8 lg:px-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl xl:max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-4 text-left">
          
          <div className="space-y-6 lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt="Platinum Track logo"
              width={160}
              height={60}
              className="h-16 w-auto md:h-20"
              priority
            />

          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            <h2 className="text-lg md:text-2xl font-semibold leading-snug  col-span-4">
              Platinum Track Rail Services Has A Management Team With Over 40 Years Of Experience And Spanning Three Generations.
            </h2>



            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-bold text-xl mb-4">{column.title}</h3>
                <ul className="space-y-2 text-base text-white/90">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}



            <div className="space-y-6  col-span-4 md:col-span-2">
              <h3 className="font-bold text-xl">Contact Us</h3>

              <div className="flex items-start space-x-4">
                <PhoneIcon />
                <div>
                  <p className="font-semibold text-white">Call Us 24/7</p>
                  <a href="tel:+19057727272" className="text-gray-300 text-base hover:text-white transition">
                    +1 905 772-7272
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MailIcon />
                <div>
                  <p className="font-semibold text-white">Send Us Mail</p>
                  <a
                    href="mailto:jviolin@platinumtrack.ca"
                    className="text-gray-300 text-base hover:text-white transition"
                  >
                    jviolin@platinumtrack.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <LocationIcon />
                <div>
                  <p className="font-semibold text-white">851 Haldimand</p>
                  <p className="text-gray-300 text-base">
                    Hwy#56 RR#1, York, ON
                    <br />
                    N0A 1R0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex mt-16">

          {/* <button className="border border-white px-8 py-3 rounded-full text-base font-medium hover:bg-white hover:text-[#0E0F47] transition">
            Accessibility Policy
          </button> */}
        </div>
      </div>
    </footer>
  );
}
