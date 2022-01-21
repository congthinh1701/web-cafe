import "../style.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { decCartProduct, incCartProduct } from "../../../actions/cart";
function ListCart({ cart }) {
  // receive data infomation from component Cart
  const listCart = cart.list;
  const dispatch=useDispatch()

  //increase quantity
  const increaseQty = (index) => {
    const action=incCartProduct(i) 
    dispatch(action) //dispactch form action redux
  };
  //decrease quantity
  const decreaseQty = (i) => {
    const action=decCartProduct(i)
    dispatch(action) //dispactch form action redux
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
                <span className="giam" onClick={()=>decreaseQty(item) }>-</span>
                <input value={item.quantity} className="form-control" readOnly />
                <span className="tang" onClick={()=>increaseQty(item) }>+</span>
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
