// src/components/People/People.js
import { useEffect, useState } from 'react';
import { getPopularPeople } from '../../services/APICalls';
import CardGrid from '../../components/CardGrid/CardGrid'
import './People.css';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const peopleData = await getPopularPeople();
      setPeople(peopleData);
    };

    fetchPeople();
  }, []);

  return (
    <div className="people-container">
      <h1>Popular People</h1>
      <CardGrid items={people} type="person" />
    </div>
  );
};

export default People;
