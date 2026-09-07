import axios from 'axios';

export const fetchInitialData = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
    
    const pokemons = response.data.results.map((poke, index) => {
      const id = index + 1;
      return {
        id: id,
        name: poke.name.toUpperCase(),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        species: 'Pokémon',
        status: 'Disponible'
      };
    });

    return pokemons;
  } catch (error) {
    throw error;
  }
};