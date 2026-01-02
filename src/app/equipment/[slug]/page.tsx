import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MotionContainer, MotionImage, MotionItem } from "@/components/ServiceDetailMotion";
import { equipmentCards } from "@/data/equipments";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type EquipmentPageProps = {
  params: Promise<{ slug: string }>;
};

const normalize = (value: string) => decodeURIComponent(value).trim().toLowerCase();
const slugify = (value: string) =>
  normalize(value)
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const getEquipment = (slug: string) => {
  const normalizedSlug = normalize(slug);
  return equipmentCards.find((equipment) => {
    return normalize(equipment.slug) === normalizedSlug || slugify(equipment.title) === normalizedSlug;
  });
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: EquipmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const equipment = getEquipment(slug);
  if (!equipment) {
    return {
      title: "Equipment Details | Platinum Track Services",
    };
  }
  return {
    title: `${equipment.title} | Platinum Track Services`,
    description: `Learn more about the ${equipment.title} equipment from Platinum Track Services.`,
  };
}

export default async function EquipmentDetailPage({ params }: EquipmentPageProps) {
  const { slug } = await params;
  const equipment = getEquipment(slug);

  if (!equipment) {
    notFound();
  }

  const heroImage = equipment.detailImage ?? equipment.image;

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white text-secondary">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,31,39,0.08),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(120deg,rgba(168,31,39,0.08),transparent_45%),radial-gradient(circle_at_15%_20%,rgba(18,19,21,0.06),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(18,19,21,0.05),transparent_40%)]" />
        <section className="relative py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">
              <Link href="/equipment" className="hover:text-white transition">
                Equipment
              </Link>
              <span className="text-secondary/40">/</span>
              <span className="text-primary">{equipment.title}</span>
            </div>
            <MotionContainer className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <MotionItem className="lg:col-span-2">
                <div className="relative">
                  <h1 className="text-3xl font-extrabold uppercase text-primary sm:text-4xl md:text-5xl">
                    {equipment.title}
                  </h1>
                  <div className="mt-4 h-[2px] w-20 bg-primary" />
                </div>
              </MotionItem>
              <div className="space-y-6">
                <MotionItem>
                  <div className="rounded-2xl border border-secondary/10 bg-white/80 p-6 shadow-[0_10px_40px_rgba(168,31,39,0.12)] backdrop-blur">
                    {equipment.detailContent}
                  </div>
                </MotionItem>
                <MotionItem>
                  <div className="rounded-2xl border border-secondary/10 bg-white/80 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">Fleet Ready</p>
                    <p className="mt-2 text-base font-semibold text-secondary">
                      Ask about availability, logistics, and deployment windows.
                    </p>
                    <Link
                      href="/#contact"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Contact Team
                    </Link>
                  </div>
                </MotionItem>
              </div>
              <div className="space-y-6">
                <MotionImage>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(18,19,21,0.2)]">
                    <Image
                      src={heroImage}
                      alt={equipment.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/70">
                      Equipment
                    </div>
                  </div>
                </MotionImage>
              </div>
            </MotionContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
