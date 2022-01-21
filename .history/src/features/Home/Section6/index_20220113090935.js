import React, { useEffect, useState } from "react";
import "./style.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner_section6 from "../../../assets/img/banner_section6.jpg";
import { firebaseConnect } from "../../../firebase/firebaseConnect";

function Section6() {
  

  const [review,setReview]=useState([])

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
   
  }, [])
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
        
      </div>
    </div>
  );
}

export default Section6;
