import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Sanpham.module.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ListContent from "./DanhMuc/ListContent";
import { Accordion } from "react-bootstrap";
function Sanpham() {
  const [product, SetProduct] = useState([]);
  const [item,SetItem]=useState([])
  const name = ["Coffee", "SanPhamNoiBat"];

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("Product/SanPhamNoiBat")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        SetProduct(list);
      });
  }, []);
  const a = [];
  for (var i in product) {
    a.push(product[i]);
  }

  return (
    <div>
      <div className="container">
        <h2>TẤT CẢ SẢN PHẨM</h2>
        <div className={clsx(styles.navPc)}>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.MenuLeft)}>
              <div className={clsx(styles.DanhMuc)}>
                <p>DANH MỤC</p>
              </div>
              <hr />
              
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                {product.map((data, i) => {
                  return (
                    <Accordion.Item eventKey={i} key={i}>
                      <Accordion.Header>{name[i]}</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>fdsf</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
            <div className={clsx(styles.Right)}>
              <p>fsdfdsfdf</p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.navMobile)}></div>
      </div>
    </div>
  );
}

export default Sanpham;
