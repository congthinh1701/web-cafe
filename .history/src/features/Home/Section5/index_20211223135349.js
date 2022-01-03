import React from "react";
import clsx from "clsx";
import styles from "./Section5.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Section5() {
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
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,

        }
    },
};
  return (
    <div>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>TIN TỨC</h2>
          <p>
            Mỗi tuần là mỗi một câu chuyện ấm áp, mỗi tuần là một câu chuyện
            tình. Nào cùng thưởng thức cà phê và đọc nhé!
          </p>
        </div>
        
        <div className={clsx(styles.content)}>
          
          <div className={clsx(styles.content1)}>
              <div className={clsx(styles.content1Img)}>
                <img src="assets/img/tintuc/1.jpg" alt="anh" />
              </div>
              <div className={clsx(styles.content1Header)}>
                <a href="/">
                  Những tông màu 
                </a>
              </div>
              <div className={clsx(styles.content1Footer)}>
                <p>
                  CÁC SẮC THÁI XANH DƯƠNG Là gam màu “dễ tính”, xanh navy dễ
                  dàng đồng điệu cùng các tông màu xanh, từ xanh baby ngọt ngào,
                  xanh cobalt cho đến xanh mòng két. Để tạo được hiệu ứng thị
                  giác hoàn hảo cho tổng thể trang phục, bạn nên áp dụng công
                  thức layer và chú ý đến độ đậm nhạt của các sắc thái xanh.
                </p>
              </div>
           
          </div>
          <div className={clsx(styles.content1)}>
              <div className={clsx(styles.content1Img)}>
                <img src="assets/img/tintuc/1.jpg" alt="anh" />
              </div>
              <div className={clsx(styles.content1Header)}>
                <a href="/">
                  Những tông màu 
                </a>
              </div>
              <div className={clsx(styles.content1Footer)}>
                <p>
                  CÁC SẮC THÁI XANH DƯƠNG Là gam màu “dễ tính”, xanh navy dễ
                  dàng đồng điệu cùng các tông màu xanh, từ xanh baby ngọt ngào,
                  xanh cobalt cho đến xanh mòng két. Để tạo được hiệu ứng thị
                  giác hoàn hảo cho tổng thể trang phục, bạn nên áp dụng công
                  thức layer và chú ý đến độ đậm nhạt của các sắc thái xanh.
                </p>
              </div>  
          </div>
          <div className={clsx(styles.content1)}>
              <div className={clsx(styles.content1Img)}>
                <img src="assets/img/tintuc/1.jpg" alt="anh" />
              </div>
              <div className={clsx(styles.content1Header)}>
                <a href="/">
                  Những tông màu 
                </a>
              </div>
              <div className={clsx(styles.content1Footer)}>
                <p>
                  CÁC SẮC THÁI XANH DƯƠNG Là gam màu “dễ tính”, xanh navy dễ
                  dàng đồng điệu cùng các tông màu xanh, từ xanh baby ngọt ngào,
                  xanh cobalt cho đến xanh mòng két. Để tạo được hiệu ứng thị
                  giác hoàn hảo cho tổng thể trang phục, bạn nên áp dụng công
                  thức layer và chú ý đến độ đậm nhạt của các sắc thái xanh.
                </p>
              </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
