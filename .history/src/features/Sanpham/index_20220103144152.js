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
              <Accordion >
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={clsx(styles.item)}>
                    Coffe <i class="fas fa-chevron-down"></i>
                  </Accordion.Header>
                  <Accordion.Body>
                    nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
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
