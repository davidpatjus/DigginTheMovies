import React, { useEffect, useState } from 'react';
import { getPopularMovies, getPopularTVShows, getPopularPeople } from '../services/APICalls';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getPopularMovies();
      const tvShowsData = await getPopularTVShows();
      const peopleData = await getPopularPeople();

      setMovies(moviesData);
      setTVShows(tvShowsData);
      setPeople(peopleData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {movies.map((movie) => (
                <div
                    className="card"
                    key={movie.id}
                    onClick={() => {
                        window.location.href = `/movie/${movie.id}`;
                    }}
                >
                    <img
                        className="card__img"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="card__titulo">{movie.title}</div>
                    <div className="card__fecha">{movie.release_date}</div>
                    <div className="card__calificacion">{movie.vote_average}</div>
                </div>
            ))}

      <h1>Popular TV Shows</h1>
      {tvShows.map((tvshow) => (
                <div
                    className="card"
                    key={tvshow.id}
                    onClick={() => {
                        window.location.href = `/movie/${tvshow.id}`;
                    }}
                >
                    <img
                        className="card__img"
                        src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                        alt={tvshow.title}
                    />
                    <div className="card__titulo">{tvshow.title}</div>
                    <div className="card__fecha">{tvshow.release_date}</div>
                    <div className="card__calificacion">{tvshow.vote_average}</div>
                </div>
            ))}

      <h1>Popular People</h1>
      {people.map((person) => (
                <div
                    className="card"
                    key={person.id}
                    onClick={() => {
                        window.location.href = `/movie/${person.id}`;
                    }}
                >
                    <img
                        className="card__img"
                        src={`https://image.tmdb.org/t/p/w500${person.poster_path}`}
                        alt={person.title}
                    />
                    <div className="card__titulo">{person.title}</div>
                    <div className="card__fecha">{person.release_date}</div>
                    <div className="card__calificacion">{person.vote_average}</div>
                </div>
            ))}
    </div>
  );
};

export default Home;
