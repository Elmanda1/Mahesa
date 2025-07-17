import React, { useState, useEffect, useRef } from 'react';
import { Heart, Star, MessageCircle, Camera, Clock } from 'lucide-react';
import timelineData from '../data/timelineData';

// Komponen floating elements yang lebih bervariasi
const FloatingElement = ({ delay = 0, duration = 4, type = "sparkle" }) => {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: 100 });
  
  const elements = {
    sparkle: "✨",
    heart: "💕",
    star: "⭐",
    flower: "🌸"
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosition({ x: Math.random() * 100, y: -10 });
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  return (
    <div
      className="absolute text-pink-300 opacity-30 pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        fontSize: '14px',
        transition: `all ${duration}s ease-out`,
        animationDelay: `${delay}s`
      }}
    >
      {elements[type]}
    </div>
  );
};

// Komponen untuk photo gallery modal
const PhotoGallery = ({ isOpen, onClose, photos }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Galeri Foto</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="aspect-square bg-pink-100 rounded-lg flex items-center justify-center">
              <Camera className="w-8 h-8 text-pink-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen timeline item yang diperbaiki
const TimelineItem3D = ({ data, index, isVisible, onHover, isLiked, onLike, message, onMessageChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customDate, setCustomDate] = useState("");
  const [showGallery, setShowGallery] = useState(false);
  const [likeAnimation, setLikeAnimation] = useState(false);
  const cardRef = useRef(null);
  
  const isEven = index % 2 === 0;
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };
  
  const handleLikeClick = () => {
    setLikeAnimation(true);
    onLike(index);
    setTimeout(() => setLikeAnimation(false), 600);
  };
  
  const cardStyle = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${(mousePosition.y - 150) * 0.03}deg) rotateY(${(mousePosition.x - 200) * 0.03}deg) translateZ(15px)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.2s ease-out'
  };
  
  return (
    <div className={`flex items-center w-full mb-16 ${isEven ? 'flex-row-reverse' : ''} relative`}>
      {/* Enhanced background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute w-96 h-96 bg-gradient-to-r ${data.color} opacity-8 rounded-full blur-3xl 
          ${isEven ? 'right-0' : 'left-0'} top-1/2 transform -translate-y-1/2 transition-all duration-1000
          ${isVisible ? 'opacity-8 scale-100' : 'opacity-0 scale-50'}`} />
      </div>
      
      {/* Content Card dengan enhanced 3D effect */}
      <div className="w-full md:w-5/12 relative z-10">
        <div
          ref={cardRef}
          className={`bg-white/98 backdrop-blur-md p-8 rounded-3xl shadow-2xl 
            transition-all duration-700 ease-out cursor-pointer overflow-hidden relative
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            border-2 border-pink-100 hover:border-pink-300 hover:shadow-pink-200/25`}
          style={{
            ...cardStyle,
            animationDelay: `${index * 0.3}s`
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            onHover(index);
          }}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Enhanced shimmer effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/40 to-transparent 
            ${isHovered ? 'translate-x-[100%]' : 'translate-x-[-100%]'} 
            transition-transform duration-1200 ease-out`} />
          
          {/* Kategori badge dengan icon */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white 
            bg-gradient-to-r ${data.color} mb-6 shadow-lg relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <span className="relative z-10">{data.category}</span>
          </div>
          
          {/* Tanggal dengan enhanced styling */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-pink-500" />
              <time className="text-lg font-bold text-pink-600">
                {data.date}
              </time>
            </div>
          
          </div>
          
          {/* Enhanced title */}
          <h3 className="text-3xl font-bold mb-6 text-gray-800 relative group">
            {data.title}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-pink-500 
              group-hover:w-full transition-all duration-500 rounded-full"></div>
          </h3>
          
          {/* Enhanced image dengan gallery button */}
          {data.image && (
            <div className="relative mb-6 group overflow-hidden rounded-2xl">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Gallery button */}
              <button
                onClick={() => setShowGallery(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              >
                <Camera className="w-5 h-5 text-pink-500" />
              </button>
              
              {/* Image overlay info */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 
                transition-opacity duration-300">
                <span className="text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  Lihat Galeri
                </span>
              </div>
            </div>
          )}
          
          {/* Enhanced description */}
          <p className="text-gray-600 leading-relaxed text-lg mb-6 relative">
            {data.description}
          </p>
          
          {/* Message input */}
          <div className="relative group">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-600">Pesan khusus:</span>
            </div>
            <textarea
              value={message || ""}
              onChange={(e) => onMessageChange(index, e.target.value)}
              placeholder="Tulis kenangan spesial tentang moment ini... 💭"
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 
                focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400
                bg-gradient-to-r from-pink-50/50 to-pink-50/30 backdrop-blur-sm hover:bg-pink-50 
                focus:bg-white resize-none h-20 group-hover:shadow-md focus:shadow-lg"
            />
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => {
                if (message?.trim()) {
                  alert(`Pesan tersimpan: "${message}"`);
                } else {
                  alert("Tulis pesan dulu ya! 💕");
                }
              }}
              className="flex-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 px-4 
                rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all duration-300 
                font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                disabled:opacity-50 disabled:transform-none"
              disabled={!message?.trim()}
            >
              Simpan Kenangan
            </button>
            
            <button 
              onClick={handleLikeClick}
              className={`relative bg-pink-100 hover:bg-pink-200 text-pink-600 py-3 px-4 
                rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl
                transform hover:-translate-y-1 overflow-hidden group
                ${isLiked ? 'bg-pink-500 text-white hover:bg-pink-600' : ''}`}
            >
              {/* Heart icon with animation */}
              <Heart 
                className={`w-5 h-5 transition-all duration-300 relative z-10
                  ${isLiked ? 'fill-current scale-110' : 'group-hover:scale-110'}`} 
              />
              
              {/* Like animation */}
              {likeAnimation && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                </div>
              )}
              
              {/* Floating hearts animation */}
              {isLiked && likeAnimation && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-pink-400 animate-bounce"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${20 + i * 10}%`,
                        animationDelay: `${i * 0.1}s`,
                        fontSize: '12px'
                      }}
                    >
                      💕
                    </div>
                  ))}
                </div>
              )}
              
              {/* Success ripple effect */}
              {isLiked && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-pink-500/20 
                  rounded-xl opacity-0 animate-pulse"></div>
              )}
            </button>
          </div>
          
          {/* Like status indicator */}
          {isLiked && (
            <div className="mt-3 text-center">
              <span className="text-pink-600 text-sm font-medium bg-pink-100 px-3 py-1 rounded-full">
                ✨ Mahesa menyukai moment ini
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Fixed continuous timeline line */}
      <div className="hidden md:flex items-center justify-center w-2/12 relative">
        {/* Continuous vertical line - fixed positioning */}
        <div className="absolute w-1 bg-gradient-to-b from-pink-400 via-pink-300 to-pink-400 
          rounded-full shadow-lg z-0"
          style={{ 
            height: index === timelineData.length - 1 ? '50%' : '100%',
            top: index === 0 ? '50%' : '0%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
          <div className={`absolute inset-0 bg-gradient-to-b from-white/30 to-transparent 
            transition-opacity duration-1000 rounded-full
            ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        
        {/* Enhanced center icon */}
        <div className={`relative w-20 h-20 bg-gradient-to-br ${data.color} text-white text-3xl 
          rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 z-10
          ${isHovered ? 'scale-125 shadow-pink-300/50' : 'scale-100'}
          border-4 border-white`}
          style={{
            transform: isHovered ? 'translateZ(30px) scale(1.25)' : 'translateZ(0px) scale(1)',
            transformStyle: 'preserve-3d'
          }}>
          <span className="relative z-10 drop-shadow-lg">{data.icon}</span>
          
          {/* Pulsing ring effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.color} 
            ${isHovered ? 'animate-ping' : ''} opacity-30`} />
        </div>
        
        {/* Connecting dots */}
        {index < timelineData.length - 1 && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce" 
              style={{ animationDelay: `${index * 0.5}s` }} />
          </div>
        )}
      </div>
      
      <div className="w-full md:w-5/12" />
      
      {/* Photo Gallery Modal */}
      <PhotoGallery 
        isOpen={showGallery} 
        onClose={() => setShowGallery(false)}
        photos={[1,2,3,4]} 
      />
    </div>
  );
};

