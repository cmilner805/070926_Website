'use client'

import { useEffect } from 'react'

/**
 * Toggles the `.lock-viewport` class on <body> (see globals.css) so the
 * current page fills exactly one viewport height with no scroll. Pass
 * `minWidth` to only lock above that breakpoint (e.g. desktop-only), or
 * omit it to lock at every size.
 */
export function LockViewport({ minWidth }: { minWidth?: number }) {
  useEffect(() => {
    const mediaQuery = minWidth ? window.matchMedia(`(min-width: ${minWidth}px)`) : null

    const apply = () => {
      const shouldLock = mediaQuery ? mediaQuery.matches : true
      document.body.classList.toggle('lock-viewport', shouldLock)
    }

    apply()
    mediaQuery?.addEventListener('change', apply)

    return () => {
      mediaQuery?.removeEventListener('change', apply)
      document.body.classList.remove('lock-viewport')
    }
  }, [minWidth])

  return null
}
