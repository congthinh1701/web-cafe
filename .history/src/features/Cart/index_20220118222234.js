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
          <p>Bạn có <span>2 sản phẩm </span></p>
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
                  <i class="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="infomationOrder">
            <a href="/#" className="continue">Tiếp tục mua hàng <i class="fas fa-chevron-double-right"></i> </a>
            <div className="infomation">
              <div className="title">
                <p>Thông tin đơn hàng</p>
              </div>
              <hr/>
              <div className="price">
                <p>
                  <span>Tổng tiền :</span>50000
                </p>
              </div>
              <hr/>
              <button>THANH TOÁN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
