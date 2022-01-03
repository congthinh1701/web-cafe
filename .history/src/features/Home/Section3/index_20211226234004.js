import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { firebaseConnect } from "../../../firebase/firebaseConnect";

class Section3 extends Component {
  render(){

  }
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
     
      1000:{
        items:5
      }
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
  }, []);
  return (
    
  );
}

export default Section3;