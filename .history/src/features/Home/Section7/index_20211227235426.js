import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clsx from "clsx";
import styles from "./Section7.module.scss";
import { useEffect, useState } from "react";
function Section7({coffee}){
  
  const [option,setOptions]=useState()
    useEffect(() => {
            const timer=  setInterval(()=>{
              setOptions(options)
            },2000)
            
          },[])
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
        
          
        
    console.log(coffee)
    return (
        <div>
        {options && (
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
        )}
        </div>
    )
}

export default Section7