"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import EquipmentModal from "@/components/EquipmentModal";
import { equipmentCards } from "@/data/equipments";
import { equipmentImageMeta } from "@/data/equipmentImageMeta";

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
  if (slug === "track-stabalizer") {
    return "sm:col-span-2 sm:row-span-2 lg:col-span-3 xl:col-span-4";
  }
  if (slug === "hirail-truck") {
    return "sm:col-span-2 sm:row-span-2";
  }
  if (slug === "hirail-grapple-truck") {
    return "sm:row-span-2";
  }
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

export default function EquipmentGallery() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const equipmentBySlug = useMemo(
    () => new Map(equipmentCards.map((equipment) => [equipment.slug, equipment])),
    []
  );

  const activeEquipment = activeSlug ? equipmentBySlug.get(activeSlug) ?? null : null;
  const imageMeta = equipmentImageMeta as Record<string, { orientation: "portrait" | "landscape" }>;
  const orientation = activeEquipment
    ? imageMeta[activeEquipment.slug]?.orientation ?? "landscape"
    : "landscape";

  useEffect(() => {
    const target = searchParams.get("item");
    if (target && equipmentBySlug.has(target)) {
      setActiveSlug(target);
    }
  }, [searchParams, equipmentBySlug]);

  return (
    <>
      <div className="grid auto-rows-[160px] grid-flow-dense gap-8 sm:auto-rows-[180px] sm:grid-cols-2 lg:auto-rows-[200px] lg:grid-cols-3 xl:grid-cols-4">
        {equipmentCards.map((equipment) => (
          <button
            key={equipment.slug}
            type="button"
            onClick={() => setActiveSlug(equipment.slug)}
            className={`relative col-span-1 row-span-1 min-h-[160px] overflow-hidden rounded-2xl text-left group ${getCardClass(
              equipment.slug
            )}`}
          >
            <Image
              src={equipment.image}
              alt={equipment.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/70">
              {equipment.title}
            </div>
          </button>
        ))}
      </div>

      {activeEquipment ? (
        <EquipmentModal
          equipment={activeEquipment}
          orientation={orientation}
          isOpen={Boolean(activeEquipment)}
          onClose={() => setActiveSlug(null)}
        />
      ) : null}
    </>
  );
}
