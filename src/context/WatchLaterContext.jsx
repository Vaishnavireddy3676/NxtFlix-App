import React, { createContext, useContext, useState, useEffect } from 'react'

const WatchLaterContext = createContext()

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState(() => {
    const saved = localStorage.getItem('nxtflix_watch_later')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('nxtflix_watch_later', JSON.stringify(watchLater))
  }, [watchLater])

  const isInWatchLater = (id) => watchLater.some((item) => item.id === id)

  const toggleWatchLater = (movie) => {
    if (isInWatchLater(movie.id)) {
      setWatchLater(watchLater.filter((item) => item.id !== movie.id))
    } else {
      setWatchLater([...watchLater, movie])
    }
  }

  return (
    <WatchLaterContext.Provider value={{ watchLater, isInWatchLater, toggleWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  )
}

export const useWatchLater = () => useContext(WatchLaterContext)