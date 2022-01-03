
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
                        
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <p>dsadsad</p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <p>dsadsad</p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <p>dsadsad</p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <p>dsadsad</p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <p>dsadsad</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2