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
              <div class={clsx(styles.content1Header)}>
                <a href="/">
                  Những tông màu “sánh đôi” hoàn hảo với trang phục xanh navy
                </a>
              </div>
              <div class={clsx(styles.content1Footer)}>
                <p>
                    CÁC SẮC THÁI XANH DƯƠNG
                    Là gam màu “dễ tính”, xanh navy dễ dàng đồng điệu cùng các tông màu xanh, từ xanh baby ngọt ngào, xanh cobalt cho đến xanh mòng két. Để tạo được hiệu ứng thị giác hoàn hảo cho tổng thể trang phục, bạn nên áp dụng công thức layer và chú ý đến độ đậm nhạt của các sắc thái xanh.
                </p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
