
import React, { useEffect, useState } from "react";
import {  useParams ,useHistory } from "react-router-dom";
import "./show-car.css";
import { carDetail } from "../../mock";
import { isEmpty } from "lodash";



interface IdObject {
  carId: string;
}

function ShowCar() {
  const [idObject] = useState<IdObject>(useParams());
  const [carDetails, setCarDetails] = useState<any>({});
  const history = useHistory();

  useEffect(() => {
    fetchCarDetails();
  }, [idObject]);

 
  const fetchCarDetails = async () => {

    let alteredData = carDetail.filter((carItem: any) => carItem.id === parseInt(idObject.carId))
    alteredData?.length !==0 && setCarDetails(alteredData[0]);
  };

  const handleBook=() =>{
    if(carDetails.isBooked)
    history.push(`/all-cars/booking/${idObject.carId}/booking-successful`)
    else
    history.push(`/all-cars/booking/${idObject.carId}`)
  }
  return (
    <div className="car-detail-container">
      <div className="car-detail">
        <div className="car-heading-image-container">
          <div className="car-heading">
            <b>{carDetails.name}</b>
          </div>
          <div className="car-image-container">
            <img
              src={carDetails.image}
              alt="car-images"
              className="car-image"
            />
          </div>
        </div>
        <div className="car-specification-container">
          <div className="car-specification-heading">
            Car <b>Specifications</b>
          </div>
          <div className="car-specification">
            <div className="detail-container">
              <div className="spec-heading">Fuel Type</div>
              <div className="spec-detail">
                {carDetails.fuel_type}
              </div>
            </div>
            <div className="detail-container">
              <div className="spec-heading">Engine</div>
              <div className="spec-detail">
                {carDetails.engine_cc}
              </div>
            </div>
            <div className="detail-container">
              <div className="spec-heading">Torque</div>
              <div className="spec-detail">
                {carDetails.torque}
              </div>
            </div>
            <div className="detail-container">
              <div className="spec-heading">Acceleration</div>
              <div className="spec-detail">
                {carDetails.acceleration}
              </div>
            </div>
            <div className="detail-container">
              <div className="spec-heading">Top Speed</div>
              <div className="spec-detail">
                {carDetails.top_speed}
              </div>
            </div>
            <div className="detail-container">
              <div className="spec-heading">Variants</div>
              <div className="variants-detail-container">
                {carDetails.variant}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="car-detail">
        <div className="car-heading-image-container">
          <div className="car-image-container">
            <img
              src={carDetails.image}
              alt="car-images"
              className="car-image"
            />
          </div>
        </div>
        <div className="car-specification-container">
        <div className="exterior-color" style={{background: isEmpty(carDetails)? "white" : carDetails.color[0]}}></div>

          <div className="car-specification">
            <div className="detail-container">
              <div className="spec-heading">exteriors</div>
              <div className="spec-detail">
                {carDetails.exteriors}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="car-detail">
        <div className="car-heading-image-container">
          <div className="car-image-container">
            <img
              src={carDetails.imageInteriors}
              alt="car-images"
              className="car-image"
            />
          </div>
        </div>
        <div className="car-specification-container">
        <div className="exterior-color" style={{background: isEmpty(carDetails)? "white" : carDetails.color[1]}}></div>
          <div className="car-specification">
            <div className="detail-container">
              <div className="spec-heading">Interiors</div>
              <div className="spec-detail">
              {carDetails?.interiors?.map(
                  (carDetail:string) => {
                    return(
                    <ul>
                      <li>{carDetail}</li>
                    </ul>
                    )
                    
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="car-detail">
      <div className="car-heading-image-container">
        </div>
      <div className="car-specification-container">
      <div className="car-specification-heading">
            <b>Cost :  {carDetails.price}</b>
          </div>
      </div>
      </div>
      <div className="book-button-container">
        <button className="book-button" onClick={handleBook}>{carDetails?.isBooked ? <span style={{color:"white" , backgroundColor:"green" , padding: "15px 20px" , marginRight: "20px"}} >Booked</span>:<span style={{color:"white" , backgroundColor:"#790e22" , padding: "15px 20px"}} >Book Now</span>}</button>
      </div>
    </div>
  );
}

export default ShowCar;
