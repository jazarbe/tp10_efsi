import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Filtrar héroes por nombre..." 
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;