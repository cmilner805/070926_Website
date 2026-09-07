import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LockViewport } from '@/components/lock-viewport'

export default function HomePage() {
  return (
    <>
      {/* Locks to one viewport height with no scroll on desktop; mobile scrolls normally. */}
      <LockViewport minWidth={1024} />

      {/* Hero */}
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:overflow-hidden lg:py-0">
        <div className="min-w-0 flex-1">
          <p className="reveal-up relative z-10 text-xs uppercase tracking-[0.32em] text-[var(--page-accent)]">
            UK Film &amp; Video Editing
          </p>
          <h1 className="reveal-up relative z-10 mt-6 text-balance font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl md:text-[8.5rem]">
            Charlie Milner
          </h1>
          <p
            className="reveal-up relative z-10 mt-4 font-sans text-xl uppercase tracking-[0.3em] text-muted-foreground sm:text-2xl"
            style={{ animationDelay: '80ms' }}
          >
            Offline Editor
          </p>
          <p
            className="reveal-up relative z-10 mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            Hi, I&apos;m Charlie, an offline editor who loves shaping stories in the
            cut. I work through structure, pacing and rhythm to find the film within
            the footage, across documentary, narrative film and client work.
          </p>
          <div
            className="reveal-up relative z-10 mt-10 flex flex-wrap items-center gap-6"
            style={{ animationDelay: '240ms' }}
          >
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
        <figure
          className="reveal-up z-0 block shrink-0 self-center overflow-hidden rounded-md border border-border"
          style={{ animationDelay: '120ms' }}
        >
          <img
            src="/about/graduation.jpg"
            alt="Charlie Milner at his university graduation"
            className="aspect-square h-40 w-40 object-cover sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
          />
        </figure>
      </section>
    </>
  )
}
