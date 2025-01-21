// src/app/page.tsx
'use client';

import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Page;
