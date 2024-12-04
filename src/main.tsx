import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
//import './index.css'
import { AppListado } from './components/AppListado'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppListado/>
  </StrictMode>,
)