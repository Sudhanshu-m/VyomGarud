"use client"; 

import React from 'react';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
  return (
    <motion.footer 
      id="contact" 
      className="py-16 md:py-20 px-6 md:px-12 bg-black border-t border-gray-700 text-white/80" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10 border-b border-gray-700 pb-10 mb-10">
        
        <div>
          <h3 className="text-3xl font-poppins font-bold text-white mb-4 tracking-wide">
            VYOMGARUD
          </h3>
          <p className="text-sm mb-4">
            Advanced UAV Systems.
            <br />
            Mission-ready reliability.
          </p>
          <p className="text-sm font-semibold text-orange mb-1">Contact for Guidance:</p>
          <p className="text-lg font-poppins text-white">
             +91 8881444693
          </p>
        </div>

        <div>
          <h4 className="text-xl font-poppins font-semibold text-white mb-4 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#hero" className="hover:text-orange transition duration-150">Home</a></li>
            <li><a href="#about" className="hover:text-orange transition duration-150">About Us</a></li>
            <li><a href="#capabilities" className="hover:text-orange transition duration-150">Systems</a></li>
            <li><a href="#highlights" className="hover:text-orange transition duration-150">Tenets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-poppins font-semibold text-white mb-4 uppercase">
            Resources
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-orange transition duration-150">Technical Docs</a></li>
            <li><a href="#" className="hover:text-orange transition duration-150">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange transition duration-150">Careers</a></li>
          </ul>
        </div>
        
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xl font-poppins font-semibold text-white mb-4 uppercase">
            Stay Updated
          </h4>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Enter your professional email" 
              className="w-full px-4 py-3 bg-charcoal border border-gray-700 text-white rounded-sm focus:border-orange focus:ring-1 focus:ring-orange outline-none" 
            />
            <button 
              type="submit" 
              className="w-full px-4 py-3 bg-orange text-charcoal font-bold rounded-sm hover:bg-opacity-90 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm pt-4">
        &copy; {new Date().getFullYear()} VyomGarud UAV Systems. All Rights Reserved.
        <br />
        <span className="text-xs opacity-60">Web Developer Intern Assessment.</span>
      </div>
    </motion.footer>
  );
};

export default FooterSection;