import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies, searchTVShows, searchPeople } from '../../services/APICalls';
import './Searchbar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('movies');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const performSearch = async (query, searchType) => {
    try {
      setLoading(true);
      setError('');

      let results;
      switch (searchType) {
        case 'movies':
          results = await searchMovies(query);
          break;
        case 'tvShows':
          results = await searchTVShows(query);
          break;
        case 'people':
          results = await searchPeople(query);
          break;
        default:
          results = [];
      }

      if (results.length > 0) {
        navigate(`/search/${query}/${searchType}`);
      } else {
        setError('No results found.');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('Error fetching search results. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query, searchType);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setError('');
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
          placeholder="Search movies, TV shows, or people..."
          className="searchbar-input"
        />
        <button type="submit" className="searchbar-button">Search</button>
        <button type="button" onClick={clearSearch} className="searchbar-button">Clear</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="search-error">{error}</p>}
    </div>
  );
};

export default SearchBar;
