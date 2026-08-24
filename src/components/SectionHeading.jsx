import Reveal from './Reveal'

const line = { height: 1, width: 'clamp(24px,7vw,110px)', background: 'rgba(23,60,74,.28)', flex: 'none' }

export default function SectionHeading({ eyebrowColor, meta, title, subtitle }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, margin: '0 0 var(--space-2)' }}>
        <span style={line} />
        <Reveal as="h2" style={{ fontSize: 'clamp(30px,3.6vw,44px)', margin: 0, textAlign: 'center' }}>
          {title}
        </Reveal>
        <span style={line} />
      </div>
      <p style={{ fontSize: 17, lineHeight: 'var(--leading)', textAlign: 'center', margin: '0 auto var(--space-2)', maxWidth: '52ch', color: 'var(--ink-muted)' }}>
        {subtitle}
      </p>
      <p style={{ font: "600 12.5px var(--font-body)", letterSpacing: '.09em', textTransform: 'uppercase', textAlign: 'center', margin: 0, color: eyebrowColor }}>
        {Array.isArray(meta) ? meta.join('  ·  ') : meta}
      </p>
    </>
  )
}
