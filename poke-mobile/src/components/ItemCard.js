import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function ItemCard({ item, isFavorite, toggleFavorite }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>Tipo: {item.type}</Text>
        <Text style={styles.text}>Peso: {item.weight} kg</Text>
        
        <Pressable 
          style={[styles.button, isFavorite ? styles.btnRemove : styles.btnAdd]} 
          onPress={() => toggleFavorite(item)}
        >
          <Text style={styles.buttonText}>
            {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', marginVertical: 8, marginHorizontal: 16, borderRadius: 8, padding: 12, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  image: { width: 90, height: 90, resizeMode: 'contain', backgroundColor: '#f8f9fa', borderRadius: 8 },
  info: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  name: { fontSize: 18, fontWeight: 'bold', textTransform: 'capitalize', marginBottom: 4, color: '#333' },
  text: { fontSize: 14, color: '#666', marginBottom: 2 },
  button: { marginTop: 8, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, alignItems: 'center' },
  btnAdd: { backgroundColor: '#42d1f5' },
  btnRemove: { backgroundColor: '#ff4d4d' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 13 }
});