
import React, { useEffect, useState } from 'react';
import clsx from 'clsx'
import styles from './Section2.module.scss'
import banner_section2 from '../../../assets/img/banner_section2.jpg'
import { firebaseConnect } from '../../../firebase/firebaseConnect';

function Section2() {

    const [NoiBat, SetNoiBat] = useState([])
    useEffect(() => {
        firebaseConnect.database().ref('Product/SanPhamNoiBat').on('value', snapshot => {
            let list = []
            snapshot.forEach(snap => {
                list.push(snap.val())
            })
            SetNoiBat(list)
        })
    }, [])

    return (
        <div>
            <div id="section2" className={clsx(styles.section2)} style={{ backgroundImage: `url(${banner_section2})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                <div className={clsx(styles.overlay)}></div>
                <div className='container'>
                    <div className={clsx(styles.section2Content)}>
                        <div className={clsx(styles.header)}>
                            <h2>KHÁM PHÁ MENU </h2>
                            <p>Có gì đặc biệt ở đây</p>
                        </div>
                        <div className='row'>
                            {NoiBat.map(data => (
                                <div key={data.id} className='col-xl-6 col-lg-6 col-md-12'>
                                    <div className={clsx(styles.Product)}>
                                        <div className={clsx(styles.ProductImg)}>
                                            <img src={data.ImageUrl} alt={data.Name}/>
                                        </div>
                                        <div className={clsx(styles.ProductTitle)}>
                                            <a className={clsx(styles.ProductTitleName)} href='/'>
                                                {data.Name}
                                            </a>
                                            <p className={clsx(styles.ProductTitlePrice)}>
                                                {data.Price}đ 
                                            </p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles.Description)}>
                                        <p className={clsx(styles.DescriptionTitle)}>
                                            {data.Description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={clsx(styles.XemMenu)}>
                            <button>
                                <a href="/">Xem</a>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2