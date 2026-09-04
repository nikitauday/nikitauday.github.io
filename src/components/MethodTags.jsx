export default function MethodTags({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map((t) => (
        <span key={t} style={{ font: "500 13px var(--font-body)", background: 'color-mix(in srgb, white 70%, transparent)', borderRadius: 100, padding: '6px 14px' }}>
          {t}
        </span>
      ))}
    </div>
  )
}
