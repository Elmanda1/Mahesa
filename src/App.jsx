// src/App.jsx
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import GalleryPage from './pages/GalleryPage';
import TimelinePage from './components/Timeline';
import AboutPage from './components/About';
import Wallofquotes from './components/Wallofquotes';
import './index.css';

function App() {
  // State untuk mengelola halaman yang aktif
  const [currentPage, setCurrentPage] = useState('home');

  // Fungsi navigasi untuk setiap halaman
  const handleStartQuiz = () => setCurrentPage('quiz');
  const handleNavigateToGallery = () => setCurrentPage('gallery');
  const handleNavigateToTimeline = () => setCurrentPage('timeline');
  const handleNavigateToAbout = () => setCurrentPage('about');
  const handleNavigateToWallofquotes = () => setCurrentPage('Wallofquotes'); // Sesuaikan dengan Navbar

  // Fungsi untuk kembali ke home
  const handleBackToHome = () => setCurrentPage('home');

  // Fungsi untuk menyelesaikan quiz dan lanjut ke gallery
  const handleQuizComplete = () => setCurrentPage('gallery');

  // Fungsi untuk merender halaman yang sesuai
  const renderPage = () => {
    switch(currentPage) {
      case 'quiz':
        return (
          <QuizPage 
            onQuizComplete={handleQuizComplete}
            onBackToHome={handleBackToHome}
          />
        );
        
      case 'gallery':
        return (
          <GalleryPage 
            onBackToHome={handleBackToHome}
            onStartQuiz={handleStartQuiz}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToWallofquotes={handleNavigateToWallofquotes}
          />
        );
        
      case 'timeline':
        return (
          <TimelinePage 
            onBackToHome={handleBackToHome}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToWallofquotes={handleNavigateToWallofquotes}
          />
        );
        
      case 'Wallofquotes': // Sesuaikan dengan Navbar
        return (
          <Wallofquotes 
            onBack={handleBackToHome}
            onBackToHome={handleBackToHome}
            onStartQuiz={handleStartQuiz}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigateToAbout={handleNavigateToAbout}
          />
        );
        
      case 'about':
        return (
          <AboutPage 
            onBackToHome={handleBackToHome}
            onStartQuiz={handleStartQuiz}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigateToWallofquotes={handleNavigateToWallofquotes}
          />
        );
        
      default: // 'home'
        return (
          <HomePage 
            onStartQuiz={handleStartQuiz}
            onNavigateToGallery={handleNavigateToGallery}
            onNavigateToTimeline={handleNavigateToTimeline}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToWallofquotes={handleNavigateToWallofquotes}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;