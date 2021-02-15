import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
    <Form inline onSubmit={searchForPokemon} style={{ margin: "auto", justifyContent: "center"}}>
      <FormControl 
        type="text" 
        className="mr-sm-2"
        style={{fontFamily: 'Courier New' && "monospace"}}
        value={pokemonName} 
        placeholder="Search for Pokemon" 
        onChange={handleOnChangeName} 
      />
      <Button 
        variant="outline-dark" 
        style={{fontFamily: 'Courier New' && "monospace"}}
        type="submit"
      >
        Search
      </Button>
    </Form>
  )
};