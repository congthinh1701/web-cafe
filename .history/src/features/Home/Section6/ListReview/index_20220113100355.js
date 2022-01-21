import "../style.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";

function ListReview({ review }) {
  const options = {
    margin: 20,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    items: 1

  };
  //   console.log(review);
  return (
    <div>
      {review.length !== 0 && (
        <OwlCarousel className="owl-theme" {...options}>
          <p>adasdsa akdhksadk dsadas</p>
        </OwlCarousel>
      )}
    </div>
  );
}

export default ListReview;
