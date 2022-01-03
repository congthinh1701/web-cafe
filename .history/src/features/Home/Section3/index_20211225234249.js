import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { firebaseConnect } from "../../../firebase/firebaseConnect";

function Section3() {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
  const mounted = useRef();
  // lấy dữ liệu từ firebase
  useEffect(() => {
    if (!mounted.current){
      mounted.current = true;
    }
    else{
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
    }
   
  }, []);
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
