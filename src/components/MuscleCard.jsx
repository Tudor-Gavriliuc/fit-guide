import { Link } from 'react-router-dom';
import './MuscleCard.css'; // Make sure to include this

export default function MuscleCard({ muscle }) {
  return (
    <div className="mb-5">
      <div
        className="hover-image-wrapper position-relative"
        style={{ marginBottom: '1.5rem' }}
      >
      <img
        src={muscle.image}
        alt={muscle.name}
        className="img-fluid w-100"
        style={{
          width: '100%',
          maxWidth: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          display: 'block'
        }}
      />
        <div
          className="hover-overlay text-white d-flex flex-column justify-content-center align-items-center text-center"
        >
          <h3 className="fw-bold mb-3">{muscle.name}</h3>
          <p className="fs-5">{muscle.shortDesc}</p>
          <Link to={`/muscles/${muscle.id}`} className="custom-profile-btn mt-3">
            Află mai mult
          </Link>
        </div>
      </div>
    </div>
  );
}
