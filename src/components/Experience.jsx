import { motion } from 'framer-motion'
import Reveal from './Reveal'
import mecLogo from '../assets/home/mec-logo.png'
import microsoftLogo from '../assets/home/microsoft-logo.svg'
import cyberInstituteLogo from '../assets/home/cyber-institute-logo.png'
import bostonStrategiesLogo from '../assets/home/boston-strategies-logo.png'
import nyuSeal from '../assets/home/nyu-seal.svg'
import { experienceItems, educationItems, skillsProduct, skillsTools } from '../data/content'

const logos = {
  'cyber-institute': cyberInstituteLogo,
  'boston-strategies': bostonStrategiesLogo,
  microsoft: microsoftLogo,
  'nyu-seal': nyuSeal,
  mec: mecLogo,
}

const rows = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const row = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function Timeline({ items }) {
  return (
    <motion.ul variants={rows} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="timeline">
      {items.map((item, i) => (
        <motion.li key={item.id} variants={row} className="timeline-item">
          {i < items.length - 1 && <span className="timeline-connector" />}
          <div className="timeline-logo">
            <img src={logos[item.logo]} alt={item.org} />
          </div>
          <div className="timeline-body">
            <div className="timeline-head">
              <h3 className="timeline-title">{item.title}</h3>
              <span className="timeline-date">{item.dates}</span>
            </div>
            <p className="timeline-org">{item.org}</p>
            <p className="timeline-desc">
              {item.descriptionParts.map((part, j) =>
                typeof part === 'string' ? <span key={j}>{part}</span> : <a key={j} href={part.href}>{part.label}</a>
              )}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}

function SkillGroup({ label, tags, className }) {
  return (
    <div>
      <h3 style={{ font: '600 12.5px var(--font-body)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 var(--space-2)' }}>
        {label}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
        {tags.map((t) => (
          <span key={t} className={`tag ${className}`}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'calc(2.5*var(--leading)) 0', scrollMarginTop: 90 }}>
      <Reveal className="eyebrow-dot">
        <span className="dot" style={{ background: 'var(--sage)' }} />
        <span>Background</span>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(3*var(--leading))' }}>
        <div>
          <Reveal as="h2" style={{ margin: '0 0 calc(1.5*var(--leading))' }}>Experience</Reveal>
          <Timeline items={experienceItems} />
        </div>
        <div>
          <Reveal as="h2" style={{ margin: '0 0 calc(1.5*var(--leading))' }}>Education</Reveal>
          <Timeline items={educationItems} />
        </div>
        <div>
          <Reveal as="h2" style={{ margin: '0 0 calc(1.5*var(--leading))' }}>Skills</Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--leading)' }}>
            <SkillGroup label="Product" tags={skillsProduct} className="tag-outline-terracotta" />
            <SkillGroup label="Tools & technical" tags={skillsTools} className="tag-outline-sage" />
          </div>
        </div>
      </div>
    </section>
  )
}
