import './App.css';
import React, { useState } from "react";
import Card from './Card';

const PokeList = ({pokemonData, randPokemonData}) => {
  const unfilteredPokemonList = pokemonData.sort((a,b) => a.name.localeCompare(b.name))

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const showPokemon = async (url) => {
    const response = await fetch(url);

    if(!response.ok) {
        console.error(`Error fetching pokemon: ${response.statusText}`)
        return;
    }

     const data = await response.json();
     console.log('data:', data);
     setSelectedPokemon(data);
  }

  return (
    <div> 
        <Card selectedPokemon={selectedPokemon} randPokemonData={randPokemonData}/>
        <ul className="testy">
            {unfilteredPokemonList.map((pokemon) => (
                <li key={pokemon.id} className="pokemon-item">
                    <a href="#" onClick={() => showPokemon(pokemon.url)}>{pokemon.name}</a>
                    {/* <a href="#">{pokemon.name}</a> */}
                </li>
            ))}
        </ul>
    </div>
  )
    // const pokemonArray = pokemonData.map((pokemon) => {
    //     return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} randPokemonData={randPokemonData}/>
    // })
    // return (
    //     <div className="pizza">
    //         {pokemonArray}
    //     </div>
    // )
}

export default PokeList;