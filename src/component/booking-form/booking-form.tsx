
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./booking-form.css";
import arrow from "../../assets/images/Unionright-arrow.png";
import { carDetail } from "../../mock";



const TEL_REGEX = "^([+]\\d{2})?\\d{10}$";


interface IdObject {
  carId: string;
}

function BookingForm() {
  const [idObject] = useState<IdObject>(useParams());
  const [carDetails, setCarDetails] = useState<any>({});
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    city: "",
    agreed: false,
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const history = useHistory();

  const onFormUpdate = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const isValid = () => {
    if (
      !formData.name ||
      !formData.contact ||
      !formData.city ||
      !formData.agreed
    )
      return false;
    return new RegExp(TEL_REGEX).test(formData.contact);
  };

  useEffect(() => {
    setIsFormValid(isValid());
  }, [formData]);

  useEffect(() => {
    fetchCarDetails();
  }, [idObject]);

  const fetchCarDetails = async () => {
    let alteredData = carDetail.filter((carItem: any) => {return carItem.id === parseInt(idObject.carId) } )
    alteredData?.length !==0 && setCarDetails(alteredData[0]);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    let alteredData = carDetail.filter((carItem: any) => {return carItem.id === parseInt(idObject.carId) } )
    console.log(alteredData,"book");
    const newData = {...alteredData[0], isBooked:true}
    console.log(newData,"newData");
    const alterDataIndex = carDetail.indexOf(alteredData[0]);
    console.log(alterDataIndex,"alterDataIndex");
    carDetail[alterDataIndex] = newData;
    console.log(carDetail,"carDeatil");
    history.push(`/all-cars/booking/${idObject.carId}/booking-successful`);
  };

  return (
    <div className="booking-page-container">
      <div className="booking-page">
        <div className="car-details">
          <div className="car-details-heading">
            Car <b>Details</b>
          </div>
          <div className="image-container">
            <img
              className="car-image"
              src={carDetails.imageInteriors}
              alt="car images"
            />
          </div>
          <div className="car-name">{carDetails.name}</div>
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
          <div className="view-all-details-container">
            <Link to={`/all-cars/${idObject.carId}`}>
              <div className="view-all-details">
                <span className="view-all-details">View all details</span>
                <img className="arrow" src={arrow} alt="arrow" />
              </div>
            </Link>
          </div>
        </div>
        <div className="booking-form-container">
          <div className="form-heading">
            Booking <b>Details</b>
          </div>
          <div className="form-container">
            <form>
              <div className="field-container">
                <label htmlFor="name" className="field-label">
                  Name
                </label>
                <input
                  onChange={(event) => onFormUpdate("name", event.target.value)}
                  value={formData.name}
                  type="text"
                  placeholder="Enter your name..."
                  name="name"
                  className="name-field field"
                />
              </div>
              <div className="field-container">
                <label htmlFor="contact" className="field-label">
                  Contact Number
                </label>
                <input
                  onChange={(event) =>
                    onFormUpdate("contact", event.target.value)
                  }
                  value={formData.contact}
                  type="text"
                  placeholder="9876543210"
                  name="contact"
                  className="contact-field field"
                />
              </div>
              <div className="field-container">
                <label htmlFor="city" className="field-label">
                  City
                </label>
                <input
                  onChange={(event) => onFormUpdate("city", event.target.value)}
                  type="text"
                  value={formData.city}
                  placeholder="Enter a city"
                  name="city"
                  className="city-field field"
                />
              </div>
              <div className="agreement-container">
                <input
                  onChange={(event) =>
                    onFormUpdate("agreed", event.target.checked)
                  }
                  checked={formData.agreed}
                  type="checkbox"
                  className="agreement-box"
                  name="agreement"
                />
                <label htmlFor="agreement" className="agreement-box-label">
                  I accept the terms and conditions
                </label>
              </div>
              <div className="terms-and-conditions">
                <span className="condition-heading">Terms and conditions:</span>{" "}
                <br />
                <span className="condition">
                  *Terms and conditions apply. All offers are from dealers.
                  Please get in touch with your nearest dealer for detailed
                  terms and conditions. All taxes are additional. Offer valid
                  till February 15, 2022 and is subject to change without prior
                  notice. Calculations for the following are for a specific
                  tenure mileage and finance amount.
                </span>
              </div>
              <div className="submit-button-container">
                {/* <Link
                  to={`/all-cars/booking/${idObject.carId}/booking-successful`}
                >
                  <button disabled={!isFormValid} className="submit-button">
                    SUBMIT
                  </button>
                </Link> */}
                 <button disabled={!isFormValid} className="submit-button" onClick={handleSubmit}>
                    SUBMIT
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
