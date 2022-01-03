import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Section5.module.scss";
import { firebaseConnect } from "../../../firebase/firebaseConnect";

import ListTintuc from "./ListTintuc";

function Section5() {
  
  const [Tintuc,SetTintuc]=useState([])

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("TinTuc")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        SetTintuc(list);
      });
   
  }, [])
  console.log(Tintuc)
  return (
    <div style={{backgroundColor:'#eae7de'}}>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>TIN TỨC</h2>
          <p>
            Mỗi tuần là mỗi một câu chuyện ấm áp, mỗi tuần là một câu chuyện
            tình. Nào cùng thưởng thức cà phê và đọc nhé!
          </p>
        </div>
        <ListTintuc/>
      </div>
    </div>
  );
}

export default Section5;
