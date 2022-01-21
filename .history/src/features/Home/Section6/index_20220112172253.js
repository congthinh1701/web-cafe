import React from "react";
import './style.scss'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner_section6 from "../../../assets/img/banner_section6.jpg";

function Section6() {
  const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <div
        className="section6"
        style={{
          backgroundImage: `url(${banner_section6})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="content">
          <div className="title-text">
            <h2>Khách hàng nói gì</h2>
            <p>1500+ Khách hàng hài lòng</p>
          </div>
          <div className="owl-content">
            <div c>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
