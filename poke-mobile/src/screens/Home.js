import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import ItemCard from '../components/ItemCard';

export default function HomeScreen({ favorites, toggleFavorite }) {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      // Consultamos los primeros 30 pokemones para la práctica
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
      const data = await response.json();
      
      // Hacemos un fetch detallado por cada pokemon para obtener su imagen, peso y tipo
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            type: details.types[0].type.name,
            weight: details.weight,
          };
        })
      );

      setPokemons(detailedPokemons);
    } catch (error) {
      console.error('Error al cargar la PokeAPI:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#cc0000" />
        <Text style={{ marginTop: 10 }}>Cargando Pokemones...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon por nombre..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredPokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
            toggleFavorite={toggleFavorite}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { backgroundColor: '#fff', padding: 12, margin: 16, borderRadius: 8, borderWidth: 1, borderColor: '#ddd', fontSize: 16 }
});