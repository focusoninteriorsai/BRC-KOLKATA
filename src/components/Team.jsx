import { team } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import PlaceholderPortrait from './PlaceholderPortrait.jsx'

export default function Team() {
  const people = [
    {
      ...team.ceo,
      initials: 'AK',
      photoLabel: 'ADD CEO PHOTO',
    },
    {
      ...team.pm,
      initials: 'RM',
      photoLabel: 'ADD PHOTO',
    },
  ]

  return (
    <section id="team" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          kicker="04  —  Leadership"
          title="The people who owned the programme."
          subtitle="Project Lead from FocusOn’s executive desk; day-to-day delivery by the site Project Manager."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="glass hover-lift rounded-[2rem] overflow-hidden grid sm:grid-cols-[220px_1fr]">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="h-64 sm:h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PlaceholderPortrait
                    initials={p.initials}
                    label={p.photoLabel}
                    className="h-64 sm:h-full min-h-[240px]"
                  />
                )}
                <div className="p-7 sm:p-8 flex flex-col">
                  <p className="eyebrow mb-3">{p.role}</p>
                  <h3 className="display text-2xl sm:text-3xl text-cream-50">{p.name}</h3>
                  <p className="text-gold-300/90 text-sm mt-1">{p.title}</p>
                  <p className="mt-4 text-cream-200/70 text-[15px] leading-relaxed font-light">
                    {p.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
