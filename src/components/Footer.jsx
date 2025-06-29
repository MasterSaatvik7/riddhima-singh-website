import React from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-200 mb-6">
            Interested in collaboration or discussion on China-India relations, geopolitics, or anything?
          </p>
          <div className="flex justify-center gap-6">
            <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-6 py-3 rounded-full transition-all shadow-lg border border-red-400">
              <Mail className="w-5 h-5" />
              Email
            </button>
            <a
              href="https://www.linkedin.com/in/riddhima-singh-%E7%8B%AE%E7%91%9E%E6%AC%A3-%EF%BC%89-16924118b/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 px-6 py-3 rounded-full transition-all shadow-lg border border-yellow-400">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </button>
            </a>
            <a
              href="https://www.instagram.com/thechopsticks_diaries_?igsh=cWN0bTZ4eDM4M29o"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 px-6 py-3 rounded-full transition-all shadow-lg border border-red-300">
                <Instagram className="w-5 h-5" />
                Instagram
              </button>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;