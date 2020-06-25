import React, { useState } from "react";
import getImages from '../requests/getImages';
//import { setSearchResults } from './App'

import "../styles/Search.css";


const Search = ({setSearchResults}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSummit = (event) => {
    event.preventDefault()
    setSearchResults(getImages(searchValue));
  };

  return (
    <div className="Search">
      <form className="search-form" onSubmit={handleSummit}>
        <input
          className="input-field"
          type="text"
          placeholder="type image name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button className="search-button">Go!</button>
      </form>
    </div>
  );
};

export default Search;
