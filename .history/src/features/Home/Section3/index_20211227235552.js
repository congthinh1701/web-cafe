import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import Section7 from "../Section7";

function Section3() {
  const options = {
    margin: 20,
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
    const timer = setInterval(() => {
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
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, []);

  return (
    <div>
      <div className="container">
        <Section7 coffee={coffee} />
        <div className={clsx(styles.titleText)}>
          <h2>Coffee là hương vị của bạn</h2>
          <p>Có gì bất ngờ tại đây</p>
        </div>
        {coffee && (
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
        )}
      </div>
    </div>
  );
}

export default Section3;
