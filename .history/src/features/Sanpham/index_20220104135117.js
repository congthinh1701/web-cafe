import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Sanpham.module.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";
import ListContent from "./DanhMuc/ListContent";
import { Accordion } from "react-bootstrap";
function Sanpham() {
  const [product, SetProduct] = useState([]);
  const name = ["Coffee", "SanPhamNoiBat"];

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("Product")
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
  console.log(a);

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
              <div className={clsx(styles.ListDanhMuc)}>
                <div className={clsx(styles.accordion)}>
                  {product.forEach((data) => console.log(data))}

                  {product.map((data, i) => (
                    <div className={clsx(styles.item)}>
                      <div className={clsx(styles.title)}>
                        <h3>{name[i]}</h3>
                        <span>+</span>
                        <ListContent key={i} data={a} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
              {product.map((data,i)=>  {   return(
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>{name[i]}</Accordion.Header>
                  <Accordion.Body>
                    <p>{i}</p>
                  </Accordion.Body>
                </Accordion.Item>
              )})}
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
