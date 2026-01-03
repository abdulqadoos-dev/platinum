import type { ReactNode } from "react";

export type ProjectCard = {
  title: string;
  date: string;
  description: string;
  image: string;
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
    image: "/projects/ONTC North Bay.jpg",
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
          <h3 className="text-xl font-bold text-primary">Outcome</h3>
          <p className="mt-2">
            100% of scheduled work completed with additional tasks delivered across the three-year program.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "CN Rail MSA 2025 Program",
    date: "October 04, 2025",
    description:
      "Multi-crew support program across Canada covering undercutting, surfacing, welding, crossings, and more.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
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
          CN Rail MSA contract with multiple divisions/regions for 2025, delivering on-demand crews and equipment across the network.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Undercutting, tie/rail gangs, and joint elimination.</li>
            <li>Thermite welding, surfacing consist, and crossing installs.</li>
            <li>Material distribution, snow clearing, and mentorship for CN teams.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Metrolinx ROW Maintenance & Rail Program",
    date: "September 18, 2024",
    description:
      "GTA-wide state-of-good-repair and rail programs with coordinated shutdown windows.",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=900&q=80",
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
          Metrolinx contracts for ROW maintenance, state-of-good-repair, and rail programs across 2023–2025.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Crossing rehab, rail and tie replacement, and fencing.</li>
            <li>Track protection, EFB welding, undercutting, and inspections.</li>
            <li>Work delivered during daily windows and planned 72-hour shutdowns.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Outcome</h3>
          <p className="mt-2">
            All programs completed on time and within budget with coordinated road closures.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Glencore Canada – KIDD Tie Program",
    date: "June 02, 2024",
    description:
      "Annual tie replacement program with surfacing equipment support for 2023–2025.",
    image:
      "https://images.unsplash.com/photo-1529429617124-aee969ab6f00?auto=format&fit=crop&w=900&q=80",
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
        <p>
          Annual railroad tie replacement program at Glencore KIDD with surfacing equipment support.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Tie replacement across scheduled work blocks.</li>
            <li>Surfacing equipment supplied during program.</li>
            <li>Local vendor and accommodation spend to support the region.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "CPKC Railway – Western Canada Surfacing",
    date: "February 14, 2024",
    description:
      "Mark IV surfacing set and regulator operators, plus CP operator training.",
    image:
      "https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=900&q=80",
    slug: "cpkc-western-canada-surfacing",
    tags: ["Surfacing", "Training", "Western Canada"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Value", value: "$900K" },
      { label: "Years", value: "2024–2025" },
      { label: "Region", value: "AB/BC" },
    ],
    feedLabel: "Western Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Western Canada program supplying Mark IV tamping and regulator operators with training for CP crews.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Surfacing set with operators (Mark IV and regulator).</li>
            <li>Training for CP operators on Mark IV tampers.</li>
            <li>Program managed by the Crossfield, Alberta team.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "CN Rail BC Turnout Upgrades",
    date: "December 08, 2023",
    description:
      "Upgrade of two mainline turnouts with local contractor support in BC.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
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
        <p>
          Upgraded two mainline #12 136RE turnouts for CN Rail in Chetwynd and Fort St. John, BC.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Removal of existing turnouts and installation of new #12 136RE units.</li>
            <li>Local contractor support for grading, turnout moves, and ballast placement.</li>
            <li>Completed on time and within budgeted value.</li>
          </ul>
        </div>
      </div>
    ),
  },
];
