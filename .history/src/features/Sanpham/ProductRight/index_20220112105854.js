import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailProduct } from "../../../actions/detail";
import "./style.scss";
function ProductRight({ productRight }) {
  const [select, setSelect] = useState();

  const dispatch = useDispatch()
  
  // SortBy Select
  const sortBy = () => {
    productRight.sort((a, b) => a.Price - b.Price);
  };
  
  // reverseBy Select
  const reverseBy = () => {
    productRight.sort((a, b) => b.Price - a.Price);
  };

  // changeSelect sortBy
  const changeSelect = (event) => {
    setSelect(event.target.value);
    if (select !== "Giá tăng dần") {
      sortBy();
    } else if (select !== "Giá giảm dần") {
      reverseBy();
    }
  };

  // dispatch data  go up element parents
  const dataDetail=(data)=>{
    const list=[]
    list.push(data)
    //action
    const action = detailProduct(list)
    dispatch(action)
  }

  return (
    <div className="Right">
      <div className="filter">
        <div className="listView">
          <div className="viewModeGird active view">
            <i className="fa fa-th" aria-hidden="true"></i>
          </div>
          <div className="viewModeList view">
            <i className="fa fa-th-list" aria-hidden="true"></i>
          </div>
        </div>
        <div className="sortBy">
          <div className="sortName">
            <p>Sắp xếp :</p>
          </div>
          <div className="sortSelect">
            <select value={select} onChange={changeSelect}>
              <option value="Thứ tự">thứ tự</option>
              <option value="Giá tăng dần">Giá tăng dần</option>
              <option value="Giá giảm dần">Giá giảm dần</option>
            </select>
          </div>
        </div>
      </div>

      {/* render data */}
      {productRight.length !== 0 && (
        <div className="RightList">
          {productRight.map((data,i) => (
            <div className="item" key={data.id}>
              <Link to="/Sanpham/Detail" onClick={()=>dataDetail(data)}>
                <div className="price">
                  <p>{data.Price}đ</p>
                </div>
                <img src={data.ImageUrl} alt={data.Name} />
                <div className="name">
                  <p className="nameTitle">{data.Name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductRight;
