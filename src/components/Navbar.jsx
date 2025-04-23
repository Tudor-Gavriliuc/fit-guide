import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="d-flex justify-content-center">
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow"
        style={{
          width: '100%',
          maxWidth: '70vw',
          margin: '1.5rem auto',
          borderRadius: '1rem',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(30, 30, 30, 0.9)'
        }}
      >
        <div className="container-fluid px-4">
          <Link to="/" className="navbar-brand text-white fs-3 fw-bold text-uppercase">
            🏋️ Fit Guide
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <Link to="/" className="nav-link nav-custom-link text-white">
                  Acasă
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link nav-custom-link text-white">
                  Despre noi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}