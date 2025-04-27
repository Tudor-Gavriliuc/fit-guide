import { Link } from 'react-router-dom';

export default function MuscleCard({ muscle }) {
  return (
    <div className="card h-100 exercise-card position-relative overflow-hidden">
      <img
        src={muscle.image}
        alt={muscle.name}
        className="img-fluid"
        style={{ height: '300px', objectFit: 'cover', width: '100%' }}
      />
      <div className="exercise-overlay d-flex flex-column justify-content-center align-items-center">
        <h5 className="text-white mb-3 fs-4">{muscle.name}</h5>
        <Link
          to={`/muscles/${muscle.id}`}
          className="btn btn-danger btn-sm"
        >
          Vezi exerciții
        </Link>
      </div>
    </div>
  );
}
