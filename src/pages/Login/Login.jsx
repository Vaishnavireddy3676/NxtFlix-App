import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { signIn } from '../../api/auth'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  if (Cookies.get('jwt_token')) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setIsLoading(true)

    try {
      const token = await signIn(email, password)
      Cookies.set('jwt_token', token, { expires: 7 })
      navigate('/', { replace: true })
    } catch (err) {
      setErrorMsg(err.message || 'Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="radial-glow"></div>
        <div className="brand-content">
          <h1 className="brand-title">NXTFLIX</h1>
          <p className="brand-tagline">
            Unlimited movies, shows and more. Watch anywhere. Cancel anytime.
          </p>
        </div>
      </div>
      <div className="login-right-panel">
        <div className="login-card">
          <h2>Sign In</h2>
          {errorMsg && <div className="error-banner">{errorMsg}</div>}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={isLoading} className="submit-btn">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login