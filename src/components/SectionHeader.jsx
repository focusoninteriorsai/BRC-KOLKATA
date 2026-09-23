import Reveal from './Reveal.jsx'

export default function SectionHeader({ kicker, title, subtitle, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'items-start'
  return (
    <Reveal className={`flex flex-col gap-4 max-w-3xl ${alignCls}`}>
      {kicker && <p className="eyebrow">{kicker}</p>}
      <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-cream-50 leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-cream-200/75 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
          {subtitle}
        </p>
      )}
      <span className="gold-rule w-24 mt-1" />
    </Reveal>
  )
}
