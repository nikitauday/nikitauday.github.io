export default function StatSilhouette({ value, label, size = 70 }) {
  return (
    <div>
      <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: size, lineHeight: 0.85, color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.55)' }}>
        {value}
      </span>
      <span style={{ display: 'block', font: "600 11px var(--font-body)", letterSpacing: '.11em', textTransform: 'uppercase', color: 'rgba(255,255,255,.75)', marginTop: 9 }}>
        {label}
      </span>
    </div>
  )
}
