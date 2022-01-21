

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Detail({ productDetail }) {
    //console.log(productDetail)
  const detailProduct = useSelector(state => state.detail)
  console.log();

    return (
        <div>
            <Link to="/Sanpham/Detail" ></Link>
        </div>
    );
}

export default Detail;