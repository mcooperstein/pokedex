import React from 'react';
import Card from './Card';

const CardList = ({pokemonData, randPokemonData}) => {
    const pokemonArray = pokemonData.map((pokemon) => {
        return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} randPokemonData={randPokemonData}/>
    })
    return (
        <div className="pizza">
            {pokemonArray}
        </div>
    )
}

export default CardList;