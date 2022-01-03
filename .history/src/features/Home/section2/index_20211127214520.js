
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
                        <div className={clsx(styles.section2Left)}>
                            <div className={clsx(styles.listProduct)}>
                                <ul>
                                    <li>
                                        <div className={clsx(styles.Product)}>
                                            <p>hình ảnh</p>
                                            <div className={clsx(styles.title)}>
                                                <a className={clsx(styles.titleTop)} href='/'>
                                                    CAFEICE LATTE
                                                </a>
                                                <p className={clsx(styles.titlePrice)}>
                                                    60.000đ
                                                </p>
                                                <p>------------------------------------</p>
                                                <p></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>đasad</li>
                                    <li>đasad</li>
                                    <li>đasad</li>
                                </ul>
                            </div>
                        </div>
                        <div className={clsx(styles.section2Right)}>dsad fffffffffffffasd</div>
                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Section2