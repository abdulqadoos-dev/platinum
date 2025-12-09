import Image from "next/image";


export default function Equipments() {

  return (
    <section id="equipments" className="bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 text-secondary">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-5 items-start grid-cols-1 md:grid-cols-12">

          <div className="col-span-12 lg:col-span-5 ">

            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl  text-primary font-extrabold uppercase">Our</h1>
                <p className="bg-secondary text-white px-2 uppercase   font-bold text-xs lg:text-xl leading-none py-1 lg:mt-1">Full Rail <br className="hidden sm:block" /> Management</p>  
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary font-extrabold uppercase">Equipments</h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-none  font-semibold text-secondary capitalize">
                We provide a variety of construction services.
              </p>

            </div>

        
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">

            <div className="relative h-[200px]  rounded-2xl overflow-hidden">
              {/* Background Image */}
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Main Equipment Image */}
              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={300}
                  height={200}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Glassmorphic Badge - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <div className="flex items-center justify-center px-4 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-sm sm:text-base capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="relative h-[200px]  rounded-2xl overflow-hidden">
              {/* Background Image */}
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Main Equipment Image */}
              <div className="absolute inset-0 flex items-center justify-center group">
                <Image
                  src="/equipments/equipment-1.png"
                  alt="Bulldozer"
                  width={300}
                  height={200}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Glassmorphic Badge - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <div className="flex items-center justify-center px-4 py-2 bg-black/25 border border-white/90 backdrop-blur-sm rounded-lg">
                  <p className="text-white font-semibold text-sm sm:text-base capitalize">
                    Bulldozer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* Left Side - 40% width - 2 images stacked vertically */}
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            {/* Image 1 */}
            <div className="relative h-[228px] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
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

            {/* Image 2 */}
            <div className="relative h-[228px] rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
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

          {/* Right Side - 60% width - 2 images side by side */}
          <div className="w-full md:w-3/5 flex gap-6">
            {/* Image 3 */}
            <div className="relative h-[480px] flex-1 rounded-2xl overflow-hidden">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
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

            {/* Image 4 */}
            <div className="relative h-[480px] flex-1 rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/equipments/equipment-1-background.png"
                alt="Equipment Background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
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