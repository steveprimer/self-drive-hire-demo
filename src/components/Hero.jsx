import React from "react";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 relative"
      style={{
        backgroundImage: `url('/cars/wall.jpg')`, // Put your image in public/wallpapers/
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
          Drive Luxury. On Your Terms.
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200">
          Premium self-drive car rentals — no calls, no paperwork. Just drive.
        </p>
        <a
          href="#cars"
          className="bg-white text-black font-medium py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Explore Our Fleet
        </a>
      </div>
    </section>
  );
}
