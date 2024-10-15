import logo from './Pokémon_logo.png';
import logo2 from './Pokeball.png';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import RandomButton from './RandomButton';
import PokeList from './PokeList';
import { pokemonData } from './pokemonData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonData: pokemonData,
      randPokemonData: {},
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  /*onRandomSelect = () => {
    // let randNum = Math.floor(Math.random() * 100);
    const [randPokemon, setRandPokemon] = useState("");
    // useEffect(() => {
    //   axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
    //     .then((res) => {
    //       console.log(res);
    //       setCharacters(res.data);
    //     });
    // }, []);
    this.setState({searchField: characters})
  }*/

  getRandPokemon = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error fetching Pokemon: ${response.statusText}`);
      return;
    }

    const data = await response.json();
    console.log(data);
    this.setState({searchField: data.name})
    this.setState({randPokemonData: data});
  }

  render() {
    const filteredPokemon = this.state.pokemonData.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="pokemon logo" />
          <p>
            Welcome to the Pokedex (Pokemon Roledex)
          </p>
          <img src={logo2} className="pokeball" alt="pokeball"/>
        </header>
        <main className="App-main">
          <SearchBox searchChange={this.onSearchChange} searchField={this.state.searchField}/>
          <RandomButton getRandPokemon={this.getRandPokemon}/>
        </main>
        <CardList pokemonData={filteredPokemon} randPokemonData={this.state.randPokemonData}/>
        <PokeList />
      </div>
    );
  }
}

export default App;
