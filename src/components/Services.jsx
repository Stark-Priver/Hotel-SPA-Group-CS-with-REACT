// import React from "react";

const service = [
  {title : "Food",
  Image : "food.jpg",
  description : "Enjoy our food which is delicious and it contain more nutrients. ",
},
{
  title : "Accomodation",
  image : "accomodation.jpg",
  description : "Relax in our luxurious and comfortable rooms",
},
{
  title : "Conference",
  image : "conference.jpg",
  description : "Host professional events in our fully-equipped halls.",
},
{
  title : "Spa",
  image : "SPA.jpg",
  description : "Rejuvenate with our relaxing spa treatment.",
},
{
  title : "pool",
  image : "pool1.jpg",
  description : "Take a refreshing dip in our crystal-clear pool.",
},
{
  title : "Gym",
  image : "gym.jpg",
  descript : "Stay fit with our state of the art gym equipment.",
},
];

const Header = () =>(
  <header className = "header">
    <h1>Welcome to Our Hotel</h1>
    <p>Explore our world-class services</p>
  </header>
);

const ServiceCard = ({ title, image, description }) => (
   <div className = "service-card">
      <img src={image} alt={title} className="service-image" /> 
      <h3>{title}</h3>
      <p>{description}</p>
   </div>
); 

const Services = () =>(
  <div>
    <Header />
    <div className="home">
      {Services.map((Services, index) => (
        <ServiceCard
        key={index}
        title={service.title}
        image={service.image}
        description={service.description}
        />
      ))}
    </div>
  </div>
);


export default Services;
