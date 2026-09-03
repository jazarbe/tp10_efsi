import React from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';

const ItemList = ({ items, favorites, toggleFavorite }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard 
          key={item.id} 
          item={item} 
          // Evaluamos si el item actual existe en el array de favoritos
          isFavorite={favorites.some((fav) => fav.id === item.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default ItemList;