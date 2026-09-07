'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav, siteConfig } from '@/lib/site'

export function SiteFooter() {
  const pathname = usePathname()

  // The home page gets a single, minimal footer line instead of the full
  // sitemap footer used everywhere else.
  if (pathname === '/') {
    return (
      <footer className="border-t border-border/60">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 px-5 py-4 text-center text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-2 sm:px-8">
          <p>First Class BA (Hons) Film Production</p>
          <span aria-hidden className="hidden text-muted-foreground/50 sm:inline">
            ·
          </span>
          <p>Avid Media Composer Certified</p>
          <span aria-hidden className="hidden text-muted-foreground/50 sm:inline">
            ·
          </span>
          <p className="whitespace-nowrap text-muted-foreground">{siteConfig.email}</p>
          <div className="flex items-center gap-3">
            <FooterSocialIcon href={siteConfig.linkedin} icon="/icons/linkedin.svg" label="LinkedIn" />
            <FooterSocialIcon href={siteConfig.youtube} icon="/icons/youtube.svg" label="YouTube" />
          </div>
          <span aria-hidden className="hidden text-muted-foreground/50 sm:inline">
            ·
          </span>
          <p className="order-last whitespace-nowrap sm:order-none">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto w-full px-5 py-6 lg:px-12 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-xl text-foreground">{siteConfig.name}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {siteConfig.role}. Available for new projects and collaborations.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{siteConfig.email}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-1 sm:flex-col sm:gap-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground/70">Follow</p>
              <div className="mt-1.5 flex items-center gap-4">
                <FooterSocialIcon href={siteConfig.linkedin} icon="/icons/linkedin.svg" label="LinkedIn" />
                <FooterSocialIcon href={siteConfig.youtube} icon="/icons/youtube.svg" label="YouTube" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-border/60 pt-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>First Class BA (Hons) Film Production · Avid Media Composer Certified</p>
        </div>
      </div>
    </footer>
  )
}

function FooterSocialIcon({
  href,
  icon,
  label,
}: {
  href: string
  icon: string
  label: string
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
        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="sr-only">{label}</span>
    </a>
  )
}
