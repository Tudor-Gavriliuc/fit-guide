import { Link } from 'react-router-dom';

export default function MuscleCard({ muscle }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="card h-100 border-0 shadow-sm">
        <img
          src={muscle.image}
          alt={muscle.name}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-dark">{muscle.name}</h5>
          <p className="card-text text-muted">{muscle.shortDesc}</p>
          <Link to={`/muscles/${muscle.id}`} className="btn btn-primary mt-auto">
            Află mai mult
          </Link>
        </div>
      </div>
    </div>
  );
}