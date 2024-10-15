import React from "react";
import './App.css';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="search-container">
          <input className="search-box" type="text" placeholder="search the pokedex..." onChange={searchChange} value={searchField}/>
        </div>
    )
}

export default SearchBox;