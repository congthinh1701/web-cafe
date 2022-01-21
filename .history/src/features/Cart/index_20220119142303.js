import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart.list);
  return (
    <div>
      <div className="layoutCart">
        <div className="title">
          <p>GIỎ HÀNG CỦA BẠN</p>
        </div>
        <div className="cart">
          <list
          <div className="infomationOrder">
            <div className="continue">
              <a href="/#">
                Tiếp tục mua hàng <i class="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="infomation">
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
        </div>
      </div>
    </div>
  );
}

export default Cart;
