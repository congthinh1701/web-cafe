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
    {  review.length}
      <div className="content">
        <div className="title-text">
          <h2>Khách hàng nói gì</h2>
          <p>1500+ Khách hàng hài lòng</p>
        </div>
        <div className="owl-content">
          <div className="avatar">
            <img
              src="https://bizweb.dktcdn.net/thumb/small/100/351/580/themes/714586/assets/avatar-testimonial1.jpg?1628672823934"
              alt="name"
            />
          </div>
          <div className="avatar-name">
            <p>NGÔ THANH VÂN</p>
          </div>
          <div className="review-content">
            <p>
              Cà phê đúng gu, thức uống ngon và khá đặc biệt hơn nữa dessert ở
              đây luôn là loại vừa ý với mình nhất. IziCoffee luôn làm cho mọi
              giác quan của mình kích thích tối đa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListReview;
