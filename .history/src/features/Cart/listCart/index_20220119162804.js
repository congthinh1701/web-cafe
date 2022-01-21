import "../style.scss";
import React from "react";
function ListCart({ cart }) {
  // receive data infomation from ProductLeft
  const listCart = cart.list;
  console.log(listCart);

  return (
    <div className="cartList">
      <p>
        Bạn có <span>2 sản phẩm </span>trong giỏ hàng
      </p>

      {listCart.map((item,i)=>(
        
      ))}
      
    </div>
  );
}

export default ListCart;
