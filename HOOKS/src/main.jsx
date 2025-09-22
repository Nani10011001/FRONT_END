import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseRef1 from './HOOKS/useRef1'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<UseRef1 />
  </StrictMode>,
)
