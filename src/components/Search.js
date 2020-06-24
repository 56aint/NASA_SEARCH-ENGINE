import React, { useState } from 'react';

import '../styles/Search.css';

const Search = () => {
  return (
    <div className="search-form">

      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasalogo"/>
      <input className="input-field" type="text" placeholder="type image name" ></input>

    </div>
  )
}

export default Search;
