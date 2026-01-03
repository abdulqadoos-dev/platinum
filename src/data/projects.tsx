import type { ReactNode } from "react";

export type ProjectCard = {
  title: string;
  date: string;
  description: string;
  image: string;
  images?: string[];
  slug: string;
  detailContent: ReactNode;
  location?: string;
  contact?: string;
  value?: string;
  tags?: string[];
  statusLabel?: string;
  statusValue?: string;
  metrics?: Array<{ label: string; value: string }>;
  feedLabel?: string;
};

export const projectItems: ProjectCard[] = [
  {
    title: "ONTC North Bay, Ontario",
    date: "November 12, 2025",
    description:
      "Rail and tie installation/surfacing program delivering full scope completion across the ONTC network.",
    location: "North Bay, Ontario",
    contact: "Merick Letourneau",
    value: "+$16,000,000 (2025)",
    image: "/projects/ONTC%20North%20Bay%2C%20Ontario/main.jpg",
    images: [
      "/projects/ONTC%20North%20Bay%2C%20Ontario/main.jpg",
      "/projects/ONTC%20North%20Bay%2C%20Ontario/3.jpg",
      "/projects/ONTC%20North%20Bay%2C%20Ontario/4.jpg",
      "/projects/ONTC%20North%20Bay%2C%20Ontario/5.jpg",
      "/projects/ONTC%20North%20Bay%2C%20Ontario/6.jpg",
      "/projects/ONTC%20North%20Bay%2C%20Ontario/8.jpg",
      "/projects/ONTC%20North%20Bay%2C%20Ontario/9.jpg",
      "/projects/ONTC%20North%20Bay%2C%20Ontario/10.jpg",
    ],
    slug: "ontc-north-bay-rail-tie-program",
    tags: ["Rail", "Tie", "Turnouts"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Rail", value: "72.56 miles" },
      { label: "Ties", value: "185,329" },
      { label: "Turnouts", value: "17 installed" },
    ],
    feedLabel: "Program Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Rail and tie installation/surfacing program (RFP 2023 002) across the ONTC network, including turnouts and large-scale disposal of heritage ties.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Track tie and switch tie replacement.</li>
            <li>Rail upgrades, surfacing, and new turnouts.</li>
            <li>Scrap tie cleanup and disposal (~1,000,000 ties over 3 years).</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Program Notes</h3>
          <p className="mt-2">
            Platinum Track Services Inc is the only railroad contractor to complete 100% of the scheduled work program for this annual program, while also performing additional work required by ONTC.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Local Engagement</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Local fuel &amp; lubricant suppliers</li>
            <li>Motels</li>
            <li>Mobile field mechanic services</li>
            <li>Repair shops</li>
            <li>Parts suppliers</li>
            <li>Local trucking companies</li>
            <li>Local disposal companies</li>
            <li>Restaurants</li>
            <li>Grocery stores</li>
            <li>ONR Train service to Moosonee</li>
            <li>ONR bus service</li>
            <li>Local excavation and grading contractors</li>
            <li>Machine shops</li>
            <li>Communication services</li>
            <li>Safety supply outlets</li>
            <li>Local butchers and farmers</li>
            <li>Local taxi services</li>
            <li>Donated to local food bank services</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Outcome</h3>
          <p className="mt-2">
            100% of scheduled work completed with additional tasks delivered across the three-year program.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "CN Rail – MSA contract 2025",
    date: "October 04, 2025",
    description:
      "Multi-crew support program across Canada covering undercutting, surfacing, welding, crossings, and more.",
    location: "Various locations throughout Canada",
    contact: "Wade Clark, Sean Bacon, Stephane Veillette",
    value: "+$20,000,000",
    image: "/projects/CN%20Rail%20%E2%80%93%20MSA%20contract%202025/main.jpg",
    images: [
      "/projects/CN%20Rail%20%E2%80%93%20MSA%20contract%202025/main.jpg",
      "/projects/CN%20Rail%20%E2%80%93%20MSA%20contract%202025/11.jpg",
      "/projects/CN%20Rail%20%E2%80%93%20MSA%20contract%202025/12.jpg",
      "/projects/CN%20Rail%20%E2%80%93%20MSA%20contract%202025/14.jpg",
      "/projects/CN%20Rail%20%E2%80%93%20MSA%20contract%202025/15.jpg",
      "/projects/CN%20Rail%20%E2%80%93%20MSA%20contract%202025/16.jpg",
    ],
    slug: "cn-rail-msa-2025-program",
    tags: ["Support Crews", "Welding", "Surfacing"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Value", value: "$20M+" },
      { label: "Coverage", value: "Canada-wide" },
      { label: "Crews", value: "Multi-discipline" },
    ],
    feedLabel: "Operations Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Undercutting support crew, general utility support crew, tie gang, rail gang, scrap rail &amp; tie pickup,
          switch installation, material distribution, joint elimination, utility gang, thermite welding gang,
          surfacing consist, crossing installations, equipment rentals, snow clearing crews, and mentoring existing CN employees.
        </p>
        <p>
          Numerous requests throughout the year from different divisions/regions. All requests completed for each region to the satisfaction of management.
        </p>
      </div>
    ),
  },
  {
    title: "METROLINX – Toronto (GTA), Ontario",
    date: "September 18, 2024",
    description:
      "GTA-wide state-of-good-repair and rail programs with coordinated shutdown windows.",
    location: "Toronto (GTA), Ontario",
    contact: "Mario Sgandurra",
    value: "$9,000,000",
    image: "/projects/METROLINX%20%E2%80%93%20Toronto%20(GTA)%2C%20Ontario/main.jpg",
    images: [
      "/projects/METROLINX%20%E2%80%93%20Toronto%20(GTA)%2C%20Ontario/main.jpg",
      "/projects/METROLINX%20%E2%80%93%20Toronto%20(GTA)%2C%20Ontario/17.jpg",
      "/projects/METROLINX%20%E2%80%93%20Toronto%20(GTA)%2C%20Ontario/19.jpg",
    ],
    slug: "metrolinx-row-maintenance-rail-program",
    tags: ["ROW", "Crossings", "Inspections"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Value", value: "$9M" },
      { label: "Years", value: "2023–2025" },
      { label: "Region", value: "GTA" },
    ],
    feedLabel: "System Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Various contracts throughout the Metrolinx system. ROW maintenance program, State of Good Repair,
          and rail program for 2023, 2024, and 2025.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Crossing rehabilitation (local paving contractor for all crossings).</li>
            <li>Rail replacement.</li>
            <li>Tie replacement.</li>
            <li>Anti Trespass pads.</li>
            <li>Fencing installation (local fencing contractor).</li>
            <li>Track protection.</li>
            <li>EFB welding.</li>
            <li>Track undercutting.</li>
            <li>Track inspections.</li>
            <li>Equipment rental.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Delivery</h3>
          <p className="mt-2">
            Work programs accomplished during daily down periods of operations or planned weekend 72-hour shutdown schedules.
            Road closures arranged by Platinum Track with various jurisdictions across the Metrolinx network.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Outcome</h3>
          <p className="mt-2">
            All work programs completed on time and within budgeted values.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Glencore Canada Corporation - KIDD",
    date: "June 02, 2024",
    description:
      "Annual tie replacement program with surfacing equipment support for 2023–2025.",
    location: "Canada",
    contact: "Jeff Romain, Supervisor",
    value: "$1,200,000",
    image: "/projects/Glencore Canada Corporation - KIDD/main.jpg",
    images: ["/projects/Glencore Canada Corporation - KIDD/main.jpg"],
    slug: "glencore-kidd-tie-program",
    tags: ["Tie Gang", "Surfacing", "Mining"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Value", value: "$1.2M" },
      { label: "Years", value: "2023–2025" },
      { label: "Program", value: "Annual" },
    ],
    feedLabel: "Site Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>Annual railroad tie replacement program for 2023, 2024, and 2025.</p>
        <p>All noted replacement ties were completed as requested, on budget and on time.</p>
        <p>Supplied surfacing equipment during the tie replacement program.</p>
        <p>
          Utilized local motels, restaurants, fuel supply outlets, and numerous retail outlets.
        </p>
      </div>
    ),
  },
  {
    title: "CPKC Railway Alberta & British Columbia",
    date: "February 14, 2024",
    description:
      "Mark IV surfacing set and regulator operators, plus CP operator training.",
    location: "Alberta & British Columbia",
    contact: "Paul Purser, Director British Columbia",
    image: "/projects/CPKC%20Railway%20Alberta%20%26%20British%20Columbia/main.jpg",
    images: ["/projects/CPKC%20Railway%20Alberta%20%26%20British%20Columbia/main.jpg"],
    slug: "cpkc-western-canada-surfacing",
    tags: ["Surfacing", "Training", "Western Canada"],
    value: "$900,000",
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Years", value: "2024–2025" },
      { label: "Region", value: "AB/BC" },
      { label: "Program", value: "Surfacing" },
    ],
    feedLabel: "Western Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Supplied surfacing set with operators (Mark IV and regulator) and training for CP operators on Mark IV tampers.
        </p>
        <p>
          This work program was handled by our Western Canada group based in Crossfield, Alberta.
        </p>
        <p>Program included 2024 &amp; 2025.</p>
      </div>
    ),
  },
  {
    title: "CN Rail British Columbia",
    date: "December 08, 2023",
    description:
      "Upgrade of two mainline turnouts with local contractor support in BC.",
    contact: "Ole Quam, Senior Manager",
    value: "$184,356",
    location: "Chetwyn & Fort Saint John, British Columbia",
    image: "/projects/CN Rail British Columbia/main.jpg",
    images: [
      "/projects/CN Rail British Columbia/main.jpg",
      "/projects/CN Rail British Columbia/22.jpg",
    ],
    slug: "cn-rail-bc-turnout-upgrades",
    tags: ["Turnouts", "Mainline", "BC"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Value", value: "$184K" },
      { label: "Turnouts", value: "2 upgraded" },
      { label: "Locations", value: "Chetwynd & Fort St. John" },
    ],
    feedLabel: "BC Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>Upgraded two mainline turnouts for CN Rail.</p>
        <p>Removed existing turnouts and installed new #12 136RE turnouts.</p>
        <p>One located in Chetwyn and the second in Fort Saint John.</p>
        <p>
          Hired a local construction company to assist with grading, moving turnouts, and spreading ballast.
        </p>
        <p>
          Utilized local workforce when available and utilized local motels and restaurants with our out-of-town personnel.
        </p>
        <p>Work completed on time and within budgeted value.</p>
      </div>
    ),
  },
];
