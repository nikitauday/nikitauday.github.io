import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResearchPage from './pages/ResearchPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResearchPage />
  </StrictMode>,
)
