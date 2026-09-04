import Reveal from './Reveal'

const line = { height: 1, width: 'clamp(24px,7vw,110px)', background: 'color-mix(in srgb, var(--ink) 28%, transparent)', flex: 'none' }

export default function SectionHeading({ eyebrowColor, meta, title, subtitle }) {
  return (
    <>
      <Reveal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, margin: '0 0 var(--space-2)' }}>
        <span style={line} />
        <h2 style={{ fontSize: 'clamp(30px,3.6vw,44px)', margin: 0, textAlign: 'center' }}>
          {title}
        </h2>
        <span style={line} />
      </Reveal>
      <Reveal as="p" delay={0.05} style={{ fontSize: 17, lineHeight: 'var(--leading)', textAlign: 'center', margin: '0 auto var(--space-2)', maxWidth: '52ch', color: 'var(--ink-muted)' }}>
        {subtitle}
      </Reveal>
      <Reveal as="p" delay={0.1} style={{ font: "600 12.5px var(--font-body)", letterSpacing: '.09em', textTransform: 'uppercase', textAlign: 'center', margin: 0, color: eyebrowColor }}>
        {Array.isArray(meta) ? meta.join('  ·  ') : meta}
      </Reveal>
    </>
  )
}
