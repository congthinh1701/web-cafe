import React from "react";
import { useSelector } from "react-redux";
import ListCart from "./ListCart";
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
          <div className="cartList">
            <p>
              Bạn có <span>2 sản phẩm </span>trong giỏ hàng
            </p>
            <div className="cartProduct">
              <div className="left">
                <img
                  src="https://product.hstatic.net/200000259513/product/play_eded8989587a4943a91f63a9cdadb0a4_medium.png"
                  alt="anh"
                />
              </div>
              <div className="right">
                <p className="name">dasdasd</p>
                <div className="quantity">
                  <div className="number">
                    <span className="giam">-</span>
                    <input value="1" className="form-control" readOnly />
                    <span className="tang">+</span>
                  </div>
                </div>

                <div className="unitPrice">
                  <p className="price">2000</p>
                </div>
                <div className="total">
                  <p>Thành tiền:</p>
                  <p className="totalPrice">20000</p>
                  <i className="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
            {/* NOTE ORDER */}
            <div className="noteOrder">
              <div>
                <label for="note" className="note-label">
                  Ghi chú đơn hàng
                </label>
                <textarea
                  className="form-control"
                  id="note"
                  name="note"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="informationOrder">
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
