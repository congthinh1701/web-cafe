import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InformationOrder from "./InformationOrder";
import ListCart from "./ListCart";
import "./style.scss";

function Cart() {
  const cart = useSelector((state) => state.cart); // data form redux

  return (
    <div>
      <div className="layoutCart">
        <div className="title">
          <p>GIỎ HÀNG CỦA BẠN</p>
        </div>
        {cart.list.length > 0 ? (
          <div className="cart">
            <ListCart cart={cart} />
            <InformationOrder />
          </div>
        ) : (
          <div className="noCart">
            <h2>Bạn chưa có đơn hàng nào</h2>
            <Link to="/Sanpham">
              Tiếp tục mua hàng <i class="fas fa-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
