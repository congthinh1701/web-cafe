import React from "react";
import { useSelector } from "react-redux";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import { getAuth } from "firebase/auth";

function Payment() {
  const cart = useSelector((state) => state.cart.list); // data form redux
  const valueForm = useSelector((state) => state.form); // data form redux
  const [uid,setUid]=use

  let sum = 0;
  cart.forEach(function (item) {
    sum += item.total * item.quantity;
  });

  //errors and value form
  const {
    emailValue,
    nameValue,
    phoneValue,
    addressValue,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = valueForm.valueObject;
  const { emailError, nameError, phoneError, addressError } =
    valueForm.stateValidate;

  // get uid user firebase
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      user.providerData.forEach((profile) => {
        console.log(profile.uid);
      });
    }
  
  const submit = () => {
    const value = encodeURIComponent(valueForm.stateValidate);
    document.cookie = `foo1=${value}`;
    // lưu dữ liệu lên firebase
    firebaseConnect
      .database()
      .ref("Cart/")
      .set({
        name: "fdjfh",
        age: 19,
      })
      .catch(alert);

    if (
      emailValue &&
      nameValue &&
      phoneValue &&
      addressValue &&
      !emailError &&
      !nameError &&
      !phoneError &&
      !addressError &&
      selectedCity &&
      selectedDistrict &&
      selectedWard
    ) {
      console.log("dsads");
    } else {
      alert("Vui lòng nhập đầy đủ thông tin hoặc kiểm tra thông tin hợp lệ");
    }
  };

  return (
    <div className="payment">
      {cart.map((item, i) => (
        <div className="listProduct" key={i}>
          <div className="product">
            <div className="img">
              <img src={item.image} alt="anh" />
            </div>
            <p className="nameProduct">
              {item.name} x {item.quantity}
            </p>
            <p className="priceProduct">{item.price}đ</p>
          </div>
        </div>
      ))}
      <hr />
      <div className="discountCode">
        <input
          className="form-control"
          name="giam-gia"
          type="text"
          placeholder="Nhập mã giảm giá"
        />
        <button type="button" className="btn">
          Áp dụng
        </button>
      </div>
      <hr />
      <div className="totalPrice">
        <div className="subtotal">
          <p>Tạm tính:</p>
          <p>{sum}đ</p>
        </div>
        <div className="totalShipper">
          <p>Phí vận chuyển:</p>
          <p>50000</p>
        </div>
      </div>
      <hr />
      <div className="submit">
        <a href="#/">
          <i className="fas fa-arrow-left"></i> Quay về giỏ hàng
        </a>
        <button onClick={submit}>ĐẶT HÀNG</button>
      </div>
    </div>
  );
}

export default Payment;
