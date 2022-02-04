import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Payment.propTypes = {};

function Payment(props) {
  const cart = useSelector((state) => state.cart); // data form redux

  return (
      {cart.list.length !==0 && (
        
      )}
    
  );
}

export default Payment;
