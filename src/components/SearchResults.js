import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  return (
    <div className="SearchResults">
        <img className="card-image" src={results} alt="spaceImage" />
    </div>
  );
}


SearchResults.propTypes = {
  image: PropTypes.object,
  results: PropTypes.array,
};

export default SearchResults;
