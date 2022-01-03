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
      {tintuc.length !== 0()}

      <OwlCarousel items={1} className="owl-theme" {...options}>
        {tintuc.map((data) => (
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.contentImg)}>
              <img
                src={
                  "https://bizweb.dktcdn.net/100/351/580/articles/blog3.jpg?v=1554358411070"
                }
                alt="anh"
              />
            </div>
            <div className={clsx(styles.contentHeader)}>
              <a href="/">Những tông màu</a>
            </div>
            <div className={clsx(styles.contentFooter)}>
              <p>
                CÁC SẮC THÁI XANH DƯƠNG Là gam màu “dễ tính”, xanh navy dễ dàng
                đồng điệu cùng các tông màu xanh, từ xanh baby ngọt ngào, xanh
                cobalt cho đến xanh mòng két. Để tạo được hiệu ứng thị giác hoàn
                hảo cho tổng thể trang phục, bạn nên áp dụng công thức layer và
                chú ý đến độ đậm nhạt của các sắc thái xanh.
              </p>
            </div>
          </div>
        ))}

      </OwlCarousel>
    </div>
  );
}
export default ListTintuc;