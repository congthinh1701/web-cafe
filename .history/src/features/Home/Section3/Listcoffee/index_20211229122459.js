import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clsx from "clsx";
import styles from "../Section3.module.scss";
import { useEffect, useState } from "react";

function ListCoffee({ coffee, options }) {
  console.log(options);

  const [option, setOptions] = useState(options);

  useEffect(() => {
    const timer = setInterval(() => {
      setOptions(options);
    }, 1200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log(coffee.lenght);
  return (
    <div>
      ( coffee.length !=0 {

      })
      
    </div>
  );
}

export default ListCoffee;
