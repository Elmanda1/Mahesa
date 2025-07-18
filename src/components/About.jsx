import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Gift, Cake, Gamepad2, Coffee, Film, ArrowDown, BookOpen, Music, Calendar, MapPin, Users } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [selectedTab, setSelectedTab] = useState('personality');
  
  const quotes = [
    "Selamat ulang tahun, kawan! Semoga semua 'misi' di kehidupan nyata dan di dalam game bisa kamu selesaikan dengan epic.",
    "Terima kasih sudah menjadi teman yang luar biasa. Cheers to another level up!",
    "May your birthday be filled with legendary drops and epic wins! 🎮",
    "Here's to another year of amazing adventures, both virtual and real! 🌟"
  ];

  const personalityTraits = [
    { emoji: "📚", trait: "Bookworm Supreme", desc: "Bisa baca novel sampai lupa makan!" },
    { emoji: "🎵", trait: "Olivia Rodrigo Stan", desc: "Tau semua lirik lagu dari album SOUR & GUTS" },
    { emoji: "👥", trait: "Kakak Terbaik", desc: "Anak pertama yang caring sama adik-adiknya" },
    { emoji: "🎯", trait: "Goal Getter", desc: "Kalau udah niat, pasti tercapai!" }
  ];

  const bookCollection = [
    { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", rating: 5 },
    { title: "It Ends with Us", author: "Colleen Hoover", rating: 4 },
    { title: "The Silent Patient", author: "Alex Michaelides", rating: 5 },
    { title: "Normal People", author: "Sally Rooney", rating: 4 }
  ];

  const oliviaFacts = [
    "Lagu favorit: 'drivers license' (yang bikin nangis pertama kali)",
    "Album favorit: SOUR (lebih relate sama fase remaja)",
    "Fun fact: Punya poster Olivia di kamar!",
    "Dream: Pengen nonton konser Olivia live suatu hari nanti"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-brand-primary/20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500/20 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-brand-primary-light/10 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-brand-primary/20 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Dotted Pattern Background */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ec4899&#34; fill-opacity=&#34;0.05&#34;%3E%3Ccircle cx=&#34;30&#34; cy=&#34;30&#34; r=&#34;2&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">

        {/* Main Profile Card */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 mb-8 hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              {/* Profile Image with Glow Effect */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary via-pink-500 to-brand-primary-light rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                  <img 
                    src="./assets/gallery/2.jpg"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center md:text-left text-brand-text">
                <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-brand-primary to-pink-500 bg-clip-text text-transparent">
                  Najma Gusti Ayu Mahesa
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Star className="w-5 h-5 text-brand-primary" />
                  <span className="text-2xl font-bold text-brand-primary">Book Enthusiast & Olivia Rodrigo No.1 Fan</span>
                  <Star className="w-5 h-5 text-brand-primary" />
                </div>
                <p className="text-lg text-brand-text/70 leading-relaxed max-w-md mb-4">
                  Kakak pertama dari 3 bersaudara, wanita berusia 21 tahun yang sangat menyukai buku terutama novel-novel fiksi, penggemar berat Olivia Rodrigo.  
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">21</div>
                    <div className="text-sm text-brand-text/60">Years Old</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">100+</div>
                    <div className="text-sm text-brand-text/60">Books Read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">∞</div>
                    <div className="text-sm text-brand-text/60">Olivia Songs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 mb-8">
            <h2 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-brand-primary to-pink-500 bg-clip-text text-transparent">
              GET TO KNOW ME BETTER
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-brand-primary/10 p-1 rounded-2xl">
                <div className="flex gap-2">
                  {[
                    { id: 'personality', label: 'Personality', icon: Sparkles },
                    { id: 'books', label: 'Book Corner', icon: BookOpen },
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setSelectedTab(id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedTab === id
                          ? 'bg-brand-primary text-white shadow-lg'
                          : 'text-brand-primary hover:bg-brand-primary/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px] relative">
              {/* Personality Tab */}
              <div 
                className={`min-h-100% relative inset-0 transition-all duration-700 ease-in-out ${
                  selectedTab === 'personality' 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-6 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {personalityTraits.map((item, index) => (
                    <div 
                      key={index} 
                      className={`group bg-gradient-to-br from-brand-primary/10 to-pink-500/10 p-6 rounded-2xl border border-brand-primary/20 hover:scale-105 transition-all duration-300 ${
                        selectedTab === 'personality' ? 'animate-fadeInUp' : ''
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="text-center">
                        <div className="text-6xl mb-4 group-hover:animate-bounce">{item.emoji}</div>
                        <h3 className="font-bold text-xl text-brand-text mb-2">{item.trait}</h3>
                        <p className="text-brand-primary/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Books Tab */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  selectedTab === 'books' 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-6 pointer-events-none'
                }`}
              >
                <div className="space-y-6">
                  <div className={`text-center mb-6 ${selectedTab === 'books' ? 'animate-fadeInUp' : ''}`}>
                    <BookOpen className="w-16 h-16 mx-auto text-brand-primary mb-4" />
                    <h3 className="text-2xl font-bold text-brand-text">Recent Favorite Reads</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bookCollection.map((book, index) => (
                      <div 
                        key={index} 
                        className={`bg-gradient-to-r from-brand-primary/10 to-pink-500/10 p-4 rounded-xl border border-brand-primary/20 hover:scale-105 transition-all duration-300 ${
                          selectedTab === 'books' ? 'animate-fadeInUp' : ''
                        }`}
                        style={{ animationDelay: `${(index + 1) * 150}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-20 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-brand-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-brand-text">{book.title}</h4>
                            <p className="text-brand-primary/70 text-sm mb-2">{book.author}</p>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Favorites Section - Original */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 mb-8">
            <h2 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-brand-primary to-pink-500 bg-clip-text text-transparent">
              FUNFACT CORNER 
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Food */}
              <div className="group bg-gradient-to-br from-brand-primary/10 to-pink-500/10 p-6 rounded-2xl border border-brand-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">🍜</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Coffee className="w-5 h-5 text-brand-primary" />
                    <h3 className="font-bold text-xl text-brand-text">Makanan</h3>
                  </div>
                  <p className="text-brand-primary font-semibold">Mie + Brokoli</p>
                  <div className="mt-2 text-sm text-brand-primary/80">Makanan yang dulu dia gasuka, tapi ternyata cocok! </div>
                </div>
              </div>

              {/* Game */}
              <div className="group bg-gradient-to-br from-brand-primary/10 to-pink-500/10 p-6 rounded-2xl border border-brand-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">🎮</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Gamepad2 className="w-5 h-5 text-pink-500" />
                    <h3 className="font-bold text-xl text-brand-text">Game</h3>
                  </div>
                  <p className="text-brand-primary font-semibold">Roblox (kalau ada temen)</p>
                  <div className="mt-2 text-sm text-brand-primary/80">Udah bisa lompat sama daki gunung dikit! 😃</div>
                </div>
              </div>

              {/* Entertainment */}
              <div className="group bg-gradient-to-br from-brand-primary/10 to-pink-500/10 p-6 rounded-2xl border border-brand-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">🎬</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Film className="w-5 h-5 text-brand-primary-light" />
                    <h3 className="font-bold text-xl text-brand-text">Tontonan</h3>
                  </div>
                  <p className="text-brand-primary font-semibold">Legally Blonde</p>
                  <div className="mt-2 text-sm text-brand-primary/80">She said lebih seruan yang kedua! 😄</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Birthday Message */}
        <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-brand-primary/10 via-pink-500/10 to-brand-primary-light/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-brand-primary/20 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-brand-primary" />
                <h2 className="text-3xl font-black text-brand-text">A Special Note For You</h2>
                <Heart className="w-6 h-6 text-brand-primary" />
              </div>
              
              <div className="relative overflow-hidden h-24 mb-6">
                <div 
                  className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateY(-${currentQuote * 100}%)` }}
                >
                  {quotes.map((quote, index) => (
                    <div key={index} className="h-24 flex items-center justify-center px-4">
                      <p className="text-lg text-brand-text/70 italic font-medium max-w-2xl">
                        "{quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center gap-2">
                {quotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentQuote ? 'bg-brand-primary' : 'bg-brand-text/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Birthday Wishes Grid */}
        <div className={`transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
            <div className="bg-gradient-to-br from-pink-500/10 to-brand-primary-light/10 backdrop-blur-xl p-6 rounded-2xl border border-pink-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-bold text-xl text-brand-text mb-2">Legendary Status</h3>
                <p className="text-pink-500">You're a mystery i want to solve! ✨</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 to-pink-500/10 backdrop-blur-xl px-6 py-3 rounded-full border border-brand-primary/20">
            <Cake className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-text font-bold">Made with ❤️ for an amazing friend</span>
            <Gift className="w-5 h-5 text-pink-500" />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
          }
          to {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.8);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default About;