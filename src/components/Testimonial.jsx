import { testimonial, client } from '../data/project.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import PlaceholderPortrait from './PlaceholderPortrait.jsx'

export default function Testimonial() {
  return (
    <section id="testimonial" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          kicker="08  —  Client Voice"
          title="Appreciation from the CMD’s office."
        />

        <Reveal className="mt-12">
          <article className="glass-strong rounded-[2rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
            <span className="font-serif text-7xl sm:text-8xl text-gold-400/30 leading-none absolute top-4 left-6 sm:left-10">
              “
            </span>

            <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 items-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shrink-0 ring-1 ring-gold-500/30">
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PlaceholderPortrait
                    initials="AR"
                    label="ADD CLIENT PHOTO"
                    className="w-full h-full"
                  />
                )}
              </div>

              <div>
                <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2.15rem] leading-snug text-cream-50 max-w-3xl">
                  {testimonial.quote}
                </blockquote>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white p-1.5">
                    <img
                      src={client.logo}
                      alt="BRC Group"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-cream-50 font-medium text-lg">{testimonial.name}</p>
                    <p className="text-gold-300 text-sm tracking-[0.08em]">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
