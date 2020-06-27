import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  return (
    <div className="SearchResults">
      {results.map((image) => (
        <img
          className="card-image"
          src={image}
          key={image}
          alt="spaceImage"
        />
      ))}
    </div>
  );
};
SearchResults.propTypes = {
  image: PropTypes.object,
  results: PropTypes.array,
};

export default SearchResults;
