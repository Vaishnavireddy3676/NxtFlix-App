import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import WatchLater from './pages/WatchLater/WatchLater'
import NotFound from './pages/NotFound/NotFound'

import { WatchLaterProvider } from './context/WatchLaterContext'

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('jwt_token')
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  return (
    <WatchLaterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/watch-later"
            element={
              <ProtectedRoute>
                <WatchLater />
              </ProtectedRoute>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </BrowserRouter>
    </WatchLaterProvider>
  )
}

export default App