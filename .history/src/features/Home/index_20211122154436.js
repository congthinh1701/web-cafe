

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
                <div className={clsx(styles.section-1)}>
                    <div className={clsx(styles.sectionTrai)} id={clsx(styles.home_banner1)} style={{backgroundImage:`url(${home_banner1})`,height:'350px'}}>
                        <div className={clsx(styles.content)}>
                            <p className={clsx(styles.title)}>Coffee hương vị mới</p>
                            <button>Tìm hiểu</button>
                        </div>
                    </div>
                    <div className={clsx(styles.sectionPhai)}>
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