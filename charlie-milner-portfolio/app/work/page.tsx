import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/project-card'

export const metadata: Metadata = {
  title: 'My Work',
  description: 'A selection of documentary, narrative and client films edited by Charlie Milner.',
}

export default function WorkPage() {
  const [lead, ...rest] = projects

  return (
    <div className="mx-auto w-full px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
      <header>
        <h1 className="text-balance font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-8xl">My Work</h1>
      </header>

      <div className="mt-16 lg:mt-24">
        <ProjectCard project={lead} priority className="lg:max-w-[72%]" />
      </div>
      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:mt-28 lg:grid-cols-12 lg:gap-y-28">
        {rest.map((project, index) => (
          <ProjectCard key={project.slug} project={project} className={index % 3 === 0 ? 'lg:col-span-7' : index % 3 === 1 ? 'lg:col-span-5 lg:mt-16' : 'lg:col-span-6'} />
        ))}
      </div>
    </div>
  )
}
