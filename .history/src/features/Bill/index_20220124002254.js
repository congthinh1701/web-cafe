import React from "react";
import FormAddress from "./FormAddress";
import Payment from "./Payment";
import "./style.scss";

function Bill(props) {
  const [valueForm,setValueForm]=use

  const formValue=(chill)=>{
    console.log(chill);
  }

  return (
    <div>
      <div className="container">
        <div className="bill">
          <div className="address">
            <p className="title">Thông tin đơn hàng</p>
            <FormAddress formValue={formValue} />
          </div>
          <div className="transport">
            <p className="title">Thông tin vận chuyển</p>
            <div className="alertInfor">
              <p>Vui lòng nhập thông tin giao hàng</p>
              <div className="paymentShipper">
                  <p>Thanh toán</p>
              </div> 
            </div>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default Bill;