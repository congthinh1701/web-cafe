

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Detail() {
  const detailProduct = useSelector(state => state.detail)
  console.log(detailProduct);

    return (
        <div>
            <Link to="/Sanpham/Detail" >
                {detailProduct.map((data,i)=>(
                    <div>
                        <p>{data.Name}</p>
                        <p>{data.Price}</p>
                        <img src={data.}
                    </div>
                ))}
            </Link>
        </div>
    );
}

export default Detail;