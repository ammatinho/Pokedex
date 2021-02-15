import React, { useState } from 'react';
import { pokeApi, Pokemon } from './apis/pokedex';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResult } from './components/SearchResult';
import Navbar from 'react-bootstrap/Navbar';

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
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{fontFamily: 'Courier New' && "monospace", fontSize: "1.5rem"}}>Pokedex</Navbar.Brand>
      </Navbar>
      <div style={{ margin:"50px"}}>
        <h1>Which Pokemon are you looking for?</h1>
        <br />
        <SearchBar onSearch={searchForPokemon} />
        <br />
        <SearchResult pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
