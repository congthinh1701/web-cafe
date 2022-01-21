import React from "react";
import { useSelector } from "react-redux";
import InformationOrder from "./InformationOrder";
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
          <L
          <InformationOrder/>
        </div>
      </div>
    </div>
  );
}

export default Cart;
