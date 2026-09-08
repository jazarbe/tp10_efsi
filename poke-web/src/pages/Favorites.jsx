import ItemList from '../components/ItemList';
import './Home.css'; 

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="home-page">
      <h2>Mis Favoritos</h2>
      
      {favorites.length === 0 ? (
        <p className="status-msg empty">Aún no tienes elementos guardados en favoritos.</p>
      ) : (
        <ItemList 
          items={favorites} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
      )}
    </div>
  );
};

export default Favorites;