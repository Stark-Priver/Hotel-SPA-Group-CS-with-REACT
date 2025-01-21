import React, { useState, useEffect } from "react";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchedTestimonials = [
      {
        id: 1,
        name: "Lazaro Baltazary",
        text: "Great Services and cozy rooms!",
      },
      { id: 2, name: "Angel Marcel", text: "Loved the food and ambiance!" },
      { id: 3, name: "Jetri HuHaa", text: "Will definitely come back!" },
    ];
    setTestimonials(fetchedTestimonials);
  }, []);

  return (
    <div>
      <h1>What Our Customers Say</h1>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <strong>{testimonial.name}:</strong> {testimonial.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Testimonials;
