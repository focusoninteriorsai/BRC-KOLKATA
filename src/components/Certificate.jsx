import { Download, FileImage } from 'lucide-react'
import { certificates } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

export default function Certificate() {
  return (
    <section id="certificate" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          kicker="09  —  Completion"
          title="Certificate & achievements."
          subtitle="The 4,200 sq.ft programme was handed over on 18 August 2026, within the agreed timeline. Drop scanned certificates into public/images/certificates to replace the slots below."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="glass hover-lift rounded-[2rem] overflow-hidden">
                {c.src ? (
                  <img src={c.src} alt={c.title} className="w-full aspect-[16/10] object-cover" />
                ) : (
                  <div className="aspect-[16/10] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-800 to-ink-950 border-b border-white/5">
                    <FileImage className="text-gold-400/70" size={36} />
                    <p className="eyebrow text-center px-6">{c.note}</p>
                  </div>
                )}
                <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-1">Document</p>
                    <h3 className="display text-xl text-cream-50">{c.title}</h3>
                  </div>
                  {c.src ? (
                    <a
                      href={c.src}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-gold-200 hover:bg-gold-500 hover:text-ink-950"
                    >
                      <Download size={14} /> View / Download
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-cream-200/40">
                      Awaiting file
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
