import "../style.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination"
function ListReview({ review }) {
  const options = {
    margin: 20,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
  };
  
  return (
    <div>
    <Swiper  className="mySwiper">
  <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
      {review.length !== 0 && (
        <OwlCarousel items={1} className="owl-theme" {...options}>
          {review.map((data, i) => {
            console.log(data.Name,data.Content);
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
    </div>
  );
}

export default ListReview;
