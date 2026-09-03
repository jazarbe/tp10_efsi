import React, { useState, useEffect } from 'react';
import { fetchInitialHeroes } from '../services/api';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import './Home.css';

const Home = ({ favorites, toggleFavorite }) => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Consulta inicial a la API
    const getHeroes = async () => {
      try {
        setIsLoading(true);
        // Pedimos héroes que contengan "man" por defecto para tener una lista inicial
        const data = await fetchInitialHeroes('man');
        setHeroes(data);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setIsLoading(false);
      }
    };

    getHeroes();
  }, []);

  // Filtrado local utilizando el método .filter() de arrays (Punto 4)
  const filteredHeroes = heroes.filter((hero) => 
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h2>Listado de Superhéroes</h2>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Renderizado Condicional (Punto 6) */}
      {isLoading && <p className="status-msg loading">Cargando información...</p>}
      
      {error && !isLoading && <p className="status-msg error">{error}</p>}
      
      {!isLoading && !error && filteredHeroes.length === 0 && (
        <p className="status-msg empty">No encontramos resultados para tu búsqueda.</p>
      )}

      {!isLoading && !error && filteredHeroes.length > 0 && (
        <ItemList 
          items={filteredHeroes} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
      )}
    </div>
  );
};

export default Home;