// src/app/beats/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import BeatPlayer from "../beatplayer";

const BeatsPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // This will run once on the client after the component mounts
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-black text-white text-center py-20">
        {isClient ? <BeatPlayer /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default BeatsPage;
