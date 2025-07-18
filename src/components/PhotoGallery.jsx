import React, { useState } from 'react';

function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

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

  // Enhanced dummy data with more variety
  const mockPhotoData = [
    {
      url: "https://picsum.photos/600/400?random=1",
      title: "Kenangan Pertama",
      description: "Momen saat kita pertama kali bertemu di kampus. Siapa sangka dari perkenalan sederhana ini akan terjalin persahabatan yang begitu kuat dan bermakna.",
      date: "15 Januari 2023",
      type: "image",
      category: "friends"
    },
    {
      url: "https://picsum.photos/600/400?random=2",
      title: "Liburan Pantai",
      description: "Perjalanan ke pantai yang tak terlupakan. Tawa, canda, dan kebersamaan yang membuat hidup lebih berwarna dan penuh makna.",
      date: "22 Maret 2023",
      type: "image",
      category: "vacation"
    },
    {
      url: "https://picsum.photos/600/400?random=3",
      title: "Video Adventure",
      description: "Video singkat perjalanan kita ke gunung. Pemandangan indah dan momen kebersamaan yang tak akan pernah terlupakan.",
      date: "10 April 2023",
      type: "video",
      category: "adventure"
    },
    {
      url: "https://picsum.photos/600/400?random=4",
      title: "Ulang Tahun Surprise",
      description: "Kejutan ulang tahun yang tidak terduga. Ekspresi bahagia dan terharu yang sulit dilupakan sepanjang masa.",
      date: "5 Mei 2023",
      type: "image",
      category: "celebration"
    },
    {
      url: "https://picsum.photos/600/400?random=5",
      title: "Makan Malam Romantis",
      description: "Makan malam di restoran favorit kita. Obrolan panjang dan tawa yang menghangatkan hati dalam suasana yang intim.",
      date: "18 Juni 2023",
      type: "image",
      category: "food"
    },
    {
      url: "https://picsum.photos/600/400?random=6",
      title: "Wisuda Bersejarah",
      description: "Hari wisuda yang bersejarah. Bangga bisa melewati masa kuliah bersama-sama dengan perjuangan dan kerja keras.",
      date: "25 Juli 2023",
      type: "image",
      category: "graduation"
    },
    {
      url: "https://picsum.photos/600/400?random=7",
      title: "Karaoke Night Fun",
      description: "Malam karaoke yang seru dengan lagu-lagu favorit. Suara sumbang tapi hati senang dan penuh tawa!",
      date: "12 Agustus 2023",
      type: "video",
      category: "entertainment"
    },
    {
      url: "https://picsum.photos/600/400?random=8",
      title: "Morning Jogging",
      description: "Jogging pagi di taman kota. Hidup sehat dimulai dari kebiasaan kecil bersama sahabat terbaik.",
      date: "3 September 2023",
      type: "image",
      category: "sports"
    },
    {
      url: "https://picsum.photos/600/400?random=9",
      title: "Konser Musik Favorit",
      description: "Menyaksikan konser band favorit kita. Energi musik yang membuat semangat membara dan tak terlupakan.",
      date: "20 September 2023",
      type: "image",
      category: "music"
    },
    {
      url: "https://picsum.photos/600/400?random=10",
      title: "Piknik Santai",
      description: "Piknik santai di taman dengan bekal homemade. Sederhana tapi penuh kebahagiaan dan kehangatan.",
      date: "8 Oktober 2023",
      type: "image",
      category: "outdoor"
    },
    {
      url: "https://picsum.photos/600/400?random=11",
      title: "Daily Vlog",
      description: "Video vlog aktivitas harian kita. Momen spontan yang justru paling berkesan dan menghibur.",
      date: "15 November 2023",
      type: "video",
      category: "daily"
    },
    {
      url: "https://picsum.photos/600/400?random=12",
      title: "Cafe Hopping",
      description: "Menjelajahi cafe-cafe unik di kota. Hunting tempat ngopi yang instagramable dan nyaman.",
      date: "28 November 2023",
      type: "image",
      category: "food"
    },
    {
      url: "https://picsum.photos/600/400?random=13",
      title: "Perayaan Tahun Baru",
      description: "Perayaan tahun baru yang meriah. Resolusi baru dan harapan untuk masa depan yang lebih cerah.",
      date: "31 Desember 2023",
      type: "image",
      category: "celebration"
    },
    {
      url: "https://picsum.photos/600/400?random=14",
      title: "Workshop Kreatif",
      description: "Mengikuti workshop seni bersama. Mengasah kreativitas dan belajar hal baru yang menginspirasi.",
      date: "14 Februari 2024",
      type: "image",
      category: "learning"
    },
    {
      url: "https://picsum.photos/600/400?random=15",
      title: "Dance Challenge",
      description: "Ikut trend dance challenge yang viral. Gerakan konyol tapi seru banget dan menghibur!",
      date: "1 Maret 2024",
      type: "video",
      category: "entertainment"
    },
    {
      url: "https://picsum.photos/600/400?random=16",
      title: "Baking Session",
      description: "Sesi baking kue ulang tahun. Dapur berantakan tapi hasilnya memuaskan dan lezat.",
      date: "22 April 2024",
      type: "image",
      category: "cooking"
    },
    {
      url: "https://picsum.photos/600/400?random=17",
      title: "Beach Volleyball",
      description: "Main voli pantai dengan teman-teman. Olahraga yang seru sambil menikmati angin laut.",
      date: "15 Mei 2024",
      type: "image",
      category: "sports"
    },
    {
      url: "https://picsum.photos/600/400?random=18",
      title: "Art Gallery Visit",
      description: "Mengunjungi galeri seni kontemporer. Menikmati karya-karya indah dan mendapat inspirasi baru.",
      date: "3 Juni 2024",
      type: "image",
      category: "art"
    },
    {
      url: "https://picsum.photos/600/400?random=19",
      title: "Cooking Class",
      description: "Kelas memasak masakan tradisional. Belajar resep nenek moyang yang autentik dan lezat.",
      date: "20 Juni 2024",
      type: "video",
      category: "cooking"
    },
    {
      url: "https://picsum.photos/600/400?random=20",
      title: "Mountain Hiking",
      description: "Pendakian gunung yang menantang. Pemandangan indah di puncak sebagai reward usaha keras.",
      date: "10 Juli 2024",
      type: "image",
      category: "adventure"
    },
    {
      url: "https://picsum.photos/600/400?random=21",
      title: "Photography Workshop",
      description: "Workshop fotografi untuk pemula. Belajar teknik dasar dan tips memotret yang baik.",
      date: "25 Juli 2024",
      type: "image",
      category: "learning"
    },
    {
      url: "https://picsum.photos/600/400?random=22",
      title: "Weekend Market",
      description: "Jalan-jalan ke pasar weekend. Berburu makanan unik dan oleh-oleh khas daerah.",
      date: "8 Agustus 2024",
      type: "image",
      category: "food"
    },
    {
      url: "https://picsum.photos/600/400?random=23",
      title: "Gaming Night",
      description: "Malam gaming bersama teman-teman. Kompetisi seru dan tawa yang tidak ada habisnya.",
      date: "22 Agustus 2024",
      type: "video",
      category: "entertainment"
    },
    {
      url: "https://picsum.photos/600/400?random=24",
      title: "Sunset Viewing",
      description: "Menikmati sunset di rooftop cafe. Moment romantis dengan pemandangan kota yang indah.",
      date: "5 September 2024",
      type: "image",
      category: "outdoor"
    }
  ];

  // Filter photos based on category
  const filteredPhotos = mockPhotoData.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  // Get unique categories
  const categories = ['all', ...new Set(mockPhotoData.map(item => item.category))];

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">
      {/* Simplified background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-primary-light/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-7xl leading-relaxed font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 
              bg-clip-text text-transparent mb-5 drop-shadow-sm">
              Galeri Kenangan
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto leading-relaxed">
              Koleksi momen-momen berharga yang telah kita lalui bersama. Setiap foto menyimpan cerita dan kenangan yang tak terlupakan.
            </p>
          </div>

          {/* Modal Popup */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
              <div className="relative max-w-5xl max-h-[90vh] w-full">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/30" onClick={(e) => e.stopPropagation()}>
                  {selectedItem.type === 'video' ? (
                    <div className="relative bg-black">
                      <div className="flex items-center justify-center h-[60vh] bg-gradient-to-r from-brand-primary to-brand-primary-light">
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
                    <div className="relative">
                      <img
                        src={selectedItem.url}
                        alt="Selected item"
                        className="w-full max-h-[60vh] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}
                  
                  {/* Info section */}
                  <div className="p-8">
                    {selectedItem.title && (
                      <h3 className="text-3xl font-bold text-brand-text mb-4 bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                        {selectedItem.title}
                      </h3>
                    )}
                    
                    {selectedItem.description && (
                      <p className="text-brand-text/80 leading-relaxed mb-6 text-lg">
                        {selectedItem.description}
                      </p>
                    )}
                    
                    {selectedItem.date && (
                      <div className="flex items-center text-brand-text/60 mb-6">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{selectedItem.date}</span>
                      </div>
                    )}
                    
                    {/* Category badge */}
                    <div className="inline-block bg-gradient-to-r from-brand-primary to-brand-primary-light text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                      {selectedItem.category}
                    </div>
                    
                    {/* Bottom decoration */}
                    <div className="w-full h-1 bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-lg shadow-brand-primary/25'
                    : 'bg-white/70 backdrop-blur-sm text-brand-text hover:bg-white/90 border border-white/50 hover:shadow-lg'
                }`}
              >
                {category === 'all' ? 'Semua' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid - 4 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(item)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Video indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full px-3 py-1 text-xs font-medium shadow-lg">
                      <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video
                    </div>
                  )}
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white rounded-full px-2 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </div>
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold mb-1 truncate">{item.title}</h4>
                    <p className="text-sm text-white/90">{item.date}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-brand-text mb-2 group-hover:text-brand-primary transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-brand-text/70 text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-brand-text/80 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-brand-text/60 mb-3">
                    <span>{item.date}</span>
                    <span className="bg-white/50 px-2 py-1 rounded-full">{item.category}</span>
                  </div>
                  
                  {/* Action indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm mr-2">
                        {item.type === 'video' ? 'Putar video' : 'Lihat foto'}
                      </span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    {/* Love indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-red-400 hover:text-red-500 hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Animated indicator */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Belum Ada Foto</h3>
              <p className="text-brand-text/70">Kategori ini belum memiliki foto atau video.</p>
            </div>
          )}

          {/* Bottom decoration */}
          <div className="text-center mt-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-lg mx-auto">
              <p className="text-brand-text/80 italic text-xl mb-4 hover:text-brand-text transition-colors duration-300">
                "Setiap foto adalah jendela menuju kenangan yang tak terlupakan"
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-light mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;