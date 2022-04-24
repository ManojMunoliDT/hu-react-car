import React, { useEffect, useState } from "react";
import "./featured-cars.css";
import arrow from "../../assets/images/Unionright-arrow.png";
import CarTypeSelectionBar from "../resuable/car-type-selection-bar/car-type-selection-bar";
import { Link } from "react-router-dom";
import {carDetail} from "../../mock";

interface CarDetail {
  id: string;
  name: string;
  image: string;
  price: string;
}


function FeaturedCars() {
  const categories = ["Popular", "Just launched", "Upcoming"];
  const [carDetails, setCarDetails] = useState<CarDetail[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   
    let alteredData = carDetail.map((carItem: any) => {
      return {
        id: carItem.id,
        name: carItem.name,
        image: carItem.image,
        price: carItem.price
      };
    });
    setCarDetails(alteredData.slice(0, 4));
  };
console.log(carDetail[0].image);
  return (
    <div className="featured-cars-container">
      <div className="featured-cars">
        <div className="featured-cars-heading">
          Featured <b>Cars</b>
        </div>
        <div className="selection-bar-container">
          <CarTypeSelectionBar categories={categories} categoryType="Popular" />
          <div className="view-all">
            <Link to="/all-cars">
              View all
              <span>
                <img src={arrow} className="arrow" alt="arrow" />
              </span>
            </Link>
          </div>
        </div>
        
        <div className="cars-container">
          {carDetails.map((carDetail) => {
            return (
            
              <div key={carDetail.name} className="car-card">
                <Link to={`/all-cars/${carDetail.id}`}>
                <div className="car-image-container">
                  <img
                    src={carDetail.image}
                    alt={carDetail.image}
                    className="car-image"
                  />
                </div>
                
                <div className="car-detail-container">
                  <div className="car-title">
                    <b>{carDetail.name}</b>
                  </div>
                  <div className="price-logo-container">
                    <span className="price">{carDetail.price}</span>
                    <Link to={`/all-cars/${carDetail.id}`}>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="arrow arrow-logo"
                      />
                    </Link>
                  </div>
                </div>
                </Link>
              </div>
              
            );
          })}
        </div>
        
      </div>
    </div>
  );
}

export default FeaturedCars;
