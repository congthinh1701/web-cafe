import React from "react";
import clsx from "clsx";
import styles from "./Section5.module.scss";

function Section5() {
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
            <a href="/">
              <div className={clsx(styles.content1Img)}>
                <img src="assets/img/tintuc/1.jpg" alt="anh" />
              </div>
              <div class="">
                <a href="#">Những tông màu “sánh đôi” hoàn hảo với trang phục xanh navy</a>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
