export const fetchInitialData = async () => {
  try {
    const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const listData = await listResponse.json();
    const results = Array.isArray(listData?.results) ? listData.results : [];

    const detailedResponses = await Promise.all(
      results.map(async (poke) => {
        const response = await fetch(poke.url);
        return response.json();
      })
    );

    return detailedResponses.map((data) => ({
      id: data.id,
      name: data.name ? data.name.toUpperCase() : 'DESCONOCIDO',
      image: data.sprites?.front_default || '',
      type: Array.isArray(data.types)
        ? data.types.map((t) => t.type.name).join(', ')
        : 'Sin tipo',
      weight: Number((data.weight ?? 0) / 10).toFixed(1),
    }));
  } catch (error) {
    console.error('Error cargando pokémon:', error);
    throw error;
  }
};
