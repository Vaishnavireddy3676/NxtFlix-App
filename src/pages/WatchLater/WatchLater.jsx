import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useWatchLater } from '../../context/WatchLaterContext'
import './WatchLater.css'

const WatchLater = () => {
  const { watchLater } = useWatchLater()

  return (
    <div className="watch-later-page">
      <Header />
      <div className="watch-later-container">
        <h1 className="page-title">Watch Later</h1>

        {watchLater.length > 0 ? (
          <div className="movie-grid">
            {watchLater.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty-watch-later">
            <p>Your Watch Later list is empty.</p>
            <Link to="/" className="browse-btn">
              Browse Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default WatchLater