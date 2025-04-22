import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MuscleDetail from './pages/MuscleDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/muscles/:id" element={<MuscleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;