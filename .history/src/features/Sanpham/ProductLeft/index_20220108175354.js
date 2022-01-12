import { useEffect, useState } from "react";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import "./style.scss";

function ProductLeft({ product, menu, closeMenu }) {
  const name = ["Coffee", "SanPhamNoiBat"];
  const [selected, setSected] = useState(null);
  const [type, setType] = useState("Coffee");

  // set Drowp menu
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  //Close menuLeft
  const handleClickClose = () => {
    closeMenu(menu === false);
  };
  useEffect(() => {
    firebaseConnect
      .database()
      .ref("Product"`Product`)
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setType(list);
      });
  }, [type]);

  console.log(type);

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
                <div className="title" onClick={() => toggle(i)}>
                  <p
                    onClick={() => setType(name[i])}
                    style={type === name[i] ? { color: "#ffac4b" } : {}}
                  >
                    {name[i]}
                  </p>
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
    </div>
  );
}
export default ProductLeft;
