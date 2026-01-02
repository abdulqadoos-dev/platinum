import Image from "next/image";

import { equipmentCards } from "@/data/equipments";

export default function Equipments() {
  return (
    <section id="equipments" className="bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 text-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] items-start">
          <div className="flex flex-col w-full">
            <div className="flex items-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary font-extrabold uppercase">Our</h1>
              <p className="bg-secondary text-white px-2 uppercase font-bold text-xs lg:text-xl leading-none py-1 lg:mt-1">
                Full Rail <br className="hidden sm:block" /> Management
              </p>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary font-extrabold uppercase">Equipments</h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-none font-semibold text-secondary capitalize">
              We provide a variety of construction services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {equipmentCards.map((equipment) => (
              <div key={equipment.slug} className="relative h-[220px] rounded-2xl overflow-hidden group">
                <Image
                  src={equipment.image}
                  alt={equipment.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                    <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                      {equipment.title}
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
