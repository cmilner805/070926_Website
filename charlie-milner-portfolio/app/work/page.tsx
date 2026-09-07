import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/project-card'

export const metadata: Metadata = {
  title: 'My Work',
  description:
    'A selection of documentary, narrative and client films edited by Charlie Milner.',
}

export default function WorkPage() {
  const [lead, ...rest] = projects

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--page-accent)]">
          Selected Projects
        </p>
        <h1 className="mt-5 text-balance font-serif text-5xl leading-[1] tracking-tight sm:text-7xl">
          My Work
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          Documentary, narrative and client films where editing helped find and shape
          the story. Hover a project to see its title and year, or open it to watch the
          film and read about the edit.
        </p>
      </header>

      {/* Lead project, full-width, strongest prominence */}
      <div className="mt-14">
        <ProjectCard project={lead} priority />
      </div>

      {/* Remaining projects in an editorial two-column rhythm */}
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-14 sm:mt-10 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
