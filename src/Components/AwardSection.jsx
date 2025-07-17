import React from 'react';

const AwardSection = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-12">
        {/* First Award */}
        <div className="grid grid-cols-[auto_1fr] items-start gap-x-4 pl-16">
          <img
            src="Vogue-Logo.webp"
            alt="vogue logo"
            className="w-full max-w-[220px] md:max-w-[240px] mb-2"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-gotham tracking-wide">
              As seen in...
            </h2>
            <p className="text-gray-700 mt-2 font-gotham font-light">
              <span className="block font-medium text-base md:text-lg">
                Best Beauty Products of 2024
              </span>
              <span className="block text-sm text-gray-600">
                Curated by Vogue's Beauty Team
              </span>
              <span className="block mt-2 italic tracking-wide ">
                Simple Repairing Rich Cream
              </span>
            </p>
            <button className="mt-4 px-5 py-2 bg-[#12703c] text-white text-sm font-medium">
              Shop Now
            </button>
          </div>
        </div>

        {/* Second Award */}
        <div className="grid grid-cols-[auto_1fr] items-start gap-x-4">
          <img
            src="IMG_20250717_232929.jpg"
            alt="beauty contest winner image"
            className="w-full max-w-[220px] md:max-w-[240px] mb-2"
          />
          <div>
             <h2 className="text-xl md:text-2xl font-semibold font-gotham tracking-wide">
              Award-winning Serum
            </h2>
           <p className="text-gray-700 mt-2 font-gotham font-light">
              <span className="block font-medium text-base md:text-lg">
                Winner of Fabulous Beauty Awards 2023
              </span>
              <span className="block mt-2 italic tracking-wide ">
                Simple 10% Niacinamide Serum
              </span>
            </p>
            <button className="mt-4 px-5 py-2 bg-[#12703c] text-white text-sm font-medium">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardSection;
