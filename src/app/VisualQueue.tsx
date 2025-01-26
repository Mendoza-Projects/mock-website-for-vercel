// src/app/VisualQueue.tsx
'use client';

import React from 'react';

const VisualQueue = () => {
  return (
    <div className="col-span-2 md:col-span-5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-pulse h-48 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-gray-500 animate-shimmer" />
    </div>
  );
};

export default VisualQueue;
