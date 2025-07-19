import React, { useState, useEffect } from 'react';

function Home({ onStartQuiz, onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('quotes'); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const [displayContent, setDisplayContent] = useState('quotes'); // What content is currently being displayed

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
    
    // First phase: fade out current content
    setTimeout(() => {
      setDisplayContent(newSection); // Update what content should be displayed
      setActiveSection(newSection);
    }, 400); // Wait for fade out animation
    
    // Second phase: fade in new content
    setTimeout(() => {
      setContentVisible(true);
    }, 450); // Start fade in slightly after content change
    
    // Final phase: complete transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 850); // Wait for fade in animation to complete
  };

  const quotes = [
    {
      id: 1,
      text: "Cinta yang tidak direstui adalah cinta yang paling jujur, karena ia tidak mengharap apa-apa selain diterima.",
      author: "Tere Liye"
    },
    {
      id: 2,
      text: "Jangan biarkan masa lalu mencuri kebahagiaanmu hari ini.",
      author: "Dee Lestari"
    },
    {
      id: 3,
      text: "Love is not something that you find. Love is something that finds you.",
      author: "Loretta Young"
    },
    {
      id: 4,
      text: "We accept the love we think we deserve.",
      author: "Stephen Chbosky"
    },
    {
      id: 5,
      text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
      author: "Dr. Seuss"
    },
    {
      id: 7,
      text: "Bermimpilah dalam hidup, jangan hidup dalam mimpi.",
      author: "Andrea Hirata"
    },
    {
      id: 8,
      text: "You can't go back and change the beginning, but you can start where you are and change the ending.",
      author: "C.S.Lewis"
    },
    {
      id: 9,
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S.Lewis"
    },
    {
      id: 10,
      text: "Keberanian terbesar adalah ketika kamu berdiri untuk diri sendiri, meski dunia menentang.",
      author: "Pramoedya Ananta Toer"
    },
    {
      id: 11,
      text: "Setiap orang bisa hebat, asal tahu apa yang dia perjuangkan.",
      author: "B.J. Habibie"
    },
    {
      id: 12,
      text: "Jangan terlalu lama menyesali apa yang sudah terjadi. Karena waktu tidak akan menunggumu berdamai.",
      author: "Boy Candra"
    },
    {
      id: 13,
      text: "Ketika kita tidak bisa mendapatkan apa yang kita cintai, cintailah apa yang kita miliki. Di situlah kedewasaan tumbuh.",
      author: "Dee Lestari"
    },
    {
      id: 14,
      text: "Kamu tidak harus luar biasa untuk memulai, tapi kamu harus mulai untuk menjadi luar biasa.",
      author: "Bob Sadino"
    },
    {
      id: 15,
      text: "Yang melemahkanmu bukan beban hidup, tapi cara pikirmu terhadap beban itu.",
      author: "Tere Liye"
    },
    {
      id: 16,
      text: "There is no greater agony than bearing an untold story inside you.",
      author: "Maya Angelou"
    },
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
    },
    {
      id: 7,
      text: "wishnyaaaa semogaaa di chapter 21 ini kita jadi sering ketemu dan ga ketemu di margo lagi margo lagi,,, tapi gapapa i love margo heheee. najj semogaa semua yang baik menghampiri kamu di umur 21 ini yaa, sehat terusss, makin sering update kehidupann PLEASEEEE di x atau di sg terserah yg mana aja dah yg penting update… semoga dilancarkann kuliahnya, magangnya, semuanyaaa pokonya i love u alwayssss muach kecup kecuppp😘😘😘😘😘😘.",
      from: "Naura Aulia"
    },
    {
      id: 8,
      text: "Wishing Najma more secure, wiser, healthier, happier than ever! ❤ Whenever you feel like you fighting your silent battles, please do remember that I wish for calm in your chaos. I wish for peace in your mind, and warmth in your heart. I hope you keep choosing yourself Naj 💝 You’ve grown in ways you probably don’t even notice. But I do (how could I not? 🤣), and I’m proud of every version of you. Especially the one who keeps going. Love you always sisterstar! 💗",
      from: "Larasati Marutika"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">
      
      <style jsx>{`
        .content-transition {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .content-enter {
          opacity: 1;
          transform: translateY(0px) scale(1);
        }
        
        .content-exit {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        
        .title-transition {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-enter {
          animation: cardSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
        
        .button-morphing {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .button-morphing::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .button-morphing:hover::before {
          left: 100%;
        }
        
        .floating-particle {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        
        .perspective-container {
          perspective: 1000px;
        }
        
        .grid-stagger > * {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .photo-enter {
          animation: photoSlideIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes photoSlideIn {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0px) scale(1);
          }
        }
        
        .text-enter {
          animation: textSlideIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes textSlideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        
        .section-slide-enter {
          animation: sectionSlideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .section-slide-exit {
          animation: sectionSlideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes sectionSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0px) scale(1);
          }
        }
        
        @keyframes sectionSlideOut {
          from {
            opacity: 1;
            transform: translateX(0px) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
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
        <div className="max-w-7xl mx-auto">
          {/* Enhanced main welcome section */}
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-3xl shadow-2xl border border-white/30 mb-12 transform hover:scale-[1.01] transition-all duration-500">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Enhanced Photo Section */}
              <div className="flex-shrink-0 photo-enter" style={{ animationDelay: '0.3s' }}>
                <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px] group">
                  {/* Outer decorative ring */}
                  <div className="absolute -inset-8 border-2 border-brand-secondary/40 rounded-full group-hover:border-brand-primary/60 transition-colors duration-500 group-hover:scale-105 group-hover:rotate-6"></div>
                  
                  {/* Inner decorative ring */}
                  <div className="absolute -inset-4 border border-brand-primary/30 rounded-full group-hover:border-brand-primary/50 transition-colors duration-500 group-hover:scale-105 group-hover:-rotate-3"></div>
                  
                  {/* Main gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary-light to-brand-primary rounded-full p-2 group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        {/* Profile image */}
                        <img 
                          src="/assets/gallery/home.JPG" 
                          alt="Mahesa" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Text Content Section */}
              <div className="flex-1 text-center lg:text-left text-enter" style={{ animationDelay: '0.6s' }}>
                {/* Decorative top element */}
                <div className="w-20 h-2 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto lg:mx-0 mb-8 rounded-full"></div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent leading-tight">
                  Untuk Mahesa,
                </h1>
                
                <div className="space-y-6 text-lg text-brand-text leading-relaxed">
                  <p className="opacity-90">
                    Selamat memasuki babak baru dalam hidupmu yaa! Website kecil ini kubuat bukan hanya sebagai hadiah, tapi juga sebagai <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent font-semibold">kapsul waktu digital</span> untuk semua kenangan yang telah kamu atau kita lalui.
                  </p>
                  
                  <p className="opacity-90">
                    Semoga kamu suka dengan hadiah sederhana ku ini. Mohon jelajahi setiap bagiannya, kenang kembali momen-momen nya, dan <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent font-semibold">tersenyumlah</span>. 
                  </p>
                  
                  <div className="bg-gradient-to-r from-brand-primary/10 to-brand-primary-light/10 rounded-2xl p-6 border border-brand-primary/20">
                    <p className="opacity-95 font-medium text-brand-primary">
                      Selamat ulang tahun, Mahesa! Semoga tahun ini dipenuhi dengan kebahagiaan, cinta, dan pencapaian yang luar biasa.
                    </p>
                  </div>
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
              <h2 className={`text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent title-glow title-transition ${
                contentVisible ? 'content-enter' : 'content-exit'
              }`}>
                {displayContent === 'quotes' ? 'Wall of Quotes' : 'Wall of Wishes'}
              </h2>
              
              {/* Toggle Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => switchSection('quotes')}
                  disabled={isTransitioning}
                  className={`px-8 py-4 rounded-2xl font-semibold button-morphing ${
                    activeSection === 'quotes'
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-2xl shadow-brand-primary/30 scale-105'
                      : 'bg-white/80 backdrop-blur-md text-brand-text hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105'
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''} transition-all duration-300`}
                >
                  📜 Quotes
                </button>
                <button
                  onClick={() => switchSection('wishes')}
                  disabled={isTransitioning}
                  className={`px-8 py-4 rounded-2xl font-semibold button-morphing ${
                    activeSection === 'wishes'
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-2xl shadow-brand-primary/30 scale-105'
                      : 'bg-white/80 backdrop-blur-md text-brand-text hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105'
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''} transition-all duration-300`}
                >
                  💝 Wishes
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container content-transition ${
              contentVisible ? 'content-enter' : 'content-exit'
            }`} style={{ transitionDelay: '0.2s' }}>
              {displayContent === 'quotes' ? (
                // Quotes Grid - All quotes without filtering
                quotes.map((quote, index) => (
                  <div
                    key={quote.id}
                    className="card-3d cursor-pointer group card-transition"
                    style={{
                      animationDelay: contentVisible ? `${index * 0.1}s` : '0s'
                    }}
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-2xl h-full transition-all duration-500 group-hover:scale-105">
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
                    className="card-3d cursor-pointer group card-transition"
                    style={{
                      animationDelay: contentVisible ? `${index * 0.1}s` : '0s'
                    }}
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-2xl h-full transition-all duration-500 group-hover:scale-105">
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