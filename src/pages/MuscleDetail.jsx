import { useParams } from "react-router-dom";
import { muscles } from "../data/muscles";

export default function MuscleDetail() {
  const { id } = useParams();
  const muscle = muscles.find(m => m.id === id);

  if (!muscle) return <p className="text-center mt-4">Grupa musculară nu a fost găsită.</p>;

  return (
    <div className="container mt-4">
      <h2>{muscle.name}</h2>
      <p>{muscle.description}</p>
    </div>
  );
}