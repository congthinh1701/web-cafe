import React, { useEffect, useState } from "react";
import "./style.scss";

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
        className="section6"
        style={{
          backgroundImage: `url(${banner_section6})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <ListReview review={review} />
      </div>
    </div>
  );
}

export default Section6;
