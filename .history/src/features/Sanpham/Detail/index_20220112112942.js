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
                <img 
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
