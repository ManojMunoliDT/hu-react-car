import React from 'react';
import "./booking-successful.css";
import smallImage from "../../assets/images/bmw.png";
import largeImage from "../../assets/images/largebmw.png";

function BookingSuccessful() {
  return (
    <div className="booking-successful-container">
      <div className="booking-successful">
        <div className="booking-details">
          <div className="image-container">
            <img src={smallImage} alt="" className="small-car-image" />
          </div>
          <div className="booking-message">
            Booking <b>Success</b>
          </div>
          <div className="download-message">
            <span>Download</span> the booking summary
          </div>
        </div>
        <div className="big-image-black-box-container">
          <div className="big-image-container">
            <img src={largeImage} alt="images" className="large-car"/>
          </div>
          <div className="black-box">
            <div className="border-box">
              Explore more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccessful;