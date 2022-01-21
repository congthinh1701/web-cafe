import React from "react";
import "./style.scss";

function Cart() {
  return (
    <div>
      <div className="layoutCart">
        <div className="title">
          <p>GIỎ HÀNG CỦA BẠN</p>
        </div>
        <div className="cart">
          <div className="cartList">
            <div className="cartProduct">
              <div className="left">
                <img
                  src="https://product.hstatic.net/200000259513/product/play_eded8989587a4943a91f63a9cdadb0a4_medium.png"
                  alt="anh"
                />
              </div>
              <div className="right">
                <p c>dasdasd</p>
              </div>
            </div>
          </div>
          <div className="infomationOrder">
            <p>dsads</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
