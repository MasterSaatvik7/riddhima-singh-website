import React from 'react';
import { ChevronRight, Users, MapPin, Languages, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = ({ profileData, skills }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-red-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-red-50 rounded-full">
            <Users className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate researcher and cultural bridge-builder, specializing in China-India relations and critical global supply chains. My work focuses on understanding the complex geopolitical dynamics that shape our interconnected world.
            </p>
            {/* <p className="text-gray-700 leading-relaxed">
              Currently working at a tech startup developing AI tools to counter disinformation, I combine my deep cultural knowledge with cutting-edge technology to address modern challenges.
            </p> */}
            <div className="flex items-center gap-2 text-red-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Based in India</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-red-600" />
                Education
              </h3>
              <div className="space-y-2">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-red-50 to-yellow-50 px-3 py-2 rounded-lg text-sm border border-red-100">
                    {edu}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Languages className="w-5 h-5 text-red-600" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {profileData.languages.map((lang, index) => (
                  <span key={index} className="bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full text-sm text-yellow-800">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-red-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-red-600" />
          Areas of Expertise
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileData.expertise.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-red-50 via-yellow-50 to-red-50 p-4 rounded-lg border border-red-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-600" />
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-red-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Skills & Competencies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-3">
              <h4 className="font-semibold text-red-600">{skillGroup.category}</h4>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;