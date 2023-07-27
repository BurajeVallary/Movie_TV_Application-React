
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList/'
import Navbar from './Navigation';
import Carousels from './components/MovieList/carosel';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Carousels/>
        <MovieList/>
       
        <Routes>
          {/* Use relative paths for 'path' attribute */}
          <Route path="MovieList" element={<MovieList />} />
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
