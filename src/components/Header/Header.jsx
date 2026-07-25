import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { LogOut, Bookmark } from 'lucide-react'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', { replace: true })
  }

  return (
    <header className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-logo">NXTFLIX</Link>
      </div>
      <div className="nav-actions">
        <Link to="/watch-later" className="nav-link">
          <Bookmark size={18} />
          <span>Watch Later</span>
        </Link>
        <button onClick={handleLogout} className="logout-btn" title="Logout">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  )
}

export default Header