import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import Navbar component

const WallOfquotes = ({ 
  onBack, 
  onBackToHome, 
  onStartQuiz, 
  onNavigateToGallery, 
  onNavigateToTimeline, 
  onNavigateToAbout 
}) => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);
  const [animatedQuotes, setAnimatedQuotes] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const themes = [
    {
      id: 'love',
      title: 'Cinta & Kasih Sayang',
      icon: '💕',
      color: 'from-pink-500 to-rose-400',
      bgColor: 'bg-pink-500/10',
      quotes: [
        "Cinta sejati adalah ketika kamu menemukan seseorang yang membuatmu menjadi versi terbaik dari dirimu sendiri.",
        "Dalam setiap detik bersamamu, aku menemukan alasan baru untuk bersyukur.",
        "Cinta bukan tentang sempurna, tapi tentang menerima ketidaksempurnaan dengan tulus.",
        "Kamu adalah jawaban dari doa yang tidak pernah kuucapkan.",
        "Cinta yang tulus tidak pernah berakhir, ia hanya berubah bentuk.",
        "Bersamamu, aku belajar bahwa rumah bukan tempat, tapi perasaan."
      ]
    },
    {
      id: 'friendship',
      title: 'Persahabatan',
      icon: '👫',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-500/10',
      quotes: [
        "Sahabat sejati adalah yang tetap ada ketika seluruh dunia pergi.",
        "Persahabatan adalah harta yang tidak bisa dibeli dengan uang.",
        "Sahabat terbaik adalah cermin yang menunjukkan siapa diri kita sebenarnya.",
        "Dalam tawa dan tangis, sahabat adalah tempat pulang yang paling nyaman.",
        "Persahabatan yang tulus tidak mengenal jarak dan waktu.",
        "Sahabat adalah keluarga yang kita pilih sendiri."
      ]
    },
    {
      id: 'motivation',
      title: 'Motivasi & Semangat',
      icon: '🌟',
      color: 'from-yellow-500 to-orange-400',
      bgColor: 'bg-yellow-500/10',
      quotes: [
        "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
        "Mimpi tidak akan pernah terlalu besar jika kamu berani mengejarnya.",
        "Kegagalan adalah guru terbaik yang mengajarkan kita tentang kekuatan.",
        "Bintang tidak bisa bersinar tanpa kegelapan di sekitarnya.",
        "Keberanian bukan berarti tidak takut, tapi melakukan yang benar meski takut.",
        "Perjalanan seribu mil dimulai dengan satu langkah kecil."
      ]
    },
    {
      id: 'life',
      title: 'Kehidupan & Filosofi',
      icon: '🌸',
      color: 'from-purple-500 to-pink-400',
      bgColor: 'bg-purple-500/10',
      quotes: [
        "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan.",
        "Kebahagiaan sejati datang dari dalam, bukan dari pencapaian luar.",
        "Setiap orang yang kita temui adalah guru yang mengajarkan sesuatu.",
        "Waktu adalah hadiah, gunakan dengan bijak.",
        "Kehidupan adalah kanvas kosong, dan kita adalah pelukisnya.",
        "Bersyukur mengubah apa yang kita miliki menjadi lebih dari cukup."
      ]
    },
    {
      id: 'growth',
      title: 'Pertumbuhan Diri',
      icon: '🌱',
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-500/10',
      quotes: [
        "Pertumbuhan dimulai di ujung zona nyaman kita.",
        "Jadilah versi terbaik dari dirimu, bukan salinan orang lain.",
        "Belajar dari kemarin, hidup untuk hari ini, berharap untuk besok.",
        "Perubahan adalah satu-satunya konstanta dalam hidup.",
        "Investasi terbaik adalah investasi pada diri sendiri.",
        "Setiap tantangan adalah kesempatan untuk tumbuh lebih kuat."
      ]
    },
    {
      id: 'gratitude',
      title: 'Syukur & Ketenangan',
      icon: '🙏',
      color: 'from-indigo-500 to-blue-400',
      bgColor: 'bg-indigo-500/10',
      quotes: [
        "Syukur adalah kunci untuk membuka pintu kebahagiaan.",
        "Ketenangan jiwa adalah harta yang paling berharga.",
        "Dalam kesederhanaan, kita menemukan keindahan yang sejati.",
        "Bersyukur atas hal kecil membuat hidup terasa lebih besar.",
        "Kedamaian bukan berarti tidak ada masalah, tapi tenang di tengah badai.",
        "Hidup ini indah ketika kita belajar menghargai setiap momen."
      ]
    }
  ];

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setShowQuotes(true);
    
    // Animate quotes one by one
    theme.quotes.forEach((quote, index) => {
      setTimeout(() => {
        setAnimatedQuotes(prev => [...prev, { quote, index }]);
      }, index * 200);
    });
  };

  const handleBackToThemes = () => {
    setSelectedTheme(null);
    setShowQuotes(false);
    setAnimatedQuotes([]);
  };

  // Navigation handler untuk navbar
  const handleNavigation = (view) => {
    switch(view) {
      case 'home':
        onBackToHome();
        break;
      case 'quiz':
        onStartQuiz();
        break;
      case 'gallery':
        onNavigateToGallery();
        break;
      case 'timeline':
        onNavigateToTimeline();
        break;
      case 'about':
        onNavigateToAbout();
        break;
      case 'Wallofquotes':
        // Already on this page, do nothing
        break;
      default:
        onBackToHome();
    }
  };

  if (!selectedTheme) {
    return (
      <div className="min-h-screen bg-brand-background">
        {/* Navbar */}
        <Navbar 
          activeView="Wallofquotes" 
          onNavigate={handleNavigation}
        />
        
        <div className="p-4">
          {/* Aurora Background Effect */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-brand-primary-light/20 rounded-full blur-3xl animate-pulse delay-75"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
              isVisible ? 'scale-100 opacity-100 filter-none' : 'scale-95 opacity-0 blur-sm'
            }`}>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-4">
                Wall of <span className="text-pink-500 font-serif italic">Quotes</span>
              </h1>
              <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
                Pilih tema yang ingin kamu jelajahi dan temukan kata-kata indah yang bisa menyentuh hati
              </p>
            </div>

            {/* Theme Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {themes.map((theme, index) => (
                <div
                  key={theme.id}
                  className={`transform transition-all duration-700 ease-out ${
                    isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => handleThemeSelect(theme)}
                    className={`w-full p-6 rounded-2xl ${theme.bgColor} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {theme.icon}
                      </div>
                      <h3 className={`text-xl font-bold bg-gradient-to-r ${theme.color} bg-clip-text text-transparent mb-2`}>
                        {theme.title}
                      </h3>
                      <p className="text-sm text-brand-text/60">
                        {theme.quotes.length} kutipan inspiratif
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Navbar */}
      <Navbar 
        activeView="Wallofquotes" 
        onNavigate={handleNavigation}
      />
      
      <div className="p-4">
        {/* Aurora Background Effect */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-brand-primary-light/20 rounded-full blur-3xl animate-pulse delay-75"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-5xl">{selectedTheme.icon}</div>
              <h1 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${selectedTheme.color} bg-clip-text text-transparent`}>
                {selectedTheme.title}
              </h1>
            </div>
            <p className="text-brand-text/70">
              Koleksi kutipan inspiratif pilihan untukmu
            </p>
          </div>

          {/* Quotes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {selectedTheme.quotes.map((quote, index) => {
              const isAnimated = animatedQuotes.some(aq => aq.index === index);
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ease-out ${
                    isAnimated ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
                  }`}
                >
                  <div className={`p-6 rounded-2xl ${selectedTheme.bgColor} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group`}>
                    <div className="relative">
                      {/* Quote Icon */}
                      <div className={`text-4xl mb-4 bg-gradient-to-r ${selectedTheme.color} bg-clip-text text-transparent opacity-30`}>
                        "
                      </div>
                      
                      {/* Quote Text */}
                      <p className="text-brand-text leading-relaxed text-lg font-medium mb-4 relative">
                        {quote}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className={`w-12 h-0.5 bg-gradient-to-r ${selectedTheme.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleBackToThemes}
              className="py-3 px-8 bg-brand-primary/20 text-brand-text font-semibold rounded-full border border-brand-primary/30 hover:bg-brand-primary/30 transition-all duration-300 hover:scale-105"
            >
              ← Pilih Tema Lain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallOfquotes;