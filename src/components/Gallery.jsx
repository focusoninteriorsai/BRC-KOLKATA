import { useState } from 'react'
import { gallery } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import FilmPlayer from './FilmPlayer.jsx'

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const show = (i) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <section id="gallery" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          kicker="06  —  Media Gallery"
          title="The finished floor."
          subtitle="Reception, lounge, cabins, meeting rooms and the open work floor — photographed at handover. Click any frame to open the lightbox."
        />

        <Reveal className="mt-12">
          <FilmPlayer />
        </Reveal>

        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
              <button
                onClick={() => show(i)}
                className="group relative block w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={item.thumb || item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-4 text-[11px] tracking-[0.22em] uppercase text-gold-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          items={gallery}
          index={index}
          onClose={() => setOpen(false)}
          onPrev={() => setIndex((i) => (i - 1 + gallery.length) % gallery.length)}
          onNext={() => setIndex((i) => (i + 1) % gallery.length)}
        />
      )}
    </section>
  )
}
