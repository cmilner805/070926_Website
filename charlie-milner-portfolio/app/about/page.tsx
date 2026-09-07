import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Charlie Milner is an emerging Offline Editor and First Class BA (Hons) Film Production graduate from Arts University Bournemouth, Avid Media Composer Certified.',
}

type Certification = { title: string; issuer: string; issued: string; expires?: string; credentialId?: string; badge: string; certificateHref: string }
const certifications: Certification[] = [
  { title: 'Media Composer Specialist', issuer: 'Avid', issued: 'Feb 2025', badge: '/certifications/avid-specialist-badge.png', certificateHref: '/certifications/avid-certificate.jpg' },
  { title: 'Film and TV Online Safety Passport Course', issuer: 'The Mark Milsome Foundation, delivered by ProTrainings Europe Ltd', issued: 'Jan 2026', expires: 'Jan 2031', credentialId: '176894228488183', badge: '/certifications/protrainings-logo.jpg', certificateHref: '/certifications/mark-milsome-foundation-certificate.jpg' },
  { title: 'Introduction to Sustainability for the Screen Industries', issuer: 'ScreenSkills', issued: 'Jun 2026', expires: 'Jun 2027', credentialId: 'HTKPALF', badge: '/certifications/screenskills-logo.jpg', certificateHref: '/certifications/screenskills-sustainability-certificate.jpg' },
]

export default function AboutPage() {
  return (
    <div className="mx-auto w-full px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
      <header>
        <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-8xl">About Me</h1>
      </header>
      <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5"><div className="lg:sticky lg:top-24"><img src="/about/editing-suite.jpg" alt="Charlie Milner editing at a dual-monitor Avid Media Composer suite" className="aspect-[4/5] w-full object-cover" /><div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground"><span>Post-production</span><span>Avid / Premiere / Resolve</span></div></div></div>
        <div className="lg:col-span-7 lg:pt-2"><div className="max-w-2xl space-y-7 text-lg leading-relaxed text-foreground/90 sm:text-xl">
          <p>Hi, I&apos;m Charlie, a First Class BA (Hons) Film Production graduate from Arts University Bournemouth, specialising in Editing &amp; Post-Production. I&apos;m an emerging Offline Editor with a particular interest in storytelling, pacing and the creative possibilities of post-production.</p>
          <p>What excites me about editing is the transformative power of the cut. A change in rhythm, structure or timing can completely reshape a story&apos;s meaning, amplify an emotion or alter the way an audience understands a character.</p>
          <p>I&apos;m Avid Media Composer Certified, and I&apos;m also proficient in <strong className="font-medium text-foreground">Adobe Premiere Pro and DaVinci Resolve</strong>. My work spans documentary, narrative film and client projects, with a particular interest in finding the story within the material.</p>
          <p>I&apos;m also a keen photographer. Working with still images has helped develop my eye for composition, framing and visual storytelling, which naturally feeds back into my approach to moving image.</p>
          <p>I&apos;m always interested in collaborating with filmmakers, production companies and other creatives. Explore my <Link href="/work" className="underline underline-offset-4 hover:text-[var(--page-accent)]">work</Link>, or get in touch via the <Link href="/contact" className="underline underline-offset-4 hover:text-[var(--page-accent)]">Contact Me</Link> page.</p>
        </div>
        <div className="mt-16 border-t border-border/70 pt-6"><h2 className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Certification</h2><div className="mt-2 divide-y divide-border/70">{certifications.map((cert) => <a key={cert.title} href={cert.certificateHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-5 first:pt-5"><img src={cert.badge} alt="" className="h-6 w-6 shrink-0 object-contain opacity-90" /><span className="flex-1"><span className="block text-base text-foreground/90">{cert.title}</span><span className="mt-1 block text-sm text-muted-foreground">{cert.issuer} · Issued {cert.issued}{cert.expires ? ` · Expires ${cert.expires}` : ''}{cert.credentialId ? ` · Credential ID ${cert.credentialId}` : ''}</span></span><span className="shrink-0 text-xs uppercase tracking-[0.14em] text-muted-foreground underline underline-offset-4 group-hover:text-[var(--page-accent)]">View certificate</span></a>)}</div></div>
        </div>
      </div>
    </div>
  )
}
