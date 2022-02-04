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
            <p>dsadasd</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Bill;
