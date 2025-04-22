import React from 'react';
import { muscles } from '../data/muscles';
import MuscleCard from '../components/MuscleCard';
import Navbar from '../components/Navbar';

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className="responsive-padding">
          <h1 className="text-center mb-5">Ghidul Grupelor Musculare</h1>
          <div className="row g-4">
            {muscles.map((muscle) => (
              <MuscleCard key={muscle.id} muscle={muscle} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}