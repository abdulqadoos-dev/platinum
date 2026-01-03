import Footer from "@/components/Footer";
import EquipmentGallery from "@/components/EquipmentGallery";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

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
        <Suspense fallback={null}>
          <EquipmentGallery />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}
