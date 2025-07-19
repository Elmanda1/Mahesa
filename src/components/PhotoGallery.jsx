import React, { useState, useEffect } from 'react';

function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [shuffledPhotos, setShuffledPhotos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const mockPhotoData = [
    {
      url: "/assets/gallery/1.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/2.jpg", 
      type: "image"
    },
    {
      url: "/assets/gallery/3.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/4.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/6.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/7.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/8.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/9.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/10.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/11.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/12.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/13.jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau1.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau2.JPEG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau3.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau4.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau5.JPEG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau6.JPEG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau7.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau8.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau9.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau10.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau12.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau13.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau14.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau15.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau16.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/kanau17.JPEG",
      type: "image"
    },
    {
      url: "/assets/gallery/2.JPG", 
      type: "image"
    },
    {
      url: "/assets/gallery/3.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/4.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/5.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/6.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/7.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/8.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/9.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/8juli(2).jpg",
      type: "image"
    },    {
      url: "/assets/gallery/8juli(3).jpg",
      type: "image"
    },    {
      url: "/assets/gallery/8juli(4).jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/9juli(2).jpg",
      type: "image"
    },    
    {
      url: "/assets/gallery/9juli(3).jpg",
      type: "image"
    },    
    {
      url: "/assets/gallery/9juli(4).jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/14juli(1).jpg",
      type: "image"
    },    
    {
      url: "/assets/gallery/14juli(2).jpg",
      type: "image"
    },    
    {
      url: "/assets/gallery/14juli(3).jpg",
      type: "image"
    },
        {
      url: "/assets/gallery/14juli(4).jpg",
      type: "image"
    },    
    {
      url: "/assets/gallery/14juli(5).jpg",
      type: "image"
    },    
    {
      url: "/assets/gallery/14juli(6).jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/19april(1).jpg",
      type: "image"
    },    
    {
      url: "/assets/gallery/19april(2).jpg",
      type: "image"
    },
    {
      url: "/assets/gallery/16.jpeg",
      type: "image"
    },
    {
      url: "/assets/gallery/aku&kamu1.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/aku&kamu2.JPG",
      type: "image"
    },
    {
      url: "/assets/gallery/aku&kamu3.JPG",
      type: "image"
    },
  ];

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle photos on component mount
  useEffect(() => {
    const shuffled = shuffleArray(mockPhotoData);
    setShuffledPhotos(shuffled);
    // Add staggered animation delay
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden">
      {/* Background decorative elements with enhanced animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400/60 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-300/80 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-200/40 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-500/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-7xl leading-relaxed font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 
              bg-clip-text text-transparent mb-5 drop-shadow-sm">
              Galeri Kenangan
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Koleksi momen-momen berharga yang telah kamu lalui. Setiap foto pastinya menyimpan cerita dan kenangan yang memorable buat kamu.
            </p>
          </div>

          {/* Modal Popup */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
              <div className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image */}
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  {selectedItem.type === 'video' ? (
                    <div className="relative bg-black rounded-lg overflow-hidden max-h-[80vh]">
                      <div className="flex items-center justify-center h-[60vh] bg-gradient-to-r from-pink-500 to-pink-400">
                        <div className="text-white text-center">
                          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          <p className="text-xl font-semibold">Video Player</p>
                          <p className="text-sm opacity-80">Click to play video</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedItem.url}
                      alt="Gallery image"
                      className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          )}  

          {/* Masonry-style Gallery Grid with enhanced animations */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {shuffledPhotos.map((item, index) => (
              <div 
                key={index} 
                className={`break-inside-avoid group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 cursor-pointer transform transition-all duration-700 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 hover:rotate-1 ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animationDelay: `${index * 50}ms`
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(item)}
              >
                {/* Image Container with enhanced effects */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-auto object-cover transform transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-110" 
                  />
                  
                  {/* Multi-layer gradient overlay with animated effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-400/10 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                  
                  {/* Center hover text with typewriter effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                    </div>
                  </div>
                  
                  {/* Animated corner decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  
                  {/* Pulse ring effect */}
                  <div className="absolute inset-0 border-2 border-pink-400/50 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"></div>
                  <div className="absolute inset-0 border border-pink-300/30 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 delay-200"></div>
                  
                  {/* Bottom gradient bar with enhanced animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center">
                    <div className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-lg mx-auto">
              <p className="text-gray-600 italic text-xl mb-4 hover:text-gray-800 transition-colors duration-300">
                "Setiap foto adalah kenangan yang tak ternilai. Cerita yang terabadikan dalam bingkai waktu."
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;