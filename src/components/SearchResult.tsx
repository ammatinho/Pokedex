import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { pokeApi, Pokemon, PokemonSpecies } from '../apis/pokedex';

interface SearchResultProps{
  pokemon: Pokemon | undefined | null;
};

export function SearchResult({pokemon}: SearchResultProps){
  const [species, setSpecies] = useState<PokemonSpecies | undefined>(undefined);

  useEffect(() => {
    const fetchSpecies =  async () => {
      if (pokemon) {
        const response = await pokeApi.getPokemonSpecies(pokemon);
        setSpecies(response.data)
      }
    }
    fetchSpecies();
  }, [pokemon]);

  if(pokemon === undefined) {
    return <></>
  };

  if(pokemon === null) {
    return <div>No Pokemon Found</div>
  };

  return (
    <div style={{ width: "18rem", margin: "auto"}}>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <br />
      <h1>{pokemon.name.toUpperCase()}</h1>
      <p>{species?.flavor_text_entries.filter((f) => f.language.name === "en")[0].flavor_text}</p>
      <br />
      <h1>Abilities</h1>
      <div>
        {pokemon.abilities.map(ability => (
          <div key={ability.ability.url} style={{ textAlign: "left"}}>
            <ListGroup>
              <ListGroup.Item variant="light" style={{ fontFamily: 'Courier New' && "monospace", textTransform: "capitalize"}}>
                {ability.ability.name}
              </ListGroup.Item>
            </ListGroup>
          </div>
        ))}
      </div>
    </div>
  )
};