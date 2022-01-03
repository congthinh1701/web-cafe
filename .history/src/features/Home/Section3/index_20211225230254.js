import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section3.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import { firebaseConnect } from "../../../firebase/firebaseConnect";
class UserNavBar extends React.Component {

  render(){
    return(

    )
  }
}

function Section3(deps) {
  
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
  const [count, setCount] = useState(0);

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
    
  );
}

export default Section3;
