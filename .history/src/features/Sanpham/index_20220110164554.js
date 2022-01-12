import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./Sanpham.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

function Sanpham() {
  const [product, setProduct] = useState([]); //ProductLeft Menu
  const [menu, setMenu] = useState(false); //toggle menu
  const [productRight,setProductRight]=useState([])
  // open Menu
  const openMenu = () => {
    setMenu(!menu);
  };
  //console.log(productRight)
  // set Menu
  const closeMenu = (childData) => {
    setMenu(childData);
  };
  // transmit data infomation from ProductLeft
  const getData=(childData)=>{
    setProductRight(childData)
  }
  // fectch data
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
          <Routes>
            <Route ></Route>
          </Routes>
            <ProductLeft product={product} menu={menu} closeMenu={closeMenu} getData={getData} />
            <ProductRight productRight={productRight} />
            <div className="navBtn" onClick={openMenu}>
              {menu === false && <i className="fa fa-filter"></i>}
            </div>
            <div className={`${"navOverlay"} ${menu ? "show" : ""}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sanpham;
