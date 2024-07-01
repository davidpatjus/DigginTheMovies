// src/components/SearchBar/SearchBar.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies, searchTVShows, searchPeople } from '../../services/APICalls';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('movies');
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        performSearch(query);
      }
    }, 300); // Espera 300 ms después de que el usuario deja de escribir

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchType]);

  const performSearch = async (query) => {
    try {
      let results;
      switch (searchType) {
        case 'movies':
          results = await searchMovies(query);
          console.log('Movies:', results);
          break;
        case 'tvShows':
          results = await searchTVShows(query);
          console.log('TV Shows:', results);
          break;
        case 'people':
          results = await searchPeople(query);
          console.log('People:', results);
          break;
        default:
          results = [];
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSearch} className="searchbar-form">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="searchbar-select"
        >
          <option value="movies">Movies</option>
          <option value="tvShows">TV Shows</option>
          <option value="people">People</option>
        </select>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="searchbar-input"
        />
        <button type="submit" className="searchbar-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
