import { client, pmc, project } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import StatCounter from './StatCounter.jsx'
import Reveal from './Reveal.jsx'

const stats = [
  { label: 'Carpet Area', value: project.carpetArea, suffix: '', unit: 'sq.ft' },
  { label: 'Duration', value: project.durationWeeks, suffix: '', unit: 'weeks' },
  { label: 'Calendar days', value: project.durationDays, suffix: '', unit: 'days' },
  { label: 'On-time handover', value: 100, suffix: '%', unit: 'status' },
]

export default function Overview() {
  return (
    <section id="overview" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          kicker="01  —  Project Overview"
          title="A 4,200 sq.ft workplace, completed in 16 weeks."
          subtitle={project.overview}
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass hover-lift rounded-3xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-between">
                <p className="eyebrow">{s.label}</p>
                <div>
                  <p className="display text-4xl sm:text-5xl text-gold-300 leading-none">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-cream-200/60">{s.unit}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 glass rounded-3xl p-6 sm:p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Meta label="Project type" value={project.type} />
            <Meta label="Programme" value={`${project.startDate} – ${project.handoverDate}`} />
            <Meta label="Client" value={client.shortName} />
            <Meta label="PMC" value={pmc.name} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-cream-50 text-lg font-medium">{value}</p>
    </div>
  )
}
