import React, { useState } from "react";
import "./About.css"; // Ensure to include the new CSS file for styles

function About({
  hotelInfo,
  ceoInfo,
  managerInfo,
  salesManagerInfo,
  mission,
  vision,
  strategy,
}) {
  // State for like counters
  const [likes, setLikes] = useState({ mission: 1, vision: 5, strategy: 3 });

  // Function to handle likes
  const handleLike = (type) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [type]: prevLikes[type] + 1,
    }));
  };

  return (
    <div className="about-container">
      <h2>About Our Hotel</h2>
      <p className="hotel-description">{hotelInfo.description}</p>

      {/* Mission, Vision, and Strategy Section */}
      <div className="cards-section">
        {/* Mission Card */}
        <div className="card">
          <h3>Mission</h3>
          <p>{mission}</p>
          <div className="like-container">
            <button
              className="like-button"
              onClick={() => handleLike("mission")}
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
            <span className="like-count">{likes.mission} Likes</span>
          </div>
        </div>

        {/* Vision Card */}
        <div className="card">
          <h3>Vision</h3>
          <p>{vision}</p>
          <div className="like-container">
            <button
              className="like-button"
              onClick={() => handleLike("vision")}
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
            <span className="like-count">{likes.vision} Likes</span>
          </div>
        </div>

        {/* Strategy Card */}
        <div className="card">
          <h3>Strategy</h3>
          <p>{strategy}</p>
          <div className="like-container">
            <button
              className="like-button"
              onClick={() => handleLike("strategy")}
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
            <span className="like-count">{likes.strategy} Likes</span>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        {/* CEO Section */}
        <div className="team-member-card">
          <img src={ceoInfo.photo} alt="CEO" className="team-photo" />
          <div className="team-info">
            <h4>{ceoInfo.name}</h4>
            <p className="role">{ceoInfo.role}</p>
            <p className="bio">{ceoInfo.bio}</p> {/* Hidden until hover */}
          </div>
        </div>

        {/* General Manager Section */}
        <div className="team-member-card">
          <img
            src={managerInfo.photo}
            alt="General Manager"
            className="team-photo"
          />
          <div className="team-info">
            <h4>{managerInfo.name}</h4>
            <p className="role">{managerInfo.role}</p>
            <p className="bio">{managerInfo.bio}</p> {/* Hidden until hover */}
          </div>
        </div>

        {/* Sales Manager Section */}
        <div className="team-member-card">
          <img
            src={salesManagerInfo.photo}
            alt="Sales Manager"
            className="team-photo"
          />
          <div className="team-info">
            <h4>{salesManagerInfo.name}</h4>
            <p className="role">{salesManagerInfo.role}</p>
            <p className="bio">{salesManagerInfo.bio}</p>{" "}
            {/* Hidden until hover */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
