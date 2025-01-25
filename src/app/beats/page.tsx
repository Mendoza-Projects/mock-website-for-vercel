// src/app/beats/page.tsx
'use client'

import Header from "@/app/Header";
import Footer from "@/app/Footer";

const BeatsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-black text-white text-center py-20">
        <h1 className="text-5xl font-bold">It worked!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default BeatsPage;
