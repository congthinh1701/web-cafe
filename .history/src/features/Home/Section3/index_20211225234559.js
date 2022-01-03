import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";

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
        <Slider  {...options}>
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
        </Slider>
      </div>
    </div>
  );
}

export default Section3;
