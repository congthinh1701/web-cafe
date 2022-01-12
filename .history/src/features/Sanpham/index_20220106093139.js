import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Sanpham.module.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";

function Sanpham() {
  const [product, setProduct] = useState([]);
  const name = ["Coffee", "SanPhamNoiBat"];
  const [selected,setSected]=useState(null)
  const toggle=(i)=>{
    
    selected === i ? setSected(null) : setSected(i)
    //setSected(i)
    console.log(i)
  }

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
        <div className={clsx(styles.navPc)}>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.MenuLeft)}>
              <div className={clsx(styles.DanhMuc)}>
                <p>DANH MỤC</p>
              </div>
              <hr />
              <div className={clsx(styles.ListDanhMuc)}>
                <div className={clsx(styles.accordion)}>
                  {product.map((item, i) => {
                    return (
                      <div className={clsx(styles.item)}>
                        <div className={clsx(styles.title)} onClick={()=>toggle(i)}>
                          <p>{name[i]}</p>
                          <span>{selected === i ? '-':'+'}</span>
                        </div>
                        <div className={clsx()}>
                          
                        </div>
                        {Object.keys(item).map((data, i) => (
                          <div >
                            <ul>
                              <li >{data}</li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
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
