import axios from 'axios';

export const fetchInitialData = async () => {
  try {
    const listResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
      const detailedRequests = listResponse.data.results.map(poke => axios.get(poke.url));
      const detailedResponses = await Promise.all(detailedRequests);
      const pokemons = detailedResponses.map((res) => {
      const data = res.data;
      const tipos = data.types.map(t => t.type.name).join(', ');
      
      return {
        id: data.id,
        name: data.name.toUpperCase(),
        image: data.sprites.front_default, 
        type: tipos,
        weight: data.weight / 10 //kg
      };
    });

    return pokemons;
  } catch (error) {
    throw error;
  }
};