import React from "react";
import clsx from "clsx";
import styles from "./Section5.module.scss";

function Section5() {
  return (
    <div>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>Coffee là hương vị của bạn</h2>
          <p>Có gì bất ngờ tại đây</p>
        </div>
      </div>
    </div>
  );
}

export default Section5;
