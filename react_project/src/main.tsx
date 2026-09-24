import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TailwindPage from './tailwind-intro.js'
import "./index.css"


const rootElement = document.getElementById('root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <TailwindPage/>
  </StrictMode>,
)
