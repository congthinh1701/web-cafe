import React from "react";
import "./style.scss";
function ProductRight({productRight}) {
  console.log(productRight)
  return (
    <div className="Right">
      <div className="filter">
        <div className="listView">
          <div className="viewModeGird active view">
            <i class="fa fa-th" aria-hidden="true"></i>
          </div>
          <div className="viewModeList view">
            <i class="fa fa-th-list" aria-hidden="true"></i>
          </div>
        </div>
        <div className="sortBy">
          <div className="sortName">
            <p>Sắp xếp :</p>
          </div>
          <div className="sortSelect">
            <select>
              <option value="A">Apple</option>
              <option value="B">Banana</option>
              <option value="C">Cranberry</option>
            </select>
          </div>
        </div>
      </div>
      <div className="RightList">
      {/* render data */}
      {productRight.length !== 0 && (
        
        
      
      )}
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
    </div>
  );
}

export default ProductRight;
