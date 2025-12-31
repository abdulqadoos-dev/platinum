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
      <main className="bg-white text-secondary">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-secondary/70">
              <Link href="/#services" className="hover:text-primary transition">
                Services
              </Link>
              <span className="text-secondary/40">/</span>
              <span className="text-primary">{service.title}</span>
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <h1 className="mt-3 text-3xl font-extrabold uppercase text-primary sm:text-4xl md:text-5xl">
                  {service.title}
                </h1>
                <div className="mt-6 rounded-2xl border border-secondary/10 bg-secondary/5 p-6">
                  {service.detailContent}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-full border border-primary/20 lg:block" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
                <div className="mt-6 rounded-2xl border border-secondary/10 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-secondary/70">Need more info?</p>
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
