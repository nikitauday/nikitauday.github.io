import { motion } from 'framer-motion'
import Reveal from './Reveal'
import mecLogo from '../assets/home/mec-logo.png'
import { experienceItems, educationItems, skillsProduct, skillsTools } from '../data/content'

const logos = {
  'cyber-institute': 'https://static.wixstatic.com/media/7e465c_06651c34080a4a74af712788cf91bdc1~mv2.png/v1/fill/w_72,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e465c_06651c34080a4a74af712788cf91bdc1~mv2.png',
  'boston-strategies': 'https://media.licdn.com/dms/image/v2/D4E0BAQFCOPebEZ-5oA/company-logo_200_200/company-logo_200_200/0/1704235697598/bostonstrategies_logo?e=1788393600&v=beta&t=ATgSLlroB-zJbc6XkagSpGg2o0aO1s0ko2aCohUYic4',
  microsoft: 'https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_icon.svg',
  'nyu-seal': 'https://commons.wikimedia.org/wiki/Special:FilePath/New_York_University_Seal.svg',
  mec: mecLogo,
}

const rows = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const row = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
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
          <h2 style={{ margin: '0 0 calc(1.5*var(--leading))' }}>Experience</h2>
          <Timeline items={experienceItems} />
        </div>
        <div>
          <h2 style={{ margin: '0 0 calc(1.5*var(--leading))' }}>Education</h2>
          <Timeline items={educationItems} />
        </div>
        <div>
          <h2 style={{ margin: '0 0 calc(1.5*var(--leading))' }}>Skills</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--leading)' }}>
            <SkillGroup label="Product" tags={skillsProduct} className="tag-outline-terracotta" />
            <SkillGroup label="Tools & technical" tags={skillsTools} className="tag-outline-sage" />
          </div>
        </div>
      </div>
    </section>
  )
}