// Komponen utama timeline yang diperbaiki
function Timeline() {
  const [messages, setMessages] = useState([]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [likedItems, setLikedItems] = useState(new Set());

  const handleMessageSubmit = (message) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      content: message,
      timestamp: new Date().toISOString(),
      sender: 'anonymous'
    }]);
  };

  const handleLike = (index) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  
  const handleMessageChange = (index, message) => {
    setMessages(prev => ({
      ...prev,
      [index]: message
    }));
  };
  const timelineRef = useRef(null);
  
  useEffect(() => {
    // Set semua item sebagai visible saat mounting
    const allIndices = timelineData.map((_, index) => index);
    setVisibleItems(new Set(allIndices));
    
    // Backup intersection observer untuk smooth animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    setTimeout(() => {
      const items = document.querySelectorAll('[data-index]');
      items.forEach((item) => observer.observe(item));
    }, 100);
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const progress = scrollTop / (scrollHeight - clientHeight);
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-52 h-52 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-pink-200/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-pink-400/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <FloatingElement 
            key={i} 
            delay={i * 1.5} 
            duration={8} 
            type={['sparkle', 'heart', 'star', 'flower'][i % 4]}
          />
        ))}
      </div>
      
      {/* Enhanced header */}
      <div className="text-center py-24 relative z-10">
        <div className="inline-block">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 
            bg-clip-text text-transparent mb-10 drop-shadow-sm">
            Jejak Langkah Kita
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
            mx-auto rounded-full shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 mt-10 max-w-3xl mx-auto px-4 leading-relaxed">
          Setiap momen berharga yang kita lalui bersama, terangkai dalam kenangan yang tak terlupakan 🌸✨
        </p>
        
        {/* Enhanced decorative dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg" 
              style={{ animationDelay: `${i * 0.2}s` }} 
            />
          ))}
        </div>
      </div>
      
      {/* Timeline container */}
      <div ref={timelineRef} className="container mx-auto px-4 pb-24 relative">
        {/* Main timeline line background */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-pink-500 
          transform -translate-x-1/2 opacity-20 hidden md:block"></div>
        
        <div className="flex flex-col items-center relative">
          {timelineData.map((data, index) => (
            <div key={index} data-index={index} className="w-full">
              <TimelineItem3D 
                data={data} 
                index={index} 
                isVisible={visibleItems.has(index)}
                onHover={setHoveredItem}
                isLiked={likedItems.has(index)}
                onLike={handleLike}
                message={messages[index]}
                onMessageChange={handleMessageChange}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced footer */}
      <div className="text-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 via-pink-100/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-pink-500 animate-pulse drop-shadow-lg" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Untuk seseorang yang sangat berharga ✨
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Setiap detik bersamamu adalah hadiah terindah
          </p>
          
          {/* Enhanced footer input */}
          <div className="mt-10 max-w-lg mx-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Tulis pesan spesial untuknya... 🌸"
                className="w-full px-8 py-4 border-2 border-pink-200 rounded-full focus:border-pink-500 
                  focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400
                  bg-gradient-to-r from-pink-50/50 to-pink-50/30 backdrop-blur-sm text-center 
                  hover:bg-pink-50 focus:bg-white text-lg group-hover:shadow-lg focus:shadow-xl"
              />
              <div className="absolute right-6 top-4 text-pink-400 group-hover:animate-pulse text-xl">✨</div>
            </div>
            
            <button className="mt-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 px-8 
              rounded-full hover:from-pink-500 hover:to-pink-600 transition-all duration-300 
              font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Kirim Pesan Cinta 💕
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-pink-400/40 animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: '20px'
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-400 to-pink-500 text-white 
          p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50
          hover:from-pink-500 hover:to-pink-600 transform hover:-translate-y-1"
      >
        <Star className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Timeline;