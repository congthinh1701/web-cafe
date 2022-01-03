
import React, { useEffect, useState } from 'react';
import clsx from 'clsx'
import styles from './Section2.module.scss'
import banner_section2 from '../../../assets/img/banner_section2.jpg'
import { firebaseConnect } from '../../../firebase/firebaseConnect';

function Section2() {
    const [NoiBat, SetNoiBat] = useState()
    componentDidMount() {
        firebaseConnect.database().ref('Product/SanPhamNoiBat').on('value', snapshot => {
            let ListNoiBat = []
            snapshot.forEach(snap => {
                ListNoiBat.push(snap.val())
            })
            SetNoiBat(snapshot.val())
        })
    }
    console.log(NoiBat)

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
                            
                            


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2