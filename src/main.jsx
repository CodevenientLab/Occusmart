import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import '@fontsource-variable/public-sans/wght.css'
import './index.css'
import App from './App.jsx'

hydrateRoot(document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
