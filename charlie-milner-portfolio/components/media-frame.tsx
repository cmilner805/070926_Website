import { cn } from '@/lib/utils'

/*
  Elegant empty image state.
  Used everywhere a film still / cover would sit until Charlie supplies real frames.
  Intentionally typographic and monochrome, no film-cliché graphics.
*/
export function MediaFrame({
  index,
  label,
  className,
  large,
}: {
  index?: string
  label?: string
  className?: string
  large?: boolean
}) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden bg-card',
        className,
      )}
    >
      {/* faint framing lines for a film-frame feel, kept extremely subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-border/50 sm:inset-5"
      />
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        {index && (
          <span
            className={cn(
              'font-serif leading-none text-muted-foreground/40',
              large ? 'text-7xl sm:text-8xl' : 'text-5xl',
            )}
          >
            {index}
          </span>
        )}
        {label && (
          <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground/60">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
