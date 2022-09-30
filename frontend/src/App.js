import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />} // if user redirect to login
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />} // redirects if not user
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />} // redirects if not user
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;