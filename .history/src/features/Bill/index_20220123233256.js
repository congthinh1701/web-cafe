import React from "react";
import FormAddress from "./FormAddress";
import Payment from "./Payment";
import "./style.scss";

function Bill(props) {
  return (
    <div>
      <div className="container">
        <div className="bill">
          <div className="address">
            <p className="title">Thông tin đơn hàng</p>
            <FormAddress />
          </div>
          <div className="transport">
            <p className="title">Thông tin vận chuyển</p>
            <div className="">

            </div>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default Bill;
