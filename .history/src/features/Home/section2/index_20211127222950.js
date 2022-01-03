
import React from 'react';
import clsx from 'clsx'
import styles from './Section2.module.scss'
import banner_section2 from '../../../assets/img/banner_section2.jpg'
function Section2() {
    return (
        <div>
            <div id="section2" className={clsx(styles.section2)} style={{ backgroundImage: `url(${banner_section2})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                <div className={clsx(styles.overlay)}></div>
                <div className='container'>
                    <div className={clsx(styles.section2Content)}>
                        <div className={clsx(styles.header)}>
                            <h2>KHÁM PHÁ MENU</h2>
                            <p>Có gì đặc biệt ở đây</p>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <div className={clsx(styles.Product)}>
                                    <p className={clsx(styles.ProductImg)}>hình ảnh</p>
                                    <div className={clsx(styles.ProductTitle)}>
                                        <a className={clsx(styles.ProductTitleName)} href='/'>
                                            CAFEICE LATTE 
                                        </a>
                                        <p className={clsx(styles.ProductTitlePrice)}>
                                            60.000đ
                                        </p>
                                    </div>
                                    
                                </div>
                                <p style={{display: 'block'}}>------------------------------------</p>
                            </div>   
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <div className={clsx(styles.Product)}>
                                    <p className={clsx(styles.ProductImg)}>hình ảnh</p>
                                    <div className={clsx(styles.ProductTitle)}>
                                        <a className={clsx(styles.titleTop)} href='/'>
                                            CAFEICE LATTE
                                        </a>
                                        <p className={clsx(styles.titlePrice)}>
                                            60.000đ
                                        </p>
                                        <p>------------------------------------</p>
                                        <p className={clsx(styles.titleDescription)}>
                                            Cà phê đậm phong cách Ý được phối hợp với kem giúp giữ hương vị và tạo sự thơm ngon.
                                        </p>
                                    </div>
                                </div>
                            </div>             
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2