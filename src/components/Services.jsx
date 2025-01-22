import React, { useState } from "react";
import "./Services.css";

// Service data array
const services = [
  {
    title: "Food",
    image: "src/assets/food.jpg",
    description:
      "Enjoy our food which is delicious and contains more nutrients.",
  },
  {
    title: "Accommodation",
    image: "src/assets/accomodation2.jpg",
    description: "Relax in our luxurious and comfortable rooms.",
  },
  {
    title: "Conference",
    image: "src/assets/conference.jpg",
    description: "Host professional events in our fully-equipped halls.",
  },
  {
    title: "Spa",
    image: "src/assets/SPA.jpg",
    description: "Rejuvenate with our relaxing spa treatment.",
  },
  {
    title: "Pool",
    image: "src/assets/pool1.jpg",
    description: "Take a refreshing dip in our crystal-clear pool.",
  },
  {
    title: "Gym",
    image: "src/assets/gym.jpg",
    description: "Stay fit with our state-of-the-art gym equipment.",
  },
];

// Header component
const Header = () => (
  <header className="header">
    <p>Explore our world-class services</p>
  </header>
);

// ServiceCard component
const ServiceCard = ({ title, image, description }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  const handleShareWhatsApp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text=Check out this service: ${title} - ${description}`;
    window.open(whatsappURL, "_blank");
  };

  const handleShareEmail = () => {
    const emailSubject = encodeURIComponent(`Check out this service: ${title}`);
    const emailBody = encodeURIComponent(
      `I wanted to share this service with you:\n\n${title}\n${description}`
    );
    const mailtoLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <div className="service-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="action-icons">
          <span className="like-icon" onClick={handleLike}>
            👍 {likes}
          </span>
          <span className="dislike-icon" onClick={handleDislike}>
            👎 {dislikes}
          </span>
          <span className="share-icon" onClick={handleShareWhatsApp}>
            📱
          </span>
          <span className="email-icon" onClick={handleShareEmail}>
            ✉️
          </span>
        </div>
      </div>
    </div>
  );
};

// Services component
const Services = () => (
  <div>
    <Header />
    <div className="services-container">
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
