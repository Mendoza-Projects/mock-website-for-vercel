// src/app/beats/page.tsx
'use client'


import Footer from "@/app/Footer";
import BeatPlayer from "../beatplayer";



const BeatsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <div className="flex-1 bg-black text-white text-center py-20">
      <BeatPlayer />
      </div>
      <Footer />
    </div>
  );
};

export default BeatsPage;
