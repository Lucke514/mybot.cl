import React from 'react';
import { MessageSquareCode } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToElement } from '../utils/scroll';

export function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
  };

  return (
    <motion.nav 
      className="bg-white shadow-sm fixed w-full z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToElement('top')}>
            <MessageSquareCode className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AIChat Pro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Características
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Planes
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Contacto
            </a>
            <button 
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}