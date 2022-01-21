import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function Detail() {
  const detailProduct = useSelector((state) => state.detail);
  //console.log(detailProduct);

  return (
    <div>
      <div className="container">
        {detailProduct.map((data,i)=>(

        ))}
        
      </div>
    </div>
  );
}

export default Detail;
