import { ArrowUpRight } from 'lucide-react'
import { client } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

export default function Client() {
  return (
    <section id="client" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader kicker="03  —  Client" title="Built for a fifty-year construction house." />

        <Reveal className="mt-12">
          <article className="glass hover-lift rounded-[2rem] p-8 sm:p-12 grid lg:grid-cols-[auto_1fr] gap-10 items-start">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-3 flex items-center justify-center shrink-0">
              <img
                src={client.logo}
                alt={`${client.shortName} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="eyebrow mb-3">Client</p>
              <h3 className="display text-3xl sm:text-4xl text-cream-50 mb-4">{client.name}</h3>
              <p className="text-cream-200/75 text-lg leading-relaxed font-light max-w-3xl">
                {client.about}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {client.certifications.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-gold-500/35 bg-gold-500/10 px-3 py-1 text-[11px] tracking-[0.16em] uppercase text-gold-200"
                  >
                    {c}
                  </span>
                ))}
                <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] tracking-[0.16em] uppercase text-cream-200/70">
                  Est. {client.founded}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] tracking-[0.16em] uppercase text-cream-200/70">
                  {client.hq}
                </span>
              </div>

              <p className="eyebrow mt-8 mb-3">Notable associations</p>
              <p className="text-cream-100/80 text-sm sm:text-base leading-relaxed">
                {client.associations.join('  ·  ')}
              </p>

              <a
                href={client.website}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 tracking-[0.16em] uppercase text-xs"
              >
                {client.website.replace('https://', '').replace('www.', '')}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
