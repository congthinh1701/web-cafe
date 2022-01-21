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
            <div className="content" key={i}>
              <div className="title-text">
                <h2>Khách hàng nói gì</h2>
                <p>1500+ Khách hàng hài lòng</p>
              </div>
              <div className="owl-content">
                <div className="avatar">
                  <img
                    src={data.ImageUrl} alt={data.Name}
                  />
                </div>
                <div className="avatar-name">
                  <p>{data.Name}</p>
                </div>
                <div className="review-content">
                  <p>
                    {data.Content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
  );
}

export default ListReview;
