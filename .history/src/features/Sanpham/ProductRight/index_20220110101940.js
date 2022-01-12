import React, { useState } from "react";
import "./style.scss";
function ProductRight({ productRight }) {
  const [select, setSelect] = useState();

  // SortBy Select
  const sortBy = () => {
  productRight.sort((a, b) => a.Price > b.Price);
    console.log(productRight.sort((a, b) => a.Price - b.Price));
  };
  // reverseBy Select
  const reverseBy = () => {
    productRight.sort((a, b) => b.Price - a.Price);
    console.log(productRight.sort((a, b) => b.Price - a.Price));
  };
  // changeSelect sortBy
  const changeSelect = (event) => {
    setSelect(event.target.value);
    if (select !== "Giá tăng dần") {
      sortBy();
    } else if (select !== "Giá giảm dần") {
      reverseBy();
    }
  };
  //console.log(product)

  return (
    <div className="Right">
      

      {/* render data */}
      {productRight.length !== 0 && (
        <div className="RightList">
          {productRight.map((data) => (
            <div className="item" key={data.id}>
              <a href="/">
                <div className="price">
                  <p>{data.Price}đ</p>
                </div>
                <img src={data.ImageUrl} alt={data.Name} />
                <div className="name">
                  <p className="nameTitle">{data.Name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductRight;
