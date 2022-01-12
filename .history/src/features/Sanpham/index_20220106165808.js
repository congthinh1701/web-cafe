import React, { useEffect, useState } from "react";
import "./Sanpham.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

function Sanpham() {
  const [product, setProduct] = useState([]);
  const name = ["Coffee", "SanPhamNoiBat"];
  const [menu, setMenu] = useState(false);
  const [selected, setSected] = useState(null);
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

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
        {/* navPc */}
        <div className="navPc">
          <div className="content">
          {/* <ProductLeft product={product} /> */}
            <ProductLeft/>
            <ProductRight/>

            {/* toi day */}
            <div className="navBtn" onClick={toggleMenu}>
              <i className="fa fa-filter"></i>
            </div>
            <div className="navOverlay"></div>
          </div>
        </div>

        {/* navMobile */}
      </div>
    </div>
  );
}

export default Sanpham;
