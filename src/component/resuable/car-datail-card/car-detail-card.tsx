import React from "react";
import "./car-detail-card.css";

interface ICarDetailCard {
  name: string;
  image: string;
  price: string;
}

const CarDetailCard:React.FC<ICarDetailCard>=({name,image,price}) => {
  return (
    <>
      <div key={name} className="car-card">
        <div className="car-image-container">
          <img src={image} alt={image} />
        </div>
        <div className="car-detail-container">
          <div className="car-title">
            <b>{name}</b>
          </div>
          <div className="price-logo-container">
            <span className="price">{price}</span>
            <img
              src={require("../../../assets/images/Unionright-arrow.png")}
              alt="arrow"
              className="arrow arrow-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailCard;
