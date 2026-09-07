import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-12 sm:px-8 lg:min-h-[calc(100dvh-9rem)] lg:justify-center lg:pb-20 lg:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--page-accent)]">
            UK Film &amp; Video Editing
          </p>
          <h1 className="mt-6 text-balance font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.88] tracking-[-0.06em]">
            Charlie
            <br />
            Milner
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--page-accent)]" />
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground sm:text-base">
              Offline Editor
            </p>
          </div>
          <p className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I shape documentary, narrative and client films through structure, pacing
            and rhythm — finding the story within the footage.
          </p>
          <nav className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" aria-label="Homepage">
            <Link href="/work" className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm uppercase tracking-[0.18em]">
              View my work
              <ArrowRight className="h-4 w-4 text-[var(--page-accent)] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">About me</Link>
            <Link href="/contact" className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
          </nav>
        </div>

        <figure className="relative lg:justify-self-end">
          <div className="absolute -left-6 top-8 h-px w-20 bg-[var(--page-accent)] sm:-left-10" />
          <img
            src="/about/graduation.jpg"
            alt="Charlie Milner at his university graduation"
            className="aspect-[4/5] w-full max-w-md object-cover object-center lg:w-[27rem]"
          />
          <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>Editor / Storyteller</span>
            <span>Based in the UK</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
