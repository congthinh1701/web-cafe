import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Payment.propTypes = {};

function Payment(props) {
  const cart = useSelector((state) => state.cart.list); // data form redux
  console.log(cart.list);
  return (
      {cart  && (
        
      )}
    
  );
}

export default Payment;
