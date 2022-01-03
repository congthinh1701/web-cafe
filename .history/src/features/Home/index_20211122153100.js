

import React from 'react';
import clsx from 'clsx'
import styles from './Home.module.scss'

import home_banner1 from '../../assets/img/home_banner1.png'
import home_banner2 from '../../assets/img/home_banner2.jpg'
import home_banner3 from '../../assets/img/home_banner3.png'
function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-6" id={clsx(styles.home_banner1)} style={{backgroundImage:`url(${home_banner1})`,height:'350px'}}>
                        <div className={clsx(styles.content)}>
                            <p className={clsx(styles.title)}>Coffee hương vị mới</p>
                            <button>Tìm hiểu</button>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-6">
                        <div className="row">
                            <div className="col-12" style={{backgroundImage:`url(${home_banner2})`,height:'350px'}}>dsad</div>
                            <div className="col-12" style={{backgroundImage:`url(${home_banner3})`,height:'350px'}}>dsad</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;