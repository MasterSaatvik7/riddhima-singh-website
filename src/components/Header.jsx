import React from 'react';
import riddhimaImage from "./riddhima.jpeg";
import backgroundImage from "./background_image.jpg";

const Header = ({ profileData, activeSection, setActiveSection }) => {
  return (
    <header className="relative overflow-hidden min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={backgroundImage} 
          alt="Chinese Background" 
          className="w-full h-full object-cover min-w-full min-h-full"
        />
      </div>
      
      {/* Traditional Chinese Red and Gold Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-red-800/60 to-yellow-800/70"></div>
      
      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 z-20">
        <div className="text-center">
          {/* Traditional Chinese Frame for Profile */}
          <div className="mb-8 relative px-8 mt-4">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
              {/* Traditional Chinese Border Frame */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-600 rounded-lg transform rotate-45"></div>
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-red-800 to-yellow-700 rounded-lg transform -rotate-45"></div>
              <div className="absolute -inset-2 bg-yellow-400 rounded-full"></div>
              
              {/* Profile Picture */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-6 sm:border-8 border-red-700 shadow-2xl bg-gradient-to-br from-red-100 to-yellow-100 z-10">
                <img 
                  src={riddhimaImage}
                  alt="Riddhima Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Traditional Chinese Corner Decorations */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-yellow-300">
                <svg width="30" height="30" viewBox="0 0 40 40" className="sm:w-10 sm:h-10">
                  <path d="M5,35 L5,5 L35,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <circle cx="10" cy="10" r="3" fill="currentColor"/>
                  <circle cx="30" cy="10" r="2" fill="currentColor"/>
                  <circle cx="10" cy="30" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-yellow-300">
                <svg width="30" height="30" viewBox="0 0 40 40" className="sm:w-10 sm:h-10">
                  <path d="M35,35 L35,5 L5,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <circle cx="30" cy="10" r="3" fill="currentColor"/>
                  <circle cx="10" cy="10" r="2" fill="currentColor"/>
                  <circle cx="30" cy="30" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 text-yellow-300">
                <svg width="30" height="30" viewBox="0 0 40 40" className="sm:w-10 sm:h-10">
                  <path d="M5,5 L5,35 L35,35" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <circle cx="10" cy="30" r="3" fill="currentColor"/>
                  <circle cx="30" cy="30" r="2" fill="currentColor"/>
                  <circle cx="10" cy="10" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 text-yellow-300">
                <svg width="30" height="30" viewBox="0 0 40 40" className="sm:w-10 sm:h-10">
                  <path d="M35,5 L35,35 L5,35" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <circle cx="30" cy="30" r="3" fill="currentColor"/>
                  <circle cx="10" cy="30" r="2" fill="currentColor"/>
                  <circle cx="30" cy="10" r="2" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Name with Traditional Chinese Typography Style */}
          <h1 className="text-6xl font-bold text-yellow-100 mb-2 drop-shadow-2xl" style={{ fontFamily: 'serif' }}>
            {profileData.name}
            <span className="block text-3xl mt-2 text-red-150 font-bold drop-shadow-lg tracking-wider">{profileData.chineseName}</span>
          </h1>
          <p className="text-2xl text-yellow-200 mb-8 italic font-medium drop-shadow-lg">{profileData.tagline}</p>
          
          {/* Traditional Chinese Style Tags */}
          <div className="flex justify-center gap-6 mb-10">
            <div className="relative">
              <div className="bg-gradient-to-r from-red-700 to-yellow-600 text-yellow-100 px-8 py-4 font-bold text-lg border-4 border-yellow-400 shadow-2xl transform -skew-x-6">
                {profileData.currentRole}
              </div>
            </div>
            {/* <div className="relative">
              <div className="bg-gradient-to-r from-yellow-600 to-red-700 text-red-100 px-8 py-4 font-bold text-lg border-4 border-red-400 shadow-2xl transform skew-x-6">
                {profileData.location}
              </div>
            </div> */}
          </div>
          
          {/* Navigation with Traditional Chinese Style */}
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setActiveSection('about')}
              className={`relative px-12 py-4 font-bold text-lg transition-all transform hover:scale-105 ${
                activeSection === 'about'
                  ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white shadow-2xl border-4 border-yellow-300'
                  : 'bg-gradient-to-r from-red-800/80 to-yellow-800/80 text-yellow-100 hover:from-red-700/90 hover:to-yellow-700/90 border-4 border-yellow-500/50 hover:border-yellow-400'
              }`}
              style={{
                clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
              }}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveSection('reflections')}
              className={`relative px-12 py-4 font-bold text-lg transition-all transform hover:scale-105 ${
                activeSection === 'reflections'
                  ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white shadow-2xl border-4 border-yellow-300'
                  : 'bg-gradient-to-r from-red-800/80 to-yellow-800/80 text-yellow-100 hover:from-red-700/90 hover:to-yellow-700/90 border-4 border-yellow-500/50 hover:border-yellow-400'
              }`}
              style={{
                clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
              }}
            >
              Reflections
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;