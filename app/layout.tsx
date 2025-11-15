import './globals.css';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'VyomGarud | Advanced UAV Systems',
  description: 'A modern, responsive landing page for a military-grade UAV company.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/*
        THIS IS THE TEST:
        We are now using Tailwind's DEFAULT colors.
        'bg-neutral-900' is a dark charcoal.
        'text-neutral-100' is a bright white.
      */}
      <body 
        className="antialiased scroll-smooth bg-neutral-900 text-neutral-100 font-inter"
      >
        {children}
      </body>
    </html>
  );
}