import './App.css';
import React from 'react';

const Card = (props) => {
    const {randPokemonData, selectedPokemon} = props;
    console.log('randPokemonData', randPokemonData);
    console.log('selectedPoke', selectedPokemon);
    if(!randPokemonData && !selectedPokemon) {
        return (
            <div></div>
        )
    } else if(randPokemonData.name && !selectedPokemon) {
        return (
            <div className="grow dib pa2 ma2 br5 shadow-hover">
                <img alt={randPokemonData.name} className="cardImg" src={randPokemonData.sprites.front_default}/>
                <p>{randPokemonData.name}</p>
                <p>Height: {randPokemonData.height}</p>
                <p>Weight: {randPokemonData.weight}</p>
            </div>
        )
    } else {
        return (
            <div className="grow dib pa2 ma2 br5 shadow-hover">
                <img alt={selectedPokemon.name} className="cardImg" src={selectedPokemon.sprites.front_default}/>
                <p>{selectedPokemon.name}</p>
                <p>height: {selectedPokemon.height}</p>
                <p>weight: {selectedPokemon.weight}</p>
            </div>
        )
    }
    // if(randPokemonData) {
    //     return (
    //         <div className="grow dib pa2 ma2 br5 shadow-hover">
    //             <img alt={randPokemonData.name} className="cardImg" src={imgSrc}/>
    //             <p>{randPokemonData.name}</p>
    //             <p>height: {randPokemonData.height}</p>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="grow dib pa2 ma2 br5 shadow-hover">
    //             <img alt={selectedPokemon.name} className="cardImg" src={selectedPokemon.sprites.front_default}/>
    //             <p>{selectedPokemon.name}</p>
    //             <p>height: {selectedPokemon.height}</p>
    //         </div>
    //     )
    // }
}
  
  export default Card;