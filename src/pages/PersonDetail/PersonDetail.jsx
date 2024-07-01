// src/components/PersonDetails/PersonDetails.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonDetails } from '../../services/APICalls';
import './PersonDetail.css';

const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      const personData = await getPersonDetails(id);
      setPerson(personData);
    };

    fetchPersonDetails();
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="person-details">
      <h1>{person.name}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
      <p>{person.biography}</p>
      <div>Known For: {person.known_for_department}</div>
      {/* Añadir más detalles según sea necesario */}
    </div>
  );
};

export default PersonDetails;
