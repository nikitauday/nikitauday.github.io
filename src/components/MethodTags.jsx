export default function MethodTags({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map((t) => (
        <span key={t} style={{ font: "500 13px var(--font-body)", background: 'rgba(255,255,255,.7)', borderRadius: 100, padding: '6px 14px' }}>
          {t}
        </span>
      ))}
    </div>
  )
}
