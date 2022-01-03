
import React from 'react';
import clsx from 'clsx'
import styles from './Section3.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "../../../assets/icon/left-arrow.svg"
import RightArrow from "../../../assets/icon/right-arrow.svg"
function Section3(){
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
      );
    const settings = {
        dots: f,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
      };
    return(
        
    <div>
        
        <div className='container'>
        <h2>Auto Play</h2>
        <Slider {...settings} >
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
        </Slider>
      </div>
    </div>
    )
}

export default Section3