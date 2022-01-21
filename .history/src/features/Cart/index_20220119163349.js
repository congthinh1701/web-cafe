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
        {cart.list.length > 0 ? <div className="cart">
          <ListCart cart={cart} />
          <InformationOrder/>
        </div> : <h2></h2> }
        
      </div>
    </div>
  );
}

export default Cart;
