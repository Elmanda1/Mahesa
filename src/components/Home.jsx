import React, { useState, useEffect } from 'react';

function Home({ onStartQuiz, onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  const [activeSection, setActiveSection] = useState('quotes'); // 'quotes' or 'wishes'
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample quotes data with categories (minimal examples)
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
    }
  ];

  // Sample wishes data (minimal examples)
  const wishes = [
    {
      id: 1,
      text: "Semoga di tahun ini kamu menemukan kebahagiaan dalam hal-hal sederhana dan pencapaian dalam mimpi-mimpi besarmu.",
      from: "Falih"
    },
    {
      id: 2,
      text: "Selamat ulang tahun! Semoga setiap langkahmu dipenuhi berkah dan setiap senyummu membawa kebahagiaan.",
      from: "Keluarga Besar"
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
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-brand-primary-light/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-primary/30 rounded-full animate-bounce"
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo Section */}
              <div className="text-center lg:text-left">
                <div className="relative w-80 h-80 mx-auto lg:mx-0 group">
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-3xl p-1 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-white p-2">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        {/* Gambar profil - ganti src dengan path gambar yang diinginkan */}
                        <img 
                          src="../src/assets/gallery/home.jpg" 
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
                    Selamat memasuki babak baru dalam hidupmu! Aku membuat website kecil ini bukan hanya sebagai hadiah, tapi juga sebagai kapsul waktu digital untuk semua kenangan yang telah kita lalui.
                  </p>
                  
                  <p className="opacity-90">
                    Semoga kamu suka dengan hadiah sederhana ini. Jelajahi setiap bagiannya, kenang kembali momen-momen kita, dan tersenyumlah. Selamat ulang tahun, kawan terbaik!
                  </p>
                </div>
                
                {/* Signature */}
                <div className="mt-10">
                  <div className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent mb-3">
                    - Falih Elmanda Ghaisan
                  </div>
                  <div className="w-32 h-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto lg:mx-0 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Wall of Quotes and Wishes Section */}
          <div className="mb-16">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent animate-fade-in">
                {activeSection === 'quotes' ? 'Wall of Quotes' : 'Wall of Wishes'}
              </h2>
              
              {/* Toggle Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveSection('quotes')}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 hover:rotate-1 perspective-1000 ${
                    activeSection === 'quotes'
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-2xl shadow-brand-primary/30'
                      : 'bg-white/80 backdrop-blur-md text-brand-text hover:bg-white/90 shadow-xl hover:shadow-2xl'
                  }`}
                  style={{ 
                    transform: activeSection === 'quotes' ? 'translateZ(20px)' : 'translateZ(0px)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  📜 Quotes
                </button>
                <button
                  onClick={() => setActiveSection('wishes')}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 hover:rotate-1 perspective-1000 ${
                    activeSection === 'wishes'
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-2xl shadow-brand-primary/30'
                      : 'bg-white/80 backdrop-blur-md text-brand-text hover:bg-white/90 shadow-xl hover:shadow-2xl'
                  }`}
                  style={{ 
                    transform: activeSection === 'wishes' ? 'translateZ(20px)' : 'translateZ(0px)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  💝 Wishes
                </button>
              </div>

              {/* Category Filter (Only for Quotes) */}
              {activeSection === 'quotes' && (
                <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-in">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
              {activeSection === 'quotes' ? (
                // Quotes Grid
                filteredQuotes.map((quote, index) => (
                  <div
                    key={quote.id}
                    className={`quote-card bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 cursor-pointer group animate-card-in`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      transformStyle: 'preserve-3d'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(30px) rotateY(5deg) rotateX(5deg) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(0px) rotateY(0deg) rotateX(0deg) scale(1)';
                    }}
                  >
                    <div className="relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                        "
                      </div>
                      
                      {/* Quote Text */}
                      <p className="text-brand-text leading-relaxed mb-6 italic text-base lg:text-lg font-medium pt-4">
                        "{quote.text}"
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <span className="text-brand-primary font-bold text-sm bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                          — {quote.author}
                        </span>
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-primary/20 to-brand-primary-light/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                          <span className="text-sm">✨</span>
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
                    className={`wish-card bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 cursor-pointer group animate-card-in`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      transformStyle: 'preserve-3d'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(30px) rotateY(-5deg) rotateX(5deg) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(0px) rotateY(0deg) rotateX(0deg) scale(1)';
                    }}
                  >
                    <div className="relative">
                      {/* Wish Icon */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-full flex items-center justify-center text-white text-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                        💝
                      </div>
                      
                      {/* Wish Text */}
                      <p className="text-brand-text leading-relaxed mb-6 text-base lg:text-lg font-medium pt-4">
                        {wish.text}
                      </p>
                      
                      {/* From */}
                      <div className="flex items-center justify-between">
                        <span className="text-brand-primary font-bold text-sm bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                          — {wish.from}
                        </span>
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-primary/20 to-brand-primary-light/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                          <span className="text-sm">💕</span>
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
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 max-w-md mx-auto">
              <p className="text-brand-text/70 italic text-lg hover:text-brand-text transition-colors duration-300">
                "Setiap kenangan adalah harta yang tak ternilai"
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

      {/* Custom styles */}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateY(30deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateY(0deg) scale(1);
          }
        }
        
        .animate-gentle-float {
          animation: gentleFloat 4s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-in {
          animation: slideIn 0.6s ease-out;
        }
        
        .animate-card-in {
          animation: cardIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .quote-card, .wish-card {
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        
        .quote-card:hover, .wish-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Enhanced 3D hover effects */
        .quote-card:hover::before,
        .wish-card:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border-radius: 24px;
          z-index: 1;
        }
        
        .quote-card > div,
        .wish-card > div {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}

export default Home;