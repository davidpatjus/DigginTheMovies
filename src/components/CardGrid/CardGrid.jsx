// src/components/CardGrid/CardGrid.jsx
import './CardGrid.css';
import Card from '../Card/Card';

const CardGrid = ({ items, type }) => {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <Card key={item.id} item={item} type={type} />
      ))}
    </div>
  );
};

export default CardGrid;
