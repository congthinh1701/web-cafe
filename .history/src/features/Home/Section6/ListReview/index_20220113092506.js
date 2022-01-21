import "../style.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ListReview({ review }) {
  const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    items:1
  };
  console.log(review);
  return (
    <div>
    <p>đasadsad</p>
      {review.length !== 0 && (
        <OwlCarousel  className="owl-theme" {...options}>
          {review.map((data, i) => {
              return()
            
          })}
        </OwlCarousel>
      )}
    </div>
  );
}

export default ListReview;
