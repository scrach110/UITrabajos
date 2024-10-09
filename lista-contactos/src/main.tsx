import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BodyApp } from './components/BodyApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BodyApp />
  </StrictMode>,
)
