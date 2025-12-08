import Image from "next/image";

export default function Equipments() {
  return (
    <section id="equipments" className="bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 text-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 items-start md:items-end grid-cols-1 md:grid-cols-12">
         
          <div className="md:col-span-5 md:pr-14 relative">
            <p className="text-4xl sm:text-5xl lg:text-7xl leading-tight sm:leading-[1.05] lg:leading-[1.1] font-black text-primary mb-4 uppercase relative">
              Our
              <span className="inline-block w-full max-w-xs sm:max-w-sm mb-2 px-3 leading-5 py-1 bg-secondary font-semibold text-sm sm:text-base text-white md:w-auto md:mb-0 md:absolute md:top-2 md:left-0">
                Full Rail <br /> Management
              </span>
              <br />
              Equipments
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl leading-7 font-semibold text-secondary capitalize">
              We provide a variety of construction services.
            </p>
            
          </div>

          <div className="md:col-span-4">
            <div className="relative aspect-[16/9] sm:aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 60vw, 35vw"
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={300}
                  height={200}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                <div className="flex items-center justify-center px-3 sm:px-4 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="relative aspect-[16/9] sm:aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={300}
                  height={200}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                <div className="flex items-center justify-center px-3 sm:px-4 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mt-8 sm:mt-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="relative aspect-[4/3] sm:aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={250}
                  height={150}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={250}
                  height={150}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:col-span-3">
            <div className="relative aspect-[3/4] sm:aspect-[2/3] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={250}
                  height={150}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[2/3] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={250}
                  height={150}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center justify-center px-3 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-xs sm:text-sm capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
