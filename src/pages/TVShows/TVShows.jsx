// src/components/TVShows/TVShows.js
import { useEffect, useState } from 'react';
import { getPopularTVShows } from '../../services/APICalls';
import CardGrid from '../../components/CardGrid/CardGrid';
import './TVShows.css';

const TVShows = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      const tvShowsData = await getPopularTVShows();
      setTVShows(tvShowsData);
    };

    fetchTVShows();
  }, []);

  return (
    <div className="tvshows-container">
      <h1>Popular TV Shows</h1>
      <CardGrid items={tvShows} type="tvshow" />
    </div>
  );
};

export default TVShows;
