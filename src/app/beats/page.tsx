'use client';

import React, { useEffect } from 'react';
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import BeatPlayer from "../beatplayer";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/app/firebase/config'; // Import the Firebase config

export default function BeatsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Firebase only on the client-side
      initializeApp(firebaseConfig);
      // Firebase is now initialized and ready for further use
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
