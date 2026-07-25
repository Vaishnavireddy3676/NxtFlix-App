import React, { useState, useMemo } from 'react'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import GenreFilter from '../../components/GenreFilter/GenreFilter'
import MovieCard from '../../components/MovieCard/MovieCard'
import moviesData from '../../data/movies'
import './Home.css'

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState('All')

  const trendingMovies = useMemo(() => {
    return [...moviesData]
      .sort((a, b) => Number(b.rating) - Number(a.rating))
  }, [])

  const freshReleases = useMemo(() => {
    return moviesData.filter((m) => m.year >= 2010)
  }, [])

  const filteredMovies = useMemo(() => {
    if (selectedGenre === 'All') return moviesData
    return moviesData.filter((m) => m.genre === selectedGenre)
  }, [selectedGenre])

  return (
    <div className="home-page">
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover your next favourite</h1>
          <p>Browse titles across every genre. Add to Watch Later and pick up anytime.</p>
        </div>
      </div>

      <Carousel title="Trending Now" movies={trendingMovies} />
      <Carousel title="Fresh Releases" movies={freshReleases} />

      <section className="catalog-section">
        <GenreFilter activeGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
        {filteredMovies.length > 0 ? (
          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty-catalog">
            <p>No movies found for this genre.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Home