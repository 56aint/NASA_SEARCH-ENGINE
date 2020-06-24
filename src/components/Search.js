import React, { useState } from "react";
import getImages from '../requests/getImages';

import "../styles/Search.css";


const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSummit = (event) => {
    event.preventDefault()
    getImages(searchValue)
  };

  return (
    <div className="Search">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasalogo"
      />
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
