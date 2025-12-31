import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { serviceCards } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const normalize = (value: string) => decodeURIComponent(value).trim().toLowerCase();
const slugify = (value: string) =>
  normalize(value)
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const getService = (slug: string) => {
  const normalizedSlug = normalize(slug);
  return serviceCards.find((service) => {
    return normalize(service.slug) === normalizedSlug || slugify(service.title) === normalizedSlug;
  });
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return {
      title: "Service Details | Platinum Track Services",
    };
  }
  return {
    title: `${service.title} | Platinum Track Services`,
    description: `Learn more about ${service.title} services from Platinum Track Services.`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white text-secondary">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,31,39,0.08),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(120deg,rgba(168,31,39,0.08),transparent_45%),radial-gradient(circle_at_15%_20%,rgba(18,19,21,0.06),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(18,19,21,0.05),transparent_40%)]" />
        <section className="relative py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">
              <Link href="/#services" className="hover:text-white transition">
                Services
              </Link>
              <span className="text-secondary/40">/</span>
              <span className="text-primary">{service.title}</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/50">
              <span className="rounded-full border border-secondary/10 bg-white/70 px-4 py-1">Service Module</span>
              <span className="rounded-full border border-secondary/10 bg-white/70 px-4 py-1">North America</span>
              <span className="rounded-full border border-secondary/10 bg-white/70 px-4 py-1">CORTM Certified</span>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-6">
                <div className="relative">
                  <h1 className="text-3xl font-extrabold uppercase text-primary sm:text-4xl md:text-5xl">
                    {service.title}
                  </h1>
                  <div className="mt-4 h-[2px] w-20 bg-primary" />
                </div>
                <div className="rounded-2xl border border-secondary/10 bg-white/80 p-6 shadow-[0_10px_40px_rgba(168,31,39,0.12)] backdrop-blur">
                  {service.detailContent}
                </div>
                <div className="rounded-2xl border border-secondary/10 bg-white/80 p-5">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
                    <span>Status</span>
                    <span className="h-[1px] w-16 bg-secondary/10" />
                    <span className="text-primary">Operational</span>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Safety", value: "High" },
                      { label: "Availability", value: "24/7" },
                      { label: "Coverage", value: "Nationwide" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-secondary/10 bg-white p-4 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary/50">{item.label}</p>
                        <p className="mt-2 text-lg font-semibold text-secondary">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative space-y-6">
                <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-full border border-primary/40 lg:block" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(18,19,21,0.2)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/70">
                    Live Feed
                  </div>
                </div>
                <div className="rounded-2xl border border-secondary/10 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">Need more info?</p>
                  <p className="mt-2 text-base font-semibold text-secondary">
                    Contact our team for scheduling, availability, and scope.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
