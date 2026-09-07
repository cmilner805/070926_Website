import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getProject, projects } from '@/lib/projects'
import { VideoEmbed } from '@/components/video-embed'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: project.title,
    description: project.blurb,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/work"
        className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to My Work
      </Link>

      {/* Title block */}
      <header className="mt-8 border-b border-border/60 pb-8">
        {project.clientWork && (
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--page-accent)]">
            Professional Client Work
          </p>
        )}
        <h1 className="text-balance font-serif text-4xl leading-[1.02] tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-muted-foreground">
          <span>{project.year}</span>
          <Dot />
          <span>{project.category}</span>
          <Dot />
          <span>{project.role}</span>
        </p>
      </header>

      {/* Video */}
      <div className="mt-8">
        <VideoEmbed
          youtubeId={project.youtubeId}
          note={project.videoNote}
          title={project.title}
          index={project.index}
          poster={project.cover}
        />
      </div>

      {/* Description */}
      <section className="mx-auto mt-12 max-w-2xl">
        <h2 className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          About the project
        </h2>
        <div className="mt-6 space-y-6">
          {project.description.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty text-lg leading-relaxed text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Next project */}
      <nav className="mt-20 border-t border-border/60 pt-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Next project
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-flex items-center gap-3 text-right"
          >
            <span className="font-serif text-2xl italic transition-opacity group-hover:opacity-70 sm:text-3xl">
              {nextProject.title}
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>
    </article>
  )
}

function Dot() {
  return <span className="text-muted-foreground/40">·</span>
}
