import type { Metadata } from 'next'
import { PhotoGallery } from '@/components/photo-gallery'

export const metadata: Metadata = {
  title: 'Photography',
  description:
    'A personal photography practice that feeds Charlie Milner’s eye for composition and visual storytelling.',
}

export default function PhotographyPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--page-accent)]">
          Stills
        </p>
        <h1 className="mt-5 text-balance font-serif text-5xl leading-[1] tracking-tight sm:text-7xl">
          Photography
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          A small collection of photos I&apos;ve taken in my free time, where I explore
          visual storytelling as a creative outlet.
        </p>
      </header>

      <div className="mt-14">
        <PhotoGallery />
      </div>
    </div>
  )
}
