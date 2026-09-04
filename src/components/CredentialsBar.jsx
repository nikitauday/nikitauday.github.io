import { motion } from 'framer-motion'
import nyuTorchLogo from '../assets/home/nyu-torch-logo-tight.png'
import mecLogo from '../assets/home/mec-logo.png'
import resumePdf from '../assets/home/nikita-uday-resume.pdf'
import microsoftLogo from '../assets/home/microsoft-logo.svg'
import cyberInstituteLogo from '../assets/home/cyber-institute-logo.png'
import bostonStrategiesLogo from '../assets/home/boston-strategies-logo.png'

const studiedAt = [
  { src: nyuTorchLogo, alt: 'New York University', title: 'NYU Tandon School of Engineering' },
  { src: mecLogo, alt: 'Govt. Model Engineering College', title: 'Govt. Model Engineering College' },
]

const workedAt = [
  { src: microsoftLogo, alt: 'Microsoft', title: 'Microsoft' },
  { src: cyberInstituteLogo, alt: 'Cyber Institute', title: 'Cyber Institute' },
  { src: bostonStrategiesLogo, alt: 'Boston Strategies International', title: 'Boston Strategies International' },
]

export default function CredentialsBar() {
  return (
    <section style={{ padding: 'calc(1.5*var(--leading)) 0 calc(2.5*var(--leading))' }}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="credentials-bar"
      >
        <div className="credentials-group">
          <span className="credentials-label">Studied at</span>
          {studiedAt.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} title={logo.title} className="credentials-logo" />
          ))}
        </div>
        <span className="credentials-divider" />
        <div className="credentials-group">
          <span className="credentials-label">Worked at</span>
          {workedAt.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} title={logo.title} className="credentials-logo" />
          ))}
        </div>
        <div className="credentials-status">
          <span className="credentials-open">Open to PM roles</span>
          <a href={resumePdf} target="_blank" rel="noopener" download className="credentials-resume">
            Resume
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v12" />
              <path d="M7 12l5 5 5-5" />
              <path d="M5 20h14" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
