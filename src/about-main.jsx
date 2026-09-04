import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import AboutPage from './pages/AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <AboutPage />
    </MotionConfig>
  </StrictMode>,
)
