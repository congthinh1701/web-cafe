import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Payment.propTypes = {};

function Payment(props) {
  const cart = useSelector((state) => state.cart.list); // data form redux
  console.log(cart.list);
  return (
      {cart.length !==0}
    <div className="payment">
      <div className="listProduct">
        <div className="product">
          <div className="img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/web-cafe-806eb.appspot.com/o/Coffee%2Fproduct5.jpg?alt=media&token=41b4463f-c6af-40cb-a587-fd2ffbba0cfe"
              alt="anh"
            />
          </div>
          <p className="nameProduct">quần vải ống suông nike</p>
          <p className="priceProduct">9000đ</p>
        </div>
      </div>
      <hr />
      <div className="discountCode">
        <input
          className="form-control"
          name="giam-gia"
          type="text"
          placeholder="Nhập mã giảm giá"
        />
        <button type="button" className="btn">
          Áp dụng
        </button>
      </div>
      <hr />
      <div className="totalPrice">
        <div className="subtotal">
          <p>Tạm tính:</p>
          <p>40000đ</p>
        </div>
        <div className="totalShipper">
          <p>Phí vận chuyển:</p>
          <p>50000</p>
        </div>
      </div>
      <hr />
      <div className="submit">
        <a href="#/">
          <i className="fas fa-arrow-left"></i> Quay về giỏ hàng
        </a>
        <button>ĐẶT HÀNG</button>
      </div>
    </div>
  );
}

export default Payment;
