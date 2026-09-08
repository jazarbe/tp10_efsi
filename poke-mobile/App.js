import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/screens/Home';
import Favorites from './src/screens/Favorites';

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavs = await AsyncStorage.getItem('@superFavs');
        if (savedFavs) {
          const parsed = JSON.parse(savedFavs);
          setFavorites(Array.isArray(parsed) ? parsed : []);
        }
      } catch (error) {
        console.error('Error cargando favoritos:', error);
      }
    };

    loadFavorites();
  }, []);

  const toggleFavorite = async (poke) => {
    try {
      let newFavorites;
      const isFavorite = favorites.some((fav) => fav.id === poke.id);

      if (isFavorite) {
        newFavorites = favorites.filter((fav) => fav.id !== poke.id);
      } else {
        newFavorites = [...favorites, poke];
      }

      setFavorites(newFavorites);
      await AsyncStorage.setItem('@superFavs', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error guardando favoritos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Text style={{ color: '#000000', fontWeight: '700', fontSize: 18, marginRight: 10 }}>Poke explorer</Text>
        <Pressable
          onPress={() => setActiveTab('home')}
          style={[styles.tab, activeTab === 'home' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'home' && styles.tabTextActive]}>Inicio</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('favorites')}
          style={[styles.tab, activeTab === 'favorites' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'favorites' && styles.tabTextActive]}>❤</Text>
        </Pressable>
      </View>

      {activeTab === 'home' ? (
        <Home favorites={favorites} toggleFavorite={toggleFavorite} />
      ) : (
        <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: '#F6E000',
    gap: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
  },
  
  activeTab: {
    backgroundColor: '#ffffff',
  },
  tabText: {
    color: '#000000',
    fontWeight: '700',
  },
  tabTextActive: {
    color: '#cc0000',
  },
});