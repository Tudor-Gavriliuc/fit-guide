import { Link } from 'react-router-dom';

export default function MuscleCard({ muscle }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{muscle.name}</h5>
          <p className="card-text">{muscle.shortDesc}</p>
          <Link to={`/muscles/${muscle.id}`} className="btn btn-primary mt-auto">
            Află mai mult
          </Link>
        </div>
      </div>
    </div>
  );
}
