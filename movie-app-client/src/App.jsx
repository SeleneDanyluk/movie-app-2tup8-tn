import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Login from './components/auth/login/Login.jsx';
import Protected from './components/auth/protected/Protected.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import PageNotFound from './components/ui/pageNotFound/PageNotFound.jsx';
import Register from './components/auth/register/Register.jsx';

function App() {
  return (
    <div className="movie-app-bg py-5 min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/catalog/*'
            element={
              <Protected>
                <Dashboard />
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
