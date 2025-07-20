import React from 'react';
import { Lock, Globe, User } from 'lucide-react';

const TravelLandingPage = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Background pattern overlay for left side */}
      <div className="absolute inset-0 lg:w-1/2 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200"></div>
      </div>

      {/* Left side - Content */}
      <div className="relative z-10 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-8 lg:p-12 flex flex-col">
        {/* Header - Fixed at top */}
        <div className="flex items-center justify-between mb-[-80px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-800">TravelGavel</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              About project
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              Contacts
            </button>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Eng</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-sm text-gray-500 mb-4 tracking-wider uppercase">
            Explore • Discover • Wander
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            YOUR GATEWAY{' '}
            <span className="text-gray-400">TO</span>
            <br />
            <span className="text-orange-500">UNFORGETTABLE</span>
            <br />
            <span className="text-gray-800">JOURNEYS</span>
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

      {/* Right side - Image background */}
      <div className="relative flex flex-col justify-center rounded-tl-3xl overflow-hidden">
        {/* Background image - covers entire right side */}
        <div className="absolute inset-0">
          <img 
            src="../indian-spices.jpg"
            alt="Indian Cultural Scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Stats - positioned over image */}
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
  );
};

export default TravelLandingPage;