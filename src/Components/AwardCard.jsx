import React from "react";

const AwardCard = ({ image, alt, heading, description, product }) => {
  return (
    <div className="min-w-[300px] max-w-[360px] bg-white shadow-md rounded-md p-4 mx-2 flex-shrink-0">
      <img src={image} alt={alt} className="w-full mb-4 object-contain" />
      <h2 className="text-xl font-semibold font-gotham tracking-wide mb-2">
        {heading}
      </h2>
      <p className="text-gray-700 font-light mb-2 text-lg">{description}</p>
      <p className="italic tracking-wide text-md text-[#444]">{product}</p>
      <button className="mt-4 px-6 py-2 bg-[#5a7b1c] text-white text-sm font-medium">
        Shop Now
      </button>
    </div>
  );
};

export default AwardCard;
