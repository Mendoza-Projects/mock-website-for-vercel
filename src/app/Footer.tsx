'use client'
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isClient, setIsClient] = useState(false); // Check if we're on the client-side

  useEffect(() => {
    // This effect runs only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing if it's not on the client-side (SSR phase)
  }

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 321 Mafia Beats. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
