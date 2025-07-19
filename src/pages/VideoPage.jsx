import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoGalleryPage() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState({});
  const videoRefs = useRef({});

  // Data video ucapan (tanpa message/wishes)
  const [videoMessages] = useState([
    {   
      id: 1,
      name: "Larasati Marutika",
      videoUrl: "/assets/video/ka_laras.mp4",
      date: "Mahesa's Bestfriend",
      duration: "3:11"
    },
    {
      id: 2,
      name: "Naura Aulia",
      videoUrl: "/assets/video/ka_naura.mp4",
      date: "Mahesa's Bestfriend",
      duration: "1:20"
    },
    {
      id: 3,
      name: "Nasywa Puti Hashmi",
      videoUrl: "/assets/video/ka_nasywa.mp4",
      date: "Mahesa's Bestfriend",
      duration: "0:15"
    },
    {
      id: 4,
      name: "Zharifa Syafiqa Laksono",
      videoUrl: "/assets/video/ka_fiqa.mp4",
      date: "Mahesa's Bestfriend",
      duration: "1:04"
    },
    {
      id: 5,
      name: "Latasya Putri Danieva",
      videoUrl: "/assets/video/ka_tasya.mp4",
      date: "Mahesa's Bestfriend",
      duration: "1:22   "
    },
    {
      id: 6,
      name: "Nashita Amanda",
      videoUrl: "/assets/video/ka_nashita.mp4",
      date: "Mahesa's Bestfriend",
      duration: "1:01"
    },
    {
      id: 7,
      name: "Achmad Zikran Maulida",
      videoUrl: "/assets/video/bang_zikran.mp4",
      date: "Mahesa's Bestfriend",
      duration: "1:04"
    },
    {
      id: 8,
      name: "Zahrah Purnama Alam",
      videoUrl: "/assets/video/ka_zahra.mp4",
      date: "Mahesa's Bestfriend",
      duration: "1:05"
    },
    {
      id: 9,
      name: "Muhammad Dzaky Fauzan",
      videoUrl: "/assets/video/bang_jeki.mp4",
      date: "Mahesa's Bestfriend",
      duration: "0:05"
    }
  ]);

  // Animation triggers
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setShowVideos(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const backgrounds = document.querySelectorAll('.parallax-bg');
      backgrounds.forEach((bg, index) => {
        const speed = 0.3 + (index * 0.1);
        bg.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle video thumbnail loading
  const handleVideoLoad = (videoId) => {
    setLoadingVideos(prev => ({ ...prev, [videoId]: false }));
  };

  const handleVideoLoadStart = (videoId) => {
    setLoadingVideos(prev => ({ ...prev, [videoId]: true }));
  };

  // Video hover preview
  const handleVideoHover = (videoId, isHovering) => {
    setHoveredVideo(isHovering ? videoId : null);
    const video = videoRefs.current[videoId];
    if (video) {
      if (isHovering) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 1;
      }
    }
  };

  // Auto-play next video in modal
  const handleVideoEnded = () => {
    const nextIndex = (currentVideoIndex + 1) % videoMessages.length;
    setCurrentVideoIndex(nextIndex);
    setSelectedVideo(videoMessages[nextIndex]);
  };

  // Open video modal
  const openVideoModal = (video, index) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Navigate to previous/next video
  const navigateVideo = (direction) => {
    const newIndex = direction === 'prev' 
      ? (currentVideoIndex - 1 + videoMessages.length) % videoMessages.length
      : (currentVideoIndex + 1) % videoMessages.length;
    
    setCurrentVideoIndex(newIndex);
    setSelectedVideo(videoMessages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') navigateVideo('prev');
        if (e.key === 'ArrowRight') navigateVideo('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, currentVideoIndex]);

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">
      {/* Enhanced Aurora Background Effect with Parallax */}
      <div className="parallax-bg absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="parallax-bg absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-75"></div>
      <div className="parallax-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-150"></div>

      {/* Header Section */}
      <div className="relative z-10 pt-8 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Back Button with Highlight */}
          <div className="flex justify-start mb-8">
            <button
              onClick={() => navigate('/')}
              className={`group relative flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-brand-primary/20 to-pink-500/20 backdrop-blur-sm rounded-full font-bold text-brand-text hover:from-brand-primary/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-110 border-2 border-brand-primary/30 hover:border-brand-primary/50 shadow-lg hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: '200ms',
                boxShadow: '0 8px 32px rgba(96, 165, 250, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/10 to-pink-500/10 blur-md group-hover:blur-lg transition-all duration-300"></div>
              
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-lg relative z-10">Kembali</span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-500"></div>
            </button>
          </div>

          {/* Title with enhanced animation */}
          <div className="overflow-hidden mb-4">
            <h1 className={`text-5xl md:text-7xl font-bold text-brand-text leading-tight transform transition-all duration-1000 ease-out ${
              isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-95 opacity-0 rotate-1'
            }`}>
              <span className="inline-block animate-pulse">✨</span>
              {' '}Galeri Video{' '}
              <span className="inline-block animate-pulse delay-75">✨</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <h2 className={`text-3xl md:text-5xl font-bold text-pink-500 leading-tight transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'scale-100 opacity-100 filter-none' : 'scale-90 opacity-0 blur-sm'
            }`}
            style={{
              textShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
              filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.2))'
            }}>
              Pesan untuk Mahesa
            </h2>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-brand-text/70 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'scale-100 opacity-100 filter-none' : 'scale-95 opacity-0 blur-sm'
          }`}>
            Video ucapan penuh cinta dari orang-orang yang menyayangimu.
          </p>
        </div>
      </div>

      {/* Video Grid - Enhanced with Hover Effects */}
      <div className="relative z-10 px-2 md:px-4 pb-8 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {videoMessages.map((video, index) => (
              <div 
                key={video.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  showVideos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: showVideos ? `${index * 100}ms` : '0ms',
                  boxShadow: hoveredVideo === video.id 
                    ? '0 20px 40px rgba(236, 72, 153, 0.2), 0 0 20px rgba(236, 72, 153, 0.1)' 
                    : '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => openVideoModal(video, index)}
                onMouseEnter={() => handleVideoHover(video.id, true)}
                onMouseLeave={() => handleVideoHover(video.id, false)}
              >
                {/* Video Thumbnail with Preview */}
                <div className="relative mb-4 md:mb-6">
                  <div className="w-full h-56 md:h-72 bg-black rounded-xl md:rounded-2xl overflow-hidden relative">
                    {/* Loading Shimmer */}
                    {loadingVideos[video.id] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse">
                        <div className="w-full h-full bg-gradient-to-r from-gray-300/20 via-gray-100/20 to-gray-300/20 animate-pulse"></div>
                      </div>
                    )}
                    
                    {/* Video Preview */}
                    <video
                      ref={el => videoRefs.current[video.id] = el}
                      src={video.videoUrl}
                      className="w-full h-full object-cover transition-all duration-300"
                      muted
                      preload="metadata"
                      onLoadStart={() => handleVideoLoadStart(video.id)}
                      onLoadedMetadata={(e) => {
                        e.target.currentTime = 1;
                        handleVideoLoad(video.id);
                      }}
                      style={{
                        filter: hoveredVideo === video.id ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)'
                      }}
                    />
                    
                    {/* Play Button Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredVideo === video.id ? 'bg-black/20' : 'bg-black/40'
                    }`}>
                      <div className={`w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                        hoveredVideo === video.id ? 'scale-125 bg-pink-500 text-white' : 'group-hover:scale-110'
                      }`}>
                        <svg className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/80 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm">
                      {video.duration}
                    </div>

                    {/* Hover Status */}
                    {hoveredVideo === video.id && (
                      <div className="absolute bottom-3 left-3 bg-pink-500/90 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                        Preview
                      </div>
                    )}

                    {/* Floating animation elements */}
                    <div className="absolute top-6 left-6 w-4 h-4 bg-pink-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-brand-primary/30 rounded-full animate-pulse delay-75"></div>
                  </div>
                </div>

                {/* Video Info - Simplified */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-pink-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{video.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-text group-hover:text-pink-500 transition-colors duration-300">
                        {video.name}
                      </h3>
                      <p className="text-sm text-brand-text/60 font-medium">{video.date}</p>
                    </div>
                  </div>

                  {/* Click to play hint */}
                  <div className="text-center">
                    <p className="text-xs text-brand-text/50 font-medium group-hover:text-pink-500 transition-colors duration-300">
                      {hoveredVideo === video.id ? 'Klik untuk menonton penuh' : 'Hover untuk preview'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secret Message Button - Positioned at bottom */}
      <div className="relative z-10 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <button
            onClick={() => navigate('/memorial')}
            className="group relative opacity-30 hover:opacity-100 transition-all duration-500 transform hover:scale-105"
          >
            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/20 transition-all duration-300">
              <span className="text-sm text-brand-text/60 group-hover:text-brand-text font-medium tracking-wider">
                secret message
              </span>
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/5 to-pink-500/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      {/* Enhanced Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-sm md:max-w-lg max-h-[95vh] overflow-hidden transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-primary to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm md:text-lg">{selectedVideo.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-text">{selectedVideo.name}</h3>
                  <p className="text-xs md:text-sm text-brand-text/60 font-medium">{selectedVideo.date}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player */}
            <div className="p-4 md:p-6">
              <div className="aspect-[9/16] bg-black rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 mx-auto" style={{ maxHeight: '60vh' }}>
                <video
                  key={selectedVideo.id}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={handleVideoEnded}
                  playsInline
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => navigateVideo('prev')}
                  className="flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full font-medium text-brand-text hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-xs md:text-sm">Prev</span>
                </button>

                <div className="text-center px-3 md:px-4 py-2 bg-gradient-to-r from-brand-primary/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-white/20">
                  <p className="text-xs md:text-sm text-brand-text/80 font-medium">
                    {currentVideoIndex + 1}/{videoMessages.length}
                  </p>
                </div>

                <button
                  onClick={() => navigateVideo('next')}
                  className="flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full font-medium text-brand-text hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <span className="text-xs md:text-sm">Next</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoGalleryPage;