import React, { useState, useEffect, useRef } from 'react';
import { Heart, Star, MessageCircle, Camera, Clock, CheckCircle, X } from 'lucide-react';
import timelineData from '../data/timelineData';
import { saveResponses } from '../../firebase';

// Pink color variations for consistent theming
const pinkColorVariants = [
  'from-pink-400 to-pink-500',
  'from-pink-500 to-pink-600', 
  'from-pink-300 to-pink-400',
  'from-pink-600 to-pink-700',
  'from-pink-400 to-pink-600',
  'from-pink-500 to-pink-700'
];

// Notification Component
const Notification = ({ isVisible, message, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);
  
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(handleClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  if (!isVisible && !isAnimating) return null;
  
  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out
      ${isAnimating && isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'}`}>
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-4 rounded-2xl shadow-2xl 
        backdrop-blur-sm border border-pink-400/30 min-w-[300px] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
        
        {/* Animated background sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-4 text-pink-200 animate-pulse">✨</div>
          <div className="absolute bottom-2 right-6 text-pink-200 animate-pulse delay-500">💕</div>
          <div className="absolute top-3 right-4 text-pink-200 animate-pulse delay-1000">⭐</div>
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
          {/* Success icon with animation */}
          <div className="relative">
            <CheckCircle className="w-6 h-6 text-white animate-bounce" />
            <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
          </div>
          
          <div className="flex-1">
            <p className="font-semibold text-lg">Berhasil Terkirim!</p>
            <p className="text-pink-100 text-sm">{message}</p>
          </div>
          
          {/* Close button */}
          <button 
            onClick={handleClose}
            className="text-pink-200 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-pink-400 rounded-full animate-pulse">
          <div className="h-full bg-white/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

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
}

// Komponen timeline item yang diperbaiki
const TimelineItem3D = ({ data, index, isVisible, onHover, isLiked, onLike, message, onMessageChange, onSubmit }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customDate, setCustomDate] = useState("");
  const [showGallery, setShowGallery] = useState(false);
  const [likeAnimation, setLikeAnimation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  
  const isEven = index % 2 === 0;
  
  // Use pink color variants instead of data.color
  const cardColor = pinkColorVariants[index % pinkColorVariants.length];
  
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
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSubmit(`card${index}`);
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Enhanced background glow - now consistently pink */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute w-96 h-96 bg-gradient-to-r ${cardColor} opacity-8 rounded-full blur-3xl 
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
          
          {/* Kategori badge dengan icon - now consistently pink */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white 
            bg-gradient-to-r ${cardColor} mb-6 shadow-lg relative overflow-hidden`}>
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
          <h3 className="text-3xl font-bold mb-6 text-pink-800 relative group">
            {data.title}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-pink-500 
              group-hover:w-full transition-all duration-500 rounded-full"></div>
          </h3>
          
          {/* Enhanced image dengan gallery button - Natural aspect ratio */}
          {data.image && (
            <div className="relative mb-6 group overflow-hidden rounded-2xl">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                onLoad={() => setImageLoaded(true)}
                style={{
                  maxHeight: '600px',
                  minHeight: '200px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Gallery button */}
              <button
                onClick={() => setShowGallery(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              >
                <Camera className="w-5 h-5 text-pink-500" />
              </button>
            </div>
          )}
          
          {/* Enhanced description */}
          <p className="text-pink-700 leading-relaxed text-lg mb-6 relative">
            {data.description}
          </p>
          
          {/* Message input */}
          <div className="relative group">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">Pesan khusus:</span>
            </div>
            <textarea
              value={message || ""}
              onChange={(e) => onMessageChange(index, e.target.value)}
              placeholder="Tulis kenangan spesial yang kamu inget dari moment ini... "
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 
                focus:outline-none transition-all duration-300 text-pink-700 placeholder-pink-400
                bg-gradient-to-r from-pink-50/50 to-pink-50/30 backdrop-blur-sm hover:bg-pink-50 
                focus:bg-white resize-none h-20 group-hover:shadow-md focus:shadow-lg"
              disabled={isSubmitting}
            />
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-3 mt-6">
            <button 
              onClick={handleSubmit}
              disabled={!message?.trim() || isSubmitting}
              className={`flex-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 px-4 
                rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all duration-300 
                font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed
                relative overflow-hidden group`}
            >
              {/* Button loading animation */}
              {isSubmitting && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Button text */}
              <span className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                Simpan Kenangan
              </span>
              
              {/* Success ripple effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 
                transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
            </button>
            
            <button 
              onClick={handleLikeClick}
              disabled={isSubmitting}
              className={`relative bg-pink-100 hover:bg-pink-200 text-pink-600 py-3 px-4 
                rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl
                transform hover:-translate-y-1 overflow-hidden group
                ${isLiked ? 'bg-pink-500 text-white hover:bg-pink-600' : ''}
                disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed`}
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
        
        {/* Enhanced center icon - now consistently pink */}
        <div className={`relative w-20 h-20 bg-gradient-to-br ${cardColor} text-white text-3xl 
          rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 z-10
          ${isHovered ? 'scale-125 shadow-pink-300/50' : 'scale-100'}
          border-4 border-white`}
          style={{
            transform: isHovered ? 'translateZ(30px) scale(1.25)' : 'translateZ(0px) scale(1)',
            transformStyle: 'preserve-3d'
          }}>
          <span className="relative z-10 drop-shadow-lg">{data.icon}</span>
          
          {/* Pulsing ring effect - now consistently pink */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${cardColor} 
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
  const [showMessageViewer, setShowMessageViewer] = useState(false);
  const [footerMessage, setFooterMessage] = useState("");
  const [notification, setNotification] = useState({ show: false, message: "" });

  const handleMessageSubmit = async (cardIdentifier) => {
    try {
      await saveResponses(cardIdentifier, messages);
      
      // Show success notification
      setNotification({
        show: true,
        message: "Kenangan spesial berhasil disimpan! 💕"
      });
      
      // Clear the message after submitting
      const cardIndex = parseInt(cardIdentifier.replace('card', ''));
      setMessages(prev => ({
        ...prev,
        [cardIndex]: ""
      }));
    } catch (error) {
      // Show error notification
      setNotification({
        show: true,
        message: "Terjadi kesalahan saat menyimpan kenangan 😔"
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ show: false, message: "" });
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

  const handleFooterSubmit = () => {
    // Handle footer message submission
    console.log('Footer message:', footerMessage);
    // Clear the footer message after submitting
    setFooterMessage("");
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
      {/* Notification */}
      <Notification 
        isVisible={notification.show}
        message={notification.message}
        onClose={handleCloseNotification}
      />
      
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
      <div className="text-center py-20 relative z-10">
        <div className="inline-block">
          <h1 className="text-7xl leading-relaxed font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 
            bg-clip-text text-transparent mb-3 drop-shadow-sm">
            Jejak Langkah Kita
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
            mx-auto rounded-full shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-xl text-pink-600 mt-10 max-w-3xl mx-auto px-4 leading-relaxed">
          Setiap momen berharga yang sudah kita lalui bersama dan kenangan yang semoga saja terus kita ciptakan.
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
                onSubmit={handleMessageSubmit}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced footer */}
      <div className="text-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 via-pink-100/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-pink-800 mb-4">
            I treasure every moments with you 
          </h2>
          <p className="text-xl text-pink-600 mb-8">
            i hope you do too! 
          </p>
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
      </div>
    </div>
  );
}

export default Timeline;