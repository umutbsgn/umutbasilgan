import React from "react";

const Hero = () => {
  return (
    <div className="text-center space-y-6 mb-12">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        liam<span className="text-[#ff0066]">ottley</span>
      </h1>
      <div className="max-w-2xl mx-auto space-y-2">
        <p className="text-2xl md:text-3xl text-gray-700">
          Building a portfolio of AI companies
        </p>
        <p className="text-2xl md:text-3xl text-gray-700">
          to change the world (for the better)
        </p>
      </div>
    </div>
  );
};

export default Hero;