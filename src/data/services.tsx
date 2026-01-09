import type { ReactNode } from "react";

export type ServiceFeature = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ServiceCard = {
  title: string;
  image: string;
  slug: string;
  detailContent: ReactNode;
  tags?: string[];
  statusLabel?: string;
  statusValue?: string;
  metrics?: Array<{ label: string; value: string }>;
  feedLabel?: string;
};

export const serviceFeatures: ServiceFeature[] = [
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

export const serviceCards: ServiceCard[] = [
  {
    title: "Gauging Gang",
    image: "/services/pexels-brett-sayles-981282-1.jpg",
    slug: "gauging-gang",
    tags: ["Gauge Control", "Track Geometry", "Inspection Ready"],
    statusLabel: "Crew Status",
    statusValue: "Field Active",
    metrics: [
      { label: "Gauge", value: "Standard" },
      { label: "Inspection", value: "Routine" },
      { label: "Documentation", value: "Logged" },
    ],
    feedLabel: "Gauge Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          A Railway Gauging Gang is a specialized crew responsible for maintaining and ensuring the correct gauge of railway tracks. The gauge refers to the distance between the inner sides of the two rails, which is critical for safe and efficient train operations.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Key Responsibilities</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Gauge Measurement: Regularly measuring the distance between the rails to ensure it adheres to established standards.</li>
            <li>Adjustment and Realignment: Correcting gauge issues by repositioning ties, adding ballast, or shifting rails.</li>
            <li>Track Inspection: Identifying areas where the gauge may have shifted due to settling, weather, or wear.</li>
            <li>Reporting and Documentation: Recording measurements and adjustments to inform maintenance plans.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Skills and Equipment</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Specialized tools like gauge rods, leveling instruments, and track wrenches.</li>
            <li>Safety training for working near active tracks.</li>
          </ul>
        </div>
        <p>
          The Gauging Gang plays a vital role in ensuring tracks remain in optimal condition for safe train operations.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Rail / Tie Gang",
    image: "/services/Tie-Inserter.jpg",
    slug: "rail-tie-gang",
    tags: ["Tie Renewal", "Rail Replacement", "Ballast Work"],
    statusLabel: "Crew Status",
    statusValue: "Scheduled",
    metrics: [
      { label: "Rails", value: "Replacement" },
      { label: "Ties", value: "Installation" },
      { label: "Alignment", value: "Calibrated" },
    ],
    feedLabel: "Track Ops",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          A Rail/Tie Gang installs, replaces, and repairs rail tracks and ties to ensure stability, safety, and longevity of the rail infrastructure.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Key Responsibilities</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Rail Replacement: Removing damaged rail sections and installing new ones.</li>
            <li>Tie Installation and Replacement: Providing proper support for rails.</li>
            <li>Track Alignment: Securing rails for smooth operations and reduced wear.</li>
            <li>Ballast Maintenance: Managing ballast for drainage and stability.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Skills and Equipment</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Specialized tools like rail saws, tie extractors, and ballast regulators.</li>
            <li>Safety protocols for working near active tracks.</li>
          </ul>
        </div>
        <p>
          Rail/Tie Gangs are essential for keeping rail networks safe, reliable, and efficient.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Lift Gang",
    image: "/services/Lift-Gang.jpg",
    slug: "lift-gang",
    tags: ["Heavy Lift", "Crane Ops", "Switch Handling"],
    statusLabel: "Lift Status",
    statusValue: "On Site",
    metrics: [
      { label: "Lifts", value: "Coordinated" },
      { label: "Safety", value: "High" },
      { label: "Precision", value: "Tight" },
    ],
    feedLabel: "Lift Cam",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Railway lift gang service refers to a specialized team responsible for lifting and placing heavy railway components during maintenance and construction operations.
        </p>
        <p>
          The lift gang uses cranes and hydraulic lifts to safely elevate and position track sections, switches, and infrastructure elements while coordinating with other crews.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Key Focus Areas</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Precision and Safety: Accurate lifts that protect personnel and equipment.</li>
            <li>Collaboration: Close coordination with other maintenance and construction teams.</li>
            <li>Adaptability: Adjusting to terrain and environmental challenges on site.</li>
          </ul>
        </div>
        <p>
          Lift gang services play a vital role in maintaining the integrity and reliability of railway infrastructure.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Emergency Response",
    image: "/services/CN-Rail-2.jpg",
    slug: "emergency-response",
    tags: ["Emergency Response", "1-Hour Dispatch", "E-Rail Safe"],
    statusLabel: "Dispatch",
    statusValue: "Ready",
    metrics: [
      { label: "Response", value: "1 Hour" },
      { label: "Availability", value: "24/7" },
      { label: "Coverage", value: "Canada Wide" },
    ],
    feedLabel: "Response Desk",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Our experienced team is ready to respond within one hour of your call, providing emergency rail response services across Canada.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Rail Car and Locomotive Services: Re-railing, dismantling, and recycling of rail cars, as well as mainline track clearing.</li>
          <li>Environmental Remediation: In the event of a derailment, we handle the removal and cleanup of contaminants from soil, groundwater, and sediment, ensuring public and environmental safety. Our expertise spans excavation, transportation, treatment, and disposal of contaminated materials, with a track record of successful remediation projects nationwide.</li>
          <li>Load Handling Solutions: Our "e-rail safe certified" crews specialize in transferring various loads, including steel, bulk, and wet commodities, to and from railcars and trucks. We expertly manage load transfers, securement, and the transport of damaged or unsafe railcars, adapting to the challenges of extreme temperatures and rugged terrain.</li>
        </ul>
        <p>
          With our extensive experience, we deliver safe and timely solutions, even in remote locations, addressing unique situations like shifted or overloaded cars with agility and innovation.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Track Protection / Flagging",
    image: "/services/Track-Protection-2.jpg",
    slug: "track-protection-flagging",
    tags: ["CROR Flagging", "Track Protection", "Safety Zone"],
    statusLabel: "Protection",
    statusValue: "Active",
    metrics: [
      { label: "Compliance", value: "CROR" },
      { label: "Coverage", value: "Nationwide" },
      { label: "Clearance", value: "Secured" },
    ],
    feedLabel: "Protection Log",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Professional certified track protection services safeguard personnel and capital assets while keeping operations on schedule.
        </p>
        <p>
          Highly trained CROR qualified flagging technicians provide oversight and coordination to mitigate hazards for people and equipment.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>CROR qualified flagging technicians for compliance and safety.</li>
          <li>Protection for personnel and machinery working near tracks.</li>
          <li>Custom solutions for diverse track protection environments.</li>
        </ul>
        <p>We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
      </div>
    ),
  },
  {
    title: "Flash Butt & Thermite Welding",
    image: "/services/Flash-Butt-Welding.jpg",
    slug: "flash-butt-thermite-welding",
    tags: ["Welding Plant", "Field Thermite", "Rail Joints"],
    statusLabel: "Weld Status",
    statusValue: "Operational",
    metrics: [
      { label: "Process", value: "Flash/Thm" },
      { label: "Quality", value: "High" },
      { label: "Setting", value: "Plant/Field" },
    ],
    feedLabel: "Weld Monitor",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <div>
          <h3 className="text-xl font-bold text-primary">Flash Butt Welding</h3>
          <p className="mt-2">
            Flash butt welding is a specialized technique predominantly utilized in rail welding plants. This method involves welding small parts together through high-voltage resistance, where components are aligned end-to-end and fused using high current density. During the welding process, long gauge rails, typically around 100 meters, are placed in a dedicated machine and heated based on the thermal effects of the current. Once the rail reaches a plastic state, it is rapidly extruded, ensuring a robust joint. The primary advantage of flash butt welding is that it creates a bond with a strength equivalent to that of the base metal, resulting in a smooth surface that can be easily polished. However, its application is limited to factory settings, making it less versatile for on-site welding.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Utilizes high-voltage resistance to fuse components end-to-end with high current density.</li>
            <li>Produces strong welds equivalent to the base metal strength, ideal for long gauge rails.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Thermite Welding</h3>
          <p className="mt-2">
            Alumino-thermic welding, commonly known as thermite welding, utilizes the heat generated from an exothermic reaction to achieve coalescence between metals. The term "thermite" refers to the reaction involving metal oxides and reducing agents, where a mixture of low-formation heat metal oxides and high-formation heat metallic reducing agents creates a significant amount of heat during oxidation. This heat is harnessed to melt and fuse the two rail sections together. Suitable for outdoor construction sites, this method involves a redox reaction between iron and aluminum, producing molten iron that effectively welds the rails. Compared to flash butt welding, thermite welding is faster and offers stable quality; however, it requires a larger initial investment in equipment and substantial power. While pneumatic welding has lower upfront costs and shorter welding times, it has strict requirements for joint preparation and can be challenging for ultra-long rails or continuous track sections. Overall, thermite welding is relatively simple and requires less operator expertise, but its welding quality may not match that of contact or gas pressure welding.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Relies on an exothermic reaction between metal oxides and aluminum to generate heat for welding.</li>
            <li>Suitable for outdoor applications, offering faster welding speeds and stable quality.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Crossing Rehabilitation",
    image: "/services/crossing-rehab.jpg",
    slug: "crossing-rehabilitation",
    tags: ["Crossing Rehab", "Panel Install", "Roadway Restore"],
    statusLabel: "Site Status",
    statusValue: "In Progress",
    metrics: [
      { label: "Foundation", value: "Prepared" },
      { label: "Panel", value: "Aligned" },
      { label: "Surface", value: "Finished" },
    ],
    feedLabel: "Crossing View",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          The old crossing panel and trackbed materials have been meticulously removed, revealing a freshly excavated foundation ready for revitalization. The site is now prepared for the installation of a new asphalt underlayment layer, providing a robust base that ensures durability and smoothness. Above this, a pre-compacted ballast layer is carefully laid, offering optimal support and stability for the new track panel. The gleaming new track panel is then positioned with precision, its sturdy construction promising enhanced safety and performance. Finally, the installation of a modern crossing surface completes the transformation, blending functionality with a seamless aesthetic that elevates both the infrastructure and the surrounding environment.
        </p>
        <p>
          Our advanced technology enables us to deliver a wide range of materials, including rails and ties, effectively supporting your maintenance operations. Our team's expertise guarantees accurate and timely distribution, minimizing disruptions and enhancing operational efficiency.
        </p>
        <p>
          In addition to distribution, we offer specialized pickup services for scrap rail, used ties, and other track materials (OTM). Our streamlined pickup process is designed to facilitate the efficient removal and transportation of these materials, helping you maintain a tidy and organized work environment.
        </p>
        <p>
          At Platinum Track Services, we are dedicated to delivering exceptional service while upholding the highest standards of safety and compliance. Trust us to manage your material needs with professionalism and care, ensuring your track maintenance projects are completed with the utmost reliability and efficiency.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Material Distribution & Pickup",
    image: "/services/Mat-Distr-2.jpg",
    slug: "material-distribution-pickup",
    tags: ["Material Logistics", "Delivery", "Pickup"],
    statusLabel: "Logistics",
    statusValue: "On Schedule",
    metrics: [
      { label: "Delivery", value: "Rails/Ties" },
      { label: "Pickup", value: "Scrap/OTM" },
      { label: "Timing", value: "Coordinated" },
    ],
    feedLabel: "Logistics Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Platinum Track Services excels in the distribution and pickup of railroad materials, delivering essential rails and ties to mainline and service tracks.
        </p>
        <p>
          We provide specialized pickup services for scrap rail, used ties, and other track materials (OTM), keeping worksites organized and efficient.
        </p>
        <p>
          Our advanced equipment and qualified personnel ensure accurate, timely distribution while minimizing disruptions.
        </p>
        <p>
          At Platinum Track Services, we are dedicated to delivering exceptional service while upholding the highest standards of safety and compliance. Trust us to manage your material needs with professionalism and care, ensuring your track maintenance projects are completed with the utmost reliability and efficiency.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Railway Construction & Maintenance",
    image: "/services/AdobeStock_153303690.jpeg",
    slug: "railway-construction-maintenance",
    tags: ["Rail Construction", "Site Planning", "Turnouts"],
    statusLabel: "Project Status",
    statusValue: "Mobilized",
    metrics: [
      { label: "Planning", value: "Detailed" },
      { label: "Install", value: "Certified" },
      { label: "Timeline", value: "Managed" },
    ],
    feedLabel: "Site Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Platinum Track delivers comprehensive railway construction services for private, public, and government clients.
        </p>
        <p>
          Our scope covers site planning, excavation and grading, and installation of tracks, diamonds, and turnouts by certified personnel.
        </p>
        <p>
          We prioritize planning, execution, and timelines to deliver reliable results for new rail lines and specialized installations.
        </p>
        <p>
          Whether you are undertaking a new rail line for a major infrastructure project or a specialized track installation, Platinum Track is dedicated to delivering superior results and exceptional service, making us the ideal choice for your railway construction needs.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We have the experience and expertise to deliver a variety of building designs for a wide range of clients. We are used to working on complex building projects with challenging programmes and high customer expectations. Our team works closely with our clients and professional advisors to understand the requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Rentals",
    image: "/services/Roto-Dump.jpg",
    slug: "rentals",
    tags: ["Equipment Rentals", "Short/Long Term", "Hirail Fleet"],
    statusLabel: "Availability",
    statusValue: "Book Now",
    metrics: [
      { label: "Fleet", value: "Specialized" },
      { label: "Term", value: "Flexible" },
      { label: "Support", value: "On Call" },
    ],
    feedLabel: "Fleet Status",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Platinum Track offers a comprehensive range of equipment rentals tailored for rail gangs, tie gangs, and servicing gangs.
        </p>
        <p>
          Our inventory includes specialized machinery and vehicles, including hirail pickups and vans, with flexible short and long-term options.
        </p>
        <p>
          For availability, pricing, and scheduling, contact our office for a seamless rental experience.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Track Inspection",
    image: "/services/railroad-track-inspection-working-site.webp",
    slug: "track-inspection",
    tags: ["TIG Qualified", "Visual Inspection", "Reports"],
    statusLabel: "Inspection",
    statusValue: "Scheduled",
    metrics: [
      { label: "Inspection", value: "Visual" },
      { label: "Reporting", value: "Action Plan" },
      { label: "Standards", value: "Compliant" },
    ],
    feedLabel: "Inspection Log",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Track inspection is a crucial process for maintaining railway safety and standards as rail loads and speeds increase.
        </p>
        <p>
          Our TIG-qualified inspectors conduct thorough visual inspections and provide detailed reports with action plans and cost estimates.
        </p>
        <p>
          We also offer tailored maintenance programs to prevent issues before they become significant problems.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We have the experience and expertise to deliver a variety of building designs for a wide range of clients. We are used to working on complex building projects with challenging programmes and high customer expectations. Our team works closely with our clients and professional advisors to understand the requirements.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Track Removal",
    image: "/services/Project_20240710_0009-1.jpeg",
    slug: "track-removal",
    tags: ["Track Removal", "Material Recovery", "Road Crossing"],
    statusLabel: "Removal",
    statusValue: "Active",
    metrics: [
      { label: "Recovery", value: "Salvage" },
      { label: "Disposal", value: "Managed" },
      { label: "Restoration", value: "Roadway" },
    ],
    feedLabel: "Removal View",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Platinum Track Services specializes in the efficient removal of abandoned tracks, salvaging reusable materials and disposing of unusable components.
        </p>
        <p>
          We also dismantle road crossings and restore roadways to their original condition with minimal disruption.
        </p>
        <p>
          Our approach maximizes resource recovery while minimizing environmental impact.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We possess the experience and expertise to execute a variety of railway track removal projects for diverse clients. Our team is adept at handling complex operations with tight timelines and high customer expectations. We collaborate closely with our clients and professional advisors to fully understand their specific needs and requirements.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Turnouts",
    image: "/services/Project_20221012_0002-1.jpeg",
    slug: "turnouts",
    tags: ["Turnout Install", "Rehabilitation", "Switching"],
    statusLabel: "Turnout Status",
    statusValue: "Maintained",
    metrics: [
      { label: "Reliability", value: "High" },
      { label: "Rehab", value: "Ongoing" },
      { label: "Alignment", value: "Precise" },
    ],
    feedLabel: "Switchboard",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Platinum Track offers comprehensive services for the installation and rehabilitation of turnouts. Our expertise ensures that turnouts--critical components for track switching and rail operations--are installed with precision and rehabilitated to meet the highest standards. We handle every aspect of the process, from initial setup to ongoing maintenance, ensuring optimal performance and reliability. Trust Platinum Track to deliver quality solutions for your turnout needs, enhancing the efficiency and safety of your rail infrastructure.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Our Services Include</h3>
          <p className="mt-2">
            We have the experience and expertise to deliver diverse turnout designs for various clients. Skilled in managing complex projects with tight schedules and high expectations, our team collaborates closely with clients and professional advisors to fully understand their needs.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Working Process</h3>
          <p className="mt-2">We have a track record of delivering significant extension and expansion projects for the rail industry.</p>
          <p className="mt-2">We are proud to have our Occupational Health and Safety Management System CORTM Certified.</p>
        </div>
      </div>
    ),
  },
];
