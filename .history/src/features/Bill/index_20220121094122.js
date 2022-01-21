import React from "react";
import FormAddress from "./FormAddress";
import "./style.scss";

function Bill(props) {
  return (
    <div>
      <div className="container">
        <div className="bill">
          <div className="address">
            <FormAddress />
          </div>
          <div className="transport">

          </div>
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
                class="form-control"
                name="giam-gia"
                type="text"
                placeholder="Nhập mã giảm giá"
              />
              <button type="button" class="btn">
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bill;
