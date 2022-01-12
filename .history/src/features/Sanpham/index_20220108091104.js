import React, { useEffect, useState } from "react";
import "./Sanpham.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

function Sanpham() {
  const [product, setProduct] = useState([]);
  
  

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("Product")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setProduct(list);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h2>TẤT CẢ SẢN PHẨM</h2>
        <div className="navPc">
          <div className="content">
            <ProductLeft product={product}   />
            <ProductRight />
            
            <div className={`${"navOverlay"} ${//menu ? "show" : ""} `}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sanpham;
