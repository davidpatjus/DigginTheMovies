// src/components/Movies/Movies.js
import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../services/APICalls';
import CardGrid from '../../components/CardGrid/CardGrid';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getPopularMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      <h1>Popular Movies</h1>
      <CardGrid items={movies} type="movies" />
    </div>
  );
};

export default Movies;
