import React from "react";
import Form from "./Form";
import "./style.scss";

function Bill(props) {
  return (
    <div>
      <div className="container">
        <div className="bill">
          <div className="address">
              <p>Thông tin nhận hàng</p>
              <FormAddress/>
          </div>
          <div className="payment">fsdf</div>
        </div>
      </div>
    </div>
  );
}

export default Bill;
