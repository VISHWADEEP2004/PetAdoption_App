import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faPaw } from '@fortawesome/free-solid-svg-icons';
import '../Assert/Css/nav.css';

function Navbar() {
  const location = useLocation();
  const shouldDisplayIcons = () => {
    const excludedPaths = ['/login', '/register', '/signup'];
    return !excludedPaths.includes(location.pathname);
  };

  return (
    <div className="bb">
      <nav className="navbar">
        {/* <img src={logo} className='classlogo' alt="Logo" /> */}
        <h4 className='nav-link'>PETADOP</h4>
        <ul className='un-li'>
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              REGISTER
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
      {shouldDisplayIcons() && (
        <div className="icon-bar">
          <Link to='/dogadap'>
            <FontAwesomeIcon icon={faDog} className="icon" />
          </Link>
          <Link to='/catadap'>
            <FontAwesomeIcon icon={faCat} className="icon" />
          </Link>
          <Link to='/pets'>
            <FontAwesomeIcon icon={faPaw} className="icon" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
