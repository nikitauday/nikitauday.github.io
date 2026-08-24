import { motion } from 'framer-motion'
import nyuTorchLogo from '../assets/home/nyu-torch-logo-tight.png'
import mecLogo from '../assets/home/mec-logo.png'
import resumePdf from '../assets/home/nikita-uday-resume.pdf'

const studiedAt = [
  { src: nyuTorchLogo, alt: 'New York University', title: 'NYU Tandon School of Engineering' },
  { src: mecLogo, alt: 'Govt. Model Engineering College', title: 'Govt. Model Engineering College' },
]

const workedAt = [
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_icon.svg', alt: 'Microsoft', title: 'Microsoft' },
  {
    src: 'https://static.wixstatic.com/media/7e465c_06651c34080a4a74af712788cf91bdc1~mv2.png/v1/fill/w_72,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e465c_06651c34080a4a74af712788cf91bdc1~mv2.png',
    alt: 'Cyber Institute',
    title: 'Cyber Institute',
  },
  {
    src: 'https://media.licdn.com/dms/image/v2/D4E0BAQFCOPebEZ-5oA/company-logo_200_200/company-logo_200_200/0/1704235697598/bostonstrategies_logo?e=1788393600&v=beta&t=ATgSLlroB-zJbc6XkagSpGg2o0aO1s0ko2aCohUYic4',
    alt: 'Boston Strategies International',
    title: 'Boston Strategies International',
  },
]

export default function CredentialsBar() {
  return (
    <section style={{ padding: 'calc(1.5*var(--leading)) 0 calc(2.5*var(--leading))' }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
