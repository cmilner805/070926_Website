import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Charlie Milner is an emerging Offline Editor and First Class BA (Hons) Film Production graduate from Arts University Bournemouth, Avid Media Composer Certified.',
}


type Certification = {
  title: string
  issuer: string
  issued: string
  expires?: string
  credentialId?: string
  badge: string
  certificateHref: string
}

const certifications: Certification[] = [
  {
    title: 'Media Composer Specialist',
    issuer: 'Avid',
    issued: 'Feb 2025',
    badge: '/certifications/avid-specialist-badge.png',
    certificateHref: '/certifications/avid-certificate.jpg',
  },
  {
    title: 'Film and TV Online Safety Passport Course',
    issuer: 'The Mark Milsome Foundation, delivered by ProTrainings Europe Ltd',
    issued: 'Jan 2026',
    expires: 'Jan 2031',
    credentialId: '176894228488183',
    badge: '/certifications/protrainings-logo.jpg',
    certificateHref: '/certifications/mark-milsome-foundation-certificate.jpg',
  },
  {
    title: 'Introduction to Sustainability for the Screen Industries',
    issuer: 'ScreenSkills',
    issued: 'Jun 2026',
    expires: 'Jun 2027',
    credentialId: 'HTKPALF',
    badge: '/certifications/screenskills-logo.jpg',
    certificateHref: '/certifications/screenskills-sustainability-certificate.jpg',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--page-accent)]">
          Editor
        </p>
        <h1 className="mt-5 text-balance font-serif text-5xl leading-[1] tracking-tight sm:text-7xl">
          About Me
        </h1>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Portrait + supporting images */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <div className="overflow-hidden">
              <img
                src="/about/editing-suite.jpg"
                alt="Charlie Milner editing at a dual-monitor Avid Media Composer suite"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <img
                  src="/about/night-camera.jpg"
                  alt="Charlie Milner on a night shoot beside a camera on a tripod"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/about/photographing.jpg"
                  alt="Charlie Milner photographing outdoors with a compact film camera"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/90">
            <p className="text-pretty">
              Hi, I&apos;m Charlie, a First Class BA (Hons) Film Production graduate from
              Arts University Bournemouth (AUB), specialising in Editing &amp;
              Post-Production. I&apos;m an emerging Offline Editor with a particular
              interest in storytelling, pacing and the creative possibilities of
              post-production.
            </p>
            <p className="text-pretty">
              What excites me about editing is the transformative power of the cut. A
              change in rhythm, structure or timing can completely reshape a story&apos;s
              meaning, amplify an emotion or alter the way an audience understands a
              character. I see editing not simply as a technical process, but as one of
              the most creative stages of filmmaking.
            </p>
            <p className="text-pretty">
              I&apos;m Avid Media Composer Certified, which is my primary editing
              software, and I&apos;m also proficient in Adobe Premiere Pro and DaVinci
              Resolve. My work spans documentary, narrative film and client projects,
              with a particular interest in finding the story within the material and
              shaping it through structure, pacing and tone.
            </p>
            <p className="text-pretty">
              I&apos;m also a keen photographer. Working with still images has helped
              develop my eye for composition, framing and visual storytelling, which
              naturally feeds back into my approach to moving image.
            </p>
            <p className="text-pretty">
              I&apos;m always interested in collaborating with filmmakers, production
              companies and other creatives on projects where editing can help shape and
              strengthen the story.
            </p>
            <p className="text-pretty">
              Feel free to explore my{' '}
              <Link href="/work" className="text-foreground underline underline-offset-4 hover:opacity-70">
                work
              </Link>
              , and if you&apos;d like to discuss a project or potential collaboration,
              you can get in touch via the{' '}
              <Link href="/contact" className="text-foreground underline underline-offset-4 hover:opacity-70">
                Contact Me
              </Link>{' '}
              page.
            </p>
          </div>

          {/* Certification */}
          <div className="mt-14 pt-8">
            <h2 className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Certification
            </h2>
            <div className="mt-6 space-y-8">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.certificateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 sm:gap-6"
                >
                  <img
                    src={cert.badge || '/placeholder.svg'}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-sm object-contain ring-1 ring-transparent transition-all duration-300 group-hover:scale-105 group-hover:ring-[var(--page-accent)]/50 sm:h-16 sm:w-16"
                  />
                  <span>
                    <span className="block text-base text-foreground/90 sm:text-lg">
                      {cert.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {cert.issuer}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground/70">
                      Issued {cert.issued}
                      {cert.expires ? ` · Expires ${cert.expires}` : ''}
                      {cert.credentialId ? ` · Credential ID ${cert.credentialId}` : ''}
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground underline underline-offset-4 transition-colors group-hover:text-[var(--page-accent)]">
                      View certificate
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
