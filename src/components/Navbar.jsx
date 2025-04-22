import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="d-flex justify-content-center">
     <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
            width: '100%',
            maxWidth: '70vw',
            margin: '1rem auto',
            backgroundColor: '#1e1e1e',
            borderRadius: '0.5rem'
        }}
        >
        <div className="container-fluid px-3">
          <Link to="/" className="navbar-brand">🏋️ Fit Guide</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Acasă</Link>
              </li>
              {/* You can add more links here */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}