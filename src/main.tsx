import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CheckoutHome } from './lib/index.ts' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CheckoutHome />
  </StrictMode>,
)
