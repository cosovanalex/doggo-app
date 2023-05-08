import React from 'react';

const BreedSelect = ({ selectedBreed, setSelectedBreed, breeds }) => (
  <div className="breed-select">
    <select
      key={selectedBreed || 'empty'} // Add this line
      value={selectedBreed}
      onChange={(e) => setSelectedBreed(e.target.value)}
    >
      <option value="">SELECT A BREED</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  </div>
);

export default BreedSelect;
