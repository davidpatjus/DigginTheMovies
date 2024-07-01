// src/components/MovieDetails/MovieDetails.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/APICalls';
import './MovieDetail.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await getMovieDetails(id);
      setMovie(movieData);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <div>Release Date: {movie.release_date}</div>
      <div>Rating: {movie.vote_average}</div>
      {/* Añadir más detalles según sea necesario */}
    </div>
  );
};

export default MovieDetails;
