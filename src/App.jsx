// src/App.jsx - Fixed Version with Integrated Wall of Quotes and Navbar
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import GalleryPage from './pages/GalleryPage';
import TimelinePage from './components/Timeline';
import AboutPage from './components/About';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handler navigasi
  const handleNavigate = (page) => setCurrentPage(page);
  const handleStartQuiz = () => setCurrentPage('quiz');
  const handleNavigateToGallery = () => setCurrentPage('gallery');
  const handleNavigateToTimeline = () => setCurrentPage('timeline');
  const handleNavigateToAbout = () => setCurrentPage('about');
  const handleBackToHome = () => setCurrentPage('home');
  const handleQuizComplete = () => setCurrentPage('gallery');

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          currentPage === 'home' ? (
            <HomePage 
              onStartQuiz={handleStartQuiz}
              onNavigateToGallery={handleNavigateToGallery}
              onNavigateToTimeline={handleNavigateToTimeline}
              onNavigateToAbout={handleNavigateToAbout}
              onNavigate={handleNavigate}
            />
          ) : null
        } />
        <Route path="/quiz" element={
          <QuizPage 
            onQuizComplete={handleQuizComplete}
            onBackToHome={handleBackToHome}
            onNavigate={handleNavigate}
          />
        } />
        <Route path="/gallery" element={
          <>
            <Navbar activeView="gallery" onNavigate={handleNavigate} />
            <GalleryPage 
              onBackToHome={handleBackToHome}
              onStartQuiz={handleStartQuiz}
              onNavigateToTimeline={handleNavigateToTimeline}
              onNavigateToAbout={handleNavigateToAbout}
              onNavigate={handleNavigate}
            />
          </>
        } />
        <Route path="/timeline" element={
          <TimelinePage 
            onBackToHome={handleBackToHome}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigate={handleNavigate}
          />
        } />
        <Route path="/about" element={
          <AboutPage 
            onBackToHome={handleBackToHome}
            onStartQuiz={handleStartQuiz}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigate={handleNavigate}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;