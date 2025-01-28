'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/app/firebase/config'; // Import the Firebase config

// Dynamically import the components to avoid SSR issues
const Header = dynamic(() => import('@/app/Header'), { ssr: false });
const Footer = dynamic(() => import('@/app/Footer'), { ssr: false });
const BeatPlayer = dynamic(() => import('../beatplayer'), { ssr: false });

export default function BeatsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Firebase only on the client-side
      initializeApp(firebaseConfig);

      // Example of using sessionStorage after the page has loaded on the client-side
      window.sessionStorage.setItem('key', 'value');
      // Firebase is now initialized and sessionStorage can be used
    }
  }, []); // Empty dependency array to ensure this runs only once on mount

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-black text-white text-center py-20">
        <BeatPlayer />
      </div>
      <Footer />
    </div>
  );
}
