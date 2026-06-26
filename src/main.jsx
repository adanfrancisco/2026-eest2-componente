import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'
// Document Object Model(DOM) +
//esto es otro comentario

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <App />
  </StrictMode>,
)


  

