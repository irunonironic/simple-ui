import React, { useState } from "react";

const awards = [
  {
    id: 1,
    image: 'Vogue-Logo.webp',
    title: 'As seen in...',
    subtitle: "Best Beauty Products of 2024, according to Vogue's Beauty Team",
    description: 'Simple Repairing Rich Cream',
  },
  {
    id: 2,
    image: 'Fab.jpg',
    title: 'Award-winning Serum',
    subtitle: 'Winner of Fabulous Beauty Awards 2023',
    description: 'Simple 10% Niacinamide Serum',
  },
  {
    id: 3,
    image: 'grazia.avif',
    title: 'Best Cleanser by Grazia',
    subtitle: 'Grazia’s Best Cleanser 2023 Winner',
    description: 'Simple Smoothing Gel Cleanser',
  },
  {
    id: 4,
    image: 'clever.avif',
    title: 'Clever Skincare Winner',
    subtitle: 'Clever Skincare Winner 2023',
    description: 'Simple Replenishing Cream Cleanser',
  },
];

const AwardSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pageSize = 2;

  const totalPages = Math.ceil(awards.length / pageSize);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const currentAwards = awards.slice(
    currentIndex * pageSize,
    currentIndex * pageSize + pageSize
  );

  return (
    <div className="py-12 px-10 text-center">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {currentAwards.map((award) => (
          <div
            key={award.id}
            className="flex flex-col items-center text-left space-y-4"
          >
            <img src={award.image} alt={award.title} className="h-40 object-contain" />
            <h2 className="text-2xl font-bold">{award.title}</h2>
            <p className="text-lg">{award.subtitle}</p>
            <p className="italic text-gray-700">{award.description}</p>
            <button className="bg-[#5e7c12] text-white font-bold px-6 py-3 mt-2">
              Shop Now
            </button>
          </div>
        ))}
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-center space-x-6">
        <button
          onClick={handlePrev}
          className="text-green-800 font-semibold flex items-center space-x-1"
          disabled={currentIndex === 0}
        >
          <span className="text-2xl">‹</span>
          <span>PREV</span>
        </button>

        {/* Dots */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 rounded-full border-2 ${
                idx === currentIndex ? "bg-green-800 border-green-800" : "border-green-800"
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-green-800 font-semibold flex items-center space-x-1"
          disabled={currentIndex === totalPages - 1}
        >
          <span>NEXT</span>
          <span className="text-2xl">›</span>
        </button>
      </div>
    </div>
  );
};

export default AwardSection;
