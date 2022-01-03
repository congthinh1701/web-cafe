import React from "react";
import clsx from "clsx";
import styles from "./Section5.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Section5() {
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
  
      300: {
        items: 1,
      },
      550: {
        items: 2,
      },
     
      1000:{
        items:3
      }
     
    },
  };
  return (
    <div style={{backgroundColor:'#eae7de'}}>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>TIN TỨC</h2>
          <p>
            Mỗi tuần là mỗi một câu chuyện ấm áp, mỗi tuần là một câu chuyện
            tình. Nào cùng thưởng thức cà phê và đọc nhé!
          </p>
        </div>
        <Li
      </div>
    </div>
  );
}

export default Section5;
