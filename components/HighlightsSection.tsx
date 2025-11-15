import React from 'react';

// Data for the 3 concise feature bullets
const highlightsData: { title: string; description: string; icon: string; }[] = [
  {
    title: 'Adaptive AI Navigation',
    description: 'Real-time environment processing and predictive pathfinding ensure optimal performance, even in GNSS-denied zones.',
    icon: '⚡', // Lightning icon
  },
  {
    title: 'All-Weather Operational Guarantee',
    description: 'Ruggedized hardware and environmental shielding guarantee mission reliability from arctic storms to desert heat.',
    icon: '🛡️', // Shield icon
  },
  {
    title: 'Secure Data Link Encryption',
    description: 'Utilizing proprietary quantum-resistant encryption standards for command, control, and data transmission security.',
    icon: '🔒', // Lock icon
  },
];

const HighlightsSection: React.FC = () => {
  return (
    <section 
      id="highlights" 
      className="py-24 md:py-32 px-6 md:px-12 bg-black border-b border-neutral-700"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-16 text-center text-neutral-100 uppercase tracking-wider">
          Core Tenets
        </h2>
        
        {/* FIX 1: Added 'items-stretch' to make all cards equal height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-stretch">
          
          {highlightsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border-t-2 border-orange-500/50">
              
              <div className="text-5xl mb-4 p-4 rounded-full bg-orange-500/10">
                {item.icon}
              </div>
              
              {/* FIX 2: Added 'min-h-16' to align the titles */}
              <h3 className="text-2xl font-poppins font-semibold text-orange-500 mb-3 uppercase tracking-wide min-h-16">
                {item.title}
              </h3>
              
              <p className="text-neutral-100/80 text-lg font-inter leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;