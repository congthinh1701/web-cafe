

import React from 'react';
import clsx from 'clsx'
import styles from './Home.module.scss'
function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-12 home_banner1">
                        <p className={clsx(styles.back,styles.title)}>dsadsadasd</p>
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