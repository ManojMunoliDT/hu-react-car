import React, { useEffect, useState } from "react";
import "./featured-cars.css";
import arrow from "../../assets/images/Unionright-arrow.png";
import CarTypeSelectionBar from "../resuable/car-type-selection-bar/car-type-selection-bar";
import { Link, useHistory } from "react-router-dom";
import {carDetail} from "../../mock";
import moment from "moment";
import { isEmpty } from "lodash";

interface CarDetail {
  id: string;
  name: string;
  image: string;
  price: string;
  isBooked : boolean;
  date: string;
}


function FeaturedCars() {
  const categories = ["Popular", "Just launched", "Upcoming"];
  const [carDetails, setCarDetails] = useState<CarDetail[]>([]);
  const [categorie, setcategorie] = useState("");
  const history = useHistory();
  const [masterCarDetails, setMasterCarDetails] = useState<CarDetail[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   
    let alteredData = carDetail.map((carItem: any) => ({
        id: carItem.id,
        name: carItem.name,
        image: carItem.image,
        price: carItem.price,
        isBooked: carItem.isBooked,
        date: carItem.date
    }));
    setCarDetails(alteredData);
    setMasterCarDetails(alteredData);
    console.log(alteredData,"alterData");
  };
  const handleSeactionClick = (carDetail:any) => {
    history.push(`/all-cars/${carDetail?.id}`)
   }

   let handlecategorieChange = async (categorie: string) => {
    let filterDetail =[];
    if(categorie === "Popular") {
      filterDetail= masterCarDetails.filter(data => data.isBooked);
      console.log(carDetails.filter(data => data.isBooked === true),"filtersssssss");
      setCarDetails(filterDetail);
    } 
    else if(categorie === "Just launched") {
      console.log(carDetails,"carDeails");
      filterDetail= masterCarDetails.filter(data => moment(data.date).isSameOrBefore(new Date()));
      setCarDetails(filterDetail);
    } else {
      filterDetail= masterCarDetails.filter(data => moment(data.date).isAfter(new Date()));
      console.log(filterDetail,"filter");
      setCarDetails(filterDetail);
    }
    console.log(filterDetail,"filterDetail");
    console.log(categorie,"cate");
    
  };

  // const  getcategorieDetails = () => {
  //   let filterDetail =[];
  //   if(categorie === "Popular") {
  //     filterDetail= carDetails.filter(data => data.isBooked);
  //   } else if(categorie === "Just launched") {
  //     filterDetail= carDetails.filter(data => moment(data.date).isSameOrBefore());
  //   } else {
  //     filterDetail= carDetails.filter(data => moment(data.date).isAfter());
  //   }
  //   console.log(filterDetail,"filterDetail");
  //   setCarDetails(filterDetail);
  // };

  useEffect(() => {
    if (!isEmpty(masterCarDetails)) handlecategorieChange("Popular");
  }, [masterCarDetails]);

  return (
    <div className="featured-cars-container">
      <div className="featured-cars">
        <div className="featured-cars-heading">
          Featured <b>Cars</b>
        </div>
        <div className="selection-bar-container">
          <CarTypeSelectionBar handleTypeChange={handlecategorieChange} categories={categories} categoryTypes= {categories[0]} />
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
