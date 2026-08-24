import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { workCards, workFilters } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function WorkGrid() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? workCards : workCards.filter((c) => c.categories.includes(filter))
  const ctaHref = filter === 'Research' ? '/research.html' : '/projects.html'
  const ctaLabel = filter === 'Research' ? 'Research write-ups' : 'Full case studies'

  return (
    <section id="work" style={{ padding: 'var(--leading) 0 calc(3*var(--leading))', scrollMarginTop: 90 }}>
      <Reveal className="eyebrow-dot">
        <span className="dot" />
        <span>Selected work</span>
      </Reveal>
      <Reveal as="h2" delay={0.05} style={{ margin: '0 0 var(--space-2)' }}>
        Product, marketing, and research in practice.
      </Reveal>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'var(--leading)' }}>
        {workFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
          >
            {f === 'Research' ? 'Research' : f}
          </button>
        ))}
      </div>

      <motion.div
        key={filter}
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
          gap: 24, marginTop: 'var(--leading)',
        }}
      >
        {visible.map((c) => (
          <motion.a
            key={c.id}
            href={c.href}
            className="card elev-sm"
            variants={card}
            whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="card-title" style={{ margin: '0 0 6px' }}>{c.title}</h3>
            <span className="card-kicker" style={{ color: `var(--${c.kickerColor})`, marginBottom: 12, display: 'block' }}>
              {c.kicker}
            </span>
            <p className="card-body">{c.body}</p>
            <span style={{ display: 'flex', justifyContent: c.metaLeft ? 'space-between' : 'flex-end', gap: 8, fontSize: 12.5 }}>
              {c.metaLeft && (
                <span style={{ color: c.metaLeftColor ? `var(--${c.metaLeftColor})` : 'var(--ink-muted)', fontWeight: c.metaLeftColor ? 600 : 400 }}>
                  {c.metaLeft}
                </span>
              )}
              <span style={{ color: 'var(--ink-muted)' }}>{c.metaRight}</span>
            </span>
          </motion.a>
        ))}
        <motion.a key="cta" href={ctaHref} className="card-cta" variants={card}>
          <span>
            <span className="card-cta-label">{ctaLabel}</span>
            <span className="card-cta-title">The decisions behind each one</span>
          </span>
          <span className="card-cta-link">
            Read them
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h13" />
              <path d="M12 6l6 6-6 6" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
    </section>
  )
}
