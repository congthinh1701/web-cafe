import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Section6() {
  return (
    <div>
      <div className="container">
        <OwlCarousel items={3} className="owl-theme" loop nav margin={}>
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
