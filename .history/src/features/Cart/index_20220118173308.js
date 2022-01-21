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
                <p className="name">dasdasd</p>
                <div className="quantity">
                  <div className="number">
                    <span className="giam" >
                      -
                    </span>
                    <input value='1' className="form-control" readOnly />
                    <span className="tang">
                      +
                    </span>
                  </div>
                </div>
                <p className="price">2000</p>
                <div className="total">
                    <p>Thành tiền:</p>
                    <p className="totalPrice">20000</p>
                </div>
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
