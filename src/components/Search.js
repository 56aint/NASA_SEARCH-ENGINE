import React, { useState } from 'react';

import '../styles/Search.css';

const Search = (props) => {
  return (
    <div className="Search">

      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasa logo" height="62" width=""/>
      <input className="input-field" type="text" ></input>

    </div>
  )
}

export default Search;
