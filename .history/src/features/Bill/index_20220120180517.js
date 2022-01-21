import React from "react";
import FormAddress from "./FormAddress";
import "./style.scss";

function Bill(props) {
  return (
    <div>
      <div className="container">
        <div className="bill">
          <div className="address">
              <FormAddress/>
          </div>
          <div className="payment">
            <div className="listProduct">
            <div className="product">
    <img src="http://127.0.0.1:5500/assets/img/bosutapnam/quanvai.jpg" a/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bill;
