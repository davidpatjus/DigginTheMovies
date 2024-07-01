import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import SeriesDetail from './pages/SeriesDetail/SeriesDetail';
import PersonDetail from './pages/PersonDetail/PersonDetail';
import SearchResults from './pages/SearchResults/SearchResults';
import Movies from './pages/Movies/Movies';
import TVShows from './pages/TVShows/TVShows';
import People from './pages/People/People';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<TVShows />} />
          <Route path="/people" element={<People />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
