import React, { useEffect, useState } from "react";
import "./Sanpham.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

function Sanpham() {
  const [product, setProduct] = useState([]);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
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
        <div className="navPc">
          <div className="content">
            <ProductLeft product={product} menu={menu}  />
            <ProductRight />
            <div className="navBtn" onClick={toggleMenu}>
              <i className="fa fa-filter"></i>
            </div>
            <div className={menu ? 'showOverlay' : {`${'navOverlay'} ${'show'} `}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sanpham;
