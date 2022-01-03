

import React from 'react';
import clsx from 'clsx'
import styles from './Home.module.scss'

import home_banner1 from '../../assets/img/home_banner1.png'
function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-12" id={clsx(styles.home_banner1)} style={{backgroundImage:`url(${home_banner1})`}}>
                        <div className={clsx(styles.content)}>
                            <h2>Coffee hương vị mới</h2>
                            <button><
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12">
                        <p>dsadsadasd</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;