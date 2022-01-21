import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function Detail() {
  const detailProduct = useSelector((state) => state.detail);
  console.log(detailProduct);

  return (
    <div>
      {detailProduct.map((data, i) => (
        <div key={i}>
          <p>{data.Name}</p>
          <p>{data.Price}</p>
          <img src={data.ImageUrl} alt="bname" />
        </div>
      ))}
    </div>
  );
}

export default Detail;
