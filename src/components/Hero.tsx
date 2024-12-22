import React from "react";

const Hero = () => {
  return (
    <div className="text-center space-y-8 mb-16">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
        umut<span className="text-[#ff0066]">basilgan</span>
      </h1>
      <div className="max-w-2xl mx-auto space-y-3">
        <p className="text-2xl md:text-3xl text-gray-600">
          Building a portfolio of AI companies
        </p>
        <p className="text-2xl md:text-3xl text-gray-600">
          to change the world (for the better)
        </p>
      </div>
    </div>
  );
};

export default Hero;