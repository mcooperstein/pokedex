import './App.css';
import { pokemonData } from './pokemonData';
import React, { useState } from "react";

function PokeList () {
  const [pokemonList, setPokemonList] = useState(pokemonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const unfilteredPokemonList = pokemonList.sort((a,b) => a.name.localeCompare(b.name))

  const showPokemon = async (url) => {
    const response = await fetch(url);

    if(!response.ok) {
        console.error(`Error fetching pokemon: ${response.statusText}`)
        return;
    }

     const data = await response.json();
     console.log(data);
     setSelectedPokemon(data);
  }

  return (
    <div>
        <ul className="testy">
            {unfilteredPokemonList.map((pokemon) => (
                <li key={pokemon.id} className="pokemon-item">
                    <a href="#" onClick={() => showPokemon(pokemon.url)}>{pokemon.name}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PokeList