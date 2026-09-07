import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <section className="mx-auto flex w-full flex-col px-5 pb-16 pt-12 sm:px-8 lg:min-h-[calc(100dvh-9rem)] lg:justify-center lg:px-12 lg:pb-20 lg:pt-16">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-4">
        <div>
          <h1 className="text-balance font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.9] tracking-[-0.06em]">Charlie<br />Milner</h1>
          <p className="mt-7 text-sm uppercase tracking-[0.25em] text-[var(--page-accent)]">Offline Editor</p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hi, I&apos;m Charlie, a First Class BA (Hons) Film Production graduate from Arts University Bournemouth, specialising in Editing &amp; Post-Production. I&apos;m an emerging Offline Editor with a particular interest in storytelling, pacing and the creative possibilities of post-production.
            <br />
            <br />
            Welcome to my website!
          </p>
          <div className="mt-9">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-background transition-colors duration-300 hover:bg-[var(--page-accent)]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <nav className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3" aria-label="Homepage">
            <Link href="/about" className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">About me</Link>
            <Link href="/contact" className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <figure>
          <img
            src="/images/about-hero-widescreen.jpg"
            alt="Charlie Milner holding a film camera outdoors"
            className="aspect-video w-full object-cover object-center"
          />
        </figure>
      </div>
    </section>
  )
}
