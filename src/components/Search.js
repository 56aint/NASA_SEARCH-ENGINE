import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import "../styles/Search.css";

const Search = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState("");
  const [load, setLoad] = useState(false);

  const handleSummit = async (event) => {
    setLoad(true);
    event.preventDefault();
    setSearchResults(await getImages(searchValue));
    setLoad(false);
  };

  if (load) {
    return (
      <div className="loading">
        <div className="spinner1" />
        <div className="spinner2" />
      </div>
    );
  } else {
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
  }


};

Search.propTypes = {
  setSearchResults: PropTypes.func,
};

export default Search;
