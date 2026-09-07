import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { MediaFrame } from '@/components/media-frame'
import { cn } from '@/lib/utils'

export function ProjectCard({ project, priority, className }: { project: Project; priority?: boolean; className?: string }) {
  return (
    <Link href={`/work/${project.slug}`} className={cn('group block focus:outline-none', className)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-card">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.025]">
          {project.cover ? <img src={project.cover} alt={`${project.title} film still`} className="h-full w-full object-cover" loading={priority ? 'eager' : 'lazy'} /> : <MediaFrame index={project.index} label={project.category} large={priority} />}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-5 border-t border-border/70 pt-4">
        <div>
          <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
        </div>
        <span className="shrink-0 font-serif text-base italic text-muted-foreground">{project.year}</span>
      </div>
    </Link>
  )
}
