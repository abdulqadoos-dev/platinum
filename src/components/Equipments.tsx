import Image from "next/image";
import Link from "next/link";

export default function Equipments() {
  return (
    <section id="equipments" className="bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 text-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 items-start grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 lg:col-span-5 ">
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl  text-primary font-extrabold uppercase">Our</h1>
                <p className="bg-secondary text-white px-2 uppercase   font-bold text-xs lg:text-xl leading-none py-1 lg:mt-1">
                  Full Rail <br className="hidden sm:block" /> Management
                </p>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary font-extrabold uppercase">Equipments</h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-none  font-semibold text-secondary capitalize">
                We provide a variety of construction services.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link href="/equipment/float-truck" className="relative h-[200px] rounded-2xl overflow-hidden group block">
              <Image
                src="/equipments/Float-Truck.jpg"
                alt="Float Truck"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-6 right-6">
                <div className="flex items-center justify-center px-4 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-sm sm:text-base capitalize">
                    Float Truck
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <Link href="/equipment/jr-tamper" className="relative h-[200px] rounded-2xl overflow-hidden group block">
              <Image
                src="/equipments/jr-tamper.jpg"
                alt="JR Tamper"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-6 right-6">
                <div className="flex items-center justify-center px-4 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-sm sm:text-base capitalize">
                    JR Tamper
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            <Link href="/equipment/mark-iv" className="relative h-[228px] rounded-2xl overflow-hidden group block">
              <Image
                src="/equipments/Pics-Mark-IV.jpg"
                alt="Pics-Mark IV"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Pics-Mark IV
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/equipment/track-stabalizer" className="relative h-[228px] rounded-2xl overflow-hidden group block">
              <Image
                src="/equipments/Stabilizer.jpg"
                alt="Stabilizer"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Stabilizer
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full md:w-3/5 flex gap-6">
            <Link href="/equipment/hirail-truck" className="relative h-[480px] flex-1 rounded-2xl overflow-hidden group block">
              <Image
                src="/equipments/cn-rail.jpg"
                alt="CN Rail"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    CN Rail
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/equipment/ballast-regulator"
              className="relative h-[480px] flex-1 rounded-2xl overflow-hidden hidden lg:block group"
            >
              <Image
                src="/equipments/Mat-Distr-PU.jpg"
                alt="Mat Distr & PU"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Mat Distr & PU
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary transition hover:border-secondary hover:text-primary"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
