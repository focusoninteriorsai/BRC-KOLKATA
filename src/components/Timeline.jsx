import { timeline } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          kicker="07  —  Timeline"
          title="From mobilisation to handover."
          subtitle="1 May 2026 → 18 August 2026. Sixteen weeks. On programme."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0 sm:-translate-x-px" />

          <ol className="space-y-10">
            {timeline.map((step, i) => {
              const left = i % 2 === 0
              return (
                <Reveal key={step.title} delay={i * 0.05}>
                  <li className="relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-start">
                    <div
                      className={`pl-12 sm:pl-0 ${left ? 'sm:text-right sm:pr-12' : 'sm:col-start-2 sm:pl-12'}`}
                    >
                      <article className="glass hover-lift rounded-3xl p-6 sm:p-7 inline-block text-left w-full">
                        <p className="eyebrow mb-2">{step.date}</p>
                        <h3 className="display text-2xl text-cream-50">{step.title}</h3>
                        <p className="mt-2 text-cream-200/70 font-light leading-relaxed">
                          {step.body}
                        </p>
                      </article>
                    </div>
                    <span className="absolute left-4 sm:left-1/2 top-7 w-3 h-3 rounded-full bg-gold-400 shadow-gold -translate-x-1/2 ring-4 ring-gold-500/20" />
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
