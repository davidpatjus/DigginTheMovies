// src/components/Navbar/Navbar.js
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/">Diggin The Movies</Link>
      </div>
      <nav className="navbar-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">TV Shows</Link></li>
          <li><Link to="/people">People</Link></li>
          <li><button className='theme-toggle' onClick={toggleTheme}>Toggle Theme</button></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
