import { useEffect, useState } from 'react';
import { getPopularMovies, getPopularTVShows, getPopularPeople } from '../services/APICalls';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/Searchbar/Searchbar'
import Footer from '../components/Footer/Footer';
import './Home.css'; // Asegúrate de crear y vincular un archivo CSS

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getPopularMovies();
      const tvShowsData = await getPopularTVShows();
      const peopleData = await getPopularPeople();

      setMovies(moviesData.slice(0, 6));
      setTVShows(tvShowsData.slice(0, 6));
      setPeople(peopleData.slice(0, 6));
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="container">
        <h1>Popular Movies</h1>
        <div className="card-container">
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
              <div className="card__info">
                <div className="card__title">{movie.title}</div>
                <div className="card__date">{movie.release_date}</div>
                <div className="card__rating">{movie.vote_average}</div>
              </div>
            </div>
          ))}
        </div>

        <h1>Popular TV Shows</h1>
        <div className="card-container">
          {tvShows.map((tvshow) => (
            <div
              className="card"
              key={tvshow.id}
              onClick={() => {
                window.location.href = `/tv/${tvshow.id}`;
              }}
            >
              <img
                className="card__img"
                src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                alt={tvshow.title}
              />
              <div className="card__info">
                <div className="card__title">{tvshow.title}</div>
                <div className="card__date">{tvshow.release_date}</div>
                <div className="card__rating">{tvshow.vote_average}</div>
              </div>
            </div>
          ))}
        </div>

        <h1>Popular People</h1>
        <div className="card-container">
          {people.map((person) => (
            <div
              className="card"
              key={person.id}
              onClick={() => {
                window.location.href = `/person/${person.id}`;
              }}
            >
              <img
                className="card__img"
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
              <div className="card__info">
                <div className="card__title">{person.name}</div>
                <div className="card__known-for">{person.known_for_department}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
