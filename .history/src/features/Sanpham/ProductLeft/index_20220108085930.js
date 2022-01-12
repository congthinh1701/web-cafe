import { useState } from "react";
import "./style.scss";

function ProductLeft({ product,menu }) {
  const name = ["Coffee", "SanPhamNoiBat"];
  const [showmenu, setShowmenu] = useState(menu);
  const [selected, setSected] = useState(null);
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  const ShowMenu=()=>{
    menu===false
  }
  console.log(menu,showmenu)  
  return (
    <div className={`${"MenuLeft"} ${menu ? "teml" : ""} `}>
      <div className="DanhMuc">
        <p>DANH MỤC</p>
        {menu  &&(
          <i class="fas fa-times" onClick={(ShowMenu}></i>
        )}
      </div>
      <hr />
      <div className="ListDanhMuc">
        <div className="accordion">
          {product.map((item, i) => {
            return (
              <div key={i} className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <p>{name[i]}</p>
                  <span>
                    {selected === i ? (
                      <i className="fa fa-angle-up"></i>
                    ) : (
                      <i className="fa fa-angle-down"></i>
                    )}
                  </span>
                </div>
                <div
                  className={
                    selected === i ? "ListContent" && "show" : "ListContent"
                  }
                >
                  {Object.keys(item).map((data, i) => (
                    <div key={i} className="itemListContent">
                      <p>{data}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
export default ProductLeft;
