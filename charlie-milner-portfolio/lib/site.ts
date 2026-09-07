// Central contact + identity config.
export const siteConfig = {
  name: 'Charlie Milner',
  role: 'Offline Editor',
  email: 'Cmilner805@gmail.com',
  linkedin: 'https://www.linkedin.com/in/charliemilner1',
  youtube: 'https://www.youtube.com/@charliemakesfilms',
} as const

export const nav = [
  { label: 'About Me', href: '/about' },
  { label: 'My Work', href: '/work' },
  { label: 'Photography', href: '/photography' },
  { label: 'Contact Me', href: '/contact' },
] as const
