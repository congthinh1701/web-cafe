

import React from 'react';
import { Link } from 'react-router-dom';


function Detail({ productDetail }) {
    //console.log(productDetail)
  const detailProduct = useSelector(state => state.detail.list)

    return (
        <div>
            <Link to="/Sanpham/Detail" ></Link>
        </div>
    );
}

export default Detail;