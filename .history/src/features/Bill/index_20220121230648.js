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
          <p>dsads</p>
            <FormAddress />
          </div>
          <div className="transport">
            <p>dsadasd</p>
          </div>
          <Payment/>
        </div>
      </div>
    </div>
  );
}

export default Bill;
