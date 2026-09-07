'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8"
        >
          <Link
            href="/"
            className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-foreground transition-opacity hover:opacity-70"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-7">
              {nav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'relative text-[0.8rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground',
                        active && 'text-foreground',
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          'absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300',
                          active && 'scale-x-100',
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <div className="flex items-center gap-4">
              <SocialIconLink href={siteConfig.linkedin} icon="/icons/linkedin.svg" label="LinkedIn" />
              <SocialIconLink href={siteConfig.youtube} icon="/icons/youtube.svg" label="YouTube" />
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/*
        Mobile menu lives outside <header> on purpose: the header uses
        backdrop-blur, which creates a containing block for fixed-position
        descendants. Nesting this fixed panel inside it would size the panel
        against the 64px header instead of the viewport, collapsing it to a
        sliver and letting page content show through underneath.
      */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-background px-5 pb-10 pt-6 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block border-b border-border/60 py-5 font-serif text-3xl text-muted-foreground transition-colors',
                      active && 'text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-6">
            <SocialIconLink href={siteConfig.linkedin} icon="/icons/linkedin.svg" label="LinkedIn" large />
            <SocialIconLink href={siteConfig.youtube} icon="/icons/youtube.svg" label="YouTube" large />
          </div>
        </div>
      )}
    </>
  )
}

function SocialIconLink({
  href,
  icon,
  label,
  large,
}: {
  href: string
  icon: string
  label: string
  large?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center justify-center opacity-80 transition-opacity hover:opacity-100"
    >
      <img
        src={icon || '/placeholder.svg'}
        alt=""
        className={cn('transition-transform duration-300 group-hover:scale-110', large ? 'h-6 w-6' : 'h-4 w-4')}
      />
      <span className="sr-only">{label}</span>
    </a>
  )
}
