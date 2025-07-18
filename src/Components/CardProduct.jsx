import React from "react";

const CardProduct = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden  shadow-md max-w-6xl mx-auto h-[24rem]">
      {/* Left: Image */}
      <div className="flex items-center justify-center h-full">
        <img
          src="cardSimple.avif"
          alt="Simple Products"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right: Text content */}
      <div className="bg-[#5a7a1f] text-white flex flex-col justify-center items-start h-full px-8">
        <h2 className="text-3xl font-bold mb-6 leading-tight tracking-wider">
          Visibly healthy skin from 1st use*
        </h2>
        <button className="bg-[#166a3d] hover:bg-[#0f4f2e] text-white font-semibold py-3 px-6 ">
          Explore the range
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
