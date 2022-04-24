import React, { useEffect, useState } from "react";
import "./featured-cars.css";
import arrow from "../../assets/images/Unionright-arrow.png";
import CarTypeSelectionBar from "../resuable/car-type-selection-bar/car-type-selection-bar";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

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
  const handleSeactionClick = (carDetail:any) => {
    history.push(`/all-cars/${carDetail?.id}`)
   }
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
                <div onClick={() => handleSeactionClick(carDetail)}>
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
                    <span className="price">{carDetail.price} onwards</span>
                    <Link to={`/all-cars/${carDetail.id}`}>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="arrow arrow-logo"
                      />
                    </Link>
                  </div>
                </div>
                </div>
              </div>
              
            );
          })}
        </div>
        
      </div>
    </div>
  );
}

export default FeaturedCars;
