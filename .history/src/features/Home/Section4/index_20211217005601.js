
import React from 'react';
import clsx from 'clsx'
import styles from './Section4.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Section4(){

    return(
        <div>
            <div className='container' style={{marginTop:'70px'}}>
                <div className={clsx(styles.section4)}>
                    <div className={clsx(styles.section4Left)}>
                        <div className={clsx(styles.titleTop)}>
                            <p>Quy Trình Làm C</p>
                        </div>
                    </div>
                    <div className={clsx(styles.section4Right)}>
                        <p>đasad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section4