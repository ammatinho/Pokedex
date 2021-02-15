import React, { useState } from 'react';
import { pokeApi, Pokemon } from './apis/pokedex';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResult } from './components/SearchResult';

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined |null >(undefined);

  const searchForPokemon = async (pokemonName: string) => {
    try {
      const response = await pokeApi.getPokemon(pokemonName);
      setPokemon(response.data);
    } 
    catch {
      setPokemon(null);
    }
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <h2>Which Pokemon are you looking for?</h2>
      <SearchBar onSearch={searchForPokemon} />
      <SearchResult pokemon={pokemon} />
    </div>
  );
}

export default App;
