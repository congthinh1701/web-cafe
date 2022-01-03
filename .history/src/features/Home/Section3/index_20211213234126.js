
import React from 'react';
import clsx from 'clsx'
import styles from './Section3.module.scss'


function Section3(){
    return(
    <div>
        <div id="slider">
            <div className={clsx(styles.owlCarousel,styles.owlTheme)}>
                <div className={clsx(styles.it)}"item">
                    <img src="assets/img/slide1.jpg"/>
                </div>
                <div class="item">
                    <img src="assets/img/slide2.jpg"/>
                </div>
                <div class="item">
                    <img src="assets/img/slide3.jpg"/>
                </div>
                <div class="item">
                    <img src="assets/img/slide4.jpg"/>
                </div>
                <div class="item">
                    <img src="assets/img/slide5.jpg"/>
                </div>
                <div class="item">
                    <img src="assets/img/slide6.jpg"/>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Section3