import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { searchDogs, fetchDogsById, fetchBreeds, generateMatch } from '../api/api';
import '../main.css';
import MatchResult from './MatchResult';
import VideoBackground from './VideoBackground';
import BreedSelect from './searchComponents/BreedSelect';
import SortButtons from './searchComponents/SortButtons';
import ZipSearch from './searchComponents/ZipSearch';
import MatchButton from './searchComponents/MatchButton';
import DogCard from './searchComponents/DogCard';
import Pagination from './searchComponents/Pagination';


const Search = () => {
  const [selectedZipCode, setSelectedZipCode] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visiblePageNumbers, setVisiblePageNumbers] = useState([1, 2, 3]);
  const [favorites, setFavorites] = useState(new Set());
  const [matchedDog, setMatchedDog] = useState(null);
  const [allDogs, setAllDogs] = useState([]);
  const [selectedDogCard, setSelectedDogCard] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchBreedsData = async () => {
      const breedsData = await fetchBreeds();
      const sortedBreeds = breedsData.sort((a, b) => a.localeCompare(b));
      setBreeds(sortedBreeds);
    };

    fetchBreedsData();
  }, []);

  useEffect(() => {
    if (selectedBreed) {
      handleSearch();
    }
  }, [selectedBreed]);

  const fetchAllDogs = async (filters, dogs = [], from = 0) => {
    const updatedFilters = { ...filters, from, size: 100 }; // Fetch 100 dogs at a time
    const response = await searchDogs(updatedFilters);

    const dogIds = response.resultIds;
    const fetchedDogs = await fetchDogsById(dogIds);

    const newDogs = dogs.concat(fetchedDogs);

    if (fetchedDogs.length > 0) {
      // There are more dogs to fetch
      return fetchAllDogs(filters, newDogs, from + 100);
    } else {
      // All dogs fetched
      return newDogs;
    }
  };

  const sortDogs = (dogs, direction) => {
    return dogs.sort((a, b) => {
      if (direction === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  };

  const handleSearch = async (direction = sortDirection) => {
    try {
      const filters = {
        breeds: selectedBreed ? [selectedBreed] : [],
        zipCodes: selectedZipCode ? [selectedZipCode] : [],
        ageMin: null,
        ageMax: null,
      };

      const fetchedDogs = await fetchAllDogs(filters);

      // Sort fetchedDogs by name alphabetically
      const sortedDogs = sortDogs(fetchedDogs, direction);

      setAllDogs(sortedDogs);
      setDogs(sortedDogs.slice(0, 25));
      setCurrentPage(1);

      setTotalPages(Math.ceil(fetchedDogs.length / 25));

      // Add this line to clear the "Search by ZIP" input field
      setSelectedZipCode('');
      setSearchResult(null);
    } catch (error) {
      console.error('Error searching dogs:', error);
    }
  };

  const handleSortDirectionChange = (newDirection) => {
    setSortDirection(newDirection);

    const sortedDogs = sortDogs(allDogs, newDirection);

    setAllDogs(sortedDogs);
    setDogs(sortedDogs.slice((currentPage - 1) * 25, currentPage * 25));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    const start = Math.max(1, newPage - 1);
    const end = Math.min(start + 2, totalPages - 1);

    setVisiblePageNumbers([start, start + 1, end]);

    const startIndex = (newPage - 1) * 25;
    setDogs(allDogs.slice(startIndex, startIndex + 25));
  };

  const toggleFavorite = (dogId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(dogId)) {
      newFavorites.delete(dogId);
    } else {
      newFavorites.add(dogId);
    }
    setFavorites(newFavorites);
  };

  const handleMatch = async () => {
    try {
      const matchedDogData = await generateMatch(Array.from(favorites));
      const matchedDogId = matchedDogData.match;
      const fetchedMatchedDog = await fetchDogsById([matchedDogId]);

      const newWindow = window.open('', '_blank');
      newWindow.document.write('<div id="match-root"></div>');
      newWindow.document.title = 'Your Match';

      ReactDOM.render(
        <React.StrictMode>
          <MatchResult dog={fetchedMatchedDog[0]} />
        </React.StrictMode>,
        newWindow.document.getElementById('match-root')
      );
    } catch (error) {
      console.error('Error fetching matched dog:', error);
    }
  };

  const handleDogCardClick = (dogId) => {
    if (selectedDogCard === dogId) {
      setSelectedDogCard(null);
    } else {
      setSelectedDogCard(dogId);
    }
  };

  const handleZipSearchResult = (dog) => {
    setSearchResult(dog);
    setSelectedDogCard(dog.id);
  };

  return (
    <div className={selectedBreed ? 'search-container' : ''}>
      {!selectedBreed && <VideoBackground />}
      <div
        className={`breed-select-container${selectedBreed ? ' breed-selected' : ''}`}
      >
        <div className="sort-and-select-container">
          <BreedSelect
            selectedBreed={selectedBreed}
            setSelectedBreed={setSelectedBreed}
            breeds={breeds}
          />
        </div>
        <div className="sort-buttons-wrapper">
          <SortButtons
            selectedBreed={selectedBreed}
            sortDirection={sortDirection}
            handleSortDirectionChange={handleSortDirectionChange}
          />
        </div>
      </div>
      {selectedBreed && (
        <>
          <div className="button-container">
          <ZipSearch
            selectedZipCode={selectedZipCode}
            setSelectedZipCode={setSelectedZipCode}
            handleSearch={handleSearch}
            handleZipSearchResult={handleZipSearchResult}
            currentPage={currentPage}
            />
          </div>
          {favorites.size > 0 && (
          <div className="match-button-wrapper">
            <MatchButton handleMatch={handleMatch} />
          </div>
        )}
          </>
        )}
        <DogCard
          dogs={searchResult ? [searchResult] : dogs}
          handleDogCardClick={handleDogCardClick}
          selectedDogCard={selectedDogCard}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
    
        {selectedBreed && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    );
  };
  
export default Search;
  


