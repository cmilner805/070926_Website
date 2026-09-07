'use client'

import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { MediaFrame } from '@/components/media-frame'
import { cn } from '@/lib/utils'

type Photo = {
  id: string
  // Explicit grid placement: rows are measured in fixed-height grid tracks
  // (see ROW_UNIT below), so every tile's rendered height is deterministic.
  // That keeps the gaps between photos perfectly even and every column
  // finishing flush at the bottom of the grid, regardless of aspect ratio.
  rows: number
  colSpan?: 2 | 3
  // To add a real photo: drop the file in /public/photography/ and set
  // src to its path (e.g. '/photography/my-shot.jpg') plus a short alt.
  src?: string
  alt?: string
}

// Height (in px) of a single grid row track. Tile heights below are
// expressed as a row count, so `rows * ROW_UNIT` is the tile's pixel height.
const ROW_UNIT = 6

// To add photographs: put image files in /public/photography/, then fill in
// `src` and `alt` for each entry below. Add or remove entries freely, the
// grid and lightbox adapt automatically. Until a `src` is set, an elegant
// empty frame is shown in its place.
const photos: Photo[] = [
  {
    id: 'PH 01',
    rows: 82,
    src: '/photography/dsc4491.jpg',
    alt: 'Chalk cliffs along the Dorset coast with two walkers on the beach below',
  },
  {
    id: 'PH 02',
    rows: 90,
    colSpan: 2,
    src: '/photography/000333330024.jpg',
    alt: 'Two friends lying in tall grass under trees at golden hour, shot on film',
  },
  {
    id: 'PH 03',
    rows: 66,
    src: '/photography/dsc1902.jpg',
    alt: 'Long-exposure light trails on a foggy motorway at night',
  },
  {
    id: 'PH 05',
    rows: 82,
    src: '/photography/dsc4523.jpg',
    alt: 'A stacked stone cairn on a pebble beach with walkers blurred in the background',
  },
  {
    id: 'PH 06',
    rows: 66,
    src: '/photography/dsc3425.jpg',
    alt: 'Close-up of a vintage Ford TW-15 tractor parked beneath trees',
  },
  {
    id: 'PH 07',
    rows: 66,
    src: '/photography/dsc4840.jpg',
    alt: 'A figure seated on a bench facing a shed on a foggy hillside',
  },
  {
    id: 'PH 08',
    rows: 66,
    src: '/photography/dsc2756.jpg',
    alt: 'Long-exposure blue-hour beach with blurred coastal city lights on the horizon',
  },
  {
    id: 'PH 09',
    rows: 99,
    src: '/photography/dsc3459.jpg',
    alt: 'A Croatian island hillside with a stone house, church bell tower and vineyard in the sun',
  },
  {
    id: 'PH 10',
    rows: 90,
    colSpan: 2,
    src: '/photography/dsc3422.jpg',
    alt: 'Black-and-white view of a busy beach at low tide with bathers and a wooded headland behind',
  },
  {
    id: 'PH 04',
    rows: 46,
    src: '/photography/000301840031.jpg',
    alt: 'A figure standing at a fork in a muddy woodland track, shot on film',
  },
  {
    id: 'PH 11',
    rows: 68,
    colSpan: 3,
    src: '/photography/dsc3034.jpg',
    alt: 'Black-and-white view looking up at an oval skylight hung with abstract metal sculptures',
  },
]

// Desktop-only layout: explicit rows of tiles whose pixel height is fixed
// per row, so every gap is identical and every row's tiles finish flush
// with each other. This avoids the gap/height mismatches that a single
// auto-placed grid produces once tile aspect ratios vary. Each row's
// `span` values must add up to 3. PH 10 (the black-and-white beach shot)
// keeps the same height it had before, so it isn't cropped any further.
const desktopRows: { id: string; span: 1 | 2 }[][] = [
  [
    { id: 'PH 02', span: 2 },
    { id: 'PH 01', span: 1 },
  ],
  [
    { id: 'PH 03', span: 1 },
    { id: 'PH 06', span: 1 },
    { id: 'PH 07', span: 1 },
  ],
  [
    { id: 'PH 10', span: 2 },
    { id: 'PH 08', span: 1 },
  ],
  [
    { id: 'PH 05', span: 1 },
    { id: 'PH 09', span: 1 },
    { id: 'PH 04', span: 1 },
  ],
  [{ id: 'PH 11', span: 2 }],
]
const desktopRowHeight: Record<number, number> = {
  0: 460,
  1: 340,
  2: 460,
  3: 340,
  4: 400,
}

export function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [],
  )
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [],
  )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, close, prev, next])

  return (
    <>
      {/*
        Mobile/tablet: a real CSS grid (not masonry columns). Every tile's
        height is an explicit multiple of ROW_UNIT, so the gaps between
        photos stay perfectly even and every column finishes flush at the
        same bottom edge, no matter how the aspect ratios vary.
      */}
      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:hidden"
        style={{ gridAutoRows: `${ROW_UNIT}px` }}
      >
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={cn(
              'group relative block w-full overflow-hidden rounded-md ring-1 ring-transparent transition-all duration-300 hover:ring-[var(--page-accent,var(--border))] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              photo.colSpan && photo.colSpan >= 2 && 'sm:col-span-2',
            )}
            style={{ gridRow: `span ${photo.rows}` }}
            aria-label={`Open photograph ${photo.id}`}
          >
            <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
              {photo.src ? (
                <img
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt ?? ''}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <MediaFrame label={photo.id} />
              )}
            </div>
          </button>
        ))}
      </div>

      {/*
        Desktop: explicit stacked rows (see desktopRows above) instead of a
        single auto-placed grid. Every tile in a row shares that row's fixed
        pixel height, so gaps are always identical and every row finishes
        perfectly flush, regardless of each photo's native aspect ratio.
      */}
      <div className="hidden flex-col gap-4 lg:flex">
        {desktopRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4" style={{ height: desktopRowHeight[rowIndex] }}>
            {row.map(({ id, span }) => {
              const photo = photos.find((p) => p.id === id)
              if (!photo) return null
              const index = photos.indexOf(photo)
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="group relative block h-full overflow-hidden rounded-md ring-1 ring-transparent transition-all duration-300 hover:ring-[var(--page-accent,var(--border))] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  style={{ flex: `${span} ${span} 0%` }}
                  aria-label={`Open photograph ${photo.id}`}
                >
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                    {photo.src ? (
                      <img
                        src={photo.src || '/placeholder.svg'}
                        alt={photo.alt ?? ''}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <MediaFrame label={photo.id} />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 fade-in backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary sm:left-8"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[3/2] w-full overflow-hidden rounded-md border border-border">
              {photos[openIndex].src ? (
                <img
                  src={photos[openIndex].src || '/placeholder.svg'}
                  alt={photos[openIndex].alt ?? ''}
                  className="h-full w-full object-contain"
                />
              ) : (
                <MediaFrame label={photos[openIndex].id} large />
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary sm:right-8"
            aria-label="Next photograph"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  )
}
