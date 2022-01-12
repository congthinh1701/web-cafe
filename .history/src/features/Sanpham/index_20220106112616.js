import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Sanpham.module.scss";
import { firebaseConnect } from "../../firebase/firebaseConnect";

function Sanpham() {
  const [product, setProduct] = useState([]);
  const name = ["Coffee", "SanPhamNoiBat"];
  const [menu,setMenu]=useState(f)
  const [selected, setSected] = useState(null);
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
    //setSected(i)
    console.log(i);
  };
  const toggleMenu=()=>{
    setMenu(!menu)
    console.log(menu)
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
        {/* navPc */}
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
                        <div
                          className={clsx(styles.title)}
                          onClick={() => toggle(i)}
                        >
                          <p>{name[i]}</p>
                          <span>
                            {selected === i ? (
                              <i class="fa fa-angle-up"></i>
                            ) : (
                              <i class="fa fa-angle-down"></i>
                            )}
                          </span>
                        </div>
                        <div
                          className={clsx(
                            selected === i
                              ? styles.ListContent && styles.show
                              : styles.ListContent
                          )}
                        >
                          {Object.keys(item).map((data, i) => (
                            <div className={clsx(styles.itemListContent)}>
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
            <div className={clsx(styles.Right)}>
              <p>fsdfdsfdf</p>
            </div>
          </div>
        </div>


        {/* navMobile */}
        <div className={clsx(styles.navBtn)}>
          <i class="fa fa-filter" onClick={toggleMenu}></i>
        </div>
        <div className={clsx(styles.navOverlay)}></div>
       
      </div>
    </div>
  );
}

export default Sanpham;
