import { Link } from 'react-router-dom';
import './NavBar.css';
function Navigation() {
  return (
    <nav>
      <h1>MOVIE BOX</h1>
      <ul id="Nav">
        <li className='nav'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav'>
          <Link to="/GameDisplay">All Movies</Link>
        </li>
        <li className='nav'>
          <Link to="/InputForm">Add Movie</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
