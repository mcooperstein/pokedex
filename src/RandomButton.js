import React from "react";
import './App.css';

const RandomButton = ({getRandPokemon}) => {
    let randNum = Math.floor(Math.random() * 100);
    let randUrl = `https://pokeapi.co/api/v2/pokemon/${randNum}`
    return (
        <button className="randomize-button" onClick= {() => getRandPokemon(randUrl)}>Choose for me (random)</button>
    )
}

export default RandomButton;