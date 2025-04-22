import React from 'react';
import { muscles } from '../data/muscles';
import MuscleCard from '../components/MuscleCard';

export default function MainPage() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Fit Guide</h1>
      <div className="row">
        {muscles.map(muscle => (
          <MuscleCard key={muscle.id} muscle={muscle} />
        ))}
      </div>
    </div>
  );
}