import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import BodyTypeHeader from "./component/body-type-header/body-type-header";
import HomeCarousel from "./component/home-carousel/home-carousel";
import FeaturedCars from "./component/featured-cars/featured-cars";
import BlankSecondaryHeader from "./component/blank-secondary-header/blank-secondary-header";
import ShowAllCarsType from "./component/show-all-cars-type/show-all-cars-type";
import ShowCar from "./component/show-car/show-car";
import BookingForm from "./component/booking-form/booking-form";
import BookingSuccessful from "./component/booking-successful/booking-successful";


const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="padded-container">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact>
            <BodyTypeHeader />
          </Route>
          <Route path="/*">
            <BlankSecondaryHeader />
          </Route>
        </Switch>
        <div className="padded-container">
          <Switch>
            <Route path="/" exact>
              <HomeCarousel />
              <FeaturedCars />
            </Route>
            <Route path="/all-cars" exact>
              <ShowAllCarsType/>
            </Route>
            <Route path="/all-cars/:carId" exact>
              <ShowCar/>
            </Route>
            <Route path="/all-cars/booking/:carId" exact>
              <BookingForm/>
            </Route>
            <Route path="/all-cars/booking/:carId/booking-successful" exact>
              <BookingSuccessful/>
            </Route>
          </Switch>
          <Footer />
        </div>
        <div className="bottom-footer-plain-bar"></div>
      </div>
    </Router>
  );
};

export default App;
