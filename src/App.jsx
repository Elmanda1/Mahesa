// src/App.jsx - Fixed Version with Integrated Wall of Quotes and Navbar
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import GalleryPage from './pages/GalleryPage';
import TimelinePage from './components/Timeline';
import AboutPage from './components/About';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route 
        path="/gallery" 
        element={
          <>
            <Navbar activeView="gallery" />
            <GalleryPage />
          </>
        } 
      />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;