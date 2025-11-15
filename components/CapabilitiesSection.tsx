import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../interfaces/product'; 

const capabilitiesData: Product[] = [
  // ... data is unchanged
  {
    id: 1,
    title: 'SENTINEL-R Recon Platform',
    description: 'Long-range, high-altitude surveillance UAV designed for persistent, all-weather reconnaissance and data acquisition.',
    features: ['18-Hour Endurance', '150km LOS Range', 'Multi-Spectrum Sensor Suite', 'Encrypted C2 Link'],
    iconPath: '/icons/sentinel.svg',
  },
  {
    id: 2,
    title: 'VIPER-M Modular Payload System',
    description: 'A quick-swap payload integration system supporting various mission profiles from electronic warfare to logistics.',
    features: ['15kg Payload Capacity', 'Swappable Optics/Radar', 'Active Vibration Dampening', 'AI-Targeting Integration'],
    iconPath: '/icons/viper.svg',
  },
  {
    id: 3,
    title: 'AETHEROS Flight Autonomy',
    description: 'Proprietary AI-driven flight control software providing advanced swarm capabilities and evasive navigation.',
    features: ['Level 4 Autonomy', 'GNSS-Denied Navigation', 'Real-time Threat Assessment', 'Decentralized Command'],
    iconPath: '/icons/aetheros.svg',
  },
];

const CapabilitiesSection: React.FC = () => {
  return (
    <section 
      id="capabilities" 
      // THIS IS THE FIX: We are manually adding the charcoal background
      className="py-24 md:py-32 px-6 md:px-12 bg-charcoal border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-16 text-center text-white uppercase tracking-wider">
          Capabilities & Systems
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilitiesData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;