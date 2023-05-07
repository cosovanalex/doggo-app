import React from 'react';

const MatchButton = ({ handleMatch }) => (
  <button onClick={handleMatch} className="zip-search-button">
    Find a Match
  </button>
);

export default MatchButton;
