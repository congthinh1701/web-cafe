import React,{ useState } from "react";
import "./style.scss";
function ProductRight({ productRight }) {

  const [select,setSelect]=useState()

  const changeSelect=(event)=>{
    setSelect(event.target.value)
    console.log(select,event.target.value)
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
              <option value="giá tăng dần">giá tăng dần</option>
              <option value="giá giảm dần">giá giảm dần</option>
              <option value="Cranberry">Cranberry</option>
            </select>
          </div>
        </div>
      </div>

      {/* render data */}
      {productRight.length !== 0 && (
        <div className="RightList">
          {productRight.map((data) => (
            <div className="item" key={data.id}>
              <a href="/">
                <div className="price">
                  <p>{data.Price}đ</p>
                </div>
                <img src={data.ImageUrl} alt={data.Name} />
                <div className="name">
                  <p className="nameTitle">{data.Name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductRight;
