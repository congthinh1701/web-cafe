import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clsx from "clsx";
import styles from "../Section3.module.scss";
import { useEffect, useState } from "react";

function ListCoffee({ coffee }) {
  
  const [option, setOptions] = useState();
  useEffect(() => {
    const timer = setInterval(() => {
      setOptions(options);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log(coffee);
  return (
    <div>
      <OwlCarousel className="owl-theme" {...option}>
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
  );
}

export default ListCoffee;
