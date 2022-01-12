import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Sanpham.module.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
function Sanpham() {

  const [product,SetProduct]=useState({})
  const name=['Coffee','SanPhamNoiBat']

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("Product")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        SetProduct(list);
      });
    
  }, [])
 
  console.log(product)
  for (var i in name){
    console.log(name[i])
  }
  

  return (
    <div>
      <div className="container">
      
        <h2>TẤT CẢ SẢN PHẨM</h2>
        <div className={clsx(styles.navPc)}>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.MenuLeft)}>
              <div className={clsx(styles.DanhMuc)}>
                <p>DANH MỤC</p>
              </div>
              <hr />
              <div className={clsx(styles.ListDanhMuc)}>
                <div className={clsx(styles.accordion)}>
                {product.map}
                  <div className={clsx(styles.item)}>
                    <div className={clsx(styles.title)}>
                      <h3>coffe</h3>
                      <span>+</span>
                    </div>
                    <div className={clsx(styles.ListContent)}>
                      <ul>
                        <li>ghghgh</li>
                        <li>ghghgh</li>
                        <li>ghghgh</li>
                        <li>ghghgh</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(styles.Right)}>
              <p>fsdfdsfdf</p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.navMobile)}></div>
      </div>
    </div>
  );
}

export default Sanpham;
