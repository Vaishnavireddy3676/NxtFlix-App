import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MovieCard from '../MovieCard/MovieCard'
import './Carousel.css'

const Carousel = ({ title, movies }) => {
  const rowRef = useRef(null)

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => handleScroll('left')}>
          <ChevronLeft size={24} />
        </button>
        <div className="carousel-row" ref={rowRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="carousel-item">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => handleScroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default Carousel