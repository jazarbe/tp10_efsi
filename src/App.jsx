import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
  // Inicializar favoritos desde LocalStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('superFavs');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  // Guardar en LocalStorage cada vez que cambien los favoritos
  useEffect(() => {
    localStorage.setItem('superFavs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (hero) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === hero.id);
      
      if (isFavorite) {
        // filter para quitar de favoritos
        return prevFavorites.filter((fav) => fav.id !== hero.id);
      } else {
        // spread operator para agregar a favoritos sin duplicados
        return [...prevFavorites, hero];
      }
    });
  };

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route 
            path="/" 
            element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} 
          />
          <Route 
            path="/favorites" 
            element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} 
          />
        </Routes>
      </main>
    </>
  );
};

export default App;