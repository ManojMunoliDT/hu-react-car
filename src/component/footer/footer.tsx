import React from "react";
import facebookLogo from "../../assets/images/Vectorfacebook.png";
import twitterLogo from "../../assets/images/Vectortwitter.png";
import instagramLogo from "../../assets/images/Vectorinsta.png";
import "./footer.css";

function Footer() {
  const itemDetails = [
    {
      title: "Contact",
      subDetails: ["Request a Test Drive", "Book car", "Career", "Contact Us"],
    },
    {
      title: "Xtremecars:",
      subDetails: [
        "12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai - 400705.",
        "Maharashtra, India.",
        "",
        "Phone: +91(22)612800000",
      ],
    },
    {
      title: "Legal",
      subDetails: ["Legal Disclaimer/Imprint", "Privacy Policy", "Cookie Policy"],
    },
  ];
  return (
    <div className="footer-container">
      <footer className="footer">
        {itemDetails.map((item) => {
          return (
            <div key={item.title} className="footer-item">
              <div className="footer-item-title">
                <b>{item.title}</b>
              </div>
              <div className="details">
                {item.subDetails.map((detail) => (
                  <div className="sub-detail" key={detail}>{detail}</div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="footer-item">
          <div className="footer-item-title">
            <b>Connect with us</b>
          </div>
          <div className="details">
            <div>
              <img className="social-media-logo" src={facebookLogo} alt="facebook logo" />
            </div>
            <div>
              <img className="social-media-logo" src={twitterLogo} alt="twitter logo" />
            </div>
            <div>
              <img className="social-media-logo" src={instagramLogo} alt="instagram logo" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
