import React from "react";
import { useSelector } from "react-redux";
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
        <div className="cart">
          
          {cart.list.length > 0 ? <ListCart cart={cart} /> : <div className="cartList">
            Chu
          </div> }
          <InformationOrder/>
        </div>
      </div>
    </div>
  );
}

export default Cart;
