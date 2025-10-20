// src/components/Navbar.tsx (Alternatif sederhana)

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', targetId);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 bg-opacity-80 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div 
            onClick={() => handleSmoothScroll('#home')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative h-10 w-10 md:h-10 md:w-10">
  <div className="relative h-full w-full">
    <Image
      src="/bintang.png" 
      alt="Logo Bintang Solusindo Abadi"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>
            <span className="text-black font-bold text-lg">
              BINTANG SOLUSINDO
            </span>
          </div>
         
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSmoothScroll(`#${item.id}`)}
                className="text-black hover:text-white transition-colors duration-300 font-medium cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Sederhana */}
          <button
            className="md:hidden p-2 text-black hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1 w-6">
              <span className={`w-6 h-0.5 bg-black block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-black block transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-6 h-0.5 bg-black block transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-yellow-500 bg-opacity-95 backdrop-blur-sm border-t border-yellow-600 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleSmoothScroll(`#${item.id}`)}
                    className="block w-full text-left px-4 py-3 text-black hover:text-white hover:bg-yellow-600 transition-all duration-300 font-medium"
                    whileHover={{ x: 10 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;