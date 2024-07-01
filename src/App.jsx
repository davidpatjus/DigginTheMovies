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
import ExamplePage from './pages/ExamplePage/ExamplePage'
import SearchBar from './components/Searchbar/Searchbar';

function App() {
  return (
    <ThemeProvider>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<TVShows />} />
          <Route path="/people" element={<People />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/tvshows/:id" element={<SeriesDetail />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="/search/:query/:type" element={<SearchResults />} />
          <Route path="/search/" element={<SearchResults />} />
          <Route path="/example" element={<ExamplePage />} />
        </Routes>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
