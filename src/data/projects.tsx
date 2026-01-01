import type { ReactNode } from "react";

export type ProjectCard = {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  detailContent: ReactNode;
  tags?: string[];
  statusLabel?: string;
  statusValue?: string;
  metrics?: Array<{ label: string; value: string }>;
  feedLabel?: string;
};

export const projectItems: ProjectCard[] = [
  {
    title: "Mainline Rehab - CP Rail",
    date: "September 12, 2024",
    description:
      "Ballast renewal and surfacing across 25 km to restore ride quality, drainage, and uptime for unit trains.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    slug: "mainline-rehab-cp-rail",
    tags: ["Mainline", "Rehab", "Ballast"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Distance", value: "25 km" },
      { label: "Drainage", value: "Restored" },
      { label: "Uptime", value: "Improved" },
    ],
    feedLabel: "Site Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Ballast renewal and track surfacing across a 25 km mainline segment to restore ride quality, drainage performance, and operational uptime for unit trains.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Ballast excavation, replacement, and profiling.</li>
            <li>Track surfacing and alignment corrections.</li>
            <li>Drainage improvements and shoulder shaping.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Outcome</h3>
          <p className="mt-2">
            Improved ride quality and drainage, reduced maintenance cycles, and restored reliable unit train operations.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Yard Expansion Phase 2",
    date: "August 04, 2024",
    description:
      "New turnouts, ladder tracks, and signal upgrades to increase yard capacity and reduce dwell time.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    slug: "yard-expansion-phase-2",
    tags: ["Yard", "Turnouts", "Signals"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Capacity", value: "Expanded" },
      { label: "Signals", value: "Upgraded" },
      { label: "Dwell", value: "Reduced" },
    ],
    feedLabel: "Yard Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          New turnouts, ladder tracks, and signal upgrades to increase yard capacity and reduce dwell time during peak operations.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Turnout installation and ladder track extensions.</li>
            <li>Signal system upgrades and testing.</li>
            <li>Track geometry alignment and surfacing.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Outcome</h3>
          <p className="mt-2">
            Increased yard throughput, improved operational flexibility, and reduced train dwell times.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Bridge Approaches Stabilization",
    date: "July 18, 2024",
    description:
      "Track realignment and approach stabilization on a critical river crossing to improve safety and reliability.",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=900&q=80",
    slug: "bridge-approaches-stabilization",
    tags: ["Bridge", "Stabilization", "Alignment"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Safety", value: "Improved" },
      { label: "Alignment", value: "Corrected" },
      { label: "Stability", value: "Reinforced" },
    ],
    feedLabel: "Bridge Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Track realignment and approach stabilization on a critical river crossing to improve safety and long-term reliability.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Approach grading and stabilization.</li>
            <li>Track alignment corrections and surfacing.</li>
            <li>Drainage improvements near bridge abutments.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Industrial Spur Construction",
    date: "June 22, 2024",
    description:
      "Design-build of a new industrial spur with grading, drainage, and surfacing to connect a client site to the mainline.",
    image:
      "https://images.unsplash.com/photo-1529429617124-aee969ab6f00?auto=format&fit=crop&w=900&q=80",
    slug: "industrial-spur-construction",
    tags: ["Design-Build", "Spur", "Grading"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Design", value: "Delivered" },
      { label: "Grading", value: "Complete" },
      { label: "Connection", value: "Mainline" },
    ],
    feedLabel: "Build Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Design-build of a new industrial spur with grading, drainage, and surfacing to connect a client facility to the mainline.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Site grading, drainage, and base preparation.</li>
            <li>Track installation and surfacing.</li>
            <li>Turnout integration and commissioning.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Turnout Rehabilitation Program",
    date: "May 10, 2024",
    description:
      "Rehab and re-timbering of high-traffic turnouts to improve reliability and switching performance.",
    image:
      "https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=900&q=80",
    slug: "turnout-rehabilitation-program",
    tags: ["Turnouts", "Re-timber", "Switching"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Reliability", value: "Upgraded" },
      { label: "Switching", value: "Improved" },
      { label: "Service", value: "Minimized" },
    ],
    feedLabel: "Turnout Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Rehab and re-timbering of high-traffic turnouts to improve reliability and switching performance.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Component replacement and re-timbering.</li>
            <li>Switch alignment and geometry checks.</li>
            <li>Operational testing and commissioning.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Crossing Rehabilitation - Hwy 6",
    date: "April 03, 2024",
    description:
      "Removal and replacement of panels with new underlayment and ballast for a smoother roadway interface.",
    image:
      "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=900&q=80",
    slug: "crossing-rehabilitation-hwy-6",
    tags: ["Crossing", "Panels", "Roadway"],
    statusLabel: "Project Status",
    statusValue: "Completed",
    metrics: [
      { label: "Surface", value: "Smoothed" },
      { label: "Panels", value: "Replaced" },
      { label: "Impact", value: "Minimized" },
    ],
    feedLabel: "Crossing Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Removal and replacement of crossing panels with new underlayment and ballast for a smoother roadway interface.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Panel removal and subgrade prep.</li>
            <li>New underlayment and ballast placement.</li>
            <li>Surface restoration and alignment.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Emergency Response Drill",
    date: "March 21, 2024",
    description:
      "Full-scale response simulation with rerailing, site clearance, and remediation coordination.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    slug: "emergency-response-drill",
    tags: ["Emergency", "Rerailing", "Remediation"],
    statusLabel: "Exercise Status",
    statusValue: "Completed",
    metrics: [
      { label: "Response", value: "Validated" },
      { label: "Clearance", value: "Tested" },
      { label: "Safety", value: "Verified" },
    ],
    feedLabel: "Response Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Full-scale response simulation with rerailing, site clearance, and remediation coordination to validate readiness.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Rerailing drills with heavy equipment.</li>
            <li>Site clearance and hazard control.</li>
            <li>Environmental response coordination.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Material Distribution Upgrade",
    date: "February 14, 2024",
    description:
      "Optimized rail and tie delivery workflow with improved staging and pickup scheduling.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    slug: "material-distribution-upgrade",
    tags: ["Logistics", "Delivery", "Pickup"],
    statusLabel: "Program Status",
    statusValue: "Completed",
    metrics: [
      { label: "Delivery", value: "Optimized" },
      { label: "Pickup", value: "Scheduled" },
      { label: "Staging", value: "Improved" },
    ],
    feedLabel: "Logistics Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Optimized rail and tie delivery workflow with improved staging and pickup scheduling to minimize downtime.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Delivery route planning and staging.</li>
            <li>Pickup scheduling for scrap and OTM.</li>
            <li>Operational workflow improvements.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Track Inspection Corridor 12",
    date: "January 28, 2024",
    description:
      "TIG-qualified visual inspection with detailed reporting and maintenance recommendations.",
    image:
      "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=900&q=80",
    slug: "track-inspection-corridor-12",
    tags: ["Inspection", "TIG Qualified", "Reporting"],
    statusLabel: "Inspection",
    statusValue: "Completed",
    metrics: [
      { label: "Findings", value: "Logged" },
      { label: "Reports", value: "Delivered" },
      { label: "Plan", value: "Issued" },
    ],
    feedLabel: "Inspection Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          TIG-qualified visual inspection with detailed reporting and maintenance recommendations for Corridor 12.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Visual inspection and geometry checks.</li>
            <li>Written reports with cost estimates.</li>
            <li>Maintenance plan recommendations.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Track Removal - Industrial Loop",
    date: "December 08, 2023",
    description:
      "Removal of abandoned track with salvage recovery and roadway restoration.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    slug: "track-removal-industrial-loop",
    tags: ["Removal", "Salvage", "Restoration"],
    statusLabel: "Removal",
    statusValue: "Completed",
    metrics: [
      { label: "Salvage", value: "Recovered" },
      { label: "Disposal", value: "Managed" },
      { label: "Roadway", value: "Restored" },
    ],
    feedLabel: "Removal Feed",
    detailContent: (
      <div className="space-y-5 text-base text-secondary">
        <p>
          Removal of abandoned track with salvage recovery and roadway restoration to return the site to usable condition.
        </p>
        <div>
          <h3 className="text-xl font-bold text-primary">Scope</h3>
          <ul className="mt-2 list-disc pl-5 space-y-2">
            <li>Track removal and salvage sorting.</li>
            <li>Disposal of unusable materials.</li>
            <li>Crossing removal and road restoration.</li>
          </ul>
        </div>
      </div>
    ),
  },
];
