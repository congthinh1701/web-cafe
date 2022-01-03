import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import { firebaseConnect } from "../../../firebase/firebaseConnect";

function Section3() {
 
  const options = {
    margin: 1,
    responsiveClass: true,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    autoWidth:true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },

      300: {
        items: 2,
      },
      550: {
        items: 3,
      },

      1000: {
        items: 4,
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
      return () => list()
  },[]);
  return (
    <div>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>Coffee là hương vị của bạn</h2>
          <p>Có gì bất ngờ tại đây</p>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {coffee.map((data) => (
            <div key={data.id} className={clsx(styles.item)}>
              <a href="/">
                <div className={clsx(styles.price)}>
                  <p>{data.Price}đ</p>
                </div>
                <img src={data.ImageUrl} alt={data.Name} />
                <div className={clsx(styles.name)}>
                  <p className={clsx(styles.nameTitle)}>{data.Name}</p>
                </div>
              </a>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Section3;
