import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clsx from "clsx";
import styles from "../Section3.module.scss";
import { Link } from "react-router-dom";

function ListCoffee({ coffee}) {

  const options = {
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    loop:true,
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
  const dispatch = useDispatch() 

  const dataDetail=(data)=>{

  }
  return (
    <div>
      {coffee.length !== 0 && (
        <OwlCarousel className="owl-theme" {...options}>
          {coffee.map((data,i) => (
            <div key={i} className={clsx(styles.item)}>
              <Link to="/Sanpham/Detail" onClick={()=>dataDetail(data)}>
                <div className={clsx(styles.price)}>
                  <p>{data.Price}đ</p>
                </div>
                <img src={data.ImageUrl} alt={data.Name} />
                <div className={clsx(styles.name)}>
                  <p className={clsx(styles.nameTitle)}>{data.Name}</p>
                </div>
              </Link>
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
  );
}

export default ListCoffee;
