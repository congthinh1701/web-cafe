import "../style.scss";
import React from "react";
function ListCart({ cart }) {
  // receive data infomation from ProductLeft
  const listCart = cart.list;
  console.log(listCart);


  const increaseQty = () => {
    
  };
  const decreaseQty = () => {
    
  };


  return (
    <div className="cartList">
      <p>
        Bạn có <span>2 sản phẩm </span>trong giỏ hàng
      </p>
      {listCart.map((item, i) => (
        <div className="cartProduct" key={i}>
          <div className="left">
            <img src={item.image} alt="anh" />
          </div>
          <div className="right">
            <p className="name">{item.name}</p>
            <div className="quantity">
              <div className="number">
                <span className="giam" onClick={decreaseQty}>-</span>
                <input value={item.quantity} className="form-control" readOnly />
                <span className="tang" onClick={increaseQty}>+</span>
              </div>
            </div>
            <div className="unitPrice">
              <p className="price">{item.price}đ</p>
            </div>
            <div className="total">
              <p>Thành tiền:</p>
              <p className="totalPrice">{item.quantity * item.price}đ</p>
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
      ))}
      <div className="noteOrder">
        <div class="checkout-buttons clearfix">
          <label for="note" class="note-label">
            Ghi chú đơn hàng
          </label>
          <textarea
            class="form-control"
            id="note"
            name="note"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ListCart;
