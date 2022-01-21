import React, { useEffect, useState } from "react";
import "./style.scss";

import banner_section6 from "../../../assets/img/banner_section6.jpg";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ListReview from "./ListReview";

function Section6() {
  const [review, setReview] = useState([]);
  const options = {
    margin: 20,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    items: 1

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
        className="section6"
        style={{
          backgroundImage: `url(${banner_section6})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="title-text">
          <h2>Khách hàng nói gì</h2>
          <p>1500+ Khách hàng hài lòng</p>
        </div>
        {review.length !== 0 && (
        <OwlCarousel className="owl-theme" {...options}>
          {review.map((data, i) => {
            console.log(data.Name);
            return (
              <div className="content" key={i}>
                <div className="owl-content">
                  <div className="avatar">
                    <img src={data.ImageUrl} alt={data.Name} />
                  </div>
                  <div className="avatar-name">
                    <p>{data.Name}</p>
                  </div>
                  <div className="review-content">
                    <p>{data.Content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      )}
        <ListReview review={review} />
      </div>
    </div>
  );
}

export default Section6;
