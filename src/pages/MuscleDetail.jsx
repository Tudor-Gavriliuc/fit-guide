import { useParams } from 'react-router-dom';
import { muscles } from '../data/muscles';
import chestExercises from '../data/chestExercises.json';
import ExerciseCard from '../components/ExerciseCard';
import Navbar from '../components/Navbar';

export default function MuscleDetail({ toggleBackground, bgMode, likedExercises, toggleLike, showOnlyLiked, toggleShowOnlyLiked }) {
  const { id } = useParams();
  const muscle = muscles.find(m => m.id === id);

  if (!muscle) return <p className="text-center mt-4">Grupa musculară nu a fost găsită.</p>;

  return (
    <>
      <Navbar
        toggleBackground={toggleBackground}
        bgMode={bgMode}
        showOnlyLiked={showOnlyLiked}
        toggleShowOnlyLiked={toggleShowOnlyLiked}
      />
      <div className="container-fluid" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

        {muscle.id === 'chest' && (
          <>
            <h3 className="text-center mt-5 mb-4"></h3>
            <div className="row g-4">
              {chestExercises
                .filter(ex => !showOnlyLiked || likedExercises.includes(ex.id))
                .map((exercise) => (
                  <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    toggleLike={toggleLike}
                    liked={likedExercises.includes(exercise.id)}
                  />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
