import { useParams } from 'react-router-dom';
import { muscles } from '../data/muscles';
import chestExercises from '../data/chestExercises.js';
import backExercises from '../data/backExercises.js';
import legsExercises from '../data/legsExercises.js';
import ExerciseCard from '../components/ExerciseCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MuscleDetail({ toggleBackground, bgMode, likedExercises, toggleLike, showOnlyLiked, toggleShowOnlyLiked }) {
  const { id } = useParams();
  const muscle = muscles.find(m => m.id === id);

  if (!muscle) return <p className="text-center mt-4">Grupa musculară nu a fost găsită.</p>;

  let exercises = [];

  if (muscle.id === 'chest') {
    exercises = chestExercises;
  } else if (muscle.id === 'back') {
    exercises = backExercises;
  } else if (muscle.id === 'legs') {
    exercises = legsExercises;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        toggleBackground={toggleBackground}
        bgMode={bgMode}
        showOnlyLiked={showOnlyLiked}
        toggleShowOnlyLiked={toggleShowOnlyLiked}
      />

      <main className="flex-grow-1">
        <div className="container-fluid" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

          {exercises.length > 0 && (
            <>
              <div className="row g-4">
                {exercises
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
      </main>

      <Footer />
    </div>
  );
}
