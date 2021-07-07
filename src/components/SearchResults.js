import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  return (
    <div className="SearchResults" data-testid="SearchResults">
        <img className="card-image" data-testid="card-image" src={results} alt="spaceImage" />
    </div>
  );
}


SearchResults.propTypes = {
  image: PropTypes.object,
  results: PropTypes.array,
};

export default SearchResults;
