import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Payment.propTypes = {};

function Payment(props) {
  const cart = useSelector((state) => state.cart.list); // data form redux
  let sum = 0;
  cart.forEach(function(item){
    sum += item.total*item.quantity;
  });
  return (
      <div>
          <p>dsad</p>
      </div>
    
  );
}

export default Payment;
