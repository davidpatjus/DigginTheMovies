// src/components/Home/Home.js
import { useEffect, useState } from 'react';
import { getPopularMovies, getPopularTVShows, getPopularPeople } from '../../services/APICalls';
import CardGrid from '../../components/CardGrid/CardGrid';
import './Home.css';

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
      <div className="container">
        <h1>Popular Movies</h1>
        <CardGrid items={movies} type="movies" />

        <h1>Popular TV Shows</h1>
        <CardGrid items={tvShows} type="tvshows" />

        <h1>Popular People</h1>
        <CardGrid items={people} type="person" />
      </div>
    </>
  );
};

export default Home;
