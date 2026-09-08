import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('pokeFavs');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem('pokeFavs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (poke) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === poke.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== poke.id);
      } else {
        return [...prevFavorites, poke];
      }
    });
  };

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
        </Routes>
      </main>
    </>
  );
};

export default App;