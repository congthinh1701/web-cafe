import { useEffect, useState } from "react";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import "./style.scss";

function ProductLeft({ product, menu, closeMenu, getData }) {
  const nameProduct = ["Coffee", "SanPhamNoiBat"]; //
  const [selected, setSected] = useState(null); // change icon drop menu
  const [post, setPost] = useState([]);
  const [type, setType] = useState("Coffee"); // change get data

  // set Drowp menu
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  //Close menuLeft
  const handleClickClose = () => {
    closeMenu(menu === false);
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

  // transmit data go up parents
  getData(post);

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
            <hr/>
          </div>
          <div className="price">

          </div>
      </div>
    </div>
  );
}
export default ProductLeft;
