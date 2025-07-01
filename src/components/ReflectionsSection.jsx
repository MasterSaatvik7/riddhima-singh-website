import React from 'react';
import { ChevronRight, PenTool, FileText, Award, Globe } from 'lucide-react';

const ReflectionsSection = ({ reflections, publications }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-red-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-50 rounded-full">
            <PenTool className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Reflections & Insights</h2>
        </div>
        
        <div className="space-y-6">
          {reflections.map((reflection, index) => (
            <div key={index} className="border-l-4 border-red-500 pl-6 py-4 bg-gradient-to-r from-red-50/70 via-yellow-50/30 to-transparent rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{reflection.title}</h3>
                <span className="text-sm text-red-600 font-medium bg-red-50 px-2 py-1 rounded">{reflection.theme}</span>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">{reflection.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{reflection.date}</span>
                <a
                  href={reflection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                >
                  Read More <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-red-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <FileText className="w-6 h-6 text-red-600" />
          Recent Publications
        </h3>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-red-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition-all bg-gradient-to-r from-yellow-50/50 to-red-50/30"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-800">{pub.title}</h4>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded border border-red-200">
                  {pub.year}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {pub.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    {pub.focus}
                  </span>
                </div>
                <span className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1">
                  Read more <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ReflectionsSection;