// Import React
import React from "react";

// Service data array
const services = [
  {
    title: "Food",
    image: "food.jpg",
    description:
      "Enjoy our food which is delicious and contains more nutrients.",
  },
  {
    title: "Accommodation",
    image: "accommodation.jpg",
    description: "Relax in our luxurious and comfortable rooms.",
  },
  {
    title: "Conference",
    image: "conference.jpg",
    description: "Host professional events in our fully-equipped halls.",
  },
  {
    title: "Spa",
    image: "SPA.jpg",
    description: "Rejuvenate with our relaxing spa treatment.",
  },
  {
    title: "Pool",
    image: "pool1.jpg",
    description: "Take a refreshing dip in our crystal-clear pool.",
  },
  {
    title: "Gym",
    image: "gym.jpg",
    description: "Stay fit with our state-of-the-art gym equipment.",
  },
];

// Header component
const Header = () => (
  <header className="header">
    <h1>Welcome to Our Hotel</h1>
    <p>Explore our world-class services</p>
  </header>
);

// ServiceCard component
const ServiceCard = ({ title, image, description }) => (
  <div className="service-card">
    <img src={image} alt={title} className="service-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Services component
const Services = () => (
  <div>
    <Header />
    <div className="home">
      {services.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default Services;
