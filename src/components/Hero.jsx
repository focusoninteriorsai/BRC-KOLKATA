import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { film, project } from '../data/project.js'

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const slides = film.stills

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 7000)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <section id="hero" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Cinematic stills — swap for autoplay muted loop video when Drive film is available */}
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover animate-ken-burns transition-opacity duration-[1600ms] ${
            i === idx ? 'opacity-100' : 'opacity-0'
          }`}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}

      {/* Gradient overlay so type stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/45 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/20 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url(./images/noise.png)' }}
      />

      {/* Gold particle field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold-300 animate-float"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              opacity: 0.25 + (i % 5) * 0.08,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${7 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-24 sm:pb-28 pt-28">
        <p className="eyebrow mb-5">
          A FocusOn Interiors Case Study &nbsp;·&nbsp; Kolkata, 2026
        </p>
        <h1 className="display text-[2.15rem] sm:text-5xl lg:text-[4.15rem] leading-[1.05] max-w-5xl text-cream-50">
          {project.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg sm:text-xl text-cream-100/80 font-light">
          {project.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {[
            project.carpetAreaLabel,
            `${project.durationWeeks} weeks`,
            project.status,
          ].map((chip) => (
            <span
              key={chip}
              className="glass rounded-full px-4 py-2 text-[11px] tracking-[0.2em] uppercase text-gold-200"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-50/70 hover:text-gold-300"
        aria-label="Scroll to overview"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="animate-scroll-hint" size={22} />
      </button>
    </section>
  )
}
