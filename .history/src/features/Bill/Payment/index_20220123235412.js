import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Payment.propTypes = {};

function Payment(props) {
  const cart = useSelector((state) => state.cart.list); // data form redux
  let sum = 0;
  cart.forEach(function (item) {
    sum += item.total * item.quantity;
  });
  
  return (
      
      <div className="payment">
        {cart.map((item, i) => (
          <div className="listProduct" key={i}>
            <div className="product">
              <div className="img">
                <img src={item.image} alt="anh" />
              </div>
              <p className="nameProduct">
                {item.name} x {item.quantity}
              </p>
              <p className="priceProduct">{item.price}đ</p>
            </div>
          </div>
        ))}
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
            <p>{sum}đ</p>
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
          <button onClick={submit}>ĐẶT HÀNG</button>
        </div>
      </div>
    
  );
}

export default Payment;
