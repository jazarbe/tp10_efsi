import './ItemCard.css';

const ItemCard = ({ item, isFavorite, toggleFavorite }) => {
  const { name, image, species, status } = item;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" style={{ objectFit: 'contain', background: '#f8f9fa' }} />
      <div className="card-info">
        <h3>{name}</h3>
        <p><strong>Tipo:</strong> {species}</p>
        <p><strong>Estado:</strong> {status}</p>
        
        <button 
          className={`btn-fav ${isFavorite ? 'remove' : 'add'}`}
          onClick={() => toggleFavorite(item)}
        >
          {isFavorite ? 'Sacar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;