import type { Metadata } from 'next'
import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { LockViewport } from '@/components/lock-viewport'

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    'Get in touch with Charlie Milner about editing projects and collaborations.',
}

export default function ContactPage() {
  return (
    <>
      {/* Locks to one viewport height with no scroll, at every breakpoint. */}
      <LockViewport />

      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-5 py-10 sm:px-8">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--page-accent)]">
          Contact
        </p>
        <h1 className="mt-4 text-balance font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
          Let&apos;s work together.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          If you&apos;re a director, producer, production company, filmmaker or client with
          a project where the edit can help shape the story, I&apos;d love to hear from you.
          The best place to start is an email.
        </p>

        <div className="mt-8 border-t border-border/60 sm:mt-10">
          <ContactRow
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
            icon={<Mail className="h-4 w-4" />}
          />
          <ContactRow
            label="LinkedIn"
            value="Connect on LinkedIn"
            href={siteConfig.linkedin}
            external
          />
        </div>
      </div>
    </>
  )
}

function ContactRow({
  label,
  value,
  href,
  external,
  icon,
}: {
  label: string
  value: string
  href: string
  external?: boolean
  icon?: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center justify-between gap-4 border-b border-border/60 py-6 transition-colors hover:bg-secondary/40"
    >
      <div className="flex items-baseline gap-4 sm:gap-8">
        <span className="w-20 shrink-0 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:w-28">
          {label}
        </span>
        <span className="font-serif text-2xl italic text-foreground sm:text-3xl">
          {value}
        </span>
      </div>
      <span className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--page-accent)]">
        {external ? <ArrowUpRight className="h-5 w-5" /> : icon}
      </span>
    </a>
  )
}
