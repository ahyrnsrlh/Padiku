import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark';
}

export default function Section({ 
  children, 
  id, 
  className = '',
  background = 'white'
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    light: 'bg-green-50',
    dark: 'bg-green-800 text-white'
  };

  return (
    <section id={id} className={`py-20 ${bgStyles[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}