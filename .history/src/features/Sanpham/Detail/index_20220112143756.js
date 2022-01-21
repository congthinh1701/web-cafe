import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function Detail() {
  const detailProduct = useSelector((state) => state.detail);
  //console.log(detailProduct);

  return (
    <div>
      <div className="container">
        {detailProduct.map((data, i) => (
          <div className="detail">
            <div className="detailLeft">
              <div className="Img">
                <img
                  src={data.ImageUrl}
                  alt={data.Name}
                />
              </div>
            </div>
            <div className="detailRight">
              <div className="detailProduct">
                <p className="name">{data.Name}</p>
                <div className="information">
                  <p>
                    Thương hiệu: <span>{data.ThuongHieu}</span>
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
                <button type="submit">
                  <span>Đặt hàng</span>
                </button>
              </div>
              <div className="rte">
                <p>
                  Quả tươi sạch chuyên nhập khẩu và cung cấp các loại táo Queen,
                  táo Envy nhập khẩu Mỹ và New Zealand. Có giấy tờ nhập khẩu, an
                  toàn vệ sinh thực phẩm, kho lạnh bảo quản 24/24h, nhập khẩu
                  theo đường bay nên táo luôn tươi và mới. Chúng tôi chỉ cung
                  cấp những mặt hàng tươi ngon nhất, cam kết không bán hàng
                  không rõ nguồn gốc xuất xứ.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
