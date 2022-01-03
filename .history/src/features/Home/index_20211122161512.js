

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
               <div className="col-xl-7 col-lg-7 col-md-12 col-12 " id={clsx(styles.home_banner1)} style={{ backgroundImage: `url(${home_banner1})` }}>
                  <div className={clsx(styles.content)}>
                     <p className={clsx(styles.title)}>Coffee hương vị mới</p>
                     <button>Tìm hiểu</button>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                  <div className="row">
                     <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12" id={clsx(styles.home_banner2)} style={{ backgroundImage: `url(${home_banner2})` }}>
                        <div className={clsx(styles.content)}>
                           <p className={clsx(styles.title)}>Ưu đãi bất ngờ</p>
                           <button>Tìm hiểu</button>
                        </div>
                     </div>
                     <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 mt-4" id={clsx(styles.home_banner3)} style={{ backgroundImage: `url(${home_banner3})` }}>
                        <div className={clsx(styles.content)}>
                           <p className={clsx(styles.title)}>Tuyệt vời món mới</p>
                           <button>Tìm hiểu</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home;