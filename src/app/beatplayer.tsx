'use client';
import React from "react";

const BeatCard = ({
  thumbnail,
  title,
  bpm,
  beatKey,
  price,
}: {
  thumbnail: string;
  title: string;
  bpm: string;
  beatKey: string;
  price: number;
}) => {
  return (
    <div className="bg-green-500/50 p-4 rounded-lg flex flex-col items-center w-[200px] min-h-[280px]">
      <div className="flex justify-center items-center mb-4">
        <img src={thumbnail} alt={title} className="w-full h-36 object-cover rounded-lg" />
      </div>
      <h3 className="text-xl text-white">{title}</h3>
      <p className="text-sm text-white">BPM: {bpm} | Key: {beatKey}</p>
      <div className="flex justify-center mt-4">
        <button className="bg-orange-500 text-white rounded-lg p-2 w-32 flex items-center justify-center">
          <img src="/path/to/BAG.ico" alt="Add to bag" className="mr-2" />
          ${price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

const BeatPlayer = () => {
  // Placeholder values (now with more beats)
  const beats = Array.from({ length: 20 }, (_, i) => ({
    thumbnail: `https://example.com/thumbnail${i + 1}.jpg`,
    title: `Beat ${i + 1}`,
    bpm: "120",
    beatKey: "C",
    price: 25.0,
  }));

  return (
    <div className="flex justify-center items-center w-full p-4">
      <div className="grid grid-cols-5 gap-x-8 gap-y-4 p-4 bg-orange-500 max-w-[1200px]">
        {beats.map((beat, index) => (
          <BeatCard
            key={index}
            thumbnail={beat.thumbnail}
            title={beat.title}
            bpm={beat.bpm}
            beatKey={beat.beatKey}
            price={beat.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BeatPlayer;
