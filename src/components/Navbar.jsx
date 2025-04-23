import { Link } from 'react-router-dom';

export default function Navbar({ toggleBackground, bgMode }) {
  return (
    <div className="d-flex justify-content-center">
      <nav
        className={`navbar navbar-expand-lg navbar-dark shadow ${bgMode}`}
        style={{
          width: '100%',
          maxWidth: '70vw',
          margin: '1.5rem auto',
          borderRadius: '1rem',
          backdropFilter: 'blur(8px)',
          backgroundColor: bgMode === 'dark' ? 'rgba(30,30,30,0.9)' : '#ffffff'
        }}
      >
        <div className="container-fluid px-4">
          <Link to="/" className="navbar-brand fw-bold fs-3 text-uppercase text-white">
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
                <Link to="/" className="nav-link nav-custom-link text-white">Acasă</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link nav-custom-link text-white">Despre noi</Link>
              </li>
            </ul>
            <button
              onClick={toggleBackground}
              className="btn btn-outline-light ms-4"
              style={{ borderRadius: '2rem' }}
            >
              🖼️ Fundal {bgMode === 'dark' ? 'deschis' : 'închis'}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
