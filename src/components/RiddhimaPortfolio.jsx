import React, { useState } from 'react';
import { ChevronRight, Globe, PenTool, Users, Mail, Linkedin, Twitter, FileText, Award, MapPin, Languages, Briefcase, GraduationCap } from 'lucide-react';
import profileData from '../data/profileData';
import publications from '../data/publications';
import skills from '../data/skills';
import reflections from '../data/reflections';
import Header from './Header';
import AboutSection from './AboutSection';
import ReflectionsSection from './ReflectionsSection';
import Footer from './Footer';

const RiddhimaPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-white">
      <Header 
        profileData={profileData}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {activeSection === 'about' ? (
          <AboutSection 
            profileData={profileData}
            skills={skills}
          />
        ) : (
          <ReflectionsSection 
            reflections={reflections}
            publications={publications}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RiddhimaPortfolio;