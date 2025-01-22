import React from "react";
import "./Testimonials.css";

// Helper function to generate star rating
const getStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? "★" : "☆"); // Filled star if i < rating, otherwise empty star
  }
  return stars.join(" ");
};

function Testimonials({ testimonials }) {
  return (
    <div className="testimonials-container">
      <h1>What Our Customers Say</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <strong>{testimonial.name}</strong>
              <div className="testimonial-rating">
                {getStars(testimonial.rating)}{" "}
                {/* Display stars based on the rating */}
              </div>
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
