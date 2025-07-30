import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Portfolio } from './Pages/Portfolio'
import "/src/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio/>
  </StrictMode>,
)
