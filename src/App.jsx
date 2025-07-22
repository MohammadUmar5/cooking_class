import React from 'react';
import { Lock, Globe } from 'lucide-react';

// Load Google Font - Playfair Display only
const linkElement = document.createElement('link');
linkElement.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap';
linkElement.rel = 'stylesheet';
document.head.appendChild(linkElement);

const TravelLandingPage = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

const mockImages = [
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675731118517-c85b8cd0904c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2R8ZW58MHx8MHx8fDA%3D'
];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % mockImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + mockImages.length) % mockImages.length);
  };

  return (
    <div>
      {/* First Section */}
      <div className="min-h-screen grid lg:grid-cols-2">
        <div className="absolute inset-0 lg:w-1/2 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200"></div>
        </div>

        <div className="relative z-10 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-8 lg:p-12 flex flex-col">
          <div className="flex items-center justify-between mb-[-80px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-800">TravelGavel</span>
            </div>

            <div className="flex items-center gap-6">
              <button className="text-gray-600 hover:text-gray-800 transition-colors">About project</button>
              <button className="text-gray-600 hover:text-gray-800 transition-colors">Contacts</button>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Eng</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="text-sm text-gray-500 mb-4 tracking-wider uppercase">Explore • Discover • Wander</div>

            <h1 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 400, 
              fontStyle: 'italic',
              fontSize: 'clamp(2.25rem, 5vw, 3rem)',
              lineHeight: '1.2',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              YOUR GATEWAY{' '}
              <span style={{ color: '#9ca3af' }}>TO</span>
              <br />
              <span style={{ color: '#f97316' }}>UNFORGETTABLE</span>
              <br />
              <span style={{ color: '#1f2937' }}>JOURNEYS</span>
            </h1>

            <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3 w-fit group">
              <span className="font-semibold">Get Started</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="relative flex flex-col justify-center rounded-tl-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="../indian-spices.jpg"
              alt="Indian Cultural Scene"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative z-10 flex gap-4 p-8 lg:p-12 mt-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex-1">
              <div className="text-2xl font-bold text-orange-600 mb-1">10k+</div>
              <div className="text-gray-700 text-sm">Verified users</div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex-1">
              <div className="text-2xl font-bold text-orange-600 mb-1">3k+</div>
              <div className="text-gray-700 text-sm">Successful deals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        {/* Left - Carousel */}
        <div className="relative p-8 lg:p-12 flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <div className="relative h-150 rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img 
                src={mockImages[currentImage]}
                alt={`Cooking experience ${currentImage + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />

              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-2 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-2 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {mockImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImage 
                      ? 'bg-orange-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right - Text */}
        <div className="relative flex flex-col justify-center p-8 lg:p-12">
          <h2 style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            lineHeight: '1.3',
            color: '#1f2937',
            marginBottom: '1.5rem'
          }}>
            Cook. Laugh. Dine. Repeat.
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Step into our Agra home and join hands in creating traditional dishes passed down for generations. From kneading dough to tempering spices, this is more than food — it's a cultural exchange.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2 w-fit group text-sm font-semibold">
            <span>See the Full Experience</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelLandingPage;
