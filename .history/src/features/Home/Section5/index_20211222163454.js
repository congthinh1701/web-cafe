import React from "react";
import clsx from "clsx";
import styles from "./Section5.module.scss";

function Section5() {
  return (
    <div>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>TIN TỨC</h2>
          <p>Mỗi tuần là mỗi một câu chuyện ấm áp, mỗi tuần là một câu chuyện tình. Nào cùng thưởng thức cà phê và đọc nhé!</p>
        </div>
      </div>
      <div class="container content">
        <div class="content1 tab-content">
            <div class="content1-img">
                <img src="assets/img/tintuc/1.jpg">                    
            </div>
            <div class="content1-header">
                <a href="#">Những tông màu “sánh đôi” hoàn hảo với trang phục xanh navy</a>
            </div>
            <div class="content1-footer">
                <p>
                    CÁC SẮC THÁI XANH DƯƠNG
                    Là gam màu “dễ tính”, xanh navy dễ dàng đồng điệu cùng các tông màu xanh, từ xanh baby ngọt ngào, xanh cobalt cho đến xanh mòng két. Để tạo được hiệu ứng thị giác hoàn hảo cho tổng thể trang phục, bạn nên áp dụng công thức layer và chú ý đến độ đậm nhạt của các sắc thái xanh.
                </p>
            </div>
        </div>
        <div class="content2 tab-content active">
            <div class="content2-img">
                <img src="assets/img/tintuc/2.jpg">                    
            </div>
            <div class="content2-header">
                <a href="#">Khi các thương hiệu thời trang Việt gặp gỡ và giao thoa</a>
            </div>
            <div class="content2-footer">
                <p>
                    Dấu ấn cá nhân là chìa khóa để khẳng định tên tuổi tại làng mốt, trong lẫn ngoài nước. Các NTK ở những thế hệ khác nhau với phong cách riêng, nhưng tất cả đều có chung đam mê lẫn sứ mệnh nuôi dưỡng niềm tự hào về thời trang Việt.
                    Với dấu ấn thiết kế đậm chất riêng, mỗi thương hiệu thời trang Việt lại mang trong mình một sứ mệnh. Dù được thể hiện khác nhau bằng ngôn ngữ của chất liệu, của màu sắc, họa tiết và phom dáng, tất cả đều là mảnh ghép không thể thiếu làm nên bức tranh thời trang đa sắc của làng mốt Việt.
                </p>
            </div>
        </div>
        <div class="content3 tab-content">
            <div class="content3-img">
                <img src="assets/img/tintuc/3.jpg"/>                    
            </div>
            <div class="content3-header">
                <a href="#">Những ấn tượng thú vị cho thời trang Thu Đông không còn đơn điệu</a>
            </div>
            <div class="content3-footer">
                <p>
                    Những cơn gió mùa Đông thổi qua thành phố, đôi khi gợi nhắc chúng ta về những món đồ vốn đang nằm thu mình nơi góc tủ. Đó có thể là những điểm nhấn dành cho bạn trong tiết trời se lạnh này.
                    Thời trang mùa Thu – Đông sẽ thêm phần thú vị nếu bạn biết cách biến tấu trang phục dạo phố hằng ngày bằng những điểm nhấn độc đáo như thắt lưng, áo khoác chần bông, họa tiết sắc màu…
                </p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Section5;
