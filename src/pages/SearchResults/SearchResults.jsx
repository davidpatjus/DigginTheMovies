import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies, searchTVShows, searchPeople } from '../../services/APICalls';
import CardGrid from '../../components/CardGrid/CardGrid';
import './SearchResults.css';

const SearchResults = () => {
  const { query, type } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (type) {
          case 'movies':
            data = await searchMovies(query);
            break;
          case 'tvShows':
            data = await searchTVShows(query);
            break;
          case 'people':
            data = await searchPeople(query);
            break;
          default:
            data = [];
        }
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
      }
    };

    fetchData();
  }, [query, type]);

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <CardGrid items={results} type={type == 'people' ?  'person' : type} />

    </div>
  );
};

export default SearchResults;
