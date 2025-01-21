// src/app/page.tsx
'use client';

import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">321 Mafia Beats</h1>
      </header>

      {/* Body */}
      <main className="flex-grow bg-black text-white p-8 text-center">
        <h2 className="text-6xl">Hello World</h2>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 321 Mafia Beats. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
