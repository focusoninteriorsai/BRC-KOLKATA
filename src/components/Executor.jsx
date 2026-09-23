import { ArrowUpRight } from 'lucide-react'
import { executor } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

export default function Executor() {
  return (
    <section id="executor" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader kicker="02  —  Executed By" title="The studio behind the build." />

        <Reveal className="mt-12">
          <article className="glass hover-lift rounded-[2rem] p-8 sm:p-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <img
                src={executor.logo}
                alt={executor.name}
                className="h-12 sm:h-14 w-auto object-contain mb-8"
              />
              <p className="eyebrow mb-3">{executor.role}</p>
              <h3 className="display text-3xl sm:text-4xl text-cream-50 mb-5">{executor.name}</h3>
              <p className="text-cream-200/75 text-lg leading-relaxed font-light max-w-xl">
                {executor.about}
              </p>
              <a
                href={executor.website}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 tracking-[0.16em] uppercase text-xs"
              >
                {executor.website.replace('https://', '')}
                <ArrowUpRight size={16} />
              </a>
            </div>

            <dl className="grid grid-cols-2 gap-4">
              <Fact label="Founded" value={String(executor.founded)} />
              <Fact label="Headquarters" value={executor.hq} />
              <Fact label="Focus" value="Commercial & corporate interiors" />
              <Fact label="Scope" value="Design · Planning · Execution" />
            </dl>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

function Fact({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <dt className="eyebrow mb-2">{label}</dt>
      <dd className="text-cream-50 text-[15px] leading-snug">{value}</dd>
    </div>
  )
}
