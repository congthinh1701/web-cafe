import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartProduct } from "../../../actions/cart";
import "./style.scss";
function Detail() {
  const detailProduct = useSelector((state) => state.detail);
  const [qty, setQty] = useState(1); // quantity product
  const dispatch = useDispatch();

  // check SignIn if not SignIn redirect login
  const navitgate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;
  //console.log(detailProduct);
  const increaseQty = () => {
    setQty((qty) => qty + 1);
  };
  const decreaseQty = () => {
    setQty((qty) => qty - 1);
    if (qty === 1) {
      setQty(1);
    }
  };

  const addCart =  () => {
    // console.log(detailProduct);
    if (!user) {
      alert("Đăng nhập trước khi mua hàng");
      navitgate("/Login");
    }
    const countProduct = { count: qty };
    //  for (var i in detailProduct){
    //   cart.push({...detailProduct[i],...countProduct})
    //   break
    // }
    // console.log(...detailProduct);

    detailProduct.forEach(function (element) {
      console.log({...element,...countProduct})
      const action = addCartProduct({ ...detailProduct });
      dispatch(action);
    });
    
   
  };

  return (
    <div>
      <div className="container">
        {detailProduct.map((data, i) => (
          <div className="detail" key={i}>
            <div className="detailLeft">
              <div className="Img">
                <img src={data.ImageUrl} alt={data.Name} />
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
                  <p>{data.Price}đ</p>
                </div>
              </div>
              <div className="quantity">
                <div className="number">
                  <span className="giam" onClick={decreaseQty}>
                    -
                  </span>
                  <input value={qty} className="form-control" readOnly />
                  <span className="tang" onClick={increaseQty}>
                    +
                  </span>
                </div>
                <button onClick={addCart}>
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