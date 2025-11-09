import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom"
import './index.css'
import router from './routes/router.jsx';
import AuthPorvider from './contexts/AuthPorvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPorvider>
      <RouterProvider router={router} />

    </AuthPorvider>
  </StrictMode>,
)
