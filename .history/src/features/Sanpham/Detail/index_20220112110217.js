

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Detail() {
  const detailProduct = useSelector(state => state.detail)

    return (
        <div>
            <Link to="/Sanpham/Detail" >fsdfdsf</Link>
        </div>
    );
}

export default Detail;