import React, { useEffect, useRef, useState } from "react";
import "./Sanpham.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

function Sanpham() {
  const [product, setProduct] = useState([]);
  const [menu, setMenu] = useState(false);
  const textInput = useRef(null);
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(textInput.current)
    
  };
  console.log(menu)

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
            <ProductLeft product={product} menu={menu}/>
            <ProductRight />
            <div className="navBtn" onClick={toggleMenu} >
              <i className="fa fa-filter"></i>
            </div>
            <div className={`${"navOverlay"} ${menu ? "show" : ""} `}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sanpham;
