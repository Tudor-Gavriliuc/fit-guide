import { Link } from 'react-router-dom';

export default function MuscleCard({ muscle }) {
  return (
    <div className="mb-5">
      <img
        src={muscle.image}
        alt={muscle.name}
        className="img-fluid"
        style={{
          width: '100%',
          maxWidth: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          display: 'block'
        }}
      />

      <div className="container mt-3">
        <div className="card border-0 shadow-sm">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-dark">{muscle.name}</h5>
            <p className="card-text text-muted">{muscle.shortDesc}</p>
            <Link to={`/muscles/${muscle.id}`} className="btn btn-primary mt-auto">
              Află mai mult
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
