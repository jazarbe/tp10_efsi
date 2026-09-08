# TP 10 - Repaso

## Integrantes
- Jazmin Arias Berlin
- Diana Park

## API utilizada
PokeAPI: [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon/ditto)

## Descripción breve de la aplicación
Es una aplicación para buscar, ver y guardar en favoritos a nuestros Pokémon preferidos. Hicimos dos versiones: una para la web y otra adaptada para el celu (móvil).

## Organización de los componentes
- Dividimos el proyecto separando las pantallas principales (Home y Favorites) en una carpeta de screens y usamos un componente reutilizable para las tarjetas (ItemCard).
- Para guardar los favoritos en el celu usamos AsyncStorage (con la clave @pokeFavs), y en el archivo principal (App.js) manejamos el estado global de la lista.

## Funcionalidades
- Trae los datos de la PokeAPI haciendo peticiones asíncronas.
- Tiene una barra de búsqueda para filtrar los Pokémon por nombre al instante.
- Se pueden agregar o sacar Pokémon de favoritos y la app los guarda para que no se borren.
- Se puede navegar entre la pantalla de inicio y la de favoritos usando solapas (Tabs).

## Diferencias entre React y React Native
- **Componentes:** En la web usamos etiquetas de HTML normal (`div`, `p`, etc.), mientras que en React Native usamos componentes nativos específicos como `View`, `Text` o `Pressable`.
- **Estilos:** En la web usamos archivos CSS clásicos (como `Header.css`), y en React Native usamos `StyleSheet.create()` adaptado a Flexbox para mobile.
- **Ejecución:** La versión web corre directo en el navegador, y la mobile corre a través de Expo usando la app o la web preview.
