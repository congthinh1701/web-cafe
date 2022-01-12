import React, { useEffect, useState } from "react";
import "./Sanpham.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";

function Sanpham() {
  const [product, setProduct] = useState([]);
  const name = ["Coffee", "SanPhamNoiBat"];
  const [menu, setMenu] = useState(false);
  const [selected, setSected] = useState(null);
  const [style, setStyle] = useState("none");
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("Product")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setProduct(list);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h2>TẤT CẢ SẢN PHẨM</h2>
        {/* navPc */}
        <div className="navPc">
          <div className="content">
            <div className={`${"MenuLeft"} ${menu ? "teml" : ""} `}>
              <div className="DanhMuc">
                <p>DANH MỤC</p>
              </div>
              <hr />
              <div className="ListDanhMuc">
                <div className="accordion">
                  {product.map((item, i) => {
                    return (
                      <div key={i} className="item">
                        <div className="title" onClick={() => toggle(i)}>
                          <p>{name[i]}</p>
                          <span>
                            {selected === i ? (
                              <i className="fa fa-angle-up"></i>
                            ) : (
                              <i className="fa fa-angle-down"></i>
                            )}
                          </span>
                        </div>
                        <div
                          className={
                            selected === i
                              ? "ListContent" && "show"
                              : "ListContent"
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
            </div>
            <div className="Right">
              <div className="row">
                  
              </div>
            </div>
            <div className="navBtn" onClick={toggleMenu}>
              <i className="fa fa-filter"></i>
            </div>
            <div className="navOverlay"></div>
          </div>
        </div>

        {/* navMobile */}
      </div>
    </div>
  );
}

export default Sanpham;
