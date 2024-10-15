import './App.css';
import React from 'react';

const Card = (props) => {
    const {name, url, randPokemonData} = props;
    console.log('randPokemonData', randPokemonData);
    let imgSrc = '';
    if (randPokemonData.sprites.other.dream_world_front_default) {
        imgSrc = randPokemonData.sprites.other.dream_world_front_default;
    } else if(randPokemonData.sprites.front_default) {
        imgSrc = randPokemonData.sprites.front_default;
    } else {
        imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png"
    }
    return (
    <div className="grow dib pa2 ma2 br5 shadow-hover">
        <img alt={name} className="cardImg" src={imgSrc}/>
        <p>{name}</p>
        <p>{url}</p>
    </div>
    );
}
  
  export default Card;