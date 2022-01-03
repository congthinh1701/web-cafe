import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clsx from "clsx";
import styles from "../Section5.module.scss";

function ListTintuc({ tintuc }) {
  const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },

      300: {
        items: 1,
      },
      550: {
        items: 2,
      },

      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      {tintuc.length !== 0(
          
      )}

      <OwlCarousel items={1} className="owl-theme" {...options}>
        {tintuc.map((data) => (
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.contentImg)}>
            <img src={data.ImageUrl} alt={data.Name} />
            </div>
            <div className={clsx(styles.contentHeader)}>
              <a href="/">{data.Name}</a>
            </div>
            <div className={clsx(styles.contentFooter)}>
              <p>
                {data.Content1}
              </p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
export default ListTintuc;
