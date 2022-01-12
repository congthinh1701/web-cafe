import React from "react";
import Accordion from "react-bootstrap/Accordion";
import clsx from "clsx";
import styles from "./Sanpham.module.scss";
function Sanpham() {
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
              <div className={clsx(styles.wrapper)}>
                <div className={clsx(styles.accordion)}>
                    <div className={clsx(styles.item)}>
                        <div className={clsx(styles.title)}>
                            <h2>dklashdkjsah</h2>
                            <span>+</span>
                        </div>
                        <div className={clsx(styles.content)}>
                            <p>fdfdsfklsdjfkfhkjdsh jfjhdskjfh jkhfjk shdjkf hjkfh ksjd</p>
                        </div>
                    </div>
                    <div className={clsx(styles.item)}>
                        <div className={clsx(styles.title)}>
                            <h2>dklashdkjsah</h2>
                            <span>+</span>

                        </div>
                        <div className={clsx(styles.content)}>
                            <p>fdfdsfklsdjfkfhkjdsh jfjhdskjfh jkhfjk shdjkf hjkfh ksjd</p>
                        </div>
                    </div>
                    <div className={clsx(styles.item)}>
                        <div className={clsx(styles.title)}>
                            <h2>dklashdkjsah</h2>
                        </div>
                        <div className={clsx(styles.content)}>
                            <p>fdfdsfklsdjfkfhkjdsh jfjhdskjfh jkhfjk shdjkf hjkfh ksjd</p>
                        </div>
                    </div>
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