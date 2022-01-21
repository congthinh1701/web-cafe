

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Detail() {
    //console.log(productDetail)
  const detailProduct = useSelector(state => state.detail)
  console.log(detailProduct);

    return (
        <div>
            <Link to="/Sanpham/Detail" >fsdfdsf</Link>
        </div>
    );
}

export default Detail;