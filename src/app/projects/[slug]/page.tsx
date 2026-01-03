import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MotionContainer, MotionImage, MotionItem } from "@/components/ServiceDetailMotion";
import { projectItems } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const normalize = (value: string) => decodeURIComponent(value).trim().toLowerCase();
const slugify = (value: string) =>
  normalize(value)
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const getProject = (slug: string) => {
  const normalizedSlug = normalize(slug);
  return projectItems.find((project) => {
    return normalize(project.slug) === normalizedSlug || slugify(project.title) === normalizedSlug;
  });
};

const tileClasses = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
];

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {
      title: "Project Details | Platinum Track Services",
    };
  }
  return {
    title: `${project.title} | Platinum Track Services`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const galleryImages =
    project.images?.filter((src) => src !== project.image) ??
    (project.image ? [project.image] : []);
  const gallerySources = galleryImages.length ? galleryImages : [project.image];

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white text-secondary">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,31,39,0.08),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(120deg,rgba(168,31,39,0.08),transparent_45%),radial-gradient(circle_at_15%_20%,rgba(18,19,21,0.06),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(18,19,21,0.05),transparent_40%)]" />
        <section className="relative py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">
              <Link href="/#projects" className="hover:text-secondary transition">
                Projects
              </Link>
              <span className="text-secondary/40">/</span>
              <span className="text-primary">{project.title}</span>
            </div>
            {project.tags?.length ? (
              <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/50">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-secondary/10 bg-white/70 px-4 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            <MotionContainer className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <MotionItem className="lg:col-span-2">
                <div className="relative">
                  <h1 className="text-3xl font-extrabold uppercase text-primary sm:text-4xl md:text-5xl">
                    {project.title}
                  </h1>
                  <div className="mt-4 h-[2px] w-20 bg-primary" />
                </div>
              </MotionItem>
              <div className="space-y-6">
                <MotionItem>
                  <div className="rounded-2xl border border-secondary/10 bg-white/80 p-6 shadow-[0_10px_40px_rgba(168,31,39,0.12)] backdrop-blur">
                    {project.detailContent}
                  </div>
                </MotionItem>
                <MotionItem>
                  <div className="rounded-2xl border border-secondary/10 bg-white/80 p-5">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
                      <span>{project.statusLabel ?? "Project Status"}</span>
                      <span className="h-[1px] w-16 bg-secondary/10" />
                      <span className="text-primary">{project.statusValue ?? "Active"}</span>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {(project.metrics ?? [
                        { label: "Phase", value: "Active" },
                        { label: "Safety", value: "High" },
                        { label: "Coverage", value: "Nationwide" },
                      ]).map((item) => (
                        <div key={item.label} className="rounded-xl bg-white p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-secondary/50">{item.label}</p>
                          <p className="mt-2 text-lg font-semibold text-secondary">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionItem>
                <MotionItem>
                  <div className="rounded-2xl border border-secondary/10 bg-white/80 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">Project Date</p>
                    <p className="mt-2 text-base font-semibold text-secondary">{project.date}</p>
                  </div>
                </MotionItem>
              </div>
              <div className="space-y-6">
                <MotionImage>
                  <div className="grid auto-rows-[160px] grid-flow-dense grid-cols-1 gap-4 sm:auto-rows-[180px] sm:grid-cols-2 lg:auto-rows-[200px]">
                    {gallerySources.map((src, index) => {
                      const total = gallerySources.length;
                      const isLast = index === gallerySources.length - 1;
                      const tileClass =
                        total === 1
                          ? "sm:col-span-2 sm:row-span-2"
                          : total <= 3
                            ? isLast
                              ? "sm:col-span-2 sm:row-span-2"
                              : "sm:col-span-1 sm:row-span-1"
                            : isLast
                              ? "sm:col-span-2 sm:row-span-2"
                              : tileClasses[index % tileClasses.length];
                      return (
                        <div
                          key={`${src}-${index}`}
                          className={`relative overflow-hidden rounded-2xl ${tileClass}`}
                        >
                          <Image
                            src={src}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            className="object-cover"
                          />
                          {index === 0 ? (
                            <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/70">
                              {project.feedLabel ?? "Project Feed"}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
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
