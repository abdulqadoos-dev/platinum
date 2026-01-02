"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

import type { EquipmentCard } from "@/data/equipments";

type EquipmentModalProps = {
  equipment: EquipmentCard;
  orientation: "portrait" | "landscape";
  isOpen: boolean;
  onClose: () => void;
};

export default function EquipmentModal({ equipment, orientation, isOpen, onClose }: EquipmentModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const heroImage = equipment.slug === "hirail-truck" || equipment.slug === "ballast-regulator"
    ? equipment.image
    : equipment.detailImage ?? equipment.image;
  const isPortrait = orientation === "portrait";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />
      <motion.div
        className={`relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-white/95 shadow-[0_30px_80px_rgba(168,31,39,0.2)] ${isPortrait ? "max-h-[62vh]" : "max-h-[92vh]"}`}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-secondary/10 bg-white text-secondary hover:text-primary transition cursor-pointer"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18" />
            <path d="M6 6L18 18" />
          </svg>
        </button>
        <div
          className={
            isPortrait
              ? "flex flex-col md:grid md:grid-cols-[0.85fr_1.15fr] md:h-[62vh]"
              : "flex flex-col max-h-[92vh] md:max-h-[92vh]"
          }
        >
          <div className={isPortrait ? "relative min-h-[240px] md:h-full" : "relative aspect-[16/9] max-h-[45vh] shrink-0"}>
            <Image
              src={heroImage}
              alt={equipment.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
              loading="eager"
            />
          </div>
          <div
            className={
              isPortrait
                ? "p-6 sm:p-8 overflow-y-auto scrollbar-slim md:overflow-y-auto md:self-stretch"
                : "p-6 sm:p-8 overflow-y-auto scrollbar-slim max-h-[40vh] sm:max-h-[45vh] md:max-h-none"
            }
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
              <span>Equipment</span>
              <span className="h-px w-12 bg-secondary/20" />
              <span className="text-primary">Details</span>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-extrabold uppercase text-primary">{equipment.title}</h2>
              <div className="mt-4 text-secondary">{equipment.detailContent}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
