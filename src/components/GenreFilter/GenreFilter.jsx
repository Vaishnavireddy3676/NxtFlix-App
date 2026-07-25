import React from 'react'
import './GenreFilter.css'

const genres = ['All', 'Action', 'Sci-Fi', 'Drama', 'Comedy', 'Thriller']

const GenreFilter = ({ activeGenre, onSelectGenre }) => {
  return (
    <div className="genre-filter-container">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`genre-btn ${activeGenre === genre ? 'active' : ''}`}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default GenreFilter