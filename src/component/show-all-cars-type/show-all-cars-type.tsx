
import React, { useEffect, useState } from "react";
import CarTypeSelectionBar from "../resuable/car-type-selection-bar/car-type-selection-bar";
import "./show-all-cars-type.css";
import arrow from "../../assets/images/Unionright-arrow.png";
import rightAngularArrow from "../../assets/images/rightangulararrow.png";
import leftAngularArrow from "../../assets/images/leftangulararrow.png";
import { Link } from "react-router-dom";
import { carDetail } from "../../mock";

interface CarDetail {
  id: number;
  carType: string;
  image: string;
  imageInteriors: string;
  name: string;
  price: string;
  fuel_type: string;
  engine_cc: string;
  torque: string;
  acceleration: string;
  top_speed: string;
  variant: string;
  exteriors: string;
  interiors: string[];
}


const carTypes = ["View all", "sedan", "suv", "hatchback", "coupe"];
console.log(carDetail);
function ShowAllCarsType() {
  const [carType, setCarType] = useState("");
  //const [carTypeDetails, setCarTypeDetails] = useState<CarDetail[]>([]);
  const [carTypeDetails, setCarDetails] = useState<CarDetail[]>([]);

  let handleCarTypeChange = async (carType: string) => {
    setCarType(carType);
  };

  const fetchData = async () => {
   
    let alteredData = carDetail.map((carItem: any) => {
      return {
        id: carItem.id,
        carType: carItem.carType,
        name: carItem.name,
        image: carItem.image,
        imageInteriors: carItem.imageInteriors,
        price: carItem.price,
        fuel_type: carItem.fuel_type,
        engine_cc: carItem.engine_cc,
        torque: carItem.torque,
        acceleration: carItem.acceleration,
        top_speed: carItem.top_speed,
        variant: carItem.variant,
        exteriors: carItem.exteriors,
        interiors: carItem.interiors,
      };
    });
    setCarDetails(alteredData);
  };

  let fetchDataBasedOnCarType = async (carType: string) =>
  {
    console.log(carType);
    
    let alteredData = carDetail.filter((carItem: any) => carItem.carType === carType  )
    console.log(alteredData);
    setCarDetails(alteredData);
  }
 
  let getCarTypeDetails = async () => {
    console.log(carType);
    if (carType === "View all") {
     fetchData();
      
    } else  
    {
      console.log('e');
      fetchDataBasedOnCarType(carType);
    }
    };

   
        

  useEffect(() => {
    getCarTypeDetails();
  }, [carType]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all-car-types-container">
      <div className="all-car-types">
        <div className="selection-bar-container">
          <CarTypeSelectionBar
            handleTypeChange={handleCarTypeChange}
            categories={carTypes}
            categoryType={carTypes[0]}
          />
        </div>
        <div className="total-count-container">
          <div className="total-count">
            {carTypeDetails.length} total results
          </div>
        </div>
        <div className="cars-container">
          {carTypeDetails.map((carDetail: any) => {
            return (
              <div key={carDetail.id} className="car-card">
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
              </div>
            );
          })}
        </div>
        <div
          style={
            carTypeDetails.length !== 0
              ? { display: "flex" }
              : { display: "none" }
          }
          className="prev-next-cars-container"
        >
          <div className="prev-next-cars">
            <div className="arrow-container">
              <img
                className="prev-arrow"
                src={leftAngularArrow}
                alt="left arrow img"
              />
            </div>
            <div className="arrow-container">
              <img
                className="next-arrow"
                src={rightAngularArrow}
                alt="right arrow img"
              />
            </div>
          </div>
        </div>
        <div
          style={
            carTypeDetails.length === 0
              ? { display: "block" }
              : { display: "none" }
          }
          className="error-message"
        >
          OOPS! NO CARS AVAILABLE..
        </div>
      </div>
    </div>
  );
}

export default ShowAllCarsType;
