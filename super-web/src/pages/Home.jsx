import { useState, useEffect } from 'react';
import { fetchInitialData } from '../services/api';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import './Home.css';

const Home = ({ favorites, toggleFavorite }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchInitialData();
        setItems(data);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const filteredItems = items.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h2>Explorador de Avatares</h2>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {isLoading && <p className="status-msg loading">Cargando información...</p>}
      {error && !isLoading && <p className="status-msg error">{error}</p>}
      {!isLoading && !error && filteredItems.length === 0 && (
        <p className="status-msg empty">No encontramos resultados.</p>
      )}
      {!isLoading && !error && filteredItems.length > 0 && (
        <ItemList items={filteredItems} favorites={favorites} toggleFavorite={toggleFavorite} />
      )}
    </div>
  );
};

export default Home;