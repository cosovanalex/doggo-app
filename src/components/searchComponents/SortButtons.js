const SortButtons = ({ selectedBreed, handleSortDirectionChange, sortDirection }) => {
  if (!selectedBreed) return null;

  return (
    <div className="sort-buttons-container">
      <button
        onClick={() => handleSortDirectionChange('asc')}
        className={`sort-button ${sortDirection === 'asc' ? 'active' : ''}`}
      >
        Sort A-Z
      </button>
      <button
        onClick={() => handleSortDirectionChange('desc')}
        className={`sort-button ${sortDirection === 'desc' ? 'active' : ''} sort-button-right`}
      >
        Sort Z-A
      </button>
    </div>
  );
};

export default SortButtons;
