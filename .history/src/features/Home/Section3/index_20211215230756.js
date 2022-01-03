
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
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        border:0,
        autoplaySpeed: 1500,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        
    <div>
        
    <div className='container' >
        <div className={clsx(styles.titleText)}>
            <h2>Coffee là hương vị của bạn</h2>
            <p>Có gì bất ngờ tại đây</p>
        </div>
        <Slider {...settings} >
            <div className={clsx(styles.item)} style={{marginLeft:'30px'}}>
                <a href='/'>
                    <div className={clsx(styles.price)}>
                        <p>60000đ</p>
                    </div>
                    <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                    <div className={clsx(styles.name)}>
                        <p className={clsx(styles.nameTitle)}>VIETNAM COFFE</p>
                    </div>
                </a>            
            </div>
            <div className={clsx(styles.item)}>
                <div className={clsx(styles.price)}>
                    <p>60000đ</p>
                </div>
                <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
            </div>
            <div className={clsx(styles.item)}>
                
                <div className={clsx(styles.price)}>
                    <p>60000đ</p>
                </div>
                <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
            </div>
            <div className={clsx(styles.item)}>
                <div className={clsx(styles.price)}>
                    <p>60000đ</p>
                </div>
                <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
            </div>
            <div className={clsx(styles.item)}>
                <div className={clsx(styles.price)}>
                    <p>60000đ</p>
                </div>
                <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
                <div className={clsx(styles.name)}>
                    <p>
                        VIETNAM COFFE
                    </p>
                </div>
            </div>
            <div className={clsx(styles.item)}>
                <div className={clsx(styles.price)}>
                    <p>60000đ</p>
                </div>
                <img src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg" alt='hinhanh' />
            </div>
        </Slider>
      </div>
    </div>
    )
}

export default Section3