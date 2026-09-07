import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Poke explorer</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;