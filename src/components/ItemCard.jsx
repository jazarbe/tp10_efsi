import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item, isFavorite, toggleFavorite }) => {
  // Destructuring
  const { id, name, image, biography, appearance } = item;

  return (
    <div className="card">
      <img src={image.url} alt={`Imagen de ${name}`} className="card-image" />
      <div className="card-info">
        <h3>{name}</h3>
        <p><strong>Editorial:</strong> {biography.publisher}</p>
        <p><strong>Raza:</strong> {appearance.race !== 'null' ? appearance.race : 'Desconocida'}</p>
        
        <button 
          className={`btn-fav ${isFavorite ? 'remove' : 'add'}`}
          onClick={() => toggleFavorite(item)}
        >
          {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;