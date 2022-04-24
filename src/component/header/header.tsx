
import React from "react";
import {  BrowserRouter as Router,  withRouter } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./header.css";



function Header(props: any) {

  const goToHome = () => {
    props.history.push("/");
  }
  return (
    <Router>
      <div className="header-container ">
        <header className="header">
          <span className="header-item">
              <img onClick={goToHome} src={logo} alt="Images" className="img-logo" />
          </span>
          <span className="header-item">
            <span className="sub-item">NEW CARS</span>
            <span className="sub-item">USED CARS</span>
          </span>
          <span className="header-item">MY PROFILE</span>
        </header>
      </div>
    </Router>
  );
}

export default withRouter(Header);
