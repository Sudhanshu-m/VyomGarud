"use client"; 

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      // Using default border color
      className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-700"
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {/* Using default 'text-neutral-100' */}
        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-10 text-center text-neutral-100 uppercase tracking-wider">
          Our Mission
        </h2>
        
        <div className="text-center max-w-4xl mx-auto">
          {/*
            THE TEST:
            Using default 'text-orange-500' (a bright orange).
          */}
          <p className="text-xl md:text-2xl font-inter text-orange-500 leading-relaxed mb-8">
            VyomGarud designs and manufactures military-grade UAV platforms...
          </p>
          <p className="text-lg md:text-xl font-inter text-orange-500/80 leading-relaxed">
            Our systems are built on a foundation of **advanced autonomy**...
          </p>
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto border-l-4 border-orange-500 pl-6 py-2">
          <blockquote className="italic text-lg md:text-xl text-neutral-100/80">
            "High reliability is not a feature, it's a non-negotiable standard."
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;