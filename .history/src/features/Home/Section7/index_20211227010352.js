import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clsx from "clsx";
import styles from "./Section7.module.scss";
import { useEffect } from "react";
function Section7({coffee}){
    
    useEffect(() => {
        let timer1 = setTimeout(() => 
            
        , delay * 1000)
        
        return () => {
            cleanup
        }
    }, [])
    
    console.log(coffee)
    return (
        <div>
        {options && (
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
    )
}

export default Section7