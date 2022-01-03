import React from "react";
import clsx from "clsx";
import styles from "./Section5.module.scss";

function Section5() {
  return (
    <div>
      <div id="slider">
        <div class="owl-carousel owl-theme">
            <div class="item">
                <img src="assets/img/slide1.jpg"/>
            </div>
        <div class="item">
                <img src="assets/img/slide2.jpg">
            </div>
            <div class="item">
                <img src="assets/img/slide3.jpg">
            </div>
            <div class="item">
                <img src="assets/img/slide4.jpg">
            </div>
            <div class="item">
                <img src="assets/img/slide5.jpg">
            </div>
            <div class="item">
                <img src="assets/img/slide6.jpg">
            </div>

        </div>
    </div>

    </div>
  );
}

export default Section5;
