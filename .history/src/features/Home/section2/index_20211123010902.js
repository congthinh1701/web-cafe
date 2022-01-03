
import React from 'react';
import clsx from 'clsx'
import styles from './Section2.module.scss'
import banner_section2 from '../../../assets/img/banner_section2.jpg'
function Section2(){
    return(
        <div>
            <div id="section2" className={clsx(styles.section2)} style={{ backgroundImage: `url(${banner_section2})` }}>
                <p>dsadsad</p>
            </div>
        </div>
    )
}

export default Section2