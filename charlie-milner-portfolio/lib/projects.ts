export type Project = {
  slug: string
  index: string
  title: string
  year: string
  category: string
  role: string
  // Provide either a YouTube id or a videoNote (shown when the film is not yet embeddable).
  youtubeId?: string
  videoNote?: string
  // Cover still (path under /public). Shown on cards and as the video poster.
  cover?: string
  // Short line used on the homepage / cards.
  blurb: string
  // Full description, one string per paragraph. Kept verbatim from Charlie's copy.
  description: string[]
  lead?: boolean
  clientWork?: boolean
}

export const projects: Project[] = [
  {
    slug: 'the-punchline',
    index: '01',
    title: 'The Punchline',
    year: '2026',
    category: 'Documentary',
    role: 'Editor / DIT / Script Supervisor',
    youtubeId: 'ILEEnGmcfOE',
    cover: '/projects/the-punchline.jpg',
    lead: true,
    blurb:
      'A short documentary on comedy as an outlet for grief, neurodivergence and perseverance.',
    description: [
      'The Punchline is a short documentary about 3WISEMEN, a musical comedy double act formed by Tom Keenan and Bruce Williams. While the film follows their performances, rehearsals and everyday working lives, its deeper focus is on how comedy can become an outlet for grief, neurodivergence, vulnerability and perseverance.',
      'I worked primarily as the editor while also taking on the roles of DIT and script supervisor. These roles became closely connected, as the way I organised, logged and protected the footage directly shaped the edit. The documentary was built from interviews, rehearsals, live performances and observational material, so much of the story had to be discovered in post-production.',
      'The edit focused on balancing the duo’s comic energy with the more vulnerable material beneath it. Performance sequences such as “Banana” and “Musical” became central to the film’s structure, helping the documentary show how humour and grief can sit alongside each other without either feeling forced.',
    ],
  },
  {
    slug: 'mormon',
    index: '02',
    title: 'Mormon',
    year: '2025',
    category: 'Documentary',
    role: 'Editor / Script Supervisor / 2nd Assistant Camera',
    youtubeId: 'Lf5G2CAAVy4',
    cover: '/images/mormon-cover.jpg',
    blurb:
      'An interview-driven documentary shaped from over six hours of footage in seven days.',
    description: [
      'Mormon was the first film that I edited, as part of the Production in Practice unit during my second year at Arts University Bournemouth. It also marked my first experience editing a documentary, which brought with it a unique set of challenges and creative rewards.',
      'Unlike my usual role in post-production, I was involved in Mormon from the start, working on set across the three shoot days as Script Supervisor and 2nd Assistant Camera. This early involvement helped build a stronger connection to the story and gave me a clearer vision when it came to structuring the edit.',
      'The film originally set out to follow two active Mormon missionaries living and serving in the local community. However, after facing access limitations imposed by the church, the project naturally evolved into a more reflective, interview-driven documentary. It focuses on the personal stories and testimonies of church members, while also touching on the Mormon church’s more controversial history.',
      'With over six hours of footage and more than 1.2 TB of data, I had just seven days to shape the material into a cohesive eight-minute film, including credits. It was an intense but collaborative process. I worked closely with the director throughout the entire week, constantly exchanging ideas and building the story together. I also worked alongside the cinematographer throughout the shoot, which allowed us to quickly troubleshoot gaps in coverage and strengthen the visual language of the film.',
      'This project gave me the chance to explore the flexible, adaptive nature of documentary storytelling and taught me how to respond creatively to unexpected limitations. It was a rewarding experience that helped me grow both as an editor and a storyteller.',
    ],
  },
  {
    slug: 'mr-mortgages',
    index: '03',
    title: 'Mr Mortgages: 20th Anniversary',
    year: '2026',
    category: 'Client / Corporate Documentary',
    role: 'Editor',
    videoNote: 'Video coming soon.',
    cover: '/projects/mr-mortgages.jpg',
    clientWork: true,
    blurb:
      'Professional client work marking a company’s 20th anniversary, bridging past and present.',
    description: [
      'This is the third video I’ve created for Mr Mortgages, following our earlier collaborations on their Critical Illness Cover and Remortgage videos.',
      'This video was produced to celebrate the 20th anniversary of the company and features a voiceover from the founder and CEO, offering a personal insight into how the business operates and has grown over time. It was a pleasure to collaborate with them again, and by this point we had developed a strong creative rapport that made the process especially rewarding.',
      'One of the highlights of working on this video was developing the opening shot. We wanted to capture the passing of time visually, so I found a black-and-white photograph of their original Paignton office and matched it with a present-day shot taken from a near-identical angle. Using a wipe transition, we created a smooth, symbolic bridge between past and present that set the tone for the rest of the video.',
      'The finished video was also published on the company’s Facebook page.',
      'It was a valuable experience in blending documentary-style storytelling with corporate branding, and I’m proud of how it turned out.',
    ],
  },
  {
    slug: 'hush',
    index: '04',
    title: 'Hush',
    year: '2025',
    category: 'Short Film / Comedy',
    role: 'Co-Made / Editor',
    youtubeId: 'sOxZJDkrQS4',
    cover: '/projects/hush.jpg',
    blurb:
      'A five-minute film written, shot and cut in 48 hours, and winner of Best Film.',
    description: [
      'Co-made with Bailey Silva, this short film was created for Bournemouth’s Shooting From the Hip 48-hour film contest, where it went on to win Best Film out of 13 other short films.',
      'The challenge required us to write, shoot, edit and deliver a complete five-minute film within two days, making the process fast-paced, instinctive and creatively demanding.',
      'The project was a valuable exercise in stripped-back filmmaking, forcing us to make quick decisions, trust our instincts and focus on what could be achieved effectively under pressure.',
      'Having the film screened at Lighthouse, Poole, in front of an audience of around 100 people made the experience especially rewarding, and the award recognition was a reminder of the value of grassroots filmmaking and local creative collaboration.',
    ],
  },
  {
    slug: 'id-please',
    index: '05',
    title: 'I.D. Please',
    year: '2025',
    category: 'Narrative Comedy',
    role: 'Editor',
    youtubeId: 'Aie42xrh8UI',
    cover: '/images/id-please-cover.png',
    blurb:
      'A rapid-fire narrative comedy built around comedic timing and character rhythm.',
    description: [
      'ID Please is a short narrative comedy I edited as part of the Specialist Practice unit during my second year at Arts University Bournemouth.',
      'The film follows a bartender trying to close up for the night, only to be repeatedly interrupted by a determined customer who wants to celebrate their first week of sobriety… by ordering a drink. What follows is a rapid-fire sequence of increasingly ridiculous disguises, from cowboy to noir detective to full-on wizard, as the customer tries to convince the bartender to serve them.',
      'I edited the film using Avid Media Composer, focusing heavily on comedic timing and character rhythm. The challenge was to keep the energy moving while landing each transformation in a way that felt sharp but natural. Matching the customer’s sudden costume changes with the bartender’s increasingly weary reactions gave the edit a strong contrast to play with.',
      'This short helped me hone a more playful editing style and develop an instinct for pacing comedy, skills I later brought into more emotionally subtle projects like Every Silent Glance.',
    ],
  },
  {
    slug: 'every-silent-glance',
    index: '06',
    title: 'Every Silent Glance',
    year: '2025',
    category: 'Narrative Drama',
    role: 'Editor',
    youtubeId: 'Q7U8vbv9QWQ',
    cover: '/projects/every-silent-glance.jpg',
    blurb:
      'A quiet drama shaped through rhythm, silence and restraint.',
    description: [
      'Every Silent Glance was the second short film I edited as part of the Production in Practice unit during my second year at Arts University Bournemouth.',
      'The film explores the quiet emotional drift between two close friends as they begin to follow different paths in life, touching on themes of personal growth, independence and the emotional cost of moving forward.',
      'I reunited with the same director, whom I had previously collaborated with on ID Please during our earlier Specialist Practice unit. It was great to reconnect and continue developing our shared creative language.',
      'Editing this film gave me the opportunity to focus on subtle emotional pacing, using rhythm, silence and careful timing to draw out what’s left unspoken between the characters. It was a valuable experience that helped me grow as an editor, especially in handling stories that rely on tone, nuance and restraint.',
    ],
  },
  {
    slug: 'fairytales-of-the-future',
    index: '07',
    title: 'Fairytales of the Future',
    year: '2025',
    category: 'Environmental Short Film',
    role: 'Co-Editor / Script Supervisor / DIT',
    youtubeId: '76R0RchyVdM',
    videoNote: undefined,
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fairytales%20of%20the%20Future%20-%20Cover%20Image%202-lI2U3DoVQ9UGGgj98qVuwlESbw5v9k.png',
    blurb:
      'A fairy-tale reimagining that tackles deforestation, made for NAHEMI’s environmental film competition.',
    description: [
      'Created for NAHEMI’s A Few Minutes for the Planet competition, Fairy Tales of the Future is a short environmental film that uses familiar fairy-tale characters to explore deforestation and its wider consequences. The film reimagines Little Red Riding Hood, the Big Bad Wolf and Jack from Jack and the Beanstalk within one interconnected narrative, using fantasy imagery to make an environmental issue more accessible.',
      'I worked on the film as Script Supervisor, DIT and Co-Editor, managing continuity on set while also helping shape the structure and pacing in post-production. The project was especially valuable because of its strict short-form format, requiring the edit to communicate a clear message within a very limited runtime. Co-editing the film with Tom Du Feu also gave me experience in collaborative post-production, where we had to make quick decisions around tone, rhythm and narrative clarity.',
      'The film was later included in the A Few Minutes for the Planet showcase and won the GFSA Award for Excellence in Fiction, making it a particularly rewarding project within my portfolio.',
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
