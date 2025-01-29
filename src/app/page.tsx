'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Page = () => {
  const [isClient, setIsClient] = useState(false); // Ensure it's running only on client-side

  useEffect(() => {
    setIsClient(true); // Mark as client-side after mounting
  }, []);

  if (!isClient) {
    // Prevent rendering until client-side is confirmed
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Page;
