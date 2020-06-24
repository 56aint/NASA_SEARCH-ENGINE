import React, { useState } from "react";

import "../styles/Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasalogo"
      />
      <form className="search-form">
        <input
          className="input-field"
          type="text"
          placeholder="type image name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button className="search-button" type="submit">Go!</button>
      </form>
    </div>
  );
};

export default Search;
