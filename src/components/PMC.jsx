import { ArrowUpRight, Compass } from 'lucide-react'
import { pmc } from '../data/project.js'
import Reveal from './Reveal.jsx'

export default function PMC() {
  return (
    <section id="pmc" className="relative pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <article className="glass hover-lift rounded-[2rem] p-8 sm:p-10 flex flex-col md:flex-row gap-8 md:items-center">
            <div className="w-16 h-16 rounded-2xl border border-gold-500/30 bg-gold-500/10 flex items-center justify-center shrink-0">
              <Compass className="text-gold-300" />
            </div>
            <div className="flex-1">
              <p className="eyebrow mb-2">05  —  Project Management Consultant</p>
              <h3 className="display text-2xl sm:text-3xl text-cream-50">{pmc.name}</h3>
              <p className="text-gold-300 text-sm mt-1">{pmc.role}</p>
              <p className="mt-3 text-cream-200/75 font-light max-w-3xl">{pmc.about}</p>
              <p className="mt-3 text-xs tracking-[0.16em] uppercase text-cream-200/50">
                Founded {pmc.founded} · {pmc.hq}
              </p>
            </div>
            <a
              href={pmc.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-center rounded-full border border-gold-500/40 px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase text-gold-200 hover:bg-gold-500 hover:text-ink-950 transition-colors"
            >
              nodeurbanlab.com
              <ArrowUpRight size={14} />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
