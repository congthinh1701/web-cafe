import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section8.module.scss";
import banner_section6 from "../../../assets/img/banner_section6.jpg";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import ListReview from "./ListReview";

function Section8() {
  const [review, setReview] = useState([]);
  
  const options = {
    margin: 20,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
  };

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("CustomerReview")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setReview(list);
      });
  }, []);
  return (
    <div>
      <div
        className={clsx(styles.section6)}
        style={{
          backgroundImage: `url(${banner_section6})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className={clsx(styles.titleText)}>
          <h2>Khách hàng nói gì</h2>
          <p>1500+ Khách hàng hài lòng</p>
        </div>
        {/* <ListReview review={review} /> */}
      </div>
    </div>
  );
}

export default Section8;
