import React, { useState } from "react";
import "../style.scss";

function InformationOrder({ cart }) {
  const [total, setTotal] = useState(0);
  let sum = 0;
  cart.list
 
  return (
    <div className="informationOrder">
      <div className="continue">
        <a href="/#">
          Tiếp tục mua hàng <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="information">
        <div className="title">
          <p>Thông tin đơn hàng</p>
        </div>
        <hr />
        <div className="price">
          <p>Tổng tiền :</p>
          <p>50000đ</p>
        </div>
        <hr />
        <p>Bạn có thể nhập mã giảm giá ở trang thanh toán</p>
        <button>THANH TOÁN</button>
      </div>
    </div>
  );
}

export default InformationOrder;
