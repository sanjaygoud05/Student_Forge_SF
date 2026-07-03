'use client';

import React, { ReactNode } from 'react';

interface ScrollLinkProps {
  targetId: string;
  className?: string;
  children: ReactNode;
}

export default function ScrollLink({ targetId, className, children }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -90; // Adjust for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Update hash in URL
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
