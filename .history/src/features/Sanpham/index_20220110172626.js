import React, { useEffect, useState } from "react";
import "./Sanpham.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import Detail from "./Detail";

function Sanpham() {
  const [product, setProduct] = useState([]); //ProductLeft Menu
  const [menu, setMenu] = useState(false); //toggle menu
  const [productRight,setProductRight]=useState([]) // data from ProductLeft
  const [productDetail,setProductDetail]=useState([]) //data productDetail from ProductRight
  // open Menu
  const openMenu = () => {
    setMenu(!menu);
  };
  //console.log(productRight)
  // set Menu
  const closeMenu = (childData) => {
    setMenu(childData);
  };
  // receive data infomation from ProductLeft
  const getData=(childData)=>{
    setProductRight(childData)
  }
  // receive data productDetail from ProductRight
  const getProductDetail=(childData)=>{
    console.log(childData);
    setProductDetail(productDetail)
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
            <ProductLeft product={product} menu={menu} closeMenu={closeMenu} getData={getData} />
            <ProductRight productRight={productRight} getProductDetail={getProductDetail} />
            <Detail data=/>
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
