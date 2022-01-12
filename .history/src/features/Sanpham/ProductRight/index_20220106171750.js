import React, { useState } from "react";
import "./style.scss";
function ProductRight() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <div className="Right">
      <div className="RightList">
        <div className="item">
          <a href="/">
            <div className="price">
              <p>5000đ</p>
            </div>
            <img
              src={
                "https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product1-8ed5cdf2-9430-402c-be6e-a529af32a714.jpg?v=1555054845430"
              }
              alt="name"
            />
            <div className="name">
              <p className="nameTitle">Name</p>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="/">
            <div className="price">
              <p>5000đ</p>
            </div>
            <img
              src={
                "https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product1-8ed5cdf2-9430-402c-be6e-a529af32a714.jpg?v=1555054845430"
              }
              alt="name"
            />
            <div className="name">
              <p className="nameTitle">Name</p>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="/">
            <div className="price">
              <p>5000đ</p>
            </div>
            <img
              src={
                "https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product1-8ed5cdf2-9430-402c-be6e-a529af32a714.jpg?v=1555054845430"
              }
              alt="name"
            />
            <div className="name">
              <p className="nameTitle">Name</p>
            </div>
          </a>
        </div>
      </div>
      <div className="navBtn" onClick={toggleMenu}>
        <i className="fa fa-filter"></i>
      </div>
    </div>
  );
}

export default ProductRight;
