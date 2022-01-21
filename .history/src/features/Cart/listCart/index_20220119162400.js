import "../style.scss";
import React from "react";
function ListCart({cart}) {
  
  // receive data infomation from ProductLeft
  const listCart=cart.list
  console.log(listCart);
  return (

      { listCart.l && (
        <div className="cartList">
        <p>
          Bạn có <span>2 sản phẩm </span>trong giỏ hàng
        </p>
        <div className="cartProduct">
          <div className="left">
            <img
              src="https://product.hstatic.net/200000259513/product/play_eded8989587a4943a91f63a9cdadb0a4_medium.png"
              alt="anh"
            />
          </div>
          <div className="right">
            <p className="name">dasdasd</p>
            <div className="quantity">
              <div className="number">
                <span className="giam">-</span>
                <input value="1" className="form-control" readOnly />
                <span className="tang">+</span>
              </div>
            </div>

            <div className="unitPrice">
              <p className="price">2000</p>
            </div>
            <div className="total">
              <p>Thành tiền:</p>
              <p className="totalPrice">20000</p>
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
        {/* NOTE ORDER */}
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
      )}
      
    
  );
}

export default ListCart;
