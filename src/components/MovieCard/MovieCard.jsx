import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="card-poster">
        <img src={movie.poster} alt={movie.title} />
        <div className="card-overlay">
          <span className="card-rating">
            <Star size={14} fill="#ffc107" color="#ffc107" />
            {movie.rating}
          </span>
        </div>
      </div>
      <div className="card-info">
        <h4 className="card-title">{movie.title}</h4>
        <p className="card-sub">{movie.year} • {movie.genre}</p>
      </div>
    </Link>
  )
}

export default MovieCard