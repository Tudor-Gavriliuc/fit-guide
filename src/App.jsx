import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MuscleDetail from './pages/MuscleDetail';

// Import your background images (in src/assets/)
import darkBg from './assets/dark_theme.png';
import lightBg from './assets/white_theme.png';

function App() {
  const [bgMode, setBgMode] = useState('dark');

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgMode === 'dark' ? darkBg : lightBg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  }, [bgMode]);

  const toggleBackground = () => {
    setBgMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage toggleBackground={toggleBackground} bgMode={bgMode} />} />
        <Route path="/muscles/:id" element={<MuscleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
