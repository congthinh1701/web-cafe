import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function Detail() {
  //const detailProduct = useSelector((state) => state.detail);
  //console.log(detailProduct);

  return (
    <div>
      <div className="container">
        <div className="detail">
          <div className="detailLeft">
            <div className="Img">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/351/580/products/cocktail-b52.jpg?v=1557127959103" a
            </div>
          </div>
          <div className="detailRight">
            <p>right</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
