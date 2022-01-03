
import React from 'react';
import clsx from 'clsx'
import styles from './Section3.module.scss'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery')


function Section3(){
    
    componentDidMount(){
        
      }
    useEffect(() => {
        
        
    },[])
    
    return(
    <div>
        <div id={clsx(styles.slider)}>
            <div className={clsx(styles.owlCarousel,styles.owlTheme)}>
                <div className={clsx(styles.item)}>
                    <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                </div>
                <div className={clsx(styles.item)}>
                    <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                </div>
                <div className={clsx(styles.item)}>
                    <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                </div>
                <div className={clsx(styles.item)}>
                    <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                </div>
                <div className={clsx(styles.item)}>
                    <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                </div>
                <div className={clsx(styles.item)}>
                    <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                </div>

            </div>
        </div>
    </div>
    )
}

export default Section3