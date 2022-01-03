
import React from 'react';
import clsx from 'clsx'
import styles from './Section4.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon from '../../../assets/img/Section4/icon-cf.png'

function Section4(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        
      };
    return(
        <div>
            <div className='container' style={{marginTop:'70px'}}>
                <div className={clsx(styles.section4)}>
                    <div className={clsx(styles.section4Left)}>
                        <div className={clsx(styles.titleTop)}>
                            <p className={clsx(styles.Top)}>Quy Trình Làm Coffee</p>
                            <p className={clsx(styles.Body)}>
                                Chúng tôi muốn bạn tự hào cho chính bản thân mình hương vị cà phê theo ý thích. Đó là bản chất cơ bản nhất để có những tách cà phê thơm ngon nhất
                            </p>
                            <button>
                            <a href='/'>Khám phá quy trình</a>
                            </button>
                        </div>  
                        <div className={clsx(styles.IconCoffee)}>
                            <img src={Icon} alt='Icon'/>
                        </div>

                    </div>
                    <div className={clsx(styles.section4Right)}>
                        <Slider {...settings}>
                            <div className={clsx(styles.slider)}>
                                <img src={'https://bizweb.dktcdn.net/100/351/580/themes/714586/assets/sec_quy_trinh_images2.png?1628672823934'} alt="hinhanh"/>
                            </div>
                            <div className={clsx(styles.slider)}>
                                <img src={'https://bizweb.dktcdn.net/100/351/580/themes/714586/assets/sec_quy_trinh_images2.png?1628672823934'} alt="hinhanh"/>
                            </div>
                            <div className={clsx(styles.slider)}>
                                <img src={'https://bizweb.dktcdn.net/100/351/580/themes/714586/assets/sec_quy_trinh_images2.png?1628672823934'} alt="hinhanh"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section4