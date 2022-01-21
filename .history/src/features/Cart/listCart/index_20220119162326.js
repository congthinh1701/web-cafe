import "../style.scss";
import React from "react";
function ListCart({cart}) {
  
  // receive data infomation from ProductLeft
  const listCart=cart.list
  console.log(listCart);
  return (

      {listCart.length !==0 && (

      )}
      
    
  );
}

export default ListCart;
