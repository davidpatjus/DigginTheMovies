import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExamplePage from './pages/ExamplePage/ExamplePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
  );
}

export default App;
