import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Section6() {
    const options = {
        margin: 30,
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
                nav: false;
                navText: ["Prev", "Next"],
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
    
            }
        },
    };
  return (
    <div>
      <div className="container">
        <OwlCarousel items={3} className="owl-theme" {...options}>
          <div>
            <img className="img" src={"https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"} alt="anh" />
          </div>
          <div>
            <img className="img" src={"https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"} alt="anh" />
          </div>
          <div>
            <img className="img" src={"https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"} alt="anh" />
          </div>
          <div>
            <img className="img" src={"https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"} alt="anh" />
          </div>
          <div>
            <img className="img" src={"https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"} alt="anh" />
          </div>
          <div>
            <img className="img" src={"https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"} alt="anh" />
          </div>
          <div>
            <img className="img" src={"https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"} alt="anh" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Section6;
