// src/app/page.tsx

"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar"; // Pastikan path benar
import About from "./Aboud";   // Diperbaiki dari 'Aboud' ke 'About'

export default function Home() {
  // Fungsi smooth scroll untuk button
  const handleButtonScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Fungsi smooth scroll untuk div/element lain
  const handleDivScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative">
        {/* Background Image dengan overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background1.jpg')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-6 max-w-4xl mx-auto">
          {/* Teks Utama */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              CV. BINTANG SOLUSINDO ABADI
            </h1>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-4">
              Mitra Profesional untuk
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2"
            >
              Meeting, Event, dan Multimedia
            </motion.div>
          </motion.div>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Mewujudkan ide kreatif Anda menjadi kenyataan dengan solusi profesional 
            dalam MICE, Event Organizer, dan Produksi Multimedia.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleButtonScroll(e, '#services')}
              className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[200px]"
            >
              <span>Lihat Layanan</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleButtonScroll(e, '#contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[200px]"
            >
              <span>Hubungi Kami</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator - FIXED */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white cursor-pointer"
              onClick={() => handleDivScroll('#about')} 
            >
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />
    </div>
  );
}