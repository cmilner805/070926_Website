import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { MediaFrame } from '@/components/media-frame'
import { cn } from '@/lib/utils'

/*
  Cinematic project tile.
  The title / year overlay fades in on hover (desktop) and is always shown
  in a bottom caption bar on touch devices, so mobile users never miss it.
*/
export function ProjectCard({
  project,
  priority,
  className,
}: {
  project: Project
  priority?: boolean
  className?: string
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        'group block focus:outline-none',
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
          {project.cover ? (
            <img
              src={project.cover || '/placeholder.svg'}
              alt={`${project.title} film still`}
              className="h-full w-full object-cover"
              loading={priority ? 'eager' : 'lazy'}
            />
          ) : (
            <MediaFrame index={project.index} label={project.category} large={priority} />
          )}
        </div>

        {/* Hover overlay (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden bg-background/55 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <h3 className="font-serif text-2xl text-[var(--page-accent,var(--foreground))]">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.year}</p>
            {project.clientWork && (
              <span className="mt-1 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                Client work
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Always-visible caption (primary on mobile, supporting on desktop) */}
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-base text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
        </div>
        <span className="shrink-0 font-serif text-sm italic text-muted-foreground">
          {project.year}
        </span>
      </div>
    </Link>
  )
}
