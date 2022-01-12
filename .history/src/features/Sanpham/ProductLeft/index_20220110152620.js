import { useEffect, useState } from "react";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import "./style.scss";

function ProductLeft({ product, menu, closeMenu, getData }) {
  const nameProduct = ["Coffee", "SanPhamNoiBat"]; //
  const [selected, setSected] = useState(null); // change icon drop menu
  const [post, setPost] = useState([]); // Product
  const [productHot,setProductHot]=useState([])
  const [type, setType] = useState("Coffee"); // change get data
  const [checked, setChecked] = useState(true); //filter price

  // set Drowp menu
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  //Close menuLeft
  const handleClickClose = () => {
    closeMenu(menu === false);
  };

  //Checked filter price < 60000
  const handleCheckedLess = () => {
    setChecked(!checked);
    if (checked) {
      const arrFilter = post.filter((data) => data.Price <= 60000);
      getData(arrFilter);
    }
  };

  // Checked filter price > 60000
  const handleCheckedBigger = () => {
    setChecked(!checked);
    if (checked) {
      const arrFilter = post.filter((data) => data.Price > 60000);
      getData(arrFilter);
    }
  };

  // get data by type
  useEffect(() => {
    firebaseConnect
      .database()
      .ref(`Product/${type}`)
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setPost(list);
      });
  }, [type]);

  // get data productHot
  useEffect(() => {
    firebaseConnect
      .database()
      .ref('Product/Coffee')
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setProductHot(list);
      });
  }, []);
  console.log(productHot)

  // if not checked then do it
  if (checked) {
    getData(post);
  }

  return (
    <div className={`${"MenuLeft"} ${menu ? "teml" : ""} `}>
      <div className="DanhMuc">
        <p>DANH MỤC</p>
        {menu && <i className="fas fa-times" onClick={handleClickClose}></i>}
      </div>
      <hr />

      <div className="ListDanhMuc">
        <div className="accordion">
          {product.map((item, i) => {
            return (
              <div key={i} className="item">
                <div className="title">
                  <p
                    onClick={() => setType(nameProduct[i])}
                    style={type === nameProduct[i] ? { color: "#ffac4b" } : {}}
                  >
                    {nameProduct[i]}
                  </p>
                  <span onClick={() => toggle(i)}>
                    {selected === i ? (
                      <i className="fa fa-angle-up"></i>
                    ) : (
                      <i className="fa fa-angle-down"></i>
                    )}
                  </span>
                </div>
                <div
                  className={
                    selected === i ? "ListContent" && "show" : "ListContent"
                  }
                >
                  {Object.keys(item).map((data, i) => (
                    <div key={i} className="itemListContent">
                      <p>{data}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="CheckBox">
        <div className="title">
          <p>BỘ LỌC</p>
          <hr />
        </div>
        <div className="priceProduct">
          <div className="title">Giá sản phẩm</div>
          <label>
            <input type="checkbox" onChange={handleCheckedLess} />
            <p>Giá dưới 60.000đ</p>
          </label>
          <label>
            <input type="checkbox" onChange={handleCheckedBigger} />
            <p>60.000đ - 100.000đ</p>
          </label>
        </div>
      </div>
      <div className="productHot">
        <div className="title">
          <p>SẢN PHẨM HOT</p>
          <hr />
        </div>
        { productHot.length !== 0 && () }
        <div className="productList">
          <div className="item">
            <a href="/">
              <div className="productImg">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product6.png?v=1554950925303" alt="name"/>
              </div>
              <div className="productName">
                <p>CAFE ICE LATTE</p>
                <p className="price">60000đ</p>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <div className="productImg">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product6.png?v=1554950925303" alt="name"/>
              </div>
              <div className="productName">
                <p>CAFE ICE LATTE</p>
                <p className="price">60000đ</p>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <div className="productImg">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/351/580/products/product6.png?v=1554950925303" alt="name"/>
              </div>
              <div className="productName">
                <p>CAFE ICE LATTE</p>
                <p className="price">60000đ</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductLeft;
