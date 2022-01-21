import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function Detail() {
  //const detailProduct = useSelector((state) => state.detail);
  //console.log(detailProduct);

  return (
    <div>
      <div className="container">
        <div className="detail">
          <div className="detailLeft">
            <div className="Img">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/351/580/products/cocktail-b52.jpg?v=1557127959103"
                alt="anh"
              />
            </div>
          </div>
          <div className="detailRight">
            <div className="detailProduct">
              <p className="name">Cocktail Bloody Mary</p>
              <div className="information">
                <p>
                  Thương hiệu: <span>Trung Nguyen</span>
                </p>
                <p class="inventoryQuantity">
                  Trình trạng:
                  <span> Còn hàng </span>
                </p>
              </div>
              <div className="price">
                <p>50000đ</p>
              </div>
              <div className="quantity from-control">
              <div class="custom custom-btn-number form-control ">
													<span class="quantity-span hidden">Số lượng:</span>
													<span class="qtyminus" data-field="quantity">-</span>
													<input type="text" class="input-text qty" data-field="quantity" title="Só lượng" value="1" maxlength="3" id="qty" name="quantity" onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;" onchange="if(this.value == 0)this.value=1;"/>
													<span class="qtyplus" data-field="quantity">+</span>
												</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
