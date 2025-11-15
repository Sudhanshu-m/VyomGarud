"use client"; 

import React from 'react';
import { motion } from 'framer-motion';
import { ProductCardProps } from '../interfaces/product'; 

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-700 
                 transition duration-300 ease-in-out hover:shadow-accent-glow hover:border-orange/50 hover:-translate-y-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 * product.id }}
    >
      
      <div className="mb-4">
        {/* Icon now uses orange */}
        <div className="w-12 h-12 bg-orange/20 flex items-center justify-center rounded-full">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-orange" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
            </svg>
        </div>
      </div>

      {/* Title is white with an orange border */}
      <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-white mb-3 tracking-wide border-b border-orange/50 pb-2">
        {product.title}
      </h3>

      <p className="text-white/80 text-base font-inter mb-6">
        {product.description}
      </p>
      
      <div className="mt-4">
        {/* Specs title is orange */}
        <h4 className="text-sm font-poppins font-semibold text-orange mb-2 uppercase">Key Specifications</h4>
        <ul className="space-y-2 text-sm text-white/70">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-orange mr-2 text-base">»</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProductCard;