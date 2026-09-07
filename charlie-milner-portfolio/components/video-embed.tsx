'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { MediaFrame } from '@/components/media-frame'

/*
  Lazy YouTube facade: nothing loads until the visitor presses play,
  keeping initial page weight low. Falls back to an elegant frame with a
  note when a film isn't embeddable yet (e.g. Mr Mortgages).
*/
export function VideoEmbed({
  youtubeId,
  title,
  note,
  index,
  poster,
}: {
  youtubeId?: string
  title: string
  note?: string
  index?: string
  poster?: string
}) {
  const [active, setActive] = useState(false)

  if (!youtubeId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border">
        {poster ? (
          <img
            src={poster || '/placeholder.svg'}
            alt={`${title} film still`}
            className="h-full w-full object-cover"
          />
        ) : (
          <MediaFrame index={index} label={note ?? 'Video coming soon'} large />
        )}
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-black">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerated-download; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Play ${title}`}
        >
          <span className="absolute inset-0">
            {poster ? (
              <img
                src={poster || '/placeholder.svg'}
                alt={`${title} film still`}
                className="h-full w-full object-cover"
              />
            ) : (
              <MediaFrame index={index} label="Watch the film" large />
            )}
          </span>
          <span className="absolute inset-0 bg-background/30 transition-colors group-hover:bg-background/20" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-foreground/70 bg-background/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-background/60">
            <Play className="h-6 w-6 translate-x-0.5 fill-foreground text-foreground" />
          </span>
        </button>
      )}
    </div>
  )
}
