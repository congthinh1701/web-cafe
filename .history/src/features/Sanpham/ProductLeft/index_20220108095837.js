import { useRef, useState } from "react";
import reactDom from "react-dom";
import "./style.scss";

function ProductLeft({ product,menu}) {
  const name = ["Coffee", "SanPhamNoiBat"];
  const [close, setClose] = useState(false);
  const [selected, setSected] = useState(null);
  const textInput=useRef(null)
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  const handleClick=()=>{
    setClose(!close)
   textInput.current.focus()
    console.log(textInput.current.getAttribute('class'))
    let element=textInput.current.getAttribute('class')
   
  }
  
 
  return (
    <div className={`${"MenuLeft"} ${menu ? "teml" : ""} ${close ? "noClose"} `} ref={textInput}>
      <div className="DanhMuc">
        <p>DANH MỤC</p>
        {menu  &&(
          <i class="fas fa-times" onClick={handleClick}></i>
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
