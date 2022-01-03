import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import Section7 from "../Section7";

function Section3() {
  

  // set dữ liệu vào mảng
  const [coffee, SetCoffee] = useState([]);

  // lấy dữ liệu từ firebase

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("Product/Coffee")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        SetCoffee(list);
      });
  },[]);
  
  return (
    <div>
      <div className="container">
        
        <div className={clsx(styles.titleText)}>
          <h2>Coffee là hương vị của bạn</h2>
          <p>Có gì bất ngờ tại đây</p>
        </div>
        <Section7 coffee={coffee} />
      </div>
    </div>
  );
}

export default Section3;
