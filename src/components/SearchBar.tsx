import React, { useState } from 'react';

interface SearchBarProps{
  onSearch: (pokemon: string) => void
};

export function SearchBar({onSearch}: SearchBarProps) {
  const [pokemonName, setPokemonName] = useState("");

  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPokemonName(e.target.value)
  };

  const searchForPokemon = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  onSearch(pokemonName);
  };

  return (
    <form onSubmit={searchForPokemon}>
      <input value={pokemonName} placeholder="Search for Pokemon" onChange={handleOnChangeName} />
      <button type="submit">Search</button>
    </form>
  )
};