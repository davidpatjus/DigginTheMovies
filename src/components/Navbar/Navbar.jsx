import { Link } from 'react-router-dom';
import './Navbar.css'; // Importamos el CSS del Header

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/">Diggin The Movies</Link>
      </div>
      <nav className="navbar-nav">
        <ul>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/tvshows">TV Shows</Link></li>
          <li><Link to="/people">People</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
