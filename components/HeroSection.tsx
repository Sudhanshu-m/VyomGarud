"use client"; 

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center text-center overflow-hidden border-b border-gray-700"
    >
      
      {/* 1. ADD YOUR IMAGE to /public/assets/drone-bg.jpg */}
      <Image
        src="/assets/drone-bg.png" 
        alt="VyomGarud Military-Grade UAV in flight"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-40 grayscale" 
        priority
      />
      
      <div className="absolute inset-0 bg-charcoal opacity-60 z-10"></div>

      <motion.div 
        className="relative z-20 p-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-poppins font-extrabold text-white mb-6 tracking-tight uppercase">
          VYOMGARUD
        </h1>
        
        <p className="text-xl md:text-3xl text-white mb-10 font-inter opacity-90 font-light">
          Precision Engineering. Advanced Autonomy. Mission Ready.
        </p>
        
        {/* Use bg-orange and text-charcoal for the CTA */}
        <button 
          className="px-8 py-3 md:px-12 md:py-4 bg-orange text-charcoal font-bold rounded-sm text-lg md:text-xl uppercase transition duration-300 
                     shadow-accent-glow hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] border border-orange"
        >
          Explore UAV Systems
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;