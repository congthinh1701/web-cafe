import "../style.scss";
import React from "react";
function ListCart({cart}) {
  console.log(cart);
  // receive data infomation from ProductLeft
  return (

      {cart.list.length !==0 && (

      )}
      
    
  );
}

export default ListCart;
