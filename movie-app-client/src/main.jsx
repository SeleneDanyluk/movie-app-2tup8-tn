import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import ThemeContextProvider from './components/services/theme/ThemeContextProvider.jsx'
import AuthenticationContextProvider from './components/services/auth/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthenticationContextProvider>
        <App />
        <ToastContainer />
      </AuthenticationContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
