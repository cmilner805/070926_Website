import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LockViewport } from '@/components/lock-viewport'

export default function HomePage() {
  return (
    <>
      {/* Locks to one viewport height with no scroll on desktop; mobile scrolls normally. */}
      <LockViewport minWidth={1024} />

      {/* Hero */}
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:overflow-hidden lg:py-0">
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--page-accent)]">
            UK Film &amp; Video Editing
          </p>
          <h1 className="mt-6 text-balance font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl md:text-[8.5rem]">
            Charlie Milner
          </h1>
          <p className="mt-4 font-sans text-xl uppercase tracking-[0.3em] text-muted-foreground sm:text-2xl">
            Offline Editor
          </p>
          <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Hi, I&apos;m Charlie, an offline editor who loves shaping stories in the
            cut. I work through structure, pacing and rhythm to find the film within
            the footage, across documentary, narrative film and client work.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm uppercase tracking-[0.18em] text-foreground transition-opacity hover:opacity-70"
            >
              View My Work
              <ArrowRight className="h-4 w-4 text-[var(--page-accent)] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              About Me
            </Link>
            <Link
              href="/photography"
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Photography
            </Link>
            <Link
              href="/contact"
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Graduation photo, vertically centered alongside the hero copy */}
        <figure className="z-0 block shrink-0 self-center overflow-hidden">
          <img
            src="/about/graduation.jpg"
            alt="Charlie Milner at his university graduation"
            className="aspect-[3/4] w-40 object-cover sm:w-48 md:w-52 lg:w-56 xl:w-60"
          />
        </figure>
      </section>
    </>
  )
}
