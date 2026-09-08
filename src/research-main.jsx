import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import ResearchPage from './pages/ResearchPage.jsx'
import { initAnalytics } from './analytics.js'

initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ResearchPage />
    </MotionConfig>
  </StrictMode>,
)
