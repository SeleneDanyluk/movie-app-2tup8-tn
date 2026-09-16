import './App.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Login from './components/auth/login/Login.jsx';
import Protected from './components/auth/protected/Protected.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import PageNotFound from './components/ui/pageNotFound/PageNotFound.jsx';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="movie-app-bg py-5 min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route
            path='/catalog/*'
            element={
              <Protected isSignedIn={loggedIn}>
                <Dashboard onLogout={handleLogout} />
              </Protected>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
