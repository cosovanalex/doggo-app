import React from 'react';

const ZipSearch = ({ selectedZipCode, setSelectedZipCode, handleSearch }) => (
  <>
    <input
      type="text"
      placeholder="Search by ZIP"
      value={selectedZipCode}
      onChange={(e) => setSelectedZipCode(e.target.value)}
      className="zip-search-input"
    />
    <button onClick={() => handleSearch()} className="zip-search-button">
      Search
    </button>
  </>
);

export default ZipSearch;
