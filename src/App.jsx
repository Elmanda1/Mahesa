// src/App.jsx - Fixed Version with Integrated Wall of Quotes and Navbar
import React, { useState } from 'react';
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

  const renderPage = () => {
    switch(currentPage) {
      case 'quiz':
        return (
          <QuizPage 
            onQuizComplete={handleQuizComplete}
            onBackToHome={handleBackToHome}
            onNavigate={handleNavigate}
          />
        );
      case 'gallery':
        return (
          <GalleryPage 
            onBackToHome={handleBackToHome}
            onStartQuiz={handleStartQuiz}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigate={handleNavigate}
          />
        );
      case 'timeline':
        return (
          <TimelinePage 
            onBackToHome={handleBackToHome}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return (
          <AboutPage 
            onBackToHome={handleBackToHome}
            onStartQuiz={handleStartQuiz}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigate={handleNavigate}
          />
        );
      default: // 'home'
        return (
          <HomePage 
            onStartQuiz={handleStartQuiz}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="App">
      <Navbar activeView={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}

export default App;