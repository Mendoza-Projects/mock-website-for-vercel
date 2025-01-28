'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/app/firebase/config'; // Ensure correct path

// Dynamically import components to avoid SSR issues
const Header = dynamic(() => import('@/app/Header'), { ssr: false });
const Footer = dynamic(() => import('@/app/Footer'), { ssr: false });
const BeatPlayer = dynamic(() => import('../beatplayer'), { ssr: false });

export default function BeatsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure this code runs only after the component has mounted (client-side)
      initializeApp(firebaseConfig);
      
      // You can also safely use `sessionStorage` or other window-related APIs
      window.sessionStorage.setItem('key', 'value');
    }
  }, []); // Empty dependency array ensures this runs only once on mount

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
