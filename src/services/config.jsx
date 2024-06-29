import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c2d4f11f761a019124d3e50af0d31580',
    language: 'es-ES', // Idioma de los datos que quieres recibir
  },
});

export default api;
