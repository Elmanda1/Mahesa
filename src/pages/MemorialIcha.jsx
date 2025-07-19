import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MemorialIcha() {
  const navigate = useNavigate();
  const [showInitialGlow, setShowInitialGlow] = useState(false);
  const [showBackgroundParticles, setShowBackgroundParticles] = useState(false);
  const [showMemorialTitle, setShowMemorialTitle] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showDates, setShowDates] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const message = [
    "NAJJJ... selamat ulang tahun yang ke-21 yaaa 🥺💐 wah kita udah segede ini aja ya? gua masih inget banget pertama kali kita kenal... bocil SMP yang kemana-mana selalu bareng. sampe SMA pun juga masih deket yaa.",
    "makasih yaa naj, udah tetep jadi diri lu yang sekarang. yang tetep perhatian, tetep manis, tetep bisa bikin orang ngerasa ditemenin cuma karena lu ada. lu tuh... punya cara aneh tapi ajaib buat bikin hati orang anget. gua juga sering ngerasa gitu. bahkan sekarang pun, walaupun gua gak bisa jawab chat lu kayak dulu, gua masih ngerasa deket kok, naj.",
    "udah 21 aja ya. semoga tahun ini lu bisa ngasih ruang lebih banyak buat diri lu sendiri. buat istirahat, buat marah kalo perlu (karena marah juga boleh tau naj), buat nolak hal-hal yang nyusahin hati lu. nggak semua hal harus lu tahan sendiri.",
    "gua tau mungkin sekarang banyak yang berubah. tapi satu hal yang gak akan berubah: gua sayang lu, naj. banget. dan gua banggaaa banget sama lu. bangga sama cara lu kuat, meski kadang ngerasa lelahnya diem-diem. bangga sama cara lu tetep jadi najma yang gua kenal, walau waktu terus jalan.",
    "gua gak bisa peluk lu langsung sekarang, tapi semoga tiap lu baca ini, lu ngerasa dipeluk.",
    "makasih yaa udah terus nyimpen gua di hati lu. gua di sini kok. tetep dengerin lu, tetep jagain lu, tetep nyimak update random lu juga 😌",
    "ulang tahun yang ke-21 ini… semoga dunia makin ramah sama lu. dan lu juga makin sayang sama diri lu sendiri yaa 🫶",
    "love you always, naj."
  ];

  useEffect(() => {
    // Gradual reveal animation sequence starting from complete blank
    const timer0 = setTimeout(() => setShowInitialGlow(true), 1000);
    const timer1 = setTimeout(() => setShowBackgroundParticles(true), 2000);
    const timer2 = setTimeout(() => setShowMemorialTitle(true), 3500);
    const timer3 = setTimeout(() => setShowName(true), 5000);
    const timer4 = setTimeout(() => setShowDates(true), 6500);
    const timer5 = setTimeout(() => setShowMessage(true), 8500);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  // Fixed typing animation - using QuizPage logic
  useEffect(() => {
    if (!showMessage || currentParagraph >= message.length || typingComplete) {
      if (currentParagraph >= message.length && !typingComplete) {
        setTypingComplete(true);
        setTimeout(() => {
          setShowImage(true);
        }, 1000);
        setTimeout(() => {
          setShowButton(true);
        }, 2000);
      }
      return;
    }

    const currentText = message[currentParagraph];
    let index = 0;
    
    // Reset typed text for new paragraph
    if (currentParagraph > 0) {
      // Keep previous paragraphs and add new line breaks
      setTypedText(prev => prev + '\n\n');
    } else {
      // First paragraph starts fresh
      setTypedText('');
    }

    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setTypedText(prev => {
          // For first paragraph, just add character
          if (currentParagraph === 0) {
            return currentText.substring(0, index + 1);
          } else {
            // For subsequent paragraphs, keep previous content + current typing
            const previousParagraphs = message.slice(0, currentParagraph).join('\n\n');
            return previousParagraphs + '\n\n' + currentText.substring(0, index + 1);
          }
        });
        index++;
      } else {
        clearInterval(typeInterval);
        // Move to next paragraph after a delay
        setTimeout(() => {
          setCurrentParagraph(prev => prev + 1);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [showMessage, currentParagraph, typingComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Gradual background effects - starts completely invisible */}
      <div className="absolute inset-0">
        {/* Initial ambient glow */}
        <div className={`absolute inset-0 transition-opacity duration-3000 ease-out ${
          showInitialGlow ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/3 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Background particles - appear after initial glow */}
        <div className={`transition-all duration-4000 ease-out ${
          showBackgroundParticles ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Primary ambient lights */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          {/* Additional floating particles */}
          <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-amber-300/20 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-white/15 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute bottom-1/6 left-2/3 w-1 h-1 bg-blue-300/25 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Memorial Header with staggered entrance animations */}
      {(showMemorialTitle || showName || showDates || showMessage) && (
        <div className="text-center z-10 mb-8">
          {/* Decorative top element - appears with memorial title */}
          <div className={`mb-6 transition-all duration-2000 ease-out transform ${
            showMemorialTitle 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-110 translate-y-8'
          }`}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent mx-auto mb-4"></div>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-amber-300/30 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-300/50 rounded-full animate-pulse delay-300"></div>
              <div className="w-1.5 h-1.5 bg-amber-300/30 rounded-full animate-pulse delay-600"></div>
            </div>
          </div>

          {/* "In Loving Memory" title */}
          <div className={`transition-all duration-2500 ease-out transform ${
            showMemorialTitle 
              ? 'opacity-100 translate-y-0 scale-100 blur-none' 
              : 'opacity-0 translate-y-8 scale-95 blur-sm'
          }`}>
            <h1 className="text-2xl md:text-3xl font-light text-white/90 tracking-wider mb-6 animate-fade-in-up">
              In Loving Memory
            </h1>
          </div>
          
          {/* Name - appears separately */}
          <h2 className={`text-3xl md:text-4xl font-serif text-amber-100 mb-3 tracking-wide transition-all duration-3000 ease-out transform ${
            showName 
              ? 'opacity-100 translate-y-0 scale-100 blur-none' 
              : 'opacity-0 translate-y-12 scale-90 blur-md'
          } hover:scale-105 duration-500`}>
            Annisa Bintang Mahira
          </h2>

          {/* Dates section - appears last */}
          <div className={`transition-all duration-3000 ease-out transform ${
            showDates 
              ? 'opacity-100 translate-y-0 scale-100 blur-none' 
              : 'opacity-0 translate-y-8 scale-95 blur-sm'
          }`}>
            <p className="text-lg md:text-xl text-white/70 font-light tracking-wide mb-3">
              02 September 2004 — 29 Maret 2024
            </p>
            
            {/* AI Attribution */}
            <p className="text-sm text-white/50 font-light italic mb-6">
              Pesan ini dibuat oleh AI berdasarkan chat-chat yang sudah ada
            </p>
            
            {/* Enhanced decorative divider */}
            <div className="mt-8 mb-6 flex justify-center items-center">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"></div>
              <div className="mx-4">
                <div className="w-3 h-3 border border-amber-300/40 rounded-full bg-amber-300/10 animate-pulse"></div>
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"></div>
            </div>
          </div>
        </div>
      )}

      {/* Message Section */}
      {showMessage && (
        <div className={`z-10 max-w-4xl mx-auto w-full transition-all duration-2000 ease-out transform ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 relative">
            <div className="text-white/90 leading-relaxed text-base md:text-lg font-light whitespace-pre-wrap">
              {typedText}
              {!typingComplete && <span className="animate-pulse text-amber-300">|</span>}
            </div>

            {/* Enhanced image with beautiful border */}
            {showImage && (
              <div className={`mt-8 flex justify-center transition-all duration-2000 ease-out transform ${
                showImage ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
              }`}>
                <div className="relative">
                  {/* Outer glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-white/10 to-amber-400/20 rounded-xl blur-lg opacity-75"></div>
                  
                  {/* Inner border frame */}
                  <div className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-1 rounded-xl shadow-2xl">
                    <div className="bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 p-3 rounded-lg">
                      <img 
                        src="/assets/gallery/memorial.jpg" 
                        alt="Memorial" 
                        className="max-w-sm w-full h-auto rounded-lg shadow-xl"
                      />
                    </div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-amber-300/40 rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-amber-300/40 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-amber-300/40 rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-amber-300/40 rounded-br-lg"></div>
                </div>
              </div>
            )}
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-3 -left-3 w-3 h-3 bg-amber-300/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-white/20 rounded-full animate-ping delay-1000"></div>
            <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-amber-400/25 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-1500"></div>
          </div>
        </div>
      )}

      {/* Enhanced Back Button */}
      {showButton && (
        <div className={`mt-8 z-10 transition-all duration-2000 ease-out transform ${
          showButton ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}>
          <button
            onClick={() => navigate('/video')}
            className="relative px-8 py-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-100 border border-amber-400/30 rounded-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm group overflow-hidden"
          >
            <span className="relative z-10">Kembali</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </button>
        </div>
      )}

      {/* Enhanced bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-amber-400/15 via-amber-400/5 to-transparent blur-2xl"></div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MemorialIcha;