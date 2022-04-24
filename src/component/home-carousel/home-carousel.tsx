import React from "react";
import "./home-carousel.css";
import leftArrow from "../../assets/images/Unionleft-arrow.png";
import rightArrow from "../../assets/images/Unionright-arrow.png";

function HomeCarousel() {
  return (
    <div className="home-carousel-container">
      <div className="carousel-container">
        <div className="arrow-container">
          <img src={leftArrow} alt="left arrow" className="left-arrow" />
        </div>
        <div className="middle-section">
          <div className="middle-section-heading">FIND YOUR DREAM CAR</div>
          <div className="input-container">
            <input type="text" placeholder="Enter car name..." className="search-input" />
            <button className="search-button">SEARCH</button>
          </div>
        </div>
        <div className="arrow-container">
          <img src={rightArrow} alt="right arrow-container" />
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
