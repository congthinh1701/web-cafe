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
                <p className="inventoryQuantity">
                  Trình trạng:
                  <span> Còn hàng </span>
                </p>
              </div>
              <div className="price">
                <p>50000đ</p>
              </div>
            </div>
            <div className="quantity">
              <div className="number">
                <span className="giam">-</span>
                <input value="1" className="form-control" />
                <span className="tang">+</span>
              </div>
              <button type="submit" class="btn btn-lg btn-gray btn-cart btn_buy add_to_cart">
													<span>Đặt hàng</span>
												</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;