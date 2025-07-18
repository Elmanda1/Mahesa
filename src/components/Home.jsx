import React, { useState, useEffect } from 'react';

function Home({ onStartQuiz, onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('quotes'); 
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for 3D effect
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef) return;
    
    const rect = cardRef.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    
    const rotateX = deltaY * -10;
    const rotateY = deltaX * 10;
    
    cardRef.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`;
  };

  const handleMouseLeave = (cardRef) => {
    if (!cardRef) return;
    cardRef.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
  };
  const switchSection = (newSection) => {
    if (newSection === activeSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setContentVisible(false);
    
    setTimeout(() => {
      setActiveSection(newSection);
      setSelectedCategory('all'); // Reset category when switching
      setContentVisible(true);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  const quotes = [
    {
      id: 1,
      category: 'friendship',
      text: "Persahabatan sejati adalah ketika kamu bisa menjadi diri sendiri tanpa takut dihakimi.",
      author: "Unknown"
    },
    {
      id: 2,
      category: 'motivation',
      text: "Jangan takut untuk memulai dari awal. Setiap akhir adalah awal yang baru.",
      author: "Paulo Coelho"
    },
    {
      id: 3,
      category: 'life',
      text: "Hidup bukanlah tentang menunggu badai berlalu, tetapi belajar menari di tengah hujan.",
      author: "Vivian Greene"
    },
    {
      id: 4,
      category: 'motivation',
      text: "Kesuksesan bukan tentang tidak pernah jatuh, tetapi tentang bangkit setiap kali kamu jatuh.",
      author: "Nelson Mandela"
    },
    {
      id: 5,
      category: 'friendship',
      text: "Sahabat terbaik adalah cermin yang menunjukkan versi terbaik dari diri kita.",
      author: "Unknown"
    },
    {
      id: 6,
      category: 'life',
      text: "Kebahagiaan bukan tujuan, tetapi perjalanan yang harus dinikmati setiap hari.",
      author: "Buddha"
    }
  ];

  const wishes = [
    {
      id: 1,
      text: "Semoga di tahun ini kamu menemukan kebahagiaan dalam hal-hal sederhana dan pencapaian dalam mimpi-mimpi besarmu.",
      from: "Falih"
    },
    {
      id: 2,
      text: "Semoga setiap langkahmu di tahun ini membawa kamu lebih dekat ke impianmu.",
      from: "Falih"
    },
    {
      id: 3,
      text: "Semoga kamu selalu dikelilingi oleh orang-orang yang mencintaimu dan mendukungmu.",
      from: "Falih"
    },
    {
      id: 4,
      text: "Semoga setiap hari di tahun ini dipenuhi dengan tawa, cinta, dan kenangan indah.",
      from: "Falih"
    },
    {
      id: 5,
      text: "Semoga kamu selalu menemukan kekuatan dalam dirimu untuk mengatasi segala tantangan yang datang.",
      from: "Falih"
    },
    {
      id: 6,
      text: "Semoga tahun ini membawa kesempatan baru, petualangan seru, dan momen-momen yang tak terlupakan.",
      from: "Falih"
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua', icon: '🌟' },
    { id: 'friendship', label: 'Persahabatan', icon: '👥' },
    { id: 'motivation', label: 'Motivasi', icon: '🚀' },
    { id: 'life', label: 'Kehidupan', icon: '🌱' }
  ];

  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes float3d {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          33% { 
            transform: translateY(-8px) rotateX(2deg) rotateY(-1deg);
          }
          66% { 
            transform: translateY(-4px) rotateX(-1deg) rotateY(2deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.4);
          }
        }

        .content-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-enter {
          animation: fadeSlideUp 0.5s ease-out;
        }

        .content-exit {
          opacity: 0;
          transform: translateY(-20px) scale(0.98);
        }

        .card-enter {
          animation: scaleIn 0.5s ease-out;
        }

        .title-glow {
          animation: titleGlow 3s ease-in-out infinite;
        }

        .button-morphing {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .button-morphing:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .button-morphing.active {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 15px 35px rgba(236, 72, 153, 0.4);
        }

        .grid-stagger > * {
          animation-fill-mode: both;
        }

        .grid-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .grid-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .grid-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .grid-stagger > *:nth-child(4) { animation-delay: 0.4s; }
        .grid-stagger > *:nth-child(5) { animation-delay: 0.5s; }
        .grid-stagger > *:nth-child(6) { animation-delay: 0.6s; }

        .perspective-container {
          perspective: 1200px;
        }

        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }

        .card-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .card-3d:hover::before {
          opacity: 1;
        }

        .card-3d:hover {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(236, 72, 153, 0.1),
            0 0 20px rgba(236, 72, 153, 0.2);
        }

        .card-inner {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card-3d:hover .card-inner {
          transform: translateZ(20px);
        }

        .floating-accent {
          animation: float3d 4s ease-in-out infinite;
        }

        .floating-particle {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          border-radius: 24px;
          padding: 2px;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, #ec4899, #9333ea, #06b6d4);
          border-radius: 24px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-3d:hover .gradient-border::before {
          opacity: 1;
        }
      `}</style>

      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-brand-primary-light/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-primary/30 rounded-full floating-particle"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main welcome section */}
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30 mb-12 transform hover:scale-[1.01] transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Photo Section */}
              <div className="text-center lg:text-left">
                <div className="relative w-80 h-80 mx-auto lg:mx-0 group">
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-3xl p-1 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-white p-2">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        {/* Gambar profil */}
                        <img 
                          src="/assets/gallery/home.jpg" 
                          alt="Mahesa" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -inset-6 border-2 border-brand-secondary/50 rounded-3xl group-hover:border-brand-primary/70 transition-colors duration-500"></div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-brand-primary-light to-brand-primary rounded-full animate-pulse delay-1000 shadow-lg"></div>
                </div>
              </div>

              {/* Greeting Section */}
              <div className="text-center lg:text-left">
                {/* Decorative top element */}
                <div className="w-20 h-2 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto lg:mx-0 mb-8 rounded-full"></div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent leading-tight">
                  Untuk Mahesa,
                </h1>
                
                <div className="space-y-6 text-lg text-brand-text leading-relaxed">
                  <p className="opacity-90">
                    Selamat memasuki babak baru dalam hidupmu yaa! Website kecil ini kubuat bukan hanya sebagai hadiah, tapi juga sebagai kapsul waktu digital untuk semua kenangan yang telah kamu atau kita lalui.
                  </p>
                  
                  <p className="opacity-90">
                    Semoga kamu suka dengan hadiah sederhana ku ini. Mohon jelajahi setiap bagiannya, kenang kembali momen-momen nya, dan tersenyumlah. 
                  </p>
                  <p className="opacity-90">
                    Selamat ulang tahun, Mahesa! Semoga tahun ini dipenuhi dengan kebahagiaan, cinta, dan pencapaian yang luar biasa.
                  </p>
                </div>
                
                {/* Signature */}
                <div className="mt-10">
                  <div className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent mb-3">
                    - Falih Elmanda 
                  </div>
                  <div className="w-32 h-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto lg:mx-0 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Wall of Quotes and Wishes Section */}
          <div className="mb-16 relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent title-glow ${
                contentVisible ? 'content-enter' : 'content-exit'
              }`}>
                {activeSection === 'quotes' ? 'Wall of Quotes' : 'Wall of Wishes'}
              </h2>
              
              {/* Toggle Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => switchSection('quotes')}
                  disabled={isTransitioning}
                  className={`px-8 py-4 rounded-2xl font-semibold button-morphing ${
                    activeSection === 'quotes' ? 'active' : ''
                  } ${
                    activeSection === 'quotes'
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-2xl shadow-brand-primary/30'
                      : 'bg-white/80 backdrop-blur-md text-brand-text hover:bg-white/90 shadow-xl hover:shadow-2xl'
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  📜 Quotes
                </button>
                <button
                  onClick={() => switchSection('wishes')}
                  disabled={isTransitioning}
                  className={`px-8 py-4 rounded-2xl font-semibold button-morphing ${
                    activeSection === 'wishes' ? 'active' : ''
                  } ${
                    activeSection === 'wishes'
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-2xl shadow-brand-primary/30'
                      : 'bg-white/80 backdrop-blur-md text-brand-text hover:bg-white/90 shadow-xl hover:shadow-2xl'
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  💝 Wishes
                </button>
              </div>

              {/* Category Filter (Only for Quotes) */}
              {activeSection === 'quotes' && (
                <div className={`flex flex-wrap justify-center gap-3 mb-8 content-transition ${
                  contentVisible ? 'content-enter' : 'content-exit'
                }`}>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-xl shadow-brand-primary/30'
                          : 'bg-white/70 backdrop-blur-sm text-brand-text hover:bg-white/90 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {category.icon} {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Grid */}
<div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container grid-stagger content-transition ${
  contentVisible ? 'content-enter' : 'content-exit'
}`}>
  {activeSection === 'quotes' ? (
    // Quotes Grid
    filteredQuotes.map((quote, index) => (
      <div
        key={quote.id}
        className="card-3d gradient-border cursor-pointer group card-enter"
        style={{
          animationDelay: `${index * 0.1}s`
        }}
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
      >
        <div className="card-inner bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-2xl h-full">
          <div className="relative h-full flex flex-col">
            {/* Quote Text */}
            <div className="flex-1 mb-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-brand-primary/30 font-serif">"</div>
                <p className="text-brand-text leading-relaxed italic text-base lg:text-lg font-medium pt-6 relative z-10 opacity-90">
                  {quote.text}
                </p>
                <div className="absolute -bottom-2 -right-2 text-4xl text-brand-primary/30 font-serif">"</div>
              </div>
            </div>
            
            {/* Author */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-full"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  {quote.author}
                </span>
              </div>
              <div className="floating-accent w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    // Wishes Grid
    wishes.map((wish, index) => (
      <div
        key={wish.id}
        className="card-3d gradient-border cursor-pointer group card-enter"
        style={{
          animationDelay: `${index * 0.1}s`
        }}
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
      >
        <div className="card-inner bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-2xl h-full">
          <div className="relative h-full flex flex-col">
            {/* Wish Text */}
            <div className="flex-1 mb-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-2xl text-brand-primary/50">♡</div>
                <p className="text-brand-text leading-relaxed text-base lg:text-lg font-medium pt-6 relative z-10 opacity-90">
                  {wish.text}
                </p>
                <div className="absolute -bottom-2 -right-2 text-xl text-brand-primary/50">♡</div>
              </div>
            </div>
            
            {/* From */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-full"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  {wish.from}
                </span>
              </div>
              <div className="floating-accent w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>
          </div>

          {/* Inspirational quote */}
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 max-w-md mx-auto transform hover:scale-105 transition-all duration-500">
              <p className="text-brand-text/70 italic text-lg hover:text-brand-text transition-colors duration-300">
                "Setiap kenangan adalah harta berharga yang tak ternilai"
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-brand-primary/40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${8 + Math.random() * 8}px`
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;