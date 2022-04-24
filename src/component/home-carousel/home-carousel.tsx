import React, { useState } from "react";
import "./home-carousel.css";
import leftArrow from "../../assets/images/Unionleft-arrow.png";
import rightArrow from "../../assets/images/Unionright-arrow.png";
import { carDetail } from "../../mock";
import { useHistory } from "react-router-dom";

function HomeCarousel() {
  const [searchedItem, setSearchedItem] = useState("");
  const history = useHistory();

  const handleChange =(event:any) =>{
    setSearchedItem(event?.target?.value);
   }

   const handleSearch =(event:any) =>{
    const searchedCarName = (searchedItem.replace(/ /g, ""))?.toLowerCase();
    const searchedCarNameId = carDetail?.find(data => (data?.name?.replace(/ /g, ""))?.toLowerCase() === searchedCarName);
    history.push(`/all-cars?searchedCarNameId=${searchedCarNameId?.id}`); 
  }
  
  
  return (
    <div className="home-carousel-container">
      <div className="carousel-container">
        <div className="arrow-container">
          <img src={leftArrow} alt="left arrow" className="left-arrow" />
        </div>
        <div className="middle-section">
          <div className="middle-section-heading">FIND YOUR DREAM CAR</div>
          <div className="input-container">
            <input type="text" placeholder="Enter car name..." className="search-input" onChange={handleChange} />
            <button className="search-button" onClick={handleSearch}>SEARCH</button>
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
