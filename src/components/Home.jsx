import React, { useState, useEffect } from "react";
import "./Home.css";

// Import the images and texts from your constants file
import { hotelImages, hotelTexts } from "./Constants"; // Make sure the path is correct

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotelImages.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + hotelImages.length) % hotelImages.length
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [hotelImages.length]);

  return (
    <div className="home-container">
      <h2>Welcome to Our Hotel</h2>
      <div className="slider">
        {/* Image */}
        <img
          src={hotelImages[currentIndex].photo} // Use the image from hotelImages array
          alt="Hotel view"
          className="slider-image"
        />
        {/* Text Overlay */}
        <div className="text-overlay">{hotelTexts[currentIndex]}</div>
      </div>
      {/* Navigation Buttons */}
      <button className="prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

export default Home;
