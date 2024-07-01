import { useState, useEffect } from 'react';
import SearchBar from '../../components/Searchbar/Searchbar';
import CardGrid from '../../components/CardGrid/CardGrid';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { getPopularMovies, getPopularPeople, getPopularTVShows } from '../../services/APICalls';

const ExamplePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMovies = await getPopularTVShows();
        setMovies(popularMovies);
      } catch (error) {
        setError('Error fetching popular movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <SearchBar />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <CardGrid items={movies} type="movie" />}
    </div>
  );
};

export default ExamplePage;
