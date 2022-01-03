import React, {  useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import Section7 from "../Section7";
import ListCoffee from "./ListCoffee";

function Section3() {
  
  const options = {
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },

      400: {
        items: 2,
        nav: true,
      },
      550: {
        items: 3,
      },
      768: {
        items: 4,
      },

      1000: {
        items: 5,
      },
    },
  };

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
        
        <ListCoffee coffee={coffee} />
      </div>
    </div>
  );
}

export default Section3;
