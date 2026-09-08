import './ItemCard.css';

const ItemCard = ({ item, isFavorite, toggleFavorite }) => {
  const { name, image, type, weight } = item;

  return (
    <div className="card">
      <img 
        src={image} 
        alt={name} 
        className="card-image" 
        style={{ objectFit: 'contain', background: '#f8f9fa' }} 
      />
      <div className="card-info">
        <h3>{name}</h3>
        <p><strong>Tipo:</strong> {type}</p>
        <p><strong>Peso:</strong> {weight} kg</p>
        
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