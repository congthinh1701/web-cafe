import "../style.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";

function ListReview({ review }) {
  const options = {
    margin: 20,
    responsiveClass: false,
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
          {review.map((data, i) => {
            console.log(data.Name,data.Content);
            return (
              <div className="con" key={i}>
                <div className="owl-con">
                  <div className="avatar">
                    <img src={data.ImageUrl} alt={data.Name} />
                  </div>
                  <div className="avatar-name">
                    <p>{data.Name}</p>
                  </div>
                  <div className="review-con">
                    <p>{data.Content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </div>
  );
}

export default ListReview;
