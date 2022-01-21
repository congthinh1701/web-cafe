import React, { useEffect, useState } from "react";
import "./style.module.scss";
import clsx from "clsx";


import banner_section6 from "../../../assets/img/banner_section6.jpg";
import { firebaseConnect } from "../../../firebase/firebaseConnect";
import ListReview from "./ListReview";

function Section6() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    firebaseConnect
      .database()
      .ref("CustomerReview")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setReview(list);
      });
  }, []);
  return (
    <div>
      <div
        className={clsx}
        style={{
          backgroundImage: `url(${banner_section6})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="title-text">
          <h2>Khách hàng nói gì</h2>
          <p>1500+ Khách hàng hài lòng</p>
        </div>
        <ListReview review={review} />
      </div>
    </div>
  );
}

export default Section6;