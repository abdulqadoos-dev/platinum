import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { equipmentCards } from "@/data/equipments";

const sizeClasses = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
];

const tallSlugs = new Set([
  "railavator",
  "mark-iv",
  "spike-puller",
  "hirail-truck",
  "spiker",
]);

const getCardClass = (slug: string) => {
  if (slug === "hi-rail-excavator") {
    return "sm:col-span-2 sm:row-span-2";
  }
  if (tallSlugs.has(slug)) {
    return "sm:row-span-2";
  }
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return sizeClasses[hash % sizeClasses.length];
};

export default function EquipmentPage() {
  return (
    <div className="bg-gray-100 text-secondary">
      <Navbar />
      <section className="relative overflow-hidden border-b border-secondary/10 bg-white/80">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
              <span>Equipment Fleet</span>
              <span className="h-px w-12 bg-secondary/20" />
              <span className="text-primary">Rail Ready</span>
            </div>
            <h1 className="text-4xl font-black uppercase text-secondary sm:text-5xl lg:text-6xl">
              Full Rail <span className="text-primary">Equipment</span> Inventory
            </h1>
            <p className="max-w-2xl text-base text-secondary/80">
              Explore the complete Platinum Track equipment lineup with a bold, modular layout that keeps every asset visible and easy to scan.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[160px] grid-flow-dense gap-8 sm:auto-rows-[180px] sm:grid-cols-2 lg:auto-rows-[200px] lg:grid-cols-3 xl:grid-cols-4">
          {equipmentCards.map((equipment) => (
            <Link
              key={equipment.slug}
              href={`/equipment/${equipment.slug}`}
              className={`relative col-span-1 row-span-1 min-h-[160px] overflow-hidden rounded-2xl group ${
                equipment.slug === "track-stabalizer"
                  ? "sm:col-span-2 sm:row-span-2"
                  : getCardClass(equipment.slug)
              }`}
            >
              <Image
                src={equipment.image}
                alt={equipment.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/35 border border-white/80 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    {equipment.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
