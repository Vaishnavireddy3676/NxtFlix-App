import React from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { Star, Plus, Check } from 'lucide-react'
import Header from '../../components/Header/Header'
import moviesData from '../../data/movies'
import { useWatchLater } from '../../context/WatchLaterContext'
import './MovieDetails.css'

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isInWatchLater, toggleWatchLater } = useWatchLater()

  const movie = moviesData.find((m) => Number(m.id) === Number(id))

  if (!movie) {
    return <Navigate to="/not-found" replace />
  }

  const isSaved = isInWatchLater(movie.id)

  return (
    <div className="details-page">
      <Header />
      <div
        className="backdrop-banner"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="backdrop-overlay">
          <div className="details-content">
            <div className="poster-frame">
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="info-frame">
              <h1 className="movie-title">{movie.title}</h1>
              <div className="meta-tags">
                <span className="genre-tag">{movie.genre}</span>
                <span className="meta-item">{movie.year}</span>
                <span className="meta-item">{movie.duration}</span>
                <span className="rating-tag">
                  <Star size={14} fill="#ffc107" color="#ffc107" />
                  {movie.rating}
                </span>
              </div>
              <p className="movie-overview">{movie.overview}</p>

              <div className="action-buttons">
                <button
                  onClick={() => toggleWatchLater(movie)}
                  className={`watch-later-btn ${isSaved ? 'added' : ''}`}
                >
                  {isSaved ? (
                    <>
                      <Check size={18} /> Added to Watch Later
                    </>
                  ) : (
                    <>
                      <Plus size={18} /> Watch Later
                    </>
                  )}
                </button>
                <button onClick={() => navigate(-1)} className="go-back-btn">
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails