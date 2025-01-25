// src/app/Body.tsx
import React from 'react';
import Link from 'next/link';

const Body = () => {
  return (
    <main className="flex-grow bg-black text-white p-8 text-center">
      <h2 className="text-6xl">Hello World</h2>
      <Link href="/beats">
        <a className="mt-4 text-lg text-blue-500">Go to Beats</a>
      </Link>
    </main>
  );
};

export default Body;
