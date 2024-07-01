// src/components/SeriesDetail/SeriesDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTVShowDetails } from '../../services/APICalls';
import './SeriesDetail.css';

const SeriesDetail = () => {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      const tvShowData = await getTVShowDetails(id);
      setTVShow(tvShowData);
    };

    fetchTVShowDetails();
  }, [id]);

  if (!tvShow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tvshow-details">
      <h1>{tvShow.name}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt={tvShow.name} />
      <p>{tvShow.overview}</p>
      <div>First Air Date: {tvShow.first_air_date}</div>
      <div>Rating: {tvShow.vote_average}</div>
      {/* Añadir más detalles según sea necesario */}
    </div>
  );
};

export default SeriesDetail;
