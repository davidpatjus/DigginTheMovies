// src/components/Card/Card.jsx
import './Card.css';

const Card = ({ item, type }) => {
  const { id, title, name, poster_path, profile_path } = item;
  const imagePath = poster_path || profile_path;
  const displayTitle = title || name;

  const handleClick = () => {
    window.location.href = `/${type}/${id}`;
  };

  return (
    <div className="card" onClick={handleClick}>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${imagePath}`} 
        alt={displayTitle} 
        className="card-image" 
      />
      <div className="card-content">
        <h3 className="card-title">{displayTitle}</h3>
        <button className="card-button">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
